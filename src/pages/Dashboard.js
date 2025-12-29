import { AuthService } from '../services/auth.js';
import gsap from 'gsap';

export const Dashboard = () => {
  const user = AuthService.getUser();
  const username = user?.username || 'Guest';

  // Common card classes - Solid visibility, no opacity tricks on the container
  const cardClass = "tilt-card bg-zinc-900 border border-zinc-700/50 p-6 rounded-2xl relative group transition-all duration-300 preserve-3d overflow-visible opacity-0";

  return `
    <div id="dashboard-container" class="flex-1 p-6 md:p-12 overflow-y-auto animate-fade-in pb-10 perspective-[2000px]">
      
      <!-- MAIN GRID CONTAINER -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        <!-- 1. HERO CARD -->
        <div class="${cardClass} col-span-1 md:col-span-2 min-h-[180px] flex flex-col justify-center">
          <div class="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent rounded-2xl -z-10"></div>
          
          <div class="flex items-center gap-6 transform-style-3d z-10">
            <div class="relative w-24 h-24 shrink-0 transform-style-3d group-hover:translate-z-10 transition-transform duration-300">
               <img src="${user?.avatar || 'https://ui-avatars.com/api/?name=' + username}" class="w-full h-full rounded-2xl object-cover shadow-2xl border-2 border-zinc-600">
               <div class="absolute -bottom-2 -right-2 bg-zinc-800 p-2 rounded-xl border border-zinc-600 shadow-xl">
                  <i class="ph-code-fill text-2xl text-accent"></i>
               </div>
            </div>
            <div class="space-y-2 transform-style-3d group-hover:translate-z-5 transition-transform duration-300">
               <div class="inline-flex items-center gap-2 px-3 py-1 bg-indigo-500/20 border border-indigo-500/20 rounded-lg text-[11px] font-bold text-indigo-400 uppercase tracking-wide">
                 <i class="ph-student"></i> RPL Student
               </div>
               <h1 class="text-3xl font-bold font-space text-white leading-none">
                 Hello, <span class="text-indigo-400">${username}</span>
               </h1>
               <p class="text-sm text-zinc-400 max-w-sm leading-relaxed">
                 Welcome back! Ready to craft some modern digital experiences?
               </p>
            </div>
          </div>
        </div>

        <!-- 2. TECH STACK -->
        <div class="${cardClass} col-span-1 md:col-span-2 min-h-[180px] flex flex-col justify-center">
           <div class="absolute top-0 right-0 p-32 bg-indigo-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none -z-10"></div>
           
           <div class="flex items-center justify-between mb-5 transform-style-3d group-hover:translate-z-4 transition-transform">
             <h3 class="text-sm font-bold font-space text-white flex items-center gap-2">
               <i class="ph-stack text-indigo-400 text-lg"></i> Tech Stack
             </h3>
             <span class="text-[10px] font-mono text-zinc-400 bg-zinc-800/80 px-2 py-0.5 rounded border border-zinc-700">Favorite Tools</span>
           </div>
           
           <div class="flex flex-wrap gap-3 transform-style-3d group-hover:translate-z-8 transition-transform duration-300">
              ${TechBadge('HTML5', '<path d="M4.5,22.09l-2.4-19.66h19.56l-2.39,19.65L11.89,24Z M18.42,5.17H5.32l1.6,13.11l4.98,1.38l4.97-1.38L17.77,10.2H8.38l-0.34-2.8h10.04L18.42,5.17Z"/>', 'fill-orange-500')}
              ${TechBadge('CSS3', '<path d="M4.5,22.09l-2.4-19.66h19.56l-2.39,19.65L11.89,24Z M18.42,5.17H5.32l1.6,13.11l4.98,1.38l4.97-1.38l0.55-5.5h-2.82l-0.23,2.37l-2.48,0.67l-2.47-0.67L8.98,12h6.24l0.36-3.6H8.62l-0.29-2.88h10.04l0.05-0.35"/>', 'fill-blue-500')}
              ${TechBadge('JS', '<path d="M3,3h18v18H3V3z M16.5,16.5v-4h-1.5v4H16.5z M12.5,12.5v4h-1.5v-2.5h-1v-1.5H12.5z"/>', 'fill-yellow-400')}
              ${TechBadge('React', '<circle cx="12" cy="12" r="2"/><ellipse cx="12" cy="12" rx="7" ry="2.5" transform="rotate(25, 12, 12)" stroke="currentColor" stroke-width="1.5" fill="none"/><ellipse cx="12" cy="12" rx="7" ry="2.5" transform="rotate(-25, 12, 12)" stroke="currentColor" stroke-width="1.5" fill="none"/><ellipse cx="12" cy="12" rx="7" ry="2.5" transform="rotate(90, 12, 12)" stroke="currentColor" stroke-width="1.5" fill="none"/>', 'text-cyan-400')}
              ${TechBadge('Node', '<path d="M12,2L3.3,7v10L12,22l8.7-5V7L12,2z M12,18.5l-6-3.4V8.4l6-3.4l6,3.4v6.7L12,18.5z"/>', 'fill-green-600')}
              ${TechBadge('Tailwind', '<path d="M12.5,6c-2.5,0-4,1.5-4,4c0,2.5,3,3,3,5.5s-2,3-3.5,3c-1,0-1.5-0.5-2-1.5 M18.5,10c-2.5,0-4,1.5-4,4c0,2.5,3,3,3,5.5s-2,3-3.5,3c-1,0-1.5-0.5-2-1.5"/>', 'stroke-current stroke-2 fill-none_ text-cyan-400')}
              ${TechBadge('Vite', '<path d="M12,2L3,6v4l9,12l9-12V6L12,2z M12,19L5,9h3.5l3.5,7.5L15.5,9H19L12,19z"/>', 'fill-purple-500')}
              ${TechBadge('Figma', '<path d="M8,18c-1.1,0-2-0.9-2-2s0.9-2,2-2h2v4H8z M8,12c-1.1,0-2-0.9-2-2s0.9-2,2-2h2v4H8z M14,8c1.1,0,2,0.9,2,2s-0.9,2-2,2h-2V8H14z M12,14v4c1.1,0,2-0.9,2-2s-0.9-2-2-2h-2V14z"/>', 'fill-purple-400')}
           </div>
        </div>

        <!-- 3. SIAPA SAYA -->
        <div class="${cardClass} col-span-1">
           <h3 class="text-sm font-bold font-space text-white mb-3 transform-style-3d group-hover:translate-z-4 transition-transform">About Me</h3>
           <p class="text-xs text-zinc-400 leading-relaxed line-clamp-4 mb-4 transform-style-3d group-hover:translate-z-2 transition-transform">
             Pasionate about code and pixels. I build modern, user-friendly interfaces with a focus on details.
           </p>
           <div class="flex gap-3 transform-style-3d group-hover:translate-z-6 transition-transform duration-300">
              <div class="w-10 h-10 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center text-lg shadow-md hover:scale-110 hover:border-indigo-500 hover:shadow-indigo-500/20 transition-all cursor-default group/icon">
                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" class="w-5 h-5 fill-indigo-400 group-hover/icon:fill-indigo-300 transition-colors"><path d="M240,168H200V48a16,16,0,0,0-16-16H72A16,16,0,0,0,56,48V168H16a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16ZM72,48H184V168H72Z"></path></svg>
              </div>
              <div class="w-10 h-10 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center text-lg shadow-md hover:scale-110 hover:border-purple-500 hover:shadow-purple-500/20 transition-all cursor-default group/icon">
                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" class="w-5 h-5 fill-purple-400 group-hover/icon:fill-purple-300 transition-colors"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm65.88,143.6a8,8,0,1,1-13.76,7.91,52,52,0,0,0-76.24-52l-3.38-2a8,8,0,1,1-8.24-13.7l3.36,1.94A68.08,68.08,0,0,1,168,136h0a67.65,67.65,0,0,1,25.88,31.6Z"></path></svg>
              </div>
           </div>
        </div>

        <!-- 4. GITHUB -->
        <div id="githubCard" class="${cardClass} col-span-1 md:col-span-2 flex items-center gap-6">
           <div class="absolute inset-0 bg-gradient-to-l from-black/80 to-transparent pointer-events-none -z-10 rounded-2xl"></div>
           
           <div class="shrink-0 relative transform-style-3d group-hover:translate-z-8 group-hover:scale-110 transition-transform duration-300 z-10">
             <img id="ghAvatar" src="" class="w-20 h-20 rounded-full border-2 border-zinc-600 bg-black shadow-xl">
             <div class="absolute -bottom-1 -right-1 bg-white text-black p-1.5 rounded-full ring-4 ring-zinc-800 shadow-lg">
               <i class="ph-github-logo-fill text-xl"></i>
             </div>
           </div>
           
           <div class="flex-1 min-w-0 z-10 transform-style-3d group-hover:translate-x-2 transition-transform duration-300">
              <div class="flex items-center justify-between mb-2">
                 <h3 class="text-xl font-bold font-space text-white truncate drop-shadow-md" id="ghName">GitHub</h3>
                 <a href="https://github.com/LittleKenzy" target="_blank" class="transform group-hover:translate-z-10 text-[11px] font-bold text-zinc-900 bg-white px-4 py-2 rounded-lg hover:bg-gray-200 transition-all shadow-xl hover:scale-105 active:scale-95">
                    Visit
                 </a>
              </div>
              <p class="text-sm text-zinc-400 font-mono truncate mb-4" id="ghBio">Connecting...</p>
              <div class="flex gap-4 text-xs text-zinc-300">
                 <span class="flex items-center gap-1.5 bg-black/40 px-3 py-1.5 rounded-lg border border-zinc-700"><i class="ph-users text-indigo-400"></i> <strong id="ghFollowers" class="text-white">0</strong></span>
                 <span class="flex items-center gap-1.5 bg-black/40 px-3 py-1.5 rounded-lg border border-zinc-700"><i class="ph-book-bookmark text-indigo-400"></i> <strong id="ghRepos" class="text-white">0</strong></span>
              </div>
           </div>
        </div>

        <!-- 5. MINI GALLERY -->
        <div class="${cardClass} col-span-1 flex flex-col">
           <div class="flex items-center justify-between mb-4 transform-style-3d group-hover:translate-z-2 transition-transform">
              <h3 class="text-sm font-bold font-space text-white">Gallery</h3>
              <i class="ph-image text-indigo-400 text-lg"></i>
           </div>
           <div class="flex-1 grid grid-cols-2 gap-2 h-full transform-style-3d group-hover:translate-z-6 transition-transform duration-300">
              <div class="bg-zinc-800/80 rounded-lg border border-zinc-700 flex items-center justify-center group/img relative overflow-hidden h-20 hover:border-indigo-500/50 transition-all cursor-pointer shadow-md hover:-translate-y-1">
                 <img src="/assets/project_landing.png" alt="Project 1" class="w-full h-full object-cover opacity-70 group-hover/img:opacity-100 group-hover/img:scale-110 transition-all duration-500">
              </div>
              <div class="bg-zinc-800/80 rounded-lg border border-zinc-700 flex items-center justify-center group/img relative overflow-hidden h-20 hover:border-purple-500/50 transition-all cursor-pointer shadow-md hover:-translate-y-1">
                 <img src="/assets/project_habit.png" alt="Project 2" class="w-full h-full object-cover opacity-70 group-hover/img:opacity-100 group-hover/img:scale-110 transition-all duration-500">
              </div>
              <div class="col-span-2 bg-zinc-800/50 rounded-lg border border-zinc-700/50 flex items-center justify-center h-8">
                 <span class="text-[10px] font-mono text-zinc-500">More Projects Soon</span>
              </div>
           </div>
        </div>

        <!-- 6. CURRENT STATUS -->
        <div class="${cardClass} col-span-1 md:col-span-2 lg:col-span-4 flex flex-col justify-center">
           <div class="flex items-center justify-between mb-6 transform-style-3d group-hover:translate-z-4 transition-transform">
              <div class="flex items-center gap-3">
                 <div class="w-8 h-8 rounded-full bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" class="w-4 h-4 fill-indigo-400"><path d="M224,128a8,8,0,0,1-8,8H172.5l-21.16,63.48a8,8,0,0,1-15.18,0L104.5,45,74.1,136H40a8,8,0,0,1,0-16H80a8,8,0,0,1,7.59,5.47L119.5,211,149.9,119.53a8,8,0,0,1,15.18,0L190.5,200H216A8,8,0,0,1,224,128Z"/></svg>
                 </div>
                 <div>
                    <h3 class="text-base font-bold font-space text-white leading-none">Current Status</h3>
                    <p class="text-[10px] text-zinc-400 mt-0.5">Live snapshot of my work</p>
                 </div>
              </div>
              <div class="animate-pulse flex items-center gap-2">
                <span class="text-[10px] font-mono text-emerald-500">Active</span>
                <span class="inline-flex h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
              </div>
           </div>
           
           <div class="grid grid-cols-1 md:grid-cols-3 gap-4 transform-style-3d group-hover:translate-z-6 transition-transform duration-300">
              <!-- BUILDING NOW -->
              ${StatusCard('Building', 'Interactive Portfolio', 'building')}
              
              <!-- LEARNING -->
              ${StatusCard('Learning', 'Systems Architecture', 'learning')}
              
              <!-- NEXT TARGET -->
              ${StatusCard('Goal', 'Full Stack Release', 'goal')}
           </div>
        </div>

      </div>
    </div>
  `;
};

// Helper components
const TechBadge = (name, svgPath, colorClass) => `
  <div class="flex items-center gap-2 px-3 py-1.5 bg-zinc-800 border border-zinc-700 rounded-lg hover:border-indigo-500/50 hover:bg-zinc-700 transition-all cursor-default select-none group/badge transform-style-3d hover:translate-z-8 hover:shadow-xl shadow-black/50 hover:-translate-y-1">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-4 h-4 ${colorClass} group-hover/badge:scale-110 transition-transform duration-300">
      ${svgPath}
    </svg>
    <span class="text-[11px] font-medium text-zinc-400 group-hover/badge:text-white transition-colors">${name}</span>
  </div>
`;

const StatusCard = (label, value, type) => {
  const badgeColors = {
    building: 'bg-amber-500/10 text-amber-500 border-amber-500/20',
    learning: 'bg-blue-500/10 text-blue-500 border-blue-500/20',
    goal: 'bg-purple-500/10 text-purple-500 border-purple-500/20'
  };

  const icons = {
    building: '<path d="M227.32,73.37,182.63,28.69a16,16,0,0,0-22.63,0L135.35,53.33a8,8,0,0,0,0,11.32l16,16a8,8,0,0,0,11.32,0l24.64-24.64L208,76.69l-24.64,24.64a8,8,0,0,0,0,11.32l16,16a8,8,0,0,0,11.32,0l24.64-24.64A16,16,0,0,0,227.32,73.37ZM58.4,98.4A56,56,0,0,0,134.6,99.38L105.25,128.73a8,8,0,0,0,0,11.31l16,16a8,8,0,0,0,11.31,0l29.35-29.35a73,73,0,1,0-103.5-28.29Z"/>',
    learning: '<path d="M208,80H176V56a24,24,0,0,0-24-24H48A24,24,0,0,0,24,56V192a24,24,0,0,0,24,24H208a24,24,0,0,0,24-24V104A24,24,0,0,0,208,80ZM48,56H152V192H48Zm120,8V192h40a8,8,0,0,1,8,8v.68A24.08,24.08,0,0,0,208,192a8,8,0,0,0-.7-200.68A8,8,0,0,1,216,192V104a8,8,0,0,0-8-8H168Z"/><path d="M72,88H128a8,8,0,0,1,0,16H72a8,8,0,0,1,0-16Z"/><path d="M72,120H128a8,8,0,0,1,0,16H72a8,8,0,0,1,0-16Z"/>',
    goal: '<path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm48-88a48,48,0,1,1-48-48A48.05,48.05,0,0,1,176,128Zm-16,0a32,32,0,1,1-32-32A32,32,0,0,1,160,128Z"/>'
  };

  const color = badgeColors[type] || badgeColors.building;
  const svgContent = icons[type];

  return `
  <div class="flex items-center gap-4 p-4 rounded-xl bg-zinc-800/40 border border-zinc-700/50 hover:bg-zinc-800/80 hover:border-zinc-600 transition-all group/status relative overflow-hidden">
     <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover/status:translate-x-full transition-transform duration-1000"></div>
     
     <div class="w-10 h-10 rounded-lg flex shrink-0 items-center justify-center bg-zinc-900 border border-zinc-700 group-hover/status:scale-110 transition-transform shadow-inner text-zinc-400 group-hover/status:text-white transition-colors">
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" class="w-5 h-5 fill-current">
          ${svgContent}
       </svg>
     </div>
     <div>
       <span class="inline-block px-1.5 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider mb-1 ${color}">${label}</span>
       <h4 class="text-sm font-bold text-white leading-tight group-hover/status:text-indigo-400 transition-colors">${value}</h4>
     </div>
  </div>
  `;
};

export const afterRenderDashboard = () => {
  // 1. Fetch GitHub Data
  const ghAvatar = document.getElementById('ghAvatar');
  const ghName = document.getElementById('ghName');
  const ghBio = document.getElementById('ghBio');
  const ghFollowers = document.getElementById('ghFollowers');
  const ghRepos = document.getElementById('ghRepos');

  if (ghName) {
    fetch('https://api.github.com/users/LittleKenzy')
      .then(res => res.json())
      .then(data => {
        if (data.message === "Not Found") return;
        if (ghAvatar) ghAvatar.src = data.avatar_url;
        if (ghName) ghName.textContent = data.name || data.login;
        if (ghBio) ghBio.textContent = data.bio || 'Connecting to GitHub...';
        if (ghFollowers) ghFollowers.textContent = data.followers;
        if (ghRepos) ghRepos.textContent = data.public_repos;
      })
      .catch(err => console.log('GH API Error', err));
  }

  // 2. ROBUST DELEGATED 3D TILT
  const initTilt = () => {
    const container = document.getElementById('dashboard-container');
    if (!container) return;

    // Stagger Entrance
    gsap.to('.tilt-card', {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: 'power3.out',
      startAt: { y: 30, opacity: 0 }
    });

    const handleMouseMove = (e) => {
      const card = e.target.closest('.tilt-card');
      if (!card) return;

      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // 15 degrees tilt
      const rotateX = ((y - centerY) / centerY) * -15;
      const rotateY = ((x - centerX) / centerX) * 15;

      // Spotlight Logic
      let glare = card.querySelector('.tilt-glare');
      if (!glare) {
        glare = document.createElement('div');
        glare.className = 'tilt-glare absolute inset-0 rounded-2xl pointer-events-none z-50 transition-opacity duration-300';
        glare.style.mixBlendMode = 'overlay';
        card.appendChild(glare);
      }

      // Update glare
      glare.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.15), transparent 60%)`;
      glare.style.opacity = '1';

      // GSAP Tilt
      gsap.to(card, {
        duration: 0.2,
        rotationX: rotateX,
        rotationY: rotateY,
        scale: 1.02,
        transformPerspective: 1000,
        boxShadow: "0 20px 40px -10px rgba(0,0,0,0.6)",
        ease: 'power1.out',
        overwrite: 'auto'
      });
    };

    // Reset on mouseleave using delegation
    container.addEventListener('mouseout', (e) => {
      const card = e.target.closest('.tilt-card');
      // If we left a card, and didn't enter a child of that same card
      if (card && !card.contains(e.relatedTarget)) {
        gsap.to(card, {
          duration: 0.5,
          rotationX: 0,
          rotationY: 0,
          scale: 1,
          boxShadow: 'none',
          ease: 'elastic.out(1, 0.6)',
          overwrite: 'auto'
        });
        const glare = card.querySelector('.tilt-glare');
        if (glare) glare.style.opacity = '0';
      }
    });

    container.addEventListener('mousemove', handleMouseMove);
  };

  requestAnimationFrame(() => initTilt());
};
