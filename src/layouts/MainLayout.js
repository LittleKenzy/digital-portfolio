import { Sidebar, MobileHeader } from './Sidebar.js';
import { AuthService } from '../services/auth.js';
import { InboxService } from '../services/inbox.js';

export const MainLayout = (contentComponent) => {
  return async () => {
    const content = typeof contentComponent === 'function' ? await contentComponent() : contentComponent;
    return `
    <div class="flex h-screen bg-main-bg text-text-main overflow-hidden font-sans antialiased selection:bg-accent selection:text-white">
      <!-- Sidebar (Desktop) -->
      ${Sidebar()}

      <!-- Main Content Area -->
      <div class="flex-1 flex flex-col h-full w-full md:pl-64 transition-all duration-300">
        
        <!-- Mobile Header -->
        ${MobileHeader()}

        <main id="layoutMain" class="flex-1 flex flex-col min-h-0 bg-main-bg relative pt-16 md:pt-0">
            ${content}
        </main>
      </div>
    </div>
  `;
  };
};

export const afterRenderLayout = async () => {
  // Mobile Menu Logic
  const menuBtn = document.getElementById('menuBtn');
  const sidebar = document.querySelector('aside');
  const overlay = document.getElementById('sidebarOverlay');

  if (menuBtn && sidebar && overlay) {
    const toggleMenu = () => {
      const isClosed = sidebar.classList.contains('-translate-x-full');
      if (isClosed) {
        sidebar.classList.remove('-translate-x-full');
        overlay.classList.remove('hidden');
      } else {
        sidebar.classList.add('-translate-x-full');
        overlay.classList.add('hidden');
      }
    };

    menuBtn.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', toggleMenu);
  }

  // Logout Logic
  const logoutBtn = document.getElementById('logoutBtn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      AuthService.logout();
    });
  }

  // Notifications Badge Logic
  const checkNotifications = async () => {
    const user = AuthService.getUser();
    if (!user) return;

    try {
      if (user.role === 'admin') {
        // Admin: check for unread messages
        const msgs = await InboxService.getMessages();
        const hasUnread = msgs.some(m => m.status === 'unread');
        const navLink = document.getElementById('nav-inbox');

        if (navLink) {
          const existingDot = navLink.querySelector('.notif-dot');
          if (hasUnread) {
            if (!existingDot) {
              navLink.insertAdjacentHTML('beforeend',
                `<span class="notif-dot absolute top-3 right-3 h-2 w-2 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)] animate-pulse"></span>`
              );
            }
          } else {
            if (existingDot) existingDot.remove();
          }
        }
      } else {
        // Regular User: check for unread replies
        const msgs = await InboxService.getMyMessages(user.id);
        const hasUnreadReply = msgs.some(m => m.status === 'replied' && m.user_read == 0);
        const navLink = document.getElementById('nav-notif');

        if (navLink) {
          const existingDot = navLink.querySelector('.notif-dot');
          if (hasUnreadReply) {
            if (!existingDot) {
              navLink.insertAdjacentHTML('beforeend',
                `<span class="notif-dot absolute top-3 right-3 h-2 w-2 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)] animate-pulse"></span>`
              );
            }
          } else {
            if (existingDot) existingDot.remove();
          }
        }
      }
    } catch (e) {
      // silent fail
    }
  };

  checkNotifications();
  window.addEventListener('inbox-updated', checkNotifications); // Real-time listener
};
