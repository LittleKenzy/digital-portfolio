import '@phosphor-icons/web/regular';
import '@phosphor-icons/web/bold';
import '@phosphor-icons/web/fill';
import './styles/style.css'
import { Router } from './lib/router.js';
import { MainLayout, afterRenderLayout } from './layouts/MainLayout.js';
import { initCursor } from './components/Cursor.js';

// Initialize Custom Cursor
initCursor();

window.addEventListener('error', (e) => {
  document.body.innerHTML += `<div style="position:fixed;top:0;left:0;background:red;color:white;z-index:9999;padding:20px;">Error: ${e.message} at ${e.filename}:${e.lineno}</div>`;
});

// Pages
import { Login, afterRenderLogin } from './pages/auth/Login.js';
import { Register, afterRenderRegister } from './pages/auth/Register.js';
import { Home, afterRenderHome } from './pages/Home.js';
import { Projects, afterRenderProjects } from './pages/Projects.js';
import { Dashboard, afterRenderDashboard } from './pages/Dashboard.js';
import { Chat, afterRenderChat } from './pages/Chat.js';
import { Journey, afterRenderJourney } from './pages/Journey.js';
import { Testimonials, afterRenderTestimonials, Contact, afterRenderContact, NotFound } from './pages/Others.js';
import { Inbox, afterRenderInbox } from './pages/admin/Inbox.js';
import { Notifications, afterRenderNotifications } from './pages/Notifications.js';

const routes = {
  // Auth Routes (No Sidebar)
  '/login': { render: Login, afterRender: afterRenderLogin },
  '/register': { render: Register, afterRender: afterRenderRegister },

  // Main Routes (With Sidebar)
  '/': {
    render: MainLayout(Home),
    afterRender: () => { afterRenderLayout(); afterRenderHome(); }
  },
  '/projects': {
    render: MainLayout(Projects),
    afterRender: () => { afterRenderLayout(); afterRenderProjects(); }
  },
  '/dashboard': {
    render: MainLayout(Dashboard),
    protected: true,
    afterRender: () => { afterRenderLayout(); afterRenderDashboard(); }
  },
  '/chat': {
    render: MainLayout(Chat),
    protected: true,
    afterRender: () => { afterRenderLayout(); afterRenderChat(); }
  },
  '/journey': {
    render: MainLayout(Journey),
    afterRender: () => { afterRenderLayout(); afterRenderJourney(); }
  },
  '/testimonials': {
    render: MainLayout(Testimonials),
    afterRender: () => { afterRenderLayout(); afterRenderTestimonials(); }
  },
  '/contact': {
    render: MainLayout(Contact),
    afterRender: () => { afterRenderLayout(); afterRenderContact(); }
  },
  '/notifications': {
    render: MainLayout(Notifications),
    protected: true,
    afterRender: () => { afterRenderLayout(); afterRenderNotifications(); }
  },
  '/owner/inbox': {
    render: MainLayout(Inbox),
    protected: true,
    afterRender: () => { afterRenderLayout(); afterRenderInbox(); }
  },
  '/404': { render: NotFound }
};

const router = new Router(routes);
