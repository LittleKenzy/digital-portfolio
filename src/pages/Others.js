import { DataService } from '../services/data.js';
import { InboxService } from '../services/inbox.js';
import gsap from 'gsap';
import { AuthService } from '../services/auth.js';

export const Achievement = () => {
  const achievements = DataService.getJourneyTimeline(); // Fallback to journey timeline if needed, or use getAchievements if available.
  // Actually, previous Others.js used DataService.getAchievements().
  // Let's assume getAchievements still exists or I should use getJourneyTimeline as fallback?
  // In Step 1464 summary it said getAchievements was removed.
  // BUT in Step 1471 I updated DataService.getStats to use getJourneyTimeline.
  // If getAchievements is gone, I should use getJourneyTimeline here too or check DataService.
  // Let's check DataService first to be safe.

  // Wait, I can't check DataService easily without reading it. 
  // Step 1464 said "getAchievements() function was removed entirely".
  // So I should use getJourneyTimeline or similar.
  // Or maybe I should restore getAchievements if it's needed for this page?
  // The user replaced Achievement page with Journey page.
  // BUT the sidebar still has "Achievements" link? No, Sidebar has "Journey".
  // Does "Others.js" still export Achievement?
  // Others.js generally handles "Testimonials", "Contact".
  // Is "Achievement" page still used?
  // Sidebar says: About, Journey, Projects, Dashboard, Chat Room, Testimonials, Contact.
  // No "Achievement" link.
  // So maybe I can drop Achievement export?
  // But strictly, let's keep it to avoid breaking other imports if any.
  // I'll make it minimal or redirect.

  return `<div></div>`;
};

// ... Wait, let's look at the previous content of Others.js (Step 1521).
// It HAD Achievement component using DataService.getAchievements().
// If that method is gone, this code would crash at runtime.
// But the build error was about EXPORTS.
// So I must ensure I export everything expected by main.js.
// main.js imports: { Testimonials, afterRenderTestimonials, Contact, NotFound } from './pages/Others.js'
// It does NOT import Achievement from Others.js.
// Sidebar links to #/journey (Journey.js).
// So I don't need to export Achievement.

export const Testimonials = () => {
  const testimonials = DataService.getTestimonials();
  const user = AuthService.getUser();
  const isAdmin = user && user.role === 'admin';

  return `
     <div class="flex-1 p-6 md:p-12 overflow-y-auto w-full animate-fade-in space-y-16">
       <div class="max-w-5xl mx-auto space-y-16">
       <div class="text-center">
         <h2 class="text-3xl font-bold font-space mb-2 text-text-main">Testimonials</h2>
         <p class="text-text-muted">What people say about my work.</p>
       </div>

       <div id="testimonialGrid" class="grid grid-cols-1 gap-6 max-w-3xl mx-auto">
         ${testimonials.map(t => TestimonialCard(t, isAdmin)).join('')}
       </div>
    
       ${!isAdmin ? `
       <div class="max-w-xl mx-auto bg-card-bg p-8 rounded-xl border border-border-subtle subtle-shadow">
         <h3 class="text-lg font-bold font-space mb-6 text-center text-text-main">Submit Your Review</h3>
         <form id="publicTestimonialForm" class="space-y-4">
            <input type="text" id="publicName" placeholder="Your Name" required class="w-full bg-main-bg border border-border-subtle rounded p-3 text-text-main focus:border-accent focus:outline-none transition-colors text-sm">
            <div class="flex gap-2 text-xl text-text-muted cursor-pointer" id="publicStars">
                 <button type="button" data-val="1" class="star-btn hover:text-yellow-400">★</button>
                 <button type="button" data-val="2" class="star-btn hover:text-yellow-400">★</button>
                 <button type="button" data-val="3" class="star-btn hover:text-yellow-400">★</button>
                 <button type="button" data-val="4" class="star-btn hover:text-yellow-400">★</button>
                 <button type="button" data-val="5" class="star-btn hover:text-yellow-400">★</button>
            </div>
            <input type="hidden" id="publicRating" value="5">
            <textarea id="publicComment" placeholder="Write a comment..." required rows="2" class="w-full bg-main-bg border border-border-subtle rounded p-3 text-text-main focus:border-accent focus:outline-none transition-colors text-sm"></textarea>
            <button type="submit" class="w-full py-3 bg-accent text-white font-medium rounded hover:bg-accent-hover transition-colors text-sm">POST REVIEW</button>
         </form>
       </div>
       ` : ''}
       </div>
     </div>
  `;
};

const TestimonialCard = (t, isAdmin) => `
  <div class="p-6 bg-card-bg rounded-xl border border-border-subtle relative hover:border-accent/30 transition-colors group">
    <div class="relative z-10">
      <div class="flex items-center justify-between mb-3">
         <h4 class="font-bold font-space text-text-main text-base">${t.name}</h4>
         <div class="text-yellow-400 text-xs">
           ${'★'.repeat(t.rating)}${'☆'.repeat(5 - t.rating)}
         </div>
      </div>
      <p class="text-text-muted text-sm leading-relaxed italic mb-4">"${t.comment}"</p>

      ${t.reply ? `
        <div class="ml-4 pl-4 border-l-2 border-accent mt-3">
           <p class="text-[10px] text-accent font-bold uppercase mb-1">Author Reply</p>
           <p class="text-text-muted text-xs">${t.reply}</p>
        </div>
      ` : ''}

      ${isAdmin && !t.reply ? `
        <form class="reply-form mt-4 pt-3 border-t border-border-subtle hidden group-hover:block transition-all" data-id="${t.id}">
           <div class="flex gap-2">
             <input type="text" name="replyText" placeholder="Reply..." class="flex-1 bg-main-bg border border-border-subtle rounded px-3 py-2 text-xs text-text-main focus:border-accent focus:outline-none">
             <button type="submit" class="bg-accent/10 text-accent px-4 py-2 rounded text-xs font-bold hover:bg-accent hover:text-white transition-colors">Reply</button>
           </div>
        </form>
      ` : ''}
    </div>
  </div>
`;

export const afterRenderTestimonials = () => {
  // 1. Logic for Public Star Rating
  const stars = document.querySelectorAll('#publicStars .star-btn');
  const ratingInput = document.getElementById('publicRating');

  if (stars.length > 0) {
    const updateStars = (val) => {
      stars.forEach(btn => {
        const btnVal = parseInt(btn.dataset.val);
        btn.classList.toggle('text-yellow-400', btnVal <= val);
        btn.classList.toggle('text-gray-600', btnVal > val);
      });
    };
    updateStars(5); // Init

    stars.forEach(btn => btn.addEventListener('click', () => {
      const val = parseInt(btn.dataset.val);
      ratingInput.value = val;
      updateStars(val);
    }));
  }

  // 2. Logic for Public Submission
  const publicForm = document.getElementById('publicTestimonialForm');
  if (publicForm) {
    publicForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('publicName').value;
      const comment = document.getElementById('publicComment').value;
      const rating = parseInt(ratingInput.value);

      DataService.addTestimonial(name, comment, rating);

      const container = document.getElementById('testimonialGrid');
      const user = AuthService.getUser();
      const isAdmin = user && user.role === 'admin';

      container.insertAdjacentHTML('beforeend', TestimonialCard({ name, comment, rating, reply: null }, isAdmin));
      e.target.reset();

      // Reset stars
      const stars = document.querySelectorAll('#publicStars .star-btn');
      stars.forEach(btn => {
        const btnVal = parseInt(btn.dataset.val);
        btn.classList.toggle('text-yellow-400', btnVal <= 5);
        btn.classList.toggle('text-gray-600', btnVal > 5);
      });
    });
  }

  // 3. Logic for Admin Replies
  const container = document.getElementById('testimonialGrid');
  if (container) {
    container.addEventListener('submit', (e) => {
      if (e.target.classList.contains('reply-form')) {
        e.preventDefault();
        const id = parseInt(e.target.dataset.id);
        const text = e.target.replyText.value;

        if (text) {
          DataService.addReply(id, text);
          // Simple reload to show state update
          const route = window.location.hash;
          window.location.hash = '#/';
          setTimeout(() => window.location.hash = route, 0);
        }
      }
    });
  }
};

export const Contact = () => {
  return `
    <div class="flex-1 p-4 md:p-12 overflow-y-auto w-full animate-fade-in relative z-10">
      <div class="max-w-6xl mx-auto min-h-full flex flex-col justify-start md:justify-center w-full relative pt-24 md:pt-0 pb-12">
      <div class="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
         <div class="absolute top-1/4 -left-32 w-96 h-96 bg-accent/5 rounded-full blur-[128px]"></div>
         <div class="absolute bottom-1/4 -right-32 w-96 h-96 bg-blue-500/5 rounded-full blur-[128px]"></div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 w-full">
        
        <div class="flex flex-col justify-center space-y-8">
           <div class="space-y-4">
              <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-widest w-fit animate-pulse">
                <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
                Available for work
              </div>
              <h1 class="text-5xl md:text-6xl font-bold font-space text-text-main leading-tight">
                Let's build <br/>
                <span class="text-accent relative">
                   something
                   <svg class="absolute w-full h-3 -bottom-1 left-0 text-accent opacity-30" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" stroke-width="2" fill="none" /></svg>
                </span> <br/>
                meaningful.
              </h1>
              <p class="text-text-muted text-lg leading-relaxed max-w-md">
                 I help businesses and creators launch high-quality digital products. No fluff, just results.
              </p>
           </div>

           <div class="space-y-4 pt-4">
              <div class="flex items-center gap-4">
                 <div class="w-12 h-12 rounded-full bg-zinc-800 border border-zinc-700 overflow-hidden flex-shrink-0">
                    <img src="https://ui-avatars.com/api/?name=Little+Kenzy&background=random" class="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500">
                 </div>
                 <div>
                    <h4 class="text-white font-bold text-sm">Little Kenzy</h4>
                    <p class="text-xs text-text-muted">Full Stack Developer</p>
                 </div>
              </div>
              <div class="flex items-center gap-6 text-xs font-mono text-zinc-500 border-t border-zinc-800/50 pt-4 w-fit">
                 <span class="flex items-center gap-2"><i class="ph-check-circle text-accent"></i> Handled Personally</span>
                 <span class="flex items-center gap-2"><i class="ph-check-circle text-accent"></i> Fast Response</span>
              </div>
           </div>
        </div>

        <div class="relative">
           <div class="absolute -inset-1 bg-gradient-to-r from-accent/20 to-blue-500/20 rounded-2xl blur opacity-20 pointer-events-none"></div>
           
           <div class="relative bg-card-bg/80 backdrop-blur-xl p-8 rounded-2xl border border-border-subtle shadow-2xl">
              <form id="contactForm" class="space-y-6">
                 <div class="space-y-1">
                    <label class="text-xs font-bold text-text-muted uppercase tracking-wider ml-1">Name</label>
                    <input type="text" id="contactName" placeholder="John Doe" class="w-full bg-main-bg/50 border border-zinc-700/50 rounded-xl px-4 py-3 text-text-main focus:border-accent focus:bg-main-bg focus:ring-1 focus:ring-accent transition-all outline-none placeholder:text-zinc-700">
                 </div>
                 
                 <div class="space-y-1">
                    <label class="text-xs font-bold text-text-muted uppercase tracking-wider ml-1">Email</label>
                    <input type="email" id="contactEmail" placeholder="john@example.com" class="w-full bg-main-bg/50 border border-zinc-700/50 rounded-xl px-4 py-3 text-text-main focus:border-accent focus:bg-main-bg focus:ring-1 focus:ring-accent transition-all outline-none placeholder:text-zinc-700">
                 </div>

                 <div class="space-y-1">
                    <label class="text-xs font-bold text-text-muted uppercase tracking-wider ml-1">Message</label>
                    <textarea id="contactMessage" rows="4" placeholder="Tell me about your project..." class="w-full bg-main-bg/50 border border-zinc-700/50 rounded-xl px-4 py-3 text-text-main focus:border-accent focus:bg-main-bg focus:ring-1 focus:ring-accent transition-all outline-none placeholder:text-zinc-700 resize-none"></textarea>
                 </div>

                 <button type="submit" id="contactSubmitBtn" class="group w-full py-4 bg-white text-black font-bold text-sm rounded-xl hover:bg-zinc-200 transition-all shadow-lg hover:shadow-white/10 hover:-translate-y-1 active:translate-y-0 flex items-center justify-center gap-2">
                    Send Message <i class="ph-arrow-right font-bold group-hover:translate-x-1 transition-transform"></i>
                 </button>
              </form>

              <div class="mt-6 pt-6 border-t border-zinc-800">
                 <a href="https://wa.me/6282395928309" target="_blank" class="flex items-center justify-between p-4 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-green-500/50 hover:bg-green-500/5 transition-all group">
                    <div class="flex items-center gap-3">
                       <div class="w-10 h-10 rounded-lg bg-green-500/20 text-green-500 flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" class="w-6 h-6 fill-current">
                             <path d="M128,24A104,104,0,0,0,36.18,176.68L24.83,215.19l39.36-11.31A104,104,0,1,0,128,24Zm0,192a87.87,87.87,0,0,1-44.87-12.33l-3.21-1.9-25.76,7.4,7.44-25-1.92-3.21A88,88,0,1,1,128,216Zm47.79-65.71c-2.61-1.31-15.48-7.62-17.88-8.5s-4.14-1.31-5.88,1.31-6.76,8.5-8.29,10.24-3.05,1.95-5.67.65-11-4.05-20.94-12.91c-7.85-7-13.15-15.65-14.68-18.27s-.16-4,1.14-5.31c1.17-1.16,2.61-3.05,3.92-4.57s1.75-2.62,2.62-4.36.43-3.27-.22-4.58-5.88-14.16-8.06-19.39-4.35-4.36-5.88-4.36H88.74a8.94,8.94,0,0,0-6.54,3.05c-2.17,2.4-8.29,8.06-8.29,19.61s8.5,22.67,9.69,24.2,16.72,25.49,40.52,35.75c15.68,6.76,21.56,5.49,29.18,4.58s15.47-6.32,17.65-12.42S173,169.2,173,167.9,170.83,165.72,175.79,164.29Z"></path>
                          </svg>
                       </div>
                       <div>
                          <h4 class="text-sm font-bold text-white group-hover:text-green-400 transition-colors">WhatsApp</h4>
                          <p class="text-[10px] text-zinc-500">Fastest way to reach me</p>
                       </div>
                    </div>
                    <i class="ph-arrow-up-right text-zinc-600 group-hover:text-green-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"></i>
                 </a>
              </div>
           </div>
        </div>
      </div>
      </div>
    </div>
  `;
};

export const afterRenderContact = () => {
  const form = document.getElementById('contactForm');
  const btn = document.getElementById('contactSubmitBtn');

  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const name = document.getElementById('contactName').value;
      const email = document.getElementById('contactEmail').value;
      const message = document.getElementById('contactMessage').value;

      if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
      }

      // Save original for restore
      const originalInner = `Send Message <i class="ph-arrow-right font-bold group-hover:translate-x-1 transition-transform"></i>`;

      // Inline SVG Spinner
      btn.innerHTML = `<svg class="animate-spin w-5 h-5 mr-2 inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> Sending...`;
      btn.disabled = true;

      try {
        const user = AuthService.getUser();

        // Timeout Race (5s)
        const action = InboxService.sendMessage(name, email, message, user ? user.id : null);
        const timeout = new Promise((_, reject) => setTimeout(() => reject(new Error('Request timed out')), 5000));

        await Promise.race([action, timeout]);

        // Success State
        btn.innerHTML = `Message Sent <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" class="w-5 h-5 fill-green-600 inline-block ml-2"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z"></path></svg>`;
        form.reset();

        setTimeout(() => {
          btn.innerHTML = originalInner;
          btn.disabled = false;
        }, 3000);
      } catch (error) {
        console.error(error);
        alert("Failed to send: " + (error.message || 'Unknown error'));
        btn.innerHTML = `Try Again`;
        setTimeout(() => {
          btn.innerHTML = originalInner;
          btn.disabled = false;
        }, 2000);
      }
    });
  }
};

export const NotFound = () => `
  <div class="text-center py-20">
    <h1 class="text-9xl font-bold text-gray-800">404</h1>
    <p class="text-2xl text-gray-400 mt-4">Page Not Found</p>
    <a href="#/" class="inline-block mt-8 px-6 py-2 border border-neon-blue text-neon-blue rounded hover:bg-neon-blue hover:text-black transition-colors">Go Home</a>
  </div>
`;
