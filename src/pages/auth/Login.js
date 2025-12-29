import { AuthService } from '../../services/auth.js';
import gsap from 'gsap';

export const Login = () => {
  return `
    <div class="min-h-screen w-full flex items-center justify-center relative bg-main-bg overflow-hidden animate-fade-in">
      <div id="loginCard" class="relative z-10 w-full max-w-sm p-8 bg-card-bg rounded-xl border border-border-subtle subtle-shadow transform opacity-0 translate-y-4">
        <div class="text-center mb-8">
          <div class="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-accent text-white font-bold mb-4">K</div>
          <h2 class="text-2xl font-bold font-space text-text-main mb-1">Welcome Back</h2>
          <p class="text-text-muted text-xs">Login to access your workspace</p>
        </div>

        <form id="loginForm" class="space-y-5">
          <div class="space-y-1">
            <label class="text-[10px] uppercase tracking-widest text-text-muted font-bold">Email</label>
            <div class="relative">
              <i class="ph-at text-text-muted absolute left-3 top-3 text-base"></i>
              <input type="email" id="email" required class="w-full bg-main-bg border border-border-subtle rounded-lg py-2.5 pl-9 pr-4 focus:outline-none focus:border-accent transition-all text-text-main placeholder-text-muted text-sm" placeholder="user@example.com">
            </div>
          </div>
          
          <div class="space-y-1">
            <label class="text-[10px] uppercase tracking-widest text-text-muted font-bold">Password</label>
            <div class="relative">
              <i class="ph-lock-key text-text-muted absolute left-3 top-3 text-base"></i>
              <input type="password" id="password" required class="w-full bg-main-bg border border-border-subtle rounded-lg py-2.5 pl-9 pr-4 focus:outline-none focus:border-accent transition-all text-text-main placeholder-text-muted text-sm" placeholder="••••••••">
            </div>
          </div>

          <button type="submit" class="w-full py-2.5 rounded-lg bg-accent text-white font-bold font-space text-sm tracking-wide hover:bg-accent-hover transform hover:-translate-y-0.5 transition-all duration-200">
            Sign In
          </button>
        </form>

        <div class="mt-6 flex items-center justify-between gap-4">
           <hr class="flex-1 border-border-subtle">
           <span class="text-[10px] text-text-muted">OR</span>
           <hr class="flex-1 border-border-subtle">
        </div>

        <div class="mt-5 flex gap-3">
          <button class="flex-1 py-2 rounded-lg border border-border-subtle hover:bg-white/5 transition-colors flex items-center justify-center gap-2 text-text-muted hover:text-text-main text-xs">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 256 256"><path fill="currentColor" d="M224,128a96,96,0,1,1-21.95-61.09,8,8,0,1,1-12.33,10.18A80,80,0,1,0,206.84,136H128a8,8,0,0,1,0-16h88A8,8,0,0,1,224,128Z"></path></svg> Google
          </button>
          <button class="flex-1 py-2 rounded-lg border border-border-subtle hover:bg-white/5 transition-colors flex items-center justify-center gap-2 text-text-muted hover:text-text-main text-xs">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 256 256"><path fill="currentColor" d="M208.31,75.68A59.78,59.78,0,0,0,202.93,28,8,8,0,0,0,194,24a59.75,59.75,0,0,0-49,24H112A59.75,59.75,0,0,0,62,24a8,8,0,0,0-8.85,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v12a56.06,56.06,0,0,0,48.44,55.49A32,32,0,0,0,96,192v32H64a24,24,0,0,1-24-24V188.5a12.35,12.35,0,0,0-3.14-8.31l-10-10.91A8,8,0,0,0,10.15,177.3l29.17,14.59A12,12,0,0,1,45,200v20a24,24,0,0,1,24,24h58.33A2.68,2.68,0,0,0,128,244h0a2.68,2.68,0,0,0,.67,0H160a24,24,0,0,1,24-24V192a32,32,0,0,0-8.44-20.51A56.06,56.06,0,0,0,224,116V104A58.14,58.14,0,0,0,208.31,75.68ZM208,116a40,40,0,0,1-40,40H88a40,40,0,0,1-40-40V104a42,42,0,0,1,6-21.35,8,8,0,0,0-.92-8.5,44,44,0,0,1-5.35-26.65c.57-2.35,1.44-4.87,2.5-7.46.33-.82.68-1.63,1-2.42a44,44,0,0,1,23.11,15,8,8,0,0,0,8.81,2.07,43.59,43.59,0,0,1,16.89,0,44.91,44.91,0,0,1,15.68-5.71,8,8,0,0,0,7-6.27,43.49,43.49,0,0,1,18.79,0,8,8,0,0,0,7,6.27,44.91,44.91,0,0,1,15.68,5.71,43.59,43.59,0,0,1,16.89,0,8,8,0,0,0,8.81-2.07,44,44,0,0,1,23.11-15c.35.79.69,1.6,1,2.42,1.06,2.59,1.93,5.11,2.5,7.46a44,44,0,0,1-5.35,26.65,8,8,0,0,0-.92,8.5A42,42,0,0,1,208,104Z"></path></svg> GitHub
          </button>
        </div>

        <p class="mt-8 text-center text-xs text-text-muted">
          New here? <a href="#/register" class="text-accent hover:text-white transition-colors font-bold">Create Account</a>
        </p>
      </div>
    </div>
  `;
};

export const afterRenderLogin = () => {
  // Animation
  gsap.to('#loginCard', { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" });

  const form = document.getElementById('loginForm');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
      await AuthService.login(email, password);
      // Success Animation before redirect
      gsap.to('#loginCard', {
        scale: 0.95, opacity: 0, duration: 0.3, onComplete: () => {
          window.location.hash = '#/dashboard';
        }
      });
    } catch (err) {
      alert(err.message); // Replace with Toast later
      gsap.from('#loginCard', { x: 10, duration: 0.1, repeat: 5, yoyo: true }); // Shake effect
    }
  });

  // Social Login Handlers
  const googleBtn = document.querySelector('button:has(svg path[d*="M224"])'); // Find by SVG path content or add IDs in template
  const githubBtn = document.querySelector('button:has(svg path[d*="M208"])');

  if (googleBtn) {
    googleBtn.addEventListener('click', async () => {
      try {
        googleBtn.classList.add('opacity-50', 'cursor-not-allowed');
        await AuthService.loginWithGoogle();
        gsap.to('#loginCard', {
          scale: 0.95, opacity: 0, duration: 0.3, onComplete: () => {
            window.location.hash = '#/dashboard';
          }
        });
      } catch (e) {
        alert('Google Login Failed');
      }
    });
  }

  if (githubBtn) {
    githubBtn.addEventListener('click', async () => {
      try {
        githubBtn.classList.add('opacity-50', 'cursor-not-allowed');
        await AuthService.loginWithGitHub();
        gsap.to('#loginCard', {
          scale: 0.95, opacity: 0, duration: 0.3, onComplete: () => {
            window.location.hash = '#/dashboard';
          }
        });
      } catch (e) {
        alert('GitHub Login Failed');
      }
    });
  }
};
