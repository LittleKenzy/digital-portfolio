export class Router {
  constructor(routes) {
    this.routes = routes;
    this.app = document.getElementById('app');
    window.addEventListener('hashchange', () => this.handleRoute());
    window.addEventListener('load', () => this.handleRoute());
  }

  async handleRoute() {
    const hash = window.location.hash.slice(1) || '/';
    // Find matching route or default to 404/home
    const route = this.routes[hash] || this.routes['/404'] || this.routes['/'];
    
    if (route) {
      if (route.protected && !localStorage.getItem('user_session')) {
        window.location.hash = '/login';
        return;
      }
      
      this.app.innerHTML = ''; // Clear current content
      const content = await route.render();
      
      // If content is a string, set innerHTML
      if (typeof content === 'string') {
        this.app.innerHTML = content;
      } else if (content instanceof HTMLElement) {
        this.app.appendChild(content);
      }
      
      // Allow post-render scripts (animations etc)
      if (route.afterRender) route.afterRender();
    }
  }

  navigate(path) {
    window.location.hash = path;
  }
}
