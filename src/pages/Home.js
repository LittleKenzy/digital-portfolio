import gsap from 'gsap';

export const Home = () => {
  // --- MUSIC CONFIGURATION ---
  const spotifyConfig = {
    title: "BROOOO😱",
    artist: "Spotify Playlist",
    cover: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?q=80&w=200&auto=format&fit=crop", // Spotify-themed cover
    link: "https://open.spotify.com/playlist/3b7vbqeocVdpo1a4KiStIP"
  };

  return `
    <div class="flex-1 p-6 md:p-12 overflow-y-auto space-y-16 pb-12">
      <!-- Hero Section -->
      <section class="max-w-4xl pt-10">
         <p class="text-accent font-medium tracking-wide mb-4 text-sm animate-fade-in">HELLO WORLD, I AM</p>
         <h1 class="text-5xl md:text-7xl font-bold font-space text-text-main mb-6 leading-tight animate-slide-up">
           LITTLE KENZY
         </h1>
         <p class="text-xl text-text-muted max-w-2xl leading-relaxed mb-8 animate-slide-up" style="animation-delay: 0.1s;">
           A high-school developer crafting digital experiences. Specializing in <span class="text-white font-medium">Software Engineering</span>.
         </p>
         
         <div class="flex gap-4 reveal-buttons relative z-50 animate-slide-up" style="animation-delay: 0.2s;">
           <a href="#/projects" class="px-6 py-3 bg-white text-black font-medium rounded-lg hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-sm">
             View Work
           </a>
           <a href="#/contact" class="px-6 py-3 border border-border-subtle text-text-main rounded-lg hover:bg-white/5 transition-all duration-300 text-sm">
             Contact Me
           </a>
         </div>
      </section>

      <!-- About / Skills -->
    <section class="grid md:grid-cols-2 gap-8 items-start">

      <div class="space-y-8">
        <!-- About Me -->
        <div class="bg-card-bg p-8 rounded-xl border border-border-subtle subtle-shadow card-hover">
          <h3 class="text-xl font-bold font-space mb-4 text-text-main">About Me</h3>
          <p class="text-text-muted leading-relaxed mb-4 text-sm">
            I am a student at <strong class="text-white">SMKN 2 BUDURAN</strong> majoring in Software Engineering (RPL).
            I prioritize clean architecture and user-centric design.
          </p>
          <div class="flex gap-2 mt-6">
            <span class="px-3 py-1 bg-white/5 rounded-full text-xs text-text-muted border border-border-subtle">RPL Student</span>
            <span class="px-3 py-1 bg-white/5 rounded-full text-xs text-text-muted border border-border-subtle">Web Dev</span>
          </div>
        </div>

        <!-- Spotify Style Widget -->
        <a href="${spotifyConfig.link}" target="_blank" class="block bg-[#121212] p-6 rounded-xl border border-[#282828] subtle-shadow group relative overflow-hidden transition-all duration-300 hover:border-[#1DB954]/50 hover:-translate-y-1 cursor-pointer">
            <!-- Hover Glow -->
            <div class="absolute -inset-1 bg-gradient-to-r from-[#1DB954]/20 to-emerald-900/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
            
            <div class="relative z-10">
                <div class="flex items-center justify-between mb-4">
                     <h3 class="text-[10px] font-bold font-space text-[#1DB954] tracking-widest uppercase flex items-center gap-2">
                        <i class="ph-spotify-logo ph-fill text-lg"></i> Spotify
                     </h3>
                     <div class="flex gap-0.5 h-3 items-end opacity-50">
                         <span class="w-1 bg-[#1DB954] rounded-full h-2 animate-music-bar-1"></span>
                         <span class="w-1 bg-[#1DB954] rounded-full h-3 animate-music-bar-2"></span>
                         <span class="w-1 bg-[#1DB954] rounded-full h-1 animate-music-bar-3"></span>
                     </div>
                </div>
                
                <div class="flex items-center gap-4">
                    <div class="w-16 h-16 rounded-lg overflow-hidden relative shadow-lg group-hover:scale-105 transition-transform duration-500 ring-1 ring-white/10">
                       <img src="${spotifyConfig.cover}" alt="Album Art" class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500">
                    </div>
                    <div>
                       <h4 class="text-white font-bold text-sm leading-tight mb-1 group-hover:text-[#1DB954] transition-colors">${spotifyConfig.title}</h4>
                       <p class="text-xs text-zinc-400">${spotifyConfig.artist}</p>
                    </div>
                    <div class="ml-auto">
                        <div class="w-10 h-10 rounded-full bg-[#1DB954] text-black flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-300 shadow-lg hover:bg-[#1ed760]">
                            <i class="ph-play ph-fill text-xl ml-0.5"></i>
                        </div>
                    </div>
                </div>

                <!-- Fake Progress Bar -->
                <div class="mt-5 space-y-1.5 group/progress">
                    <div class="h-1 bg-[#282828] rounded-full overflow-hidden w-full">
                       <div class="h-full bg-white/30 group-hover:bg-[#1DB954] w-1/3 rounded-full relative overflow-hidden">
                           <div class="absolute inset-0 bg-white/20 animate-pulse"></div>
                       </div>
                    </div>
                    <div class="flex justify-between text-[10px] text-zinc-500 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                        <span>0:00</span>
                        <span>ON REPEAT</span>
                    </div>
                </div>
            </div>
        </a>
      </div>

      <div id="tech-stack" class="bg-card-bg p-8 rounded-xl border border-border-subtle subtle-shadow card-hover h-full">
        <h3 class="text-xl font-bold font-space mb-6 text-text-main">Tech Stack</h3>
        <div class="space-y-4">
          ${[
      { name: 'HTML/CSS', level: '90%' },
      { name: 'JavaScript', level: '85%' },
      { name: 'Tailwind CSS', level: '95%' },
      { name: 'React / Vue', level: '70%' },
      { name: 'Node.js', level: '60%' },
      { name: 'Figma', level: '80%' }
    ].map(skill => `
              <div>
                <div class="flex justify-between mb-2">
                  <span class="font-medium text-sm text-text-muted">${skill.name}</span>
                  <span class="text-accent text-xs font-bold">${skill.level}</span>
                </div>
                <div class="h-1.5 bg-border-subtle rounded-full overflow-hidden">
                  <div class="skill-bar h-full bg-accent w-0" data-width="${skill.level}"></div>
                </div>
              </div>
            `).join('')}
        </div>
      </div>
    </section>
    </div>
  `;
};

export const afterRenderHome = () => {
  // 1. Skills Animation
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bars = entry.target.querySelectorAll('.skill-bar');
        gsap.to(bars, {
          width: (i, el) => el.getAttribute('data-width'),
          duration: 1.2,
          ease: "power2.out",
          stagger: 0.1
        });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  const skillsSection = document.getElementById('tech-stack');
  if (skillsSection) observer.observe(skillsSection);
};
