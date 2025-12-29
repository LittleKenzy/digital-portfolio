import gsap from 'gsap';
import { DataService } from '../services/data.js';

// --- HELPER COMPONENTS ---

const StatusBadge = (status) => {
  const styles = {
    'live': 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    'in-progress': 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    'concept': 'bg-purple-500/10 text-purple-400 border-purple-500/20',
  };
  const labels = {
    'live': 'Live Demo',
    'in-progress': 'In Progress',
    'concept': 'Concept',
  };

  // Inline SVG Dictionary
  const icons = {
    'live': '<svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3" viewBox="0 0 256 256"><path fill="currentColor" d="M232,128a104,104,0,1,1-104-104A104.11,104.11,0,0,1,232,128Zm-24,0a80,80,0,1,0-80,80A80.09,80.09,0,0,0,208,128Zm-51.52-25.13a8,8,0,0,0-13,6.38v37.5a8,8,0,0,0,13,6.38l25.66-18.75a8,8,0,0,0,0-12.76Z"></path></svg>', // Broadcast/Play replacement
    'in-progress': '<svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 animate-spin-slow" viewBox="0 0 256 256"><path fill="currentColor" d="M232,128a104,104,0,0,1-208,0c0-41,23.81-76.33,58.57-92.86a8,8,0,0,1,6.86,14.46C58.62,63.15,40,90.76,40,128a88,88,0,0,0,176,0c0-37.24-18.62-64.85-49.43-78.4a8,8,0,1,1,6.86-14.46C208.19,51.67,232,87,232,128Z"></path></svg>', // Spinner replacement
    'concept': '<svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3" viewBox="0 0 256 256"><path fill="currentColor" d="M213.38,97.77a88,88,0,1,0-170.76,0c0,28.66,16.27,53.49,40.19,67.65V184a16,16,0,0,0,16,16h58.38a16,16,0,0,0,16-16v-18.58C197.11,151.26,213.38,126.43,213.38,97.77Zm-48,70.23V184h-74.76v-16h0a88.16,88.16,0,0,0-3.62-52.65,11.39,11.39,0,0,1,4.72-13.91,6.21,6.21,0,0,0,1.86-9.15l-19.12-25.5-12.8,9.6,19.12,25.49a22,22,0,0,1-6.6,32.47,72.2,72.2,0,0,1,114.39-2.3,1.35,1.35,0,0,1,.13.29Z"></path><path fill="currentColor" d="M128,24a8,8,0,0,1,8,8V64a8,8,0,0,1-16,0V32A8,8,0,0,1,128,24Z"></path></svg>', // Lightbulb replacement
  };

  return `
    <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider border ${styles[status] || styles['concept']}">
      ${icons[status] || icons['concept']}
      ${labels[status] || 'Project'}
    </span>
  `;
};

const ProjectCard = (project) => {
  // Defensive check for tech to ensure it's an array
  const techStack = Array.isArray(project.tech) ? project.tech : [];

  return `
    <div class="project-card group relative h-[400px] rounded-2xl overflow-hidden bg-[#121212] border border-white/5 cursor-pointer transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/10"
         data-id="${project.id}"
         data-tech="${techStack.join(',')}">
      
      <!-- BACKGROUND IMAGE -->
      <div class="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
         <img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover group-hover:blur-sm group-hover:brightness-[0.2] transition-all duration-500 opacity-100">
      </div>
      
      <!-- GRADIENT OVERLAY (Only visible on hover) -->
      <div class="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/80 to-transparent opacity-0 group-hover:opacity-95 transition-opacity duration-500"></div>

      <!-- CONTENT CONTAINER -->
      <div class="absolute inset-0 p-6 flex flex-col justify-end">
         
         <!-- Top Badge -->
         <div class="absolute top-6 right-6 transform translate-y-[-10px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-100">
            ${StatusBadge(project.status)}
         </div>

         <!-- Text Content -->
         <div class="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <p class="text-accent text-xs font-bold uppercase tracking-widest mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">${project.role}</p>
            <h3 class="text-2xl font-bold font-space text-white mb-2 leading-tight drop-shadow-lg">${project.title}</h3>
            <p class="text-zinc-300 text-sm line-clamp-2 group-hover:text-zinc-200 mb-4 transition-colors drop-shadow-md">${project.desc}</p>
            
            <!-- Tech Stack Chips -->
            <div class="flex flex-wrap gap-2 mb-6">
              ${techStack.slice(0, 3).map(t => `
                <span class="px-2 py-1 text-[10px] font-mono text-zinc-300 border border-white/20 rounded bg-black/40 backdrop-blur-md">
                  ${t}
                </span>
              `).join('')}
              ${techStack.length > 3 ? `<span class="px-2 py-1 text-[10px] font-mono text-zinc-500 border border-white/10 rounded bg-white/5">+${techStack.length - 3}</span>` : ''}
            </div>

            <!-- Action Buttons (Reveal on Hover) -->
            <div class="grid grid-cols-2 gap-3 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-200">
               <button class="action-btn px-4 py-2 bg-white text-black font-bold text-xs rounded hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2">
                 <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 256 256"><path fill="currentColor" d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z"></path></svg>
                 DETAILS
               </button>
               <button class="action-btn px-4 py-2 border border-white/20 text-white font-bold text-xs rounded hover:bg-white/10 transition-colors flex items-center justify-center gap-2 stop-propagation" onclick="window.openLink('${project.repoUrl}')">
                 <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 256 256"><path fill="currentColor" d="M208.31,75.68A59.78,59.78,0,0,0,202.93,28,8,8,0,0,0,194,24a59.75,59.75,0,0,0-49,24H112A59.75,59.75,0,0,0,62,24a8,8,0,0,0-8.85,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v12a56.06,56.06,0,0,0,48.44,55.49A32,32,0,0,0,96,192v32H64a24,24,0,0,1-24-24V188.5a12.35,12.35,0,0,0-3.14-8.31l-10-10.91A8,8,0,0,0,10.15,177.3l29.17,14.59A12,12,0,0,1,45,200v20a24,24,0,0,1,24,24h58.33A2.68,2.68,0,0,0,128,244h0a2.68,2.68,0,0,0,.67,0H160a24,24,0,0,1,24-24V192a32,32,0,0,0-8.44-20.51A56.06,56.06,0,0,0,224,116V104A58.14,58.14,0,0,0,208.31,75.68ZM208,116a40,40,0,0,1-40,40H88a40,40,0,0,1-40-40V104a42,42,0,0,1,6-21.35,8,8,0,0,0-.92-8.5,44,44,0,0,1-5.35-26.65c.57-2.35,1.44-4.87,2.5-7.46.33-.82.68-1.63,1-2.42a44,44,0,0,1,23.11,15,8,8,0,0,0,8.81,2.07,43.59,43.59,0,0,1,16.89,0,44.91,44.91,0,0,1,15.68-5.71,8,8,0,0,0,7-6.27,43.49,43.49,0,0,1,18.79,0,8,8,0,0,0,7,6.27,44.91,44.91,0,0,1,15.68,5.71,43.59,43.59,0,0,1,16.89,0,8,8,0,0,0,8.81-2.07,44,44,0,0,1,23.11-15c.35.79.69,1.6,1,2.42,1.06,2.59,1.93,5.11,2.5,7.46a44,44,0,0,1-5.35,26.65,8,8,0,0,0-.92,8.5A42,42,0,0,1,208,104Z"></path></svg>
                 CODE
               </button>
            </div>
         </div>
      </div>
    </div>
  `;
};

// --- MAIN COMPONENT ---

export const Projects = () => {
  // Initial render: Filters and Grid are empty placeholders (loading state)
  return `
    <div class="flex-1 p-6 md:p-12 overflow-y-auto space-y-10 pb-20 relative z-0">
      
      <!-- HEADER SECTION -->
      <div class="max-w-4xl mx-auto text-center space-y-4 pt-8 mb-12 animate-slide-up">
        <h2 class="text-4xl md:text-5xl font-bold font-space text-white">
          Latest <span class="text-accent">Works</span>
        </h2>
        <p class="text-zinc-400 max-w-lg mx-auto leading-relaxed">
          Retrieving my open-source projects directly from GitHub...
        </p>
      </div>

      <!-- FILTER CHIPS CONTAINER -->
      <div id="techFilters" class="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto mb-12 animate-fade-in" style="animation-delay: 0.2s">
         <!-- Loading Skeleton for filters -->
         <div class="h-8 w-20 bg-white/5 rounded-full animate-pulse"></div>
         <div class="h-8 w-24 bg-white/5 rounded-full animate-pulse delay-75"></div>
         <div class="h-8 w-16 bg-white/5 rounded-full animate-pulse delay-100"></div>
      </div>

      <!-- PROJECTS GRID CONTAINER -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto min-h-[400px]" id="projectsGrid">
        <!-- Loading Skeleton for Cards -->
        ${Array(3).fill(0).map(() => `
            <div class="h-[400px] rounded-2xl bg-white/5 animate-pulse border border-white/5"></div>
        `).join('')}
      </div>

      <!-- PROJECT MODAL (Hidden Initially) -->
      <div id="projectModal" class="fixed inset-0 z-[100] hidden flex items-center justify-center p-4 sm:p-6">
         <!-- Backrop -->
         <div class="absolute inset-0 bg-[#0f0f0f]/90 backdrop-blur-md transition-opacity duration-300 opacity-0" id="modalOverlay"></div>
         
         <!-- Modal Content -->
         <div class="relative w-full max-w-4xl bg-[#121212] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh] transform scale-95 opacity-0 transition-all duration-300" id="modalContent">
             
             <button id="closeModal" class="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/50 text-white hover:bg-red-500 transition-colors flex items-center justify-center">
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor" class="w-5 h-5">
                 <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path>
               </svg>
             </button>

             <!-- LEFT: Image Preview -->
             <div class="w-full md:w-5/12 h-64 md:h-auto relative overflow-hidden bg-zinc-900 border-b md:border-b-0 md:border-r border-white/5">
                <img id="mImage" src="" class="w-full h-full object-cover p-0.5">
                <div class="absolute inset-0 bg-gradient-to-t from-[#121212] to-transparent opacity-50 md:hidden"></div>
             </div>

             <!-- RIGHT: Details -->
             <div class="w-full md:w-7/12 p-8 overflow-y-auto custom-scrollbar">
                
                <div class="mb-6">
                   <div id="mStatus" class="mb-3"></div>
                   <h2 id="mTitle" class="text-3xl font-bold font-space text-white mb-2 leading-tight"></h2>
                   <p id="mRole" class="text-accent text-sm font-bold uppercase tracking-widest"></p>
                </div>

                <div class="space-y-6">
                   <div>
                      <h4 class="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">The Challenge</h4>
                      <p id="mProblem" class="text-zinc-300 text-sm leading-relaxed"></p>
                   </div>
                   
                   <div>
                      <h4 class="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">The Solution</h4>
                      <p id="mSolution" class="text-zinc-300 text-sm leading-relaxed"></p>
                   </div>

                   <div>
                      <h4 class="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">Key Features</h4>
                      <ul id="mFeatures" class="grid grid-cols-1 sm:grid-cols-2 gap-2"></ul>
                   </div>

                   <div>
                      <h4 class="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">Technologies</h4>
                      <div id="mTech" class="flex flex-wrap gap-2"></div>
                   </div>
                </div>

                <div class="mt-8 pt-6 border-t border-white/10 flex gap-4">
                   <a id="mDemo" href="#" target="_blank" class="flex-1 py-3 bg-white text-black font-bold text-center rounded-lg hover:bg-zinc-200 transition-colors text-sm flex items-center justify-center gap-2">
                     <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 256 256"><path fill="currentColor" d="M232,128a104,104,0,1,1-104-104A104.11,104.11,0,0,1,232,128Zm-24,0a80,80,0,1,0-80,80A80.09,80.09,0,0,0,208,128Zm-51.52-25.13a8,8,0,0,0-13,6.38v37.5a8,8,0,0,0,13,6.38l25.66-18.75a8,8,0,0,0,0-12.76Z"></path></svg> Visit Demo
                   </a>
                   <a id="mRepo" href="#" target="_blank" class="px-6 py-3 border border-white/20 text-white font-bold rounded-lg hover:bg-white/10 transition-colors text-sm flex items-center justify-center gap-2">
                     <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 256 256"><path fill="currentColor" d="M208.31,75.68A59.78,59.78,0,0,0,202.93,28,8,8,0,0,0,194,24a59.75,59.75,0,0,0-49,24H112A59.75,59.75,0,0,0,62,24a8,8,0,0,0-8.85,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v12a56.06,56.06,0,0,0,48.44,55.49A32,32,0,0,0,96,192v32H64a24,24,0,0,1-24-24V188.5a12.35,12.35,0,0,0-3.14-8.31l-10-10.91A8,8,0,0,0,10.15,177.3l29.17,14.59A12,12,0,0,1,45,200v20a24,24,0,0,1,24,24h58.33A2.68,2.68,0,0,0,128,244h0a2.68,2.68,0,0,0,.67,0H160a24,24,0,0,1,24-24V192a32,32,0,0,0-8.44-20.51A56.06,56.06,0,0,0,224,116V104A58.14,58.14,0,0,0,208.31,75.68ZM208,116a40,40,0,0,1-40,40H88a40,40,0,0,1-40-40V104a42,42,0,0,1,6-21.35,8,8,0,0,0-.92-8.5,44,44,0,0,1-5.35-26.65c.57-2.35,1.44-4.87,2.5-7.46.33-.82.68-1.63,1-2.42a44,44,0,0,1,23.11,15,8,8,0,0,0,8.81,2.07,43.59,43.59,0,0,1,16.89,0,44.91,44.91,0,0,1,15.68-5.71,8,8,0,0,0,7-6.27,43.49,43.49,0,0,1,18.79,0,8,8,0,0,0,7,6.27,44.91,44.91,0,0,1,15.68,5.71,43.59,43.59,0,0,1,16.89,0,8,8,0,0,0,8.81-2.07,44,44,0,0,1,23.11-15c.35.79.69,1.6,1,2.42,1.06,2.59,1.93,5.11,2.5,7.46a44,44,0,0,1-5.35,26.65,8,8,0,0,0-.92,8.5A42,42,0,0,1,208,104Z"></path></svg>
                   </a>
                </div>

             </div>
         </div>
      </div>

    </div>
  `;
};

// --- LOGIC & INTERACTION ---

export const afterRenderProjects = async () => {
  // 1. Fetch Data
  const username = 'LittleKenzy'; // Or make this dynamic
  let detailedProjects = [];

  try {
    detailedProjects = await DataService.fetchGitHubProjects(username);
  } catch (e) {
    console.error(e);
    // Handle Error in UI
    document.getElementById('projectsGrid').innerHTML = `<p class="text-red-500 text-center col-span-full">Failed to load projects from GitHub.</p>`;
    return;
  }

  if (detailedProjects.length === 0) {
    document.getElementById('projectsGrid').innerHTML = `<p class="text-zinc-500 text-center col-span-full">No projects found.</p>`;
    return;
  }

  // 2. Render Projects
  const grid = document.getElementById('projectsGrid');
  grid.innerHTML = detailedProjects.map(project => ProjectCard(project)).join('');

  // 3. Render Filters
  const allTech = [...new Set(detailedProjects.flatMap(p => p.tech))].sort();
  const filterContainer = document.getElementById('techFilters');
  filterContainer.innerHTML = `
         <button class="filter-chip active px-4 py-2 rounded-full border border-accent bg-accent/10 text-accent text-xs font-bold transition-all hover:bg-accent hover:text-white" data-filter="all">ALL</button>
         ${allTech.map(t => `
           <button class="filter-chip px-4 py-2 rounded-full border border-white/10 text-zinc-500 bg-white/5 text-xs font-bold transition-all hover:border-accent hover:text-accent" data-filter="${t}">${t}</button>
         `).join('')}
    `;

  // 4. Stagger Animation for Cards
  gsap.from('.project-card', {
    y: 50,
    // opacity: 0, // Disabled to prevent dimming issues, handled by opacity-100 class
    duration: 0.8,
    stagger: 0.1,
    ease: "power3.out"
  });

  // 5. Handling Filtering
  const filterChips = document.querySelectorAll('.filter-chip');
  const cards = document.querySelectorAll('.project-card');

  filterChips.forEach(chip => {
    chip.addEventListener('click', () => {
      // Toggle Active State
      filterChips.forEach(c => {
        c.classList.remove('active', 'border-accent', 'bg-accent/10', 'text-accent');
        c.classList.add('border-white/10', 'text-zinc-500', 'bg-white/5');
      });
      chip.classList.add('active', 'border-accent', 'bg-accent/10', 'text-accent');
      chip.classList.remove('border-white/10', 'text-zinc-500', 'bg-white/5');

      const filter = chip.dataset.filter; // Removed .toLowerCase() here for precise matching if topics are mixed case, or handle uniformly

      // Animate Filter
      cards.forEach(card => {
        const techStr = card.dataset.tech;
        const techs = techStr.split(',');
        // Case insensitive match
        const shouldShow = filter === 'all' || techs.some(t => t.toLowerCase() === filter.toLowerCase());

        if (shouldShow) {
          card.classList.remove('hidden');
          gsap.to(card, { opacity: 1, scale: 1, duration: 0.4, display: 'block' });
        } else {
          gsap.to(card, {
            opacity: 0, scale: 0.9, duration: 0.3, onComplete: () => {
              card.classList.add('hidden');
            }
          });
        }
      });
    });
  });

  // 6. Modal Logic
  const modal = document.getElementById('projectModal');
  const overlay = document.getElementById('modalOverlay');
  const content = document.getElementById('modalContent');
  const closeBtn = document.getElementById('closeModal');

  // Prevent GitHub button from opening modal (stop propagation helper)
  window.openLink = (url) => {
    window.open(url, '_blank');
  };

  // Card Click -> Open Modal
  grid.addEventListener('click', (e) => {
    // If clicked on "stop-propagation" elements, ignore
    if (e.target.closest('.stop-propagation')) return;

    const card = e.target.closest('.project-card');
    if (!card) return;

    const id = parseInt(card.dataset.id);
    const project = detailedProjects.find(p => p.id === id);

    if (project) {
      populateModal(project);
      openModal();
    }
  });

  // Close Logic
  const closeModalHandler = () => {
    overlay.classList.remove('opacity-100');
    content.classList.remove('scale-100', 'opacity-100');
    content.classList.add('scale-95', 'opacity-0');
    setTimeout(() => {
      modal.classList.add('hidden');
    }, 300);
  };

  closeBtn.addEventListener('click', closeModalHandler);
  overlay.addEventListener('click', closeModalHandler);
  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModalHandler();
    }
  });

  const openModal = () => {
    modal.classList.remove('hidden');
    // Force Reflow
    void modal.offsetWidth;

    overlay.classList.add('opacity-100');
    content.classList.remove('scale-95', 'opacity-0');
    content.classList.add('scale-100', 'opacity-100');
  };

  const populateModal = (p) => {
    document.getElementById('mImage').src = p.image;
    document.getElementById('mTitle').textContent = p.title;
    document.getElementById('mRole').textContent = p.role;
    document.getElementById('mProblem').textContent = p.problem || "Information retrieved from GitHub repository.";
    document.getElementById('mSolution').textContent = p.solution || "Explore the source code to understand the implementation.";
    document.getElementById('mDemo').href = p.demoUrl || '#';
    document.getElementById('mRepo').href = p.repoUrl;

    // Status
    document.getElementById('mStatus').innerHTML = StatusBadge(p.status);

    // Features list
    document.getElementById('mFeatures').innerHTML = (p.features || ["GitHub Integration", "Open Source"]).map(f => `
         <li class="flex items-start gap-2 text-xs text-zinc-400">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-accent mt-0.5" viewBox="0 0 256 256"><path fill="currentColor" d="M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"></path></svg> ${f}
         </li>
      `).join('');

    // Tech Stack
    document.getElementById('mTech').innerHTML = p.tech.map(t => `
         <span class="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-zinc-300 font-mono">
           ${t}
         </span>
      `).join('');
  };
};
