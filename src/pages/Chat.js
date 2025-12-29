import { ChatService } from '../services/chat.js';
import { AuthService } from '../services/auth.js';
import gsap from 'gsap';

export const Chat = () => {
  const currentUser = AuthService.getUser();
  return `
    <div class="h-[calc(100vh-80px)] md:h-full p-4 md:p-12 flex flex-col">
    <div class="flex-1 flex flex-col relative bg-card-bg rounded-xl border border-border-subtle overflow-hidden subtle-shadow h-full">
      <!-- Header -->
      <div class="p-3 md:p-4 border-b border-border-subtle bg-main-bg/50 flex justify-between items-center">
        <div>
          <div class="flex items-center gap-2">
             <h2 class="text-base md:text-lg font-bold font-space text-text-main">Public Chat Room</h2>
             <span class="flex h-2 w-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
          </div>
          <p class="text-[10px] text-text-muted">Join the discussion with other developers. 
            ${currentUser ? `<span class="text-[10px] text-accent ml-2">(${currentUser.username}: ${currentUser.role || 'no-role'})</span>` : ''}
          </p>
        </div>
        <div id="onlineUsersHeader" class="flex -space-x-2">
           <!-- Loaded dynamically -->
        </div>
      </div>

      <!-- Messages Area -->
      <div id="messagesContainer" class="flex-1 min-h-0 overflow-y-auto p-4 md:p-6 space-y-4 md:space-y-6 scroll-smooth">
         <!-- Messages injected here -->
      </div>

      <!-- Context Banner (Reply/Edit) -->
       <div id="chatContext" class="hidden px-4 py-2 bg-main-bg/80 border-t border-border-subtle text-xs flex justify-between items-center">
         <span id="contextText" class="text-accent font-medium">Replying to...</span>
         <button id="cancelContext" class="text-text-muted hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors" title="Cancel">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" class="w-4 h-4 fill-current"><path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path></svg>
         </button>
       </div>

      <!-- Image Preview Area -->
      <div id="imagePreviewContainer" class="hidden px-4 py-2 bg-main-bg border-t border-border-subtle">
         <div class="relative inline-block">
            <img id="imagePreview" src="" class="h-20 rounded border border-border-subtle object-cover">
            <button id="cancelImage" class="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 shadow hover:bg-red-600 transition-colors">
              <i class="ph-x text-xs"></i>
            </button>
         </div>
      </div>

      <!-- Input Area -->
      <div class="p-4 bg-main-bg border-t border-border-subtle">
        <form id="chatForm" class="flex gap-2 items-center">
          <button type="button" id="uploadBtn" class="text-text-muted hover:text-accent p-2 transition-colors rounded-full hover:bg-white/5">
            <!-- Upload Icon (Paperclip) -->
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" class="w-6 h-6 fill-current">
              <path d="M209.66,122.34a8,8,0,0,1,0,11.32l-82.05,82a56,56,0,0,1-79.2-79.21L147.67,35.73a40,40,0,1,1,56.61,56.55L105,193a24,24,0,1,1-34-34l83.6-83.6a8,8,0,1,1,11.32,11.32L82.29,170.33a8,8,0,0,0,11.32,11.31L193,81a24,24,0,0,0-34-34L59.72,147.69a40,40,0,0,0,56.57,56.56l82.05-82A8,8,0,0,1,209.66,122.34Z"></path>
            </svg>
          </button>
          <input type="file" id="fileInput" accept="image/*" class="hidden">
          
          <input type="text" id="chatInput" autocomplete="off" placeholder="Type a message..." 
            class="flex-1 bg-white/5 border border-border-subtle rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-all text-text-main text-sm placeholder:text-text-muted/50">
          
          <button type="submit" id="sendBtn" class="bg-accent text-white w-11 h-11 rounded-xl flex items-center justify-center font-bold hover:bg-accent-hover transition-all shadow-lg shadow-accent/20 hover:scale-105 active:scale-95">
             <!-- Send Icon (Paper Plane Tilt) -->
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" class="w-6 h-6 fill-current">
               <path d="M227.32,28.68a16,16,0,0,0-15.66-4.08l-192,56a16,16,0,0,0-.8,30.27l85.08,28.36,28.36,85.08a16,16,0,0,0,15.14,10.89h.8a16,16,0,0,0,14.33-11.69l56-192A16,16,0,0,0,227.32,28.68Zm-26.69,21L91.8,157.9l-49.8-16.6L200.63,49.68Z"></path>
             </svg>
          </button>
        </form>
      </div>
    </div>

    <!-- Lightbox Modal -->
    <div id="lightbox" class="fixed inset-0 z-50 bg-black/90 hidden flex items-center justify-center p-4 backdrop-blur-sm animate-fade-in">
       <button id="closeLightbox" class="absolute top-4 right-4 text-white hover:text-gray-300 z-50">
         <i class="ph-x text-3xl"></i>
       </button>
       <div class="relative max-w-full max-h-full">
         <img id="lightboxImg" src="" class="max-w-full max-h-[85vh] rounded shadow-2xl">
         <div class="absolute bottom-[-3rem] left-0 w-full flex justify-center">
            <a id="downloadLink" href="#" download="image.png" class="flex items-center gap-2 bg-white text-black px-6 py-2 rounded-full font-bold hover:bg-gray-200 transition-colors">
              <i class="ph-download-simple"></i> Download Image
            </a>
         </div>
       </div>
    </div>
    </div>
  `;
};

let currentMode = 'NONE'; // 'NONE', 'REPLY', 'EDIT'
let targetId = null;
let selectedImageBase64 = null;

const renderMessages = async () => {
  const container = document.getElementById('messagesContainer');
  if (!container) return;

  // Show loading state if empty? Maybe later.

  let data = { messages: [], online_users: [] };
  try {
    data = await ChatService.getMessages();
  } catch (e) {
    console.error("Failed to load messages", e);
  }

  const { messages, online_users } = data;
  const currentUser = AuthService.getUser();

  // Update Online Users
  const onlineContainer = document.getElementById('onlineUsersHeader');
  if (onlineContainer) {
    if (online_users && online_users.length > 0) {
      const maxShow = 3;
      const extra = online_users.length - maxShow;

      onlineContainer.innerHTML = `
         <div class="flex -space-x-2">
           ${online_users.slice(0, maxShow).map(u => `
             <img src="${u.avatar}" title="${u.username}" class="w-6 h-6 rounded-full border border-card-bg bg-gray-600 object-cover">
           `).join('')}
           ${extra > 0 ? `
             <div class="w-6 h-6 rounded-full border border-card-bg flex items-center justify-center bg-accent/20 text-[10px] text-accent font-bold">+${extra}</div>
           ` : ''}
         </div>
       `;
    } else {
      onlineContainer.innerHTML = ''; // Hide if none? Or show empty state? User said "kalo gaada gausah di tampilin"
    }
  }

  if (!Array.isArray(messages) || messages.length === 0) {
    container.innerHTML = `
      <div class="h-full flex flex-col items-center justify-center text-text-muted opacity-50">
        <i class="ph-chat-circle-dots text-4xl mb-4"></i>
        <p class="text-sm">No messages yet. Be the first!</p>
      </div>
    `;
    return;
  }

  container.innerHTML = `
    <style>
      @keyframes border-rotate {
        0% { background-position: 0% 50%; opacity: 0.6; }
        50% { background-position: 100% 50%; opacity: 1; }
        100% { background-position: 0% 50%; opacity: 0.6; }
      }
      .owner-border-gradient {
        background: linear-gradient(270deg, #06b6d4, #3b82f6, #a855f7, #06b6d4);
        background-size: 200% 200%;
        animation: border-rotate 3s ease infinite;
      }
    </style>
  ` + messages.map(msg => {
    // Mock user check for DB messages (which use 'db-username') vs localStorage users
    // If msg.userId starts with 'db-', we assume it's NOT 'me' unless I implement robust Auth sync.
    // For now, let's match by username as a loose fallback if userId doesn't match
    const isMe = currentUser && msg.username === currentUser.username;
    const isOwner = msg.role === 'admin';

    // ... (rest of the render logic remains similar but needs to be included in the replacement) ...
    const canManage = currentUser && (currentUser.role === 'admin' || isMe);

    const time = new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    // Render Replies
    const repliesHtml = msg.replies && msg.replies.length > 0 ? `
      <div class="mt-2 space-y-2 pl-4 border-l-2 border-border-subtle/50">
        ${msg.replies.map(reply => {
      const isReplyOwner = currentUser && (currentUser.role === 'admin' || reply.username.trim().toLowerCase() === currentUser.username.trim().toLowerCase());

      return `
           <div class="flex items-start gap-2">
             <img src="${reply.avatar}" class="w-4 h-4 rounded-full opacity-70">
             <div>
               <div class="flex items-center gap-2">
                 <span class="text-[10px] font-bold text-text-muted">${reply.username}</span>
                 <span class="text-[8px] text-text-muted opacity-50">${new Date(reply.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                 ${isReplyOwner ? `
                   <button class="action-btn ml-2 text-[10px] text-red-500 bg-red-500/10 hover:bg-red-500/20 px-2 py-0.5 rounded border border-red-500/20 transition-colors" data-action="delete" data-id="${reply.id}" data-preview="${encodeURIComponent(reply.text.substring(0, 20))}">
                     <i class="ph-trash mr-1"></i>Del
                   </button>
                 ` : ''}
               </div>
               <p class="text-xs text-text-muted">${reply.text}</p>
               ${reply.image ? `<img src="${reply.image}" class="mt-1 w-16 h-16 object-cover rounded cursor-pointer hover:opacity-80 transition-opacity lightbox-trigger" data-src="${reply.image}">` : ''}
             </div>
           </div>
        `;
    }).join('')}
      </div>
    ` : '';

    if (isOwner) {
      // --- OWNER MESSAGE STYLE ---
      return `
       <div class="flex items-start gap-4 ${isMe ? 'flex-row-reverse' : ''} group animate-msg mb-6">
         <div class="relative">
            <img src="${msg.avatar}" alt="${msg.username}" class="w-10 h-10 rounded-full border-2 border-cyan-500/50 bg-black/50 shadow-[0_0_15px_rgba(6,182,212,0.3)] z-10 relative">
            <div class="absolute -bottom-1 -right-1 bg-cyan-500 text-black text-[8px] font-bold px-1 rounded-sm z-20">PRO</div>
         </div>
         
         <div class="flex flex-col ${isMe ? 'items-end' : 'items-start'} max-w-[85%]">
           <div class="flex flex-wrap items-center gap-2 mb-1.5 pl-1">
             <span class="text-xs font-bold text-white tracking-wide drop-shadow-md flex items-center gap-1">
                ${msg.username} 
                <i class="ph-seal-check-fill text-cyan-400 text-sm"></i>
                <span class="text-[9px] px-1.5 py-0.5 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 text-cyan-300 font-mono">OWNER</span>
             </span>
             <span class="text-[10px] text-cyan-200/50 whitespace-nowrap">${time}</span>
             ${msg.edited ? '<span class="text-[8px] text-zinc-500 italic">(edited)</span>' : ''}
           </div>
           
           <div class="relative p-[1.5px] rounded-xl overflow-hidden group/card hover:-translate-y-1 transition-transform duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)]">
             <!-- Animated Border -->
             <div class="absolute inset-0 owner-border-gradient"></div>
             
             <!-- Content -->
             <div class="relative bg-zinc-950/90 backdrop-blur-sm rounded-[10px] p-4 border border-white/5 h-full">
                ${msg.image ? `
                  <div class="mb-3 rounded-lg overflow-hidden border border-white/10">
                     <img src="${msg.image}" class="max-w-full max-h-56 w-full object-cover cursor-pointer hover:scale-105 transition-transform duration-500 lightbox-trigger" data-src="${msg.image}">
                  </div>
                ` : ''}
                <p class="text-sm text-cyan-50 leading-relaxed whitespace-pre-wrap font-book">${msg.text}</p>
                ${repliesHtml}
             </div>
           </div>
 
           <!-- Actions -->
           <div class="flex items-center gap-2 mt-1 opacity-0 group-hover:opacity-100 transition-opacity pl-1">
              <button class="action-btn text-[10px] text-cyan-400 hover:text-white flex items-center gap-1" data-action="reply" data-id="${msg.id}" data-user="${msg.username}">
                <i class="ph-arrow-u-up-left"></i> Reply
              </button>
              ${canManage ? `
                <button class="action-btn text-[10px] text-zinc-500 hover:text-cyan-400 flex items-center gap-1" data-action="edit" data-id="${msg.id}" data-text="${encodeURIComponent(msg.text)}">
                  <i class="ph-pencil-simple"></i> Edit
                </button>
                <button class="action-btn text-[10px] text-zinc-500 hover:text-red-400 flex items-center gap-1" data-action="delete" data-id="${msg.id}" data-preview="${encodeURIComponent(msg.text.substring(0, 20))}">
                  <i class="ph-trash"></i> Delete
                </button>
              ` : ''}
           </div>
         </div>
       </div>
       `;
    }

    // --- REGULAR MESSAGE STYLE (Original) ---
    return `
      <div class="flex items-start gap-4 ${isMe ? 'flex-row-reverse' : ''} group animate-msg">
        <img src="${msg.avatar}" alt="${msg.username}" class="w-8 h-8 rounded-full border border-border-subtle bg-black/50">
        
        <div class="flex flex-col ${isMe ? 'items-end' : 'items-start'} max-w-[85%]">
          <div class="flex items-center gap-2 mb-1">
            <span class="text-xs font-bold text-text-main">${msg.username}</span>
            <span class="text-[10px] text-text-muted">${time}</span>
            ${msg.edited ? '<span class="text-[8px] text-text-muted italic">(edited)</span>' : ''}
          </div>
          
          <div class="p-3 rounded-xl ${isMe ? 'bg-accent/10 text-text-main border border-accent/20 rounded-tr-none' : 'bg-white/5 text-text-muted rounded-tl-none border border-border-subtle'} relative group-hover:shadow-md transition-all">
            ${msg.image ? `
              <div class="mb-2">
                 <img src="${msg.image}" class="max-w-full max-h-48 rounded cursor-pointer hover:opacity-90 transition-opacity lightbox-trigger" data-src="${msg.image}">
              </div>
            ` : ''}
            <p class="text-sm leading-relaxed whitespace-pre-wrap">${msg.text}</p>
            ${repliesHtml}
          </div>

          <!-- Actions -->
          <div class="flex items-center gap-2 mt-1 opacity-70 hover:opacity-100 transition-opacity">
             <button class="action-btn text-[10px] text-text-muted hover:text-accent flex items-center gap-1" data-action="reply" data-id="${msg.id}" data-user="${msg.username}">
               <i class="ph-arrow-u-up-left"></i> Reply
             </button>
             ${canManage ? `
               <button class="action-btn text-[10px] text-text-muted hover:text-accent flex items-center gap-1" data-action="edit" data-id="${msg.id}" data-text="${encodeURIComponent(msg.text)}">
                 <i class="ph-pencil-simple"></i> Edit
               </button>
               <button class="action-btn text-[10px] text-text-muted hover:text-red-400 flex items-center gap-1" data-action="delete" data-id="${msg.id}" data-preview="${encodeURIComponent(msg.text.substring(0, 20))}">
                 <i class="ph-trash"></i> Delete Msg
               </button>
             ` : ''}
          </div>
        </div>
      </div>
    `;
  }).join('');

  container.scrollTop = container.scrollHeight;
};

export const afterRenderChat = () => {
  renderMessages();

  // Real-time polling
  const pollInterval = setInterval(() => {
    if (!document.getElementById('messagesContainer')) {
      clearInterval(pollInterval);
      return;
    }
    renderMessages();
  }, 3000);
  // ... rest of setup ...
  const form = document.getElementById('chatForm');
  // ... (re-select elements to ensure closure scope is correct or just rely on global DOM lookup inside event listener if structure didn't change, but safer to re-select or assume the provided block handles it) ...
  // Wait, I am replacing the WHOLE renderMessages AND afterRenderChat block with this tool? 
  // No, just the function definitions and event listeners.
  // The tool replaces a block defined by StartLine/EndLine. 

  // I need to be careful to include all logic.

  // ... (setup variables)
  const input = document.getElementById('chatInput');
  const fileInput = document.getElementById('fileInput');
  const uploadBtn = document.getElementById('uploadBtn');
  const contextBanner = document.getElementById('chatContext');
  const contextText = document.getElementById('contextText');
  const cancelContext = document.getElementById('cancelContext');
  const imagePreviewContainer = document.getElementById('imagePreviewContainer');
  const imagePreview = document.getElementById('imagePreview');
  const cancelImage = document.getElementById('cancelImage');

  const resetState = () => {
    currentMode = 'NONE';
    targetId = null;
    selectedImageBase64 = null;
    input.value = '';
    fileInput.value = '';
    contextBanner.classList.add('hidden');
    imagePreviewContainer.classList.add('hidden');
  };

  cancelContext.addEventListener('click', resetState);
  cancelImage.addEventListener('click', () => {
    selectedImageBase64 = null;
    fileInput.value = '';
    imagePreviewContainer.classList.add('hidden');
  });

  uploadBtn.addEventListener('click', () => fileInput.click());

  fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        // Optional: notify user "Compressing..."
      }

      const reader = new FileReader();
      reader.onload = (evt) => {
        const img = new Image();
        img.onload = () => {
          // Resize logic
          const canvas = document.createElement('canvas');
          const MAX_WIDTH = 600;
          const scaleSize = MAX_WIDTH / img.width;
          if (img.width > MAX_WIDTH) {
            canvas.width = MAX_WIDTH;
            canvas.height = img.height * scaleSize;
          } else {
            canvas.width = img.width;
            canvas.height = img.height;
          }

          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

          // Compress to JPEG 0.7
          selectedImageBase64 = canvas.toDataURL('image/jpeg', 0.7);

          // Preview
          imagePreview.src = selectedImageBase64;
          imagePreviewContainer.classList.remove('hidden');
        };
        img.src = evt.target.result;
      };
      reader.readAsDataURL(file);
    }
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const text = input.value.trim();
    if (!text && !selectedImageBase64) return;

    // Visual feedback
    const btn = document.getElementById('sendBtn');
    // Hardcode the original SVG to ensure we restore it correctly even if previous read was weird
    const sendIconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" class="w-6 h-6 fill-current"><path d="M227.32,28.68a16,16,0,0,0-15.66-4.08l-192,56a16,16,0,0,0-.8,30.27l85.08,28.36,28.36,85.08a16,16,0,0,0,15.14,10.89h.8a16,16,0,0,0,14.33-11.69l56-192A16,16,0,0,0,227.32,28.68Zm-26.69,21L91.8,157.9l-49.8-16.6L200.63,49.68Z"></path></svg>`;

    // Inline SVG Spinner
    btn.innerHTML = `<svg class="animate-spin w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>`;
    btn.disabled = true;

    // Timeout Promise
    const timeout = new Promise((_, reject) => setTimeout(() => reject(new Error("Request timed out")), 5000));

    try {
      const dbAction = (async () => {
        if (currentMode === 'EDIT') {
          await ChatService.editMessage(targetId, text);
        } else if (currentMode === 'REPLY') {
          await ChatService.replyToMessage(targetId, text, selectedImageBase64);
        } else {
          await ChatService.postMessage(text, selectedImageBase64);
        }
      })();

      // Race DB action against 5s timeout
      await Promise.race([dbAction, timeout]);

      resetState();

      // Render in background to prevent UI blocking
      renderMessages().then(() => {
        if (currentMode !== 'EDIT') {
          const lastMsg = document.querySelector('#messagesContainer > :last-child');
          if (lastMsg) gsap.from(lastMsg, { opacity: 0, y: 20 });
        }
      });

    } catch (error) {
      console.error(error);
      // Don't alert for timeout, just fallback silently or show toast? Alert is safer for now.
      alert('Message not sent: ' + (error.message || 'Unknown error'));
    } finally {
      btn.innerHTML = sendIconSvg;
      btn.disabled = false;
      input.focus();
    }
  });

  document.getElementById('messagesContainer').addEventListener('click', async (e) => {
    // Action Buttons
    const btn = e.target.closest('.action-btn');
    if (btn) {
      e.stopPropagation(); // Stop bubbling immediately
      const action = btn.dataset.action;
      targetId = btn.dataset.id;
      const previewText = decodeURIComponent(btn.dataset.preview || '');

      if (action === 'delete') {
        console.log('Action: delete', targetId, previewText);
        if (confirm(`Delete this message?\n\n"${previewText}..."`)) {
          try {
            await ChatService.deleteMessage(targetId);
            // Force remove from DOM instantly for better UX if no error thrown
            const card = document.querySelector(`.action-btn[data-id="${targetId}"]`).closest('.animate-msg');
            if (card) card.remove();

            await renderMessages();
          } catch (err) {
            alert(err.message);
          }
        }
      } else if (action === 'edit') {
        currentMode = 'EDIT';
        input.value = decodeURIComponent(btn.dataset.text);
        input.focus();
        contextText.textContent = 'Editing message...';
        contextBanner.classList.remove('hidden');
      } else if (action === 'reply') {
        currentMode = 'REPLY';
        input.focus();
        contextText.textContent = `Replying to ${btn.dataset.user}...`;
        contextBanner.classList.remove('hidden');
      }
      return;
    }

    // Lightbox Trigger
    const imgTrigger = e.target.closest('.lightbox-trigger');
    if (imgTrigger) {
      const src = imgTrigger.dataset.src;
      const lightbox = document.getElementById('lightbox');
      const lightboxImg = document.getElementById('lightboxImg');
      const downloadLink = document.getElementById('downloadLink');

      lightboxImg.src = src;
      downloadLink.href = src;
      lightbox.classList.remove('hidden');
    }
  });

  // Lightbox Close
  const lightbox = document.getElementById('lightbox');
  const closeLightbox = document.getElementById('closeLightbox');

  if (lightbox) {
    const hideLightbox = () => lightbox.classList.add('hidden');
    closeLightbox.addEventListener('click', hideLightbox);
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) hideLightbox();
    });
  }
};
