import { AuthService } from '../services/auth.js';

export function Sidebar() {
  const user = AuthService.getUser();
  const currentHash = window.location.hash || '#/';

  const links = [
    {
      label: 'About', path: '#/', icon: 'ph-user',
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor" class="w-5 h-5"><path d="M230.93,220a8,8,0,0,1-6.93,4H32a8,8,0,0,1-6.92-12c15.23-26.33,38.7-45.21,66.09-54.16a72,72,0,1,1,73.66,0c27.39,8.95,50.86,27.83,66.09,54.16A8,8,0,0,1,230.93,220ZM128,168a56,56,0,1,0-56-56A56.06,56.06,0,0,0,128,168Z"></path></svg>`
    },
    {
      label: 'Journey', path: '#/journey', icon: 'ph-path',
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor" class="w-5 h-5"><path d="M200,168a32,32,0,0,0-29.61,19.86l-18.78-12.7A56.06,56.06,0,0,0,96,80a8,8,0,0,0,0,16,40,40,0,1,1-30,66.17l-16,13.71A32,32,0,1,0,81,201.29l16-13.72A55.85,55.85,0,0,0,151.61,175.14l18.78,12.7A32,32,0,1,0,200,168Zm-152,48a16,16,0,1,1,16-16A16,16,0,0,1,48,216Zm152-16a16,16,0,1,1,16-16A16,16,0,0,1,200,200ZM136,32a40,40,0,1,0,40,40A40,40,0,0,0,136,32Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,136,96Z"></path></svg>`
    },
    {
      label: 'Projects', path: '#/projects', icon: 'ph-code',
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor" class="w-5 h-5"><path d="M69.12,94.15,28.53,128l40.59,33.85a8,8,0,1,1-10.24,12.3l-48-40a8,8,0,0,1,0-12.3l48-40a8,8,0,1,1,10.24,12.3Zm176,27.7-48-40a8,8,0,1,0-10.24,12.3L227.47,128l-40.59,33.85a8,8,0,1,0,10.24,12.3l48-40a8,8,0,0,0,0-12.3Zm-80.5-83.31a8,8,0,0,0-10.14,4.42l-64,160a8,8,0,0,0,4.42,10.14,8,8,0,0,0,10.14-4.42l64-160A8,8,0,0,0,164.62,38.54Z"></path></svg>`
    },
    {
      label: 'Dashboard', path: '#/dashboard', icon: 'ph-squares-four', protected: true,
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor" class="w-5 h-5"><path d="M112,48V112H48V48Zm-8,16H56V104h48Zm104-16H144V112h64Zm-8,16H152V104h48ZM112,144V208H48V144Zm-8,16H56V200h48Zm104-16H144V208h64Zm-8,16H152V200h48Z"></path></svg>`
    },
    {
      label: 'Chat Room', path: '#/chat', icon: 'ph-chat-circle-text', protected: true,
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor" class="w-5 h-5"><path d="M232,128A104.12,104.12,0,0,1,128,232a105.15,105.15,0,0,1-34-5.63l-43.6,14.53a16,16,0,0,1-20.27-20.27l14.53-43.6A104,104,0,1,1,232,128Zm-56,16H80a8,8,0,0,0,0,16h96a8,8,0,0,0,0-16Zm0-48H80a8,8,0,0,0,0,16h96a8,8,0,0,0,0-16Z"></path></svg>`
    },
    {
      label: 'Testimonials', path: '#/testimonials', icon: 'ph-star',
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor" class="w-5 h-5"><path d="M234.29,114.85l-45,38.83L203,211.75a16.4,16.4,0,0,1-24.5,17.82L128,198.49,77.47,229.57a16.4,16.4,0,0,1-24.5-17.82L66.71,153.68l-45-38.83A16.34,16.34,0,0,1,31,87.35l59.91-4.89L114.39,27a16.55,16.55,0,0,1,27.22,0l23.48,55.46,59.91,4.89a16.34,16.34,0,0,1,9.29,27.5Zm-50.62,32.19a8,8,0,0,0-2.43,7.48l13.7,56.9-50.53-31.1a8,8,0,0,0-8.42,0l-50.53,31.1,13.7-56.9a8,8,0,0,0-2.43-7.48L53.7,110.1,113.61,105.2a8,8,0,0,0,6.58-4.78L128,45,135.81,100.42a8,8,0,0,0,6.58,4.78l59.91,4.9Z"></path></svg>`
    },
    {
      label: 'Contact', path: '#/contact', icon: 'ph-envelope',
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor" class="w-5 h-5"><path d="M224,48H32a16,16,0,0,0-16,16V192a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48Zm0,16V77.44l-96,54.85L32,77.44V64Zm0,128H32V95.78l88.16,50.38a16,16,0,0,0,15.68,0L224,95.78V192Z"></path></svg>`
    },
  ];

  if (user) {
    if (user.role === 'admin') {
      links.push({
        label: 'Inbox', path: '#/owner/inbox', icon: 'ph-tray', id: 'nav-inbox',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor" class="w-5 h-5"><path d="M232,104v96a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V104A16,16,0,0,1,40,88H74.34a8,8,0,0,1,6.4,3.2L102.4,120h51.2l21.66-28.8a8,8,0,0,1,6.4-3.2H216A16,16,0,0,1,232,104Zm-16,0H186.34L164.68,132.8a8,8,0,0,1-6.4,3.2h-60.56a8,8,0,0,1-6.4-3.2L69.66,104H40v96H216Zm-72-40a8,8,0,0,0-8-8H104a8,8,0,0,0,0,16h40A8,8,0,0,0,144,64Zm8-32a8,8,0,0,0-8-8h-32a8,8,0,0,0,0,16h32A8,8,0,0,0,152,32Z"></path></svg>`
      });
    } else {
      // Regular user gets notifications
      links.push({
        label: 'Notifications', path: '#/notifications', icon: 'ph-bell', id: 'nav-notif',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor" class="w-5 h-5"><path d="M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.9,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z"></path></svg>`
      });
    }
  }

  const linkHtml = links.map(link => {
    // For now, let's show all, router handles access.
    const isActive = currentHash === link.path
      ? 'text-white bg-white/10 border-l-2 border-accent'
      : 'text-text-muted hover:text-text-main hover:bg-white/5';

    // Check for ID
    const idAttr = link.id ? `id="${link.id}"` : '';

    return `
      <a href="${link.path}" ${idAttr} class="flex items-center gap-3 p-3 mb-1 rounded-r-lg transition-all duration-200 group relative ${isActive}">
        <div class="group-hover:text-accent transition-colors shrink-0">
          ${link.svg}
        </div>
        <span class="font-medium tracking-wide text-sm">${link.label}</span>
      </a>
    `;
  }).join('');

  const authButton = user
    ? `<button id="logoutBtn" class="flex items-center gap-3 p-3 w-full text-left text-red-400 hover:bg-red-400/10 rounded-lg mt-auto transition-all group">
         <div class="shrink-0 group-hover:scale-110 transition-transform">
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor" class="w-5 h-5"><path d="M112,216a8,8,0,0,1-8,8H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32h56a8,8,0,0,1,0,16H48V208h56A8,8,0,0,1,112,216Zm109.66-93.66-40-40a8,8,0,0,0-11.32,11.32L196.69,120H104a8,8,0,0,0,0,16h92.69l-26.35,26.34a8,8,0,0,0,11.32,11.32l40-40A8,8,0,0,0,221.66,122.34Z"></path></svg>
         </div>
         <span class="text-sm font-medium">Logout</span>
       </button>`
    : `<a href="#/login" class="flex items-center gap-3 p-3 w-full text-left text-accent hover:bg-accent/10 rounded-lg mt-auto transition-all group">
         <div class="shrink-0 group-hover:scale-110 transition-transform">
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor" class="w-5 h-5"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm45.66-93.66-40-40a8,8,0,0,0-11.32,11.32L148.69,120H88a8,8,0,0,0,0,16h60.69l-26.35,26.34a8,8,0,0,0,11.32,11.32l40-40A8,8,0,0,0,173.66,122.34Z"></path></svg>
         </div>
         <span class="text-sm font-medium">Login</span>
       </a>`;

  return `
    <aside class="fixed top-0 left-0 w-64 h-screen bg-card-bg border-r border-border-subtle z-50 transform transition-transform duration-300 md:translate-x-0 -translate-x-full flex flex-col">
      <div class="p-6">
        <div class="mb-10 flex items-center gap-3">
          <div class="w-8 h-8 rounded bg-gradient-to-br from-accent to-purple-600 flex items-center justify-center text-white font-bold">K</div>
          <div>
            <h2 class="text-lg font-bold font-space text-text-main tracking-tight">LITTLE KENZY</h2>
            <p class="text-[10px] text-text-muted uppercase tracking-widest">Workspace</p>
          </div>
        </div>
        
        <nav class="flex-1 space-y-1">
          ${linkHtml}
        </nav>
      </div>

      <div class="p-6 border-t border-border-subtle mt-auto">
         ${authButton}
      </div>
    </aside>
    <!-- Overlay for mobile -->
    <div id="sidebarOverlay" class="fixed inset-0 bg-black/50 z-40 hidden md:hidden"></div>
  `;
}

export function MobileHeader() {
  return `
    <header class="fixed top-0 left-0 w-full h-16 bg-card-bg/95 backdrop-blur-md border-b border-border-subtle z-40 flex items-center justify-between px-6 md:hidden">
      <h1 class="text-base font-bold font-space text-text-main tracking-tight">LK</h1>
      <button id="menuBtn" class="text-text-main p-2 hover:bg-white/10 rounded-lg transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" class="w-8 h-8 fill-current">
          <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path>
        </svg>
      </button>
    </header>
  `;
}
