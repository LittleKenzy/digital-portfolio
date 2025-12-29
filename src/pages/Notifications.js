import { InboxService } from '../services/inbox.js';
import { AuthService } from '../services/auth.js';
import gsap from 'gsap';

export const Notifications = () => {
  return `
    <div class="flex-1 p-6 md:p-12 overflow-y-auto w-full animate-fade-in relative z-10 px-4 md:px-0">
      <div class="max-w-3xl mx-auto min-h-[80vh]">
      
      <div class="flex items-center justify-between mb-8">
         <div>
            <h1 class="text-2xl font-bold font-space text-white">Notifications</h1>
            <p class="text-sm text-zinc-500 mt-1">Replies from the owner</p>
         </div>
         <div class="w-10 h-10 rounded-full bg-zinc-800/50 flex items-center justify-center border border-white/5 text-zinc-400">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor" class="w-5 h-5">
               <path d="M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.9,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z"></path>
            </svg>
         </div>
      </div>

      <div id="notifList" class="space-y-4">
          <!-- Skeletons -->
          ${[1, 2].map(() => `
             <div class="bg-zinc-900/40 border border-white/5 rounded-2xl p-6 animate-pulse h-32"></div>
          `).join('')}
      </div>

    </div>
  `;
};

export const afterRenderNotifications = () => {
  const user = AuthService.getUser();
  if (!user) {
    window.location.hash = '#/login';
    return;
  }

  const container = document.getElementById('notifList');

  const loadData = async () => {
    try {
      const msgs = await InboxService.getMyMessages(user.id);
      // Filter: Show messages that have a reply or are just sent?
      // User requested: "notifikasinya itu tentang reply an owner"
      // So we prioritize showing ones with replies.
      // But good to see history too.
      // Let's sort by replied_at timestamp if exists, else created_at.

      // Actually, let's just show all conversation threads, highlighting replies.

      if (msgs.length === 0) {
        container.innerHTML = `
                   <div class="text-center py-20 opacity-50">
                       <i class="ph-bell-slash text-4xl mb-4 text-zinc-600"></i>
                       <p class="text-zinc-500">No notifications yet.</p>
                   </div>
                `;
        return;
      }

      container.innerHTML = msgs.map(msg => renderNotificationCard(msg)).join('');

      // Event Listeners
      container.addEventListener('click', async (e) => {
        const btnMark = e.target.closest('.action-user-mark-read');
        const btnReplyToggle = e.target.closest('.action-user-reply-toggle');

        if (btnMark) {
          const id = btnMark.dataset.id;
          await InboxService.userMarkRead(id);
          // Update UI
          const card = btnMark.closest('.notif-card');
          card.querySelector('.notif-dot-ping')?.remove();
          card.classList.remove('border-emerald-500/30');
          card.classList.add('border-white/5');
          btnMark.remove();

          window.dispatchEvent(new Event('inbox-updated')); // Trigger Sidebar Update!
        }

        if (btnReplyToggle) {
          const id = btnReplyToggle.dataset.id;
          const form = document.querySelector(`.reply-box-${id}`);
          form.classList.toggle('hidden');
          btnReplyToggle.innerHTML = form.classList.contains('hidden') ? '<i class="ph-chat-circle-dots"></i> Reply Back' : '<i class="ph-x"></i> Close';
        }
      });

      container.addEventListener('submit', async (e) => {
        const form = e.target.closest('.user-reply-form');
        if (form) {
          e.preventDefault();
          const btn = form.querySelector('button[type="submit"]');
          const textarea = form.querySelector('textarea');
          const text = textarea.value.trim();
          if (!text) return;

          const originalBtn = btn.innerHTML;
          btn.innerHTML = `<i class="ph-spinner animate-spin"></i> Sending...`;
          btn.disabled = true;

          try {
            const parentId = form.dataset.parentId;
            await InboxService.userReply(parentId, text);

            // Show success
            form.innerHTML = `<div class="p-3 text-emerald-400 text-xs font-bold text-center bg-emerald-500/10 rounded-xl border border-emerald-500/20"><i class="ph-check-circle"></i> Sent to Owner</div>`;

            setTimeout(() => {
              // Refresh full page to show newest message at top
              loadData();
            }, 2000);
          } catch (err) {
            console.error(err);
            btn.innerHTML = originalBtn;
            btn.disabled = false;
          }
        }
      });

      gsap.from('.notif-card', {
        y: 20,
        opacity: 0,
        stagger: 0.1,
        duration: 0.5
      });

    } catch (e) {
      console.error(e);
      container.innerHTML = `<p class="text-red-500 text-center">Failed to load notifications.</p>`;
    }
  };

  loadData();
};

const renderNotificationCard = (msg) => {
  const user = AuthService.getUser();
  const avatar = user && user.avatar ? user.avatar : `https://ui-avatars.com/api/?name=${encodeURIComponent(msg.name)}&background=random`;
  const isReplied = msg.status === 'replied';
  const isUnread = isReplied && msg.user_read == 0;
  const date = new Date(msg.created_at).toLocaleDateString([], { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });

  return `
      <div class="notif-card relative bg-zinc-900/60 backdrop-blur-sm border ${isUnread ? 'border-emerald-500/30' : 'border-white/5'} rounded-2xl p-6 overflow-hidden transition-all hover:border-white/10 group">
         
         ${isUnread ? `<div class="notif-dot-ping absolute top-0 right-0 p-3"><span class="flex h-3 w-3"><span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span><span class="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span></span></div>` : ''}

         <div class="flex flex-col gap-4">
             <!-- Your Message -->
             <div class="flex gap-4 opacity-70 hover:opacity-100 transition-opacity">
                 <div class="w-8 h-8 rounded-full bg-zinc-800 overflow-hidden shrink-0 border border-white/5">
                    <img src="${avatar}" class="w-full h-full object-cover">
                 </div>
                 <div class="flex-1">
                    <div class="flex items-center justify-between mb-1">
                       <p class="text-xs text-zinc-500 uppercase tracking-wider font-bold">You wrote • ${date}</p>
                       <div class="flex gap-2">
                           ${isUnread ? `<button class="action-user-mark-read text-[10px] text-emerald-400 hover:text-emerald-300 font-bold uppercase transition-colors" data-id="${msg.id}">Mark Read</button>` : ''}
                       </div>
                    </div>
                    <p class="text-sm text-zinc-300 leading-relaxed max-w-xl">${msg.message}</p>
                 </div>
             </div>

             <!-- Reply -->
             ${isReplied ? `
                <div class="ml-4 md:ml-12 relative mt-2 pl-6 border-l-2 border-emerald-500/20">
                    <div class="flex items-center justify-between mb-2">
                        <div class="flex items-center gap-2">
                           <span class="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-[10px] font-bold uppercase border border-emerald-500/20">
                               Reply Received
                           </span>
                           <span class="text-[10px] text-zinc-600">${msg.replied_at ? new Date(msg.replied_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : ''}</span>
                        </div>
                        
                        <button class="action-user-reply-toggle text-[10px] text-zinc-500 hover:text-white font-bold uppercase flex items-center gap-1 transition-colors" data-id="${msg.id}">
                           <i class="ph-chat-circle-dots"></i> Reply Back
                        </button>
                    </div>
                    <p class="text-white font-medium leading-relaxed">${msg.reply}</p>
                    
                    <!-- Reply Box (Hidden by default) -->
                    <div class="reply-box-${msg.id} mt-4 hidden animate-fade-in-up">
                       <form class="user-reply-form space-y-2" data-parent-id="${msg.id}">
                          <textarea rows="2" placeholder="Write back..." class="w-full bg-zinc-800/50 border border-white/10 rounded-xl p-3 text-sm text-white focus:border-emerald-500/50 focus:outline-none transition-all resize-none"></textarea>
                          <div class="flex justify-end">
                             <button type="submit" class="px-4 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-lg transition-all shadow-lg shadow-emerald-900/20">
                                Send to Owner
                             </button>
                          </div>
                       </form>
                    </div>
                </div>
             ` : `
                <div class="ml-12 mt-2">
                    <span class="text-[10px] text-zinc-600 italic bg-zinc-800/30 px-2 py-1 rounded">Waiting for reply...</span>
                </div>
             `}
         </div>
      </div>
    `;
};
