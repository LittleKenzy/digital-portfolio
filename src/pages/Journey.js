import { DataService } from '../services/data.js';
import gsap from 'gsap';

export const Journey = () => {
  const timeline = DataService.getJourneyTimeline();
  const stories = DataService.getJourneyStories();

  // Reverse timeline to show latest first? User typically reads top-down. 
  // Let's keep chronological order 2021 -> 2024 for "Growth" story.

  return `
    <div class="flex-1 p-6 md:p-12 overflow-y-auto w-full animate-fade-in relative space-y-24 pb-20">
      <div class="max-w-5xl mx-auto space-y-24">
      
      <!-- Hero Section -->
      <section class="text-center relative py-10">
         <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/20 rounded-full blur-[100px] -z-10"></div>
         <h1 class="text-4xl md:text-6xl font-bold font-space text-text-main mb-4 tracking-tight">My Journey</h1>
         <p class="text-text-muted text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
           It wasn't a straight line. It was full of bugs, broken layouts, and "aha!" moments. Here is how I got here.
         </p>
      </section>

      <!-- Interactive Timeline -->
      <section class="relative max-w-3xl mx-auto">
         <!-- Vertical Line -->
         <div class="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent/0 via-accent/50 to-accent/0"></div>

         <div class="space-y-12">
           ${timeline.map((item, index) => {
    const isLeft = index % 2 === 0;
    return `
               <div class="relative flex md:justify-between group timeline-item">
                 <!-- Dot -->
                 <div class="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-card-bg border-4 border-accent shadow-[0_0_10px_rgba(34,197,94,0.5)] z-10 mt-1.5 transition-transform group-hover:scale-125"></div>

                 <!-- Content Wrapper (Mobile: Always Left padded, Desktop: Alternating) -->
                 <div class="ml-12 md:ml-0 md:w-[45%] ${isLeft ? 'md:mr-auto md:text-right' : 'md:ml-auto md:text-left'}">
                   <div class="p-5 bg-card-bg border border-border-subtle rounded-xl subtle-shadow hover:border-accent/40 transition-colors relative group-hover:-translate-y-1 duration-300">
                      <span class="inline-block px-3 py-1 rounded text-[10px] font-bold bg-accent/10 text-accent mb-2 font-mono">${item.year}</span>
                      <h3 class="text-lg font-bold text-text-main mb-2">${item.title}</h3>
                      <p class="text-sm text-text-muted leading-relaxed">${item.desc}</p>
                   </div>
                 </div>
               </div>
             `;
  }).join('')}
         </div>
      </section>

      <!-- Stories Grid -->
      <section>
        <h2 class="text-2xl font-bold font-space mb-8 text-center text-text-main">Behind The Code</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
           ${stories.map(story => `
             <div class="story-card p-6 bg-card-bg/50 border border-border-subtle rounded-xl hover:bg-card-bg transition-all hover:shadow-lg">
                <h3 class="text-accent font-bold font-space text-lg mb-3">${story.title}</h3>
                <p class="text-text-muted text-sm leading-relaxed">"${story.content}"</p>
             </div>
           `).join('')}
        </div>
      </section>

      <!-- Current Focus -->
      <section class="bg-gradient-to-r from-card-bg to-transparent border-t border-b border-border-subtle p-8 py-12 text-center">
         <p class="text-xs font-bold text-text-muted uppercase tracking-widest mb-4">Current Focus</p>
         <div class="flex flex-wrap justify-center gap-4">
            <span class="px-6 py-2 rounded-full border border-gray-700 bg-gray-800/50 text-gray-300 text-sm">System Design</span>
            <span class="px-6 py-2 rounded-full border border-accent/30 bg-accent/5 text-accent text-sm font-bold shadow-[0_0_15px_rgba(34,197,94,0.1)]">Advanced React Patterns</span>
            <span class="px-6 py-2 rounded-full border border-gray-700 bg-gray-800/50 text-gray-300 text-sm">Backend Security</span>
         </div>
      </section>

      <!-- Quote -->
      <section class="text-center py-10">
        <blockquote class="text-2xl md:text-3xl font-space font-bold text-text-main max-w-3xl mx-auto leading-tight">
          "The only way to do great work is to love what you do."
        </blockquote>
        <cite class="block mt-4 text-text-muted not-italic text-sm">- Steve Jobs (My inspiration)</cite>
      </section>

      </div>
    </div>
  `;
};

export const afterRenderJourney = () => {
  // Simple animations without external plugins
  setTimeout(() => {
    gsap.from('.timeline-item', {
      y: 30,
      opacity: 0,
      stagger: 0.2,
      duration: 0.8,
      clearProps: "all" // Ensure cleanup
    });

    gsap.from('.story-card', {
      y: 30,
      opacity: 0,
      stagger: 0.1,
      duration: 0.8,
      delay: 0.4,
      clearProps: "all"
    });
  }, 100); // Small delay to ensure DOM paint
};
