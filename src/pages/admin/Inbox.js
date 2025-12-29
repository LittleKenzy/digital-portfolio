import { InboxService } from '../../services/inbox.js';
import { AuthService } from '../../services/auth.js';
import gsap from 'gsap';

export const Inbox = () => {
  return `
     <div class="flex-1 flex flex-col p-6 md:p-12 relative z-10 bg-[#0f0f0f] min-h-0 overflow-hidden">
      
      <!-- HEADER -->
      <div class="flex items-center justify-between mb-0 pb-2 border-b border-white/5 shrink-0 mt-12 md:mt-0">
        <div>
           <div class="flex items-center gap-3">
              <h1 class="text-2xl font-bold font-space text-white leading-tight">Inbox Messages</h1>
              <span id="unreadCount" class="px-2 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-bold hidden">0 UNREAD</span>
           </div> 
           <p class="text-xs text-zinc-500 mt-1">Messages sent from Contact page</p>
        </div> 
        <div class="flex items-center gap-2">
           <span class="relative flex h-2.5 w-2.5">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
           </span>
           <span class="text-[10px] text-zinc-500 font-mono tracking-widest uppercase">Live</span>
        </div>
      </div>

      <!-- MAIN CONTENT -->
      <div class="flex-1 flex gap-6 overflow-visible relative pt-0">
         
         <!-- LEFT: LIST -->
         <div id="messageListContainer" class="w-full md:w-[350px] lg:w-[400px] flex flex-col gap-3 overflow-y-auto pr-2 pb-10 pt-1">
            <!-- Loading Skeletons -->
            ${[1, 2, 3].map(() => `
               <div class="h-24 rounded-xl bg-zinc-800/50 animate-pulse border border-white/5"></div>
            `).join('')}
         </div>

         <!-- RIGHT: DETAIL (Desktop) -->
         <div id="messageDetailPanel" class="hidden md:flex flex-1 bg-zinc-900 rounded-2xl border border-white/5 p-8 flex-col justify-center items-center text-zinc-500">
             <i class="ph-envelope-open text-4xl mb-4 opacity-50"></i>
             <p>Select a message to view details</p>
         </div>

      </div>

      <!-- DETAIL MODAL (Mobile Overlay) -->
      <div id="mobileDetailOverlay" class="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm hidden flex items-start justify-center px-4 pb-4 pt-24 md:hidden">
         <div id="mobileDetailContent" class="w-full h-full bg-zinc-900 rounded-2xl border border-white/10 overflow-auto relative shadow-2xl">
             <!-- Injected Content -->
         </div>
         <button id="closeMobileDetail" class="absolute top-28 right-8 text-white bg-black/50 p-3 rounded-full cursor-pointer z-[60] hover:bg-red-500 hover:text-white transition-colors border border-white/10 shadow-lg flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor" class="w-5 h-5">
              <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path>
            </svg>
         </button>
      </div>

    </div>
  `;
};

// --- RENDER HELPERS ---

const renderMessageItem = (msg) => {
  const isUnread = msg.status === 'unread';
  const time = new Date(msg.created_at).toLocaleDateString([], { month: 'short', day: 'numeric' });

  return `
    <div class="message-card group relative p-4 rounded-xl border cursor-pointer hover:shadow-lg transition-transform
       ${isUnread
      ? 'bg-zinc-800/80 border-cyan-500/30 hover:border-cyan-400'
      : 'bg-zinc-900 border-white/5 hover:bg-zinc-800'}
       " data-id="${msg.id}">
       
       ${isUnread ? `<span class="absolute top-4 right-4 h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]"></span>` : ''}

       <div class="flex justify-between items-start mb-1">
          <h4 class="font-bold text-sm text-white truncate max-w-[70%] group-hover:text-cyan-200 transition-colors">${msg.name}</h4>
          <span class="text-[10px] text-zinc-500 font-mono">${time}</span>
       </div>
       
       <p class="text-xs text-zinc-400 line-clamp-2 leading-relaxed mb-2">${msg.message}</p>
       
       <div class="flex items-center gap-2">
         <span class="px-1.5 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider
           ${msg.status === 'unread' ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20' :
      msg.status === 'replied' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' :
        'bg-zinc-700/30 text-zinc-500 border border-zinc-700/50'}">
           ${msg.status}
         </span>
       </div>
    </div>
  `;
};


const renderDetailContent = (msg) => {
  const fullTime = new Date(msg.created_at).toLocaleString();

  // Logic Fix:
  // 1. Owner reply exists if msg.reply is set (regardless of status)
  const hasOwnerReply = !!msg.reply;

  // 2. Show form if: No owner reply YET, OR User has replied back (Ping-Pong flow)
  const showReplyForm = !hasOwnerReply || !!msg.user_reply;

  return `
     <div class="flex flex-col h-full animate-fade-in">
        <!-- Header -->
        <div class="flex flex-col md:flex-row justify-between items-start mb-6 pb-4 border-b border-white/5">
           <div class="flex items-center gap-4 w-full md:w-auto">
              <div class="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center text-cyan-400 text-xl font-bold border border-white/10 shrink-0">
                 ${msg.name.charAt(0).toUpperCase()}
              </div>
              <div class="min-w-0 flex-1">
                 <h2 class="text-xl font-bold text-white mb-0.5 truncate">${msg.name}</h2>
                 <a href="mailto:${msg.email}" class="text-sm text-zinc-400 hover:text-cyan-400 transition-colors flex items-center gap-1 truncate">
                   ${msg.email} <i class="ph-arrow-up-right text-xs"></i>
                 </a>
              </div>
           </div>
           
           <div class="flex flex-row md:flex-col items-center md:items-end justify-between md:justify-end gap-2 w-full md:w-auto mt-4 md:mt-0 pl-16 md:pl-0">
              <span class="text-xs font-mono text-zinc-500">${fullTime}</span>
              <div class="flex gap-2">
                 <button class="flex items-center justify-center gap-2 p-2 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400 text-xs font-bold transition-all border border-red-500/10 action-delete" data-id="${msg.id}">
                    <i class="ph-trash"></i> Delete
                 </button>
              </div>
           </div>
        </div>

        <!-- Scrollable Message Body -->
        <div class="flex-1 overflow-y-auto pr-4 mb-4 custom-scrollbar">
           <div class="bg-zinc-800/30 p-4 rounded-xl border border-white/5 mb-6">
              <p class="text-sm font-bold text-zinc-500 mb-2 uppercase tracking-wider">Message</p>
              <p class="text-base text-zinc-200 leading-8 whitespace-pre-wrap font-book">${msg.message}</p>
           </div>
           
           ${hasOwnerReply ? `
              <div class="bg-emerald-500/5 p-4 rounded-xl border border-emerald-500/20 ml-8 animate-fade-in-up mb-6">
                  <div class="flex items-center justify-between mb-2">
                      <p class="text-xs font-bold text-emerald-500 uppercase tracking-wider flex items-center gap-2">
                         <i class="ph-arrow-bend-down-right"></i> Your Reply
                      </p>
                      <span class="text-[10px] text-zinc-500">${msg.replied_at ? new Date(msg.replied_at).toLocaleString() : 'Just now'}</span>
                  </div>
                  <p class="text-base text-emerald-100 leading-relaxed whitespace-pre-wrap">${msg.reply}</p>
              </div>
           ` : ''}

           ${msg.user_reply ? `
              <div class="bg-zinc-800/50 p-4 rounded-xl border border-white/10 mb-6 animate-fade-in-up">
                  <div class="flex items-center justify-between mb-2">
                       <div class="flex items-center gap-2">
                          <div class="w-6 h-6 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center text-cyan-400 text-xs font-bold border border-white/10">
                              ${msg.name.charAt(0).toUpperCase()}
                          </div>
                          <p class="text-xs font-bold text-white uppercase tracking-wider">User Follow-up</p>
                       </div>
                       <span class="text-[10px] text-zinc-500">${msg.user_replied_at ? new Date(msg.user_replied_at).toLocaleString() : ''}</span>
                  </div>
                  <p class="text-sm text-zinc-300 leading-relaxed whitespace-pre-wrap">${msg.user_reply}</p>
                  
                  ${msg.status === 'unread' ? `<div class="mt-2 text-[10px] text-cyan-400 font-bold uppercase tracking-widest flex items-center gap-1"><span class="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span> New Reply</div>` : ''}
              </div>
           ` : ''}
        </div>

        <!-- Footer Actions / Reply Form -->
        <div class="pt-4 border-t border-white/5 mt-auto">
           ${showReplyForm ? `
             <form class="reply-form space-y-3" data-id="${msg.id}">
                <textarea id="replyInput" rows="3" placeholder="${hasOwnerReply ? 'Reply to user follow-up...' : 'Type your reply here...'}" class="w-full bg-zinc-800/50 border border-white/10 rounded-xl p-3 text-white focus:border-cyan-500/50 focus:outline-none transition-all resize-none text-sm"></textarea>
                <div class="flex justify-end">
                   <button type="submit" class="px-6 py-2 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-lg transition-colors flex items-center gap-2 text-sm shadow-lg shadow-cyan-900/20">
                      <i class="ph-paper-plane-right"></i> Send Reply
                   </button>
                </div>
             </form>
           ` : `
             <div class="flex items-center justify-center p-3 rounded-xl bg-zinc-800/50 border border-white/5 text-zinc-500 text-sm">
                <i class="ph-check-circle text-emerald-500 mr-2"></i> Reply sent
             </div>
           `}
        </div>
     </div>
   `;
};


export const afterRenderInbox = () => {
  // 1. Check Auth (Redundant if router handles it, but failsafe)
  const user = AuthService.getUser();
  if (!user || user.role !== 'admin') {
    window.location.hash = '#/login';
    return;
  }

  const listContainer = document.getElementById('messageListContainer');
  const detailPanel = document.getElementById('messageDetailPanel');
  const mobileOverlay = document.getElementById('mobileDetailOverlay');
  const mobileContent = document.getElementById('mobileDetailContent');
  const closeMobileBtn = document.getElementById('closeMobileDetail');
  const unreadCountBadge = document.getElementById('unreadCount');

  // Data Store
  let messages = [];

  const loadMessages = async () => {
    messages = await InboxService.getMessages();
    renderList();
  };

  const countUnread = () => {
    const count = messages.filter(m => m.status === 'unread').length;
    if (count > 0) {
      unreadCountBadge.textContent = `${count} UNREAD`;
      unreadCountBadge.classList.remove('hidden');
    } else {
      unreadCountBadge.classList.add('hidden');
    }
  };

  const renderList = () => {
    if (messages.length === 0) {
      listContainer.innerHTML = `
               <div class="flex flex-col items-center justify-center mt-20 opacity-50 text-center">
                  <div class="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-4">
                     <i class="ph-tray text-3xl text-zinc-500"></i>
                  </div>
                  <h3 class="text-white font-bold">No messages yet</h3>
                  <p class="text-xs text-zinc-500 mt-1">Messages from Contact page will appear here</p>
               </div>
            `;
      return;
    }

    listContainer.innerHTML = messages.map(msg => renderMessageItem(msg)).join('');

    // Simplified rendering without GSAP interference on layout
    countUnread();
  };

  const showDetail = (msgId) => {
    const msg = messages.find(m => m.id == msgId);
    if (!msg) return;

    const content = renderDetailContent(msg);

    // Desktop
    if (window.innerWidth >= 768) {
      detailPanel.innerHTML = content;
      detailPanel.classList.remove('items-center', 'justify-center', 'text-zinc-500'); // remove empty state classes
      detailPanel.classList.add('block');

      // Animate Content
      gsap.from(detailPanel.children, { opacity: 0, y: 10, duration: 0.3 });

    } else {
      // Mobile
      mobileContent.innerHTML = content;
      mobileOverlay.classList.remove('hidden');
      mobileContent.classList.add('p-6');
    }

    // Attach Action Listeners specific to detail view
    attachDetailListeners();

    // Auto mark as read if unread
    if (msg.status === 'unread') {
      InboxService.markAsRead(msg.id).then(() => {
        msg.status = 'read';
        renderList();
        window.dispatchEvent(new Event('inbox-updated')); // Update Sidebar
      }).catch(err => console.error('Failed to mark read', err));
    }
  };

  const attachDetailListeners = () => {
    const btnRead = document.querySelector('[data-action="mark_read"]');
    const btnDelete = document.querySelector('.action-delete');
    const btnWA = document.querySelector('.action-reply-wa');

    // Reply Form
    const replyForm = document.querySelector('.reply-form');
    if (replyForm) {
      replyForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const btn = e.target.querySelector('button');
        const textarea = e.target.querySelector('textarea');
        const text = textarea.value.trim();

        if (!text) return;

        const msgId = e.target.dataset.id;

        // Loading UI
        const originalBtnContent = btn.innerHTML;
        btn.innerHTML = `<i class="ph-spinner animate-spin"></i> Sending...`;
        btn.disabled = true;

        try {
          await InboxService.sendReply(msgId, text);

          // Optimistic Update
          const m = messages.find(msg => msg.id == msgId);
          if (m) {
            m.status = 'replied';
            m.reply = text;
            m.replied_at = 'Just now';
          }

          // Re-render
          renderList();
          showDetail(msgId); // Reloads detail view to show the reply
          window.dispatchEvent(new Event('inbox-updated'));

        } catch (err) {
          console.error(err);
          btn.innerHTML = originalBtnContent;
          btn.disabled = false;
          alert('Failed to send reply');
        }
      });
    }

    if (btnRead) {
      btnRead.addEventListener('click', async (e) => {
        const id = e.target.dataset.id;
        await InboxService.markAsRead(id);
        // Optimistic update
        const m = messages.find(msg => msg.id == id);
        if (m) m.status = 'read';
        renderList();
        e.target.remove(); // Remove button
        window.dispatchEvent(new Event('inbox-updated'));
      });
    }

    if (btnDelete) {
      btnDelete.addEventListener('click', async (e) => {
        if (confirm('Delete this message permanently?')) {
          const id = e.target.dataset.id;
          await InboxService.deleteMessage(id);
          messages = messages.filter(m => m.id != id);
          renderList();
          window.dispatchEvent(new Event('inbox-updated'));

          // Reset Detail View
          if (window.innerWidth >= 768) {
            detailPanel.innerHTML = `<i class="ph-envelope-open text-4xl mb-4 opacity-50"></i><p>Select a message to view details</p>`;
            detailPanel.classList.add('items-center', 'justify-center', 'text-zinc-500');
          } else {
            mobileOverlay.classList.add('hidden');
          }
        }
      });
    }

    if (btnWA) {
      btnWA.addEventListener('click', async (e) => {
        const id = e.target.dataset.id;
        // Auto mark as replied
        await InboxService.markAsReplied(id);
        const m = messages.find(msg => msg.id == id);
        if (m) m.status = 'replied';
        renderList();
      });
    }
  };

  // Event Delegation for List
  listContainer.addEventListener('click', (e) => {
    const card = e.target.closest('.message-card');
    if (card) {
      showDetail(card.dataset.id);
    }
  });

  closeMobileBtn.addEventListener('click', () => {
    mobileOverlay.classList.add('hidden');
  });

  // Initial Load
  loadMessages();
};
