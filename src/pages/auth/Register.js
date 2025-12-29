import { AuthService } from '../../services/auth.js';
import gsap from 'gsap';

export const Register = () => {
  return `
   <div class="min-h-screen w-full flex items-center justify-center relative bg-main-bg overflow-hidden animate-fade-in">
      <div id="registerCard" class="relative z-10 w-full max-w-sm p-8 bg-card-bg rounded-xl border border-border-subtle subtle-shadow transform opacity-0 translate-y-4">
        <div class="text-center mb-8">
          <div class="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-accent text-white font-bold mb-4">K</div>
          <h2 class="text-2xl font-bold font-space text-text-main mb-1">Create Account</h2>
          <p class="text-text-muted text-xs">Join the workspace</p>
        </div>

        <form id="registerForm" class="space-y-4">
           <div class="space-y-1">
            <label class="text-[10px] uppercase tracking-widest text-text-muted font-bold">Username</label>
            <div class="relative">
              <i class="ph-user text-text-muted absolute left-3 top-3 text-base"></i>
              <input type="text" id="username" required class="w-full bg-main-bg border border-border-subtle rounded-lg py-2.5 pl-9 pr-4 focus:outline-none focus:border-accent transition-all text-text-main placeholder-text-muted text-sm" placeholder="Kenzy123">
            </div>
          </div>

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
            Sign Up
          </button>
        </form>

        <p class="mt-8 text-center text-xs text-text-muted">
          Already have an account? <a href="#/login" class="text-accent hover:text-white transition-colors font-bold">Log In</a>
        </p>
      </div>
    </div>
  `;
};

export const afterRenderRegister = () => {
  gsap.to('#registerCard', { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" });

  const form = document.getElementById('registerForm');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
      await AuthService.register(username, email, password);
      // Auto login after register
      await AuthService.login(email, password);

      gsap.to('#registerCard', {
        scale: 0.95, opacity: 0, duration: 0.3, onComplete: () => {
          window.location.hash = '#/';
        }
      });
    } catch (err) {
      alert(err.message);
      gsap.from('#registerCard', { x: 10, duration: 0.1, repeat: 5, yoyo: true });
    }
  });
};
