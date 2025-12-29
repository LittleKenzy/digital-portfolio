
// --- CUSTOM CURSOR LOGIC ---
// Minimalist, smooth, and performance-focused

export const initCursor = () => {
  // 1. Check if device has fine pointer (desktop)
  if (!window.matchMedia("(pointer: fine)").matches) return;

  // 2. Create Cursor Elements
  const cursorDot = document.createElement("div");
  const cursorRing = document.createElement("div");

  cursorDot.id = "cursor-dot";
  cursorRing.id = "cursor-ring";

  document.body.appendChild(cursorDot);
  document.body.appendChild(cursorRing);

  // 3. CSS Styling injected via JS for portability
  const style = document.createElement("style");
  style.innerHTML = `
        body {
            cursor: none; /* Hide default cursor */
        }
        
        #cursor-dot, #cursor-ring {
            position: fixed;
            top: 0;
            left: 0;
            transform: translate(-50%, -50%);
            border-radius: 50%;
            pointer-events: none;
            z-index: 99999;
        }

        /* The small center dot */
        #cursor-dot {
            width: 8px;
            height: 8px;
            background-color: white;
            box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
        }

        /* The following ring */
        #cursor-ring {
            width: 32px;
            height: 32px;
            border: 1px solid rgba(255, 255, 255, 0.4);
            transition: width 0.3s, height 0.3s, background-color 0.3s, border-color 0.3s, opacity 0.3s;
            will-change: width, height, transform, border;
        }

        /* --- INTERACTION STATES --- */
        
        /* 1. Hover Links/Buttons: Expand Ring */
        body.hover-link #cursor-ring {
            width: 50px;
            height: 50px;
            border-color: rgba(255, 255, 255, 0.8);
            background-color: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(2px);
        }

        /* 2. Hover Gradient Text/Accent: Glow Effect */
        body.hover-accent #cursor-ring {
            width: 60px;
            height: 60px;
            border-color: #00f2ff;
            box-shadow: 0 0 20px rgba(0, 242, 255, 0.2);
            background-color: rgba(0, 242, 255, 0.05);
        }

        /* 3. Mouse Down/Click: Shrink Feedback */
        body.cursor-click #cursor-ring {
            width: 20px;
            height: 20px;
            border-width: 2px;
            background-color: rgba(255, 255, 255, 0.2);
        }

        /* Hide generic cursor when leaving window */
        body:hover #cursor-dot, body:hover #cursor-ring {
            opacity: 1;
        }
        
        body:not(:hover) #cursor-dot, body:not(:hover) #cursor-ring {
            opacity: 0;
        }
    `;
  document.head.appendChild(style);

  // 4. Animation Variables
  let mouseX = -100;
  let mouseY = -100;
  let ringX = -100;
  let ringY = -100;
  let isMouseDown = false;

  // 5. Mouse Event Listeners
  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    // Instant move for the dot
    cursorDot.style.left = `${mouseX}px`;
    cursorDot.style.top = `${mouseY}px`;
  });

  window.addEventListener("mousedown", () => {
    isMouseDown = true;
    document.body.classList.add("cursor-click");
  });

  window.addEventListener("mouseup", () => {
    isMouseDown = false;
    document.body.classList.remove("cursor-click");
  });

  // 6. Smooth "Lerp" Animation for the Ring
  const lerp = (start, end, factor) => {
    return start + (end - start) * factor;
  };

  const animateRing = () => {
    // Smooth follow logic (lighter lerp = slower/smoother)
    ringX = lerp(ringX, mouseX, 0.15);
    ringY = lerp(ringY, mouseY, 0.15);

    cursorRing.style.left = `${ringX}px`;
    cursorRing.style.top = `${ringY}px`;

    requestAnimationFrame(animateRing);
  };

  // Start loop
  animateRing();

  // 7. Intelligent Hover Detection (Delegation)
  // Instead of adding listeners to every button, we check what element is under the mouse
  const handleHover = (e) => {
    // Find if target or any parent is interactive
    const target = e.target;
    const interactive = target.closest("a, button, .cursor-hover, [data-cursor='hover'], input, textarea, select");
    const accent = target.closest(".text-accent, .border-accent, .bg-accent");

    // Reset classes
    document.body.classList.remove("hover-link");
    document.body.classList.remove("hover-accent");

    if (interactive) {
      document.body.classList.add("hover-link");
    }

    if (accent) {
      document.body.classList.add("hover-accent");
    }
  };

  window.addEventListener("mouseover", handleHover);
  window.addEventListener("mouseout", () => {
    document.body.classList.remove("hover-link", "hover-accent");
  });
};
