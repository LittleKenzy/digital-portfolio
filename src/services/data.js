export const DataService = {
  getProjects() {
    return [
      {
        id: 1,
        title: "Neon E-Commerce",
        desc: "A futuristic shopping platform with 3D product previews.",
        tech: ["React", "Three.js", "Tailwind"],
        // Neon/Cyberpunk shopping/tech image
        image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: 2,
        title: "AI Chat Bot",
        desc: "Intelligent customer service bot using OpenAI API.",
        tech: ["Python", "Flask", "OpenAI"],
        // Abstract AI/Brain network image
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: 3,
        title: "Crypto Dashboard",
        desc: "Real-time cryptocurrency tracking dashboard.",
        tech: ["Vue", "D3.js", "CoinGecko API"],
        // Financial/Graph image
        image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&fit=crop&w=800&q=80"
      }
    ];
  },

  getJourneyTimeline() {
    return [
      {
        year: "2021",
        title: "The Spark",
        desc: "Wrote my first line of HTML. It was ugly, but it worked. I was hooked immediately."
      },
      {
        year: "2022",
        title: "The Logic Hurdle",
        desc: "Struggled with JavaScript loops and arrays. Almost quit, but pushed through making simple games."
      },
      {
        year: "2023",
        title: "Modern Discovery",
        desc: "Moved from Vanilla JS to React & Tailwind. Realized how much faster development could be."
      },
      {
        year: "2024",
        title: "Full Stack Baby Steps",
        desc: "Started connecting frontends to backends. Learned about APIs, Auth (like in this project!), and Databases."
      }
    ];
  },

  getJourneyStories() {
    return [
      {
        title: "Why I Code",
        content: "It allows me to build tools that solve my own problems. The feeling of 'it works!' never gets old."
      },
      {
        title: "Biggest Mistake",
        content: "Spent 2 weeks building a feature nobody wanted. Learned to ask 'why' before 'how'."
      },
      {
        title: "My Method",
        content: "I learn by breaking things. Tutorials are okay, but fixing my own bugs teaches me 10x more."
      },
      {
        title: "Next Goal",
        content: "Deepening my understanding of efficient Backend systems and scalable architecture."
      }
    ];
  },

  getTestimonials() {
    const defaultTests = [
      {
        id: 1,
        name: "Sarah Doe",
        comment: "Amazing developer! Very fast work.",
        rating: 5,
        reply: "Thank you Sarah! It was a pleasure working with you."
      },
      {
        id: 2,
        name: "John Smith",
        comment: "The design is outstanding.",
        rating: 4,
        reply: null
      }
    ];
    return JSON.parse(localStorage.getItem('lk_testimonials')) || defaultTests;
  },

  addTestimonial(name, comment, rating) {
    const tests = this.getTestimonials();
    tests.push({ id: Date.now(), name, comment, rating, reply: null });
    localStorage.setItem('lk_testimonials', JSON.stringify(tests));
  },

  addReply(testimonialId, replyText) {
    const tests = this.getTestimonials();
    const test = tests.find(t => t.id === testimonialId);
    if (test) {
      test.reply = replyText;
      localStorage.setItem('lk_testimonials', JSON.stringify(tests));
      return true;
    }
    return false;
  },

  // --- GITHUB INTEGRATION ---
  // --- GITHUB INTEGRATION ---
  async fetchGitHubProjects(username = 'LittleKenzy') {
    const CACHE_KEY = `gh_projects_${username}`;
    const CACHE_TIME = 3600000; // 1 Hour

    // 1. Check Cache
    const cached = localStorage.getItem(CACHE_KEY);
    if (cached) {
      const { data, timestamp } = JSON.parse(cached);
      if (Date.now() - timestamp < CACHE_TIME && data.length > 0) {
        return data;
      }
    }

    let mappedProjects = [];

    // 2. Fetch from API
    try {
      const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&direction=desc&type=public`);
      if (response.ok) {
        const repos = await response.json();

        // 3. Filter & Map
        const filteredRepos = repos.filter(repo => !repo.fork).slice(0, 9);

        mappedProjects = filteredRepos.map(repo => {
          let imageUrl = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop"; // Default

          const topics = repo.topics || [];
          const lang = (repo.language || "").toLowerCase();

          if (topics.includes('react') || lang === 'javascript') imageUrl = "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800&auto=format&fit=crop";
          if (topics.includes('vue')) imageUrl = "https://images.unsplash.com/photo-1621504450168-b8c437532b3a?q=80&w=800&auto=format&fit=crop";
          if (topics.includes('python') || topics.includes('ai')) imageUrl = "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop";
          if (topics.includes('css') || topics.includes('design')) imageUrl = "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?q=80&w=800&auto=format&fit=crop";
          if (topics.includes('iot') || topics.includes('arduino')) imageUrl = "https://images.unsplash.com/photo-1558002038-1091a166111c?q=80&w=800&auto=format&fit=crop";

          return {
            id: repo.id,
            title: repo.name.replace(/-/g, ' ').replace(/_/g, ' '),
            role: "Developer",
            status: repo.archived ? "concept" : "live",
            desc: repo.description || "No description provided for this project.",
            image: imageUrl,
            tech: repo.topics && repo.topics.length > 0 ? repo.topics.slice(0, 4) : [repo.language || 'Code'],
            problem: "Project retrieved from GitHub",
            solution: "View source code for details.",
            features: ["Auto-synced from GitHub", "Latest updates", "Open Source"],
            demoUrl: repo.homepage || repo.html_url,
            repoUrl: repo.html_url
          };
        });
      } else {
        console.warn("GitHub API Rate Limit or Error. Status:", response.status);
      }
    } catch (error) {
      console.error("GitHub Fetch Error:", error);
    }

    // 4. FALLBACK: Use local hardcoded projects if API fails or empty
    if (mappedProjects.length === 0) {
      console.warn("Using Fallback Local Projects");
      const hardcoded = this.getProjects().map(p => ({
        ...p,
        role: "Creator",
        status: "live",
        problem: "Premium Local Project",
        solution: "High-quality implementation.",
        features: ["Custom Design", "Responsive", "Interactive"],
        demoUrl: "#",
        repoUrl: "#"
      }));
      return hardcoded;
    }

    // 5. Save Valid Data to Cache
    localStorage.setItem(CACHE_KEY, JSON.stringify({
      data: mappedProjects,
      timestamp: Date.now()
    }));

    return mappedProjects;
  },

  getStats() {
    const projects = this.getProjects().length;
    const achievements = this.getJourneyTimeline().length;
    const testimonials = this.getTestimonials().length;
    return { projects, achievements, testimonials };
  }
};
