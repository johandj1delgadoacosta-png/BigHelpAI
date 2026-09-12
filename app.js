const modeInfo = {
  dashboard: {
    title: "Dashboard",
    icon: "🏠",
    label: "YOUR AI WORKSPACE",
    description: "Your central BigHelpAI workspace."
  },

  ai: {
    title: "AI",
    icon: "✨",
    label: "HELLPY",
    description: "Ask questions, write, research, summarize, and work with files."
  },

  coding: {
    title: "Coding",
    icon: "💻",
    label: "JAMES",
    description: "Build, debug, explain, and improve code projects."
  },

  study: {
    title: "Study",
    icon: "📚",
    label: "ALBERT",
    description: "Get homework help, practice, hints, notes, and explanations."
  },

  learning: {
    title: "Learning",
    icon: "🎓",
    label: "MATHEW",
    description: "Follow curriculums with lessons, quizzes, checkpoints, tests, and exams."
  },

  creation: {
    title: "Creation",
    icon: "🎨",
    label: "OSWALT",
    description: "Create images and other creative projects."
  },

  "3d-create": {
    title: "3D Create",
    icon: "🧊",
    label: "MELISA",
    description: "Build 3D objects, machines, mechanisms, motors, and electronics."
  },

  "sim-lab": {
    title: "Sim Lab",
    icon: "🧪",
    label: "MELISA",
    description: "Test physics, electronics, motors, sensors, and simulated machines."
  },

  build: {
    title: "Build",
    icon: "🛠️",
    label: "AI TEAM",
    description: "Connect AI, coding, creation, 3D, and simulation in one project."
  },

  "board-games": {
    title: "Board Games",
    icon: "🎲",
    label: "HENRY",
    description: "Create board games or learn how to play real games."
  },

  music: {
    title: "Music Creator",
    icon: "🎵",
    label: "LEMY",
    description: "Compose, arrange, and build music projects."
  },

  college: {
    title: "College Hub",
    icon: "🎓",
    label: "MAX",
    description: "Get help with college work and prepare for college or university applications."
  },

  sell: {
    title: "Sell",
    icon: "🛍️",
    label: "WILLIAMS",
    description: "Create, organize, advertise, and prepare products for trusted marketplaces."
  },

  books: {
    title: "Publish Books",
    icon: "📖",
    label: "EMILY",
    description: "Turn a manuscript or PDF into a structured publishing project."
  },

  therapy: {
    title: "Therapy",
    icon: "💙",
    label: "LISSA",
    description: "Supportive conversations and safety-aware next steps."
  },

  browser: {
    title: "Private Browser",
    icon: "🌐",
    label: "BROWSER",
    description: "A privacy-focused browsing workspace."
  },

  navigation: {
    title: "Navigation",
    icon: "🗺️",
    label: "MAPSY",
    description: "Plan trips, compare travel options, and organize stops."
  },

  projects: {
    title: "Projects",
    icon: "📁",
    label: "PROJECTS",
    description: "Open and organize your BigHelpAI projects."
  },

  notifications: {
    title: "Notifications",
    icon: "🔔",
    label: "NOTIFICATIONS",
    description: "View safety, security, project, and account notifications."
  },

  settings: {
    title: "Settings",
    icon: "⚙️",
    label: "SETTINGS",
    description: "Manage your account, privacy, security, and preferences."
  }
};


/* =========================================================
   GET ELEMENTS
========================================================= */

const dashboardView = document.getElementById("dashboardView");
const placeholderView = document.getElementById("placeholderView");
const placeholderIcon = document.getElementById("placeholderIcon");
const placeholderLabel = document.getElementById("placeholderLabel");
const placeholderTitle = document.getElementById("placeholderTitle");
const placeholderDescription = document.getElementById("placeholderDescription");
const placeholderPrimary = document.getElementById("placeholderPrimary");
const toast = document.getElementById("toast");
const sidebar = document.getElementById("sidebar");
const mobileMenu = document.getElementById("mobileMenu");
const notificationsBtn = document.getElementById("notificationsBtn");
const profileBtn = document.getElementById("profileBtn");
const globalSearch = document.getElementById("globalSearch");


/* =========================================================
   TOAST
========================================================= */

function showToast(message) {
  if (!toast) {
    return;
  }

  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(showToast.timer);

  showToast.timer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2400);
}


/* =========================================================
   ACTIVE SIDEBAR ITEM
========================================================= */

function setActiveNav(route) {
  document.querySelectorAll(".nav-item").forEach(item => {
    item.classList.toggle(
      "active",
      item.dataset.route === route
    );
  });
}


/* =========================================================
   CLOSE MOBILE SIDEBAR
========================================================= */

function closeMobileSidebar() {
  if (sidebar) {
    sidebar.classList.remove("open");
  }
}


/* =========================================================
   SHOW ROUTE
========================================================= */

function renderRoute(route) {
  if (!modeInfo[route]) {
    route = "dashboard";
  }

  setActiveNav(route);

  if (route === "dashboard") {
    dashboardView.hidden = false;
    placeholderView.hidden = true;
    document.title = "BigHelpAI";
    closeMobileSidebar();
    return;
  }

  dashboardView.hidden = true;
  placeholderView.hidden = false;

  const info = modeInfo[route];

  placeholderIcon.textContent = info.icon;
  placeholderLabel.textContent = info.label;
  placeholderTitle.textContent = info.title;
  placeholderDescription.textContent = info.description;

  document.title = `${info.title} · BigHelpAI`;

  placeholderPrimary.onclick = () => {
    showToast(
      `${info.title} workspace is ready for the next build stage.`
    );
  };

  closeMobileSidebar();
}


/* =========================================================
   GO TO ROUTE
========================================================= */

function navigate(route) {
  if (!modeInfo[route]) {
    route = "dashboard";
  }

  const newHash = `#${route}`;

  if (window.location.hash !== newHash) {
    window.location.hash = route;
  } else {
    renderRoute(route);
  }
}


/* =========================================================
   SIDEBAR LINKS
========================================================= */

document.querySelectorAll(".nav-item").forEach(item => {
  item.addEventListener("click", event => {
    event.preventDefault();

    const route = item.dataset.route;

    if (!route) {
      return;
    }

    navigate(route);
  });
});


/* =========================================================
   ALL ROUTE BUTTONS
========================================================= */

document.querySelectorAll("[data-route-button]").forEach(button => {
  button.addEventListener("click", event => {
    event.preventDefault();

    const route = button.dataset.routeButton;

    if (!route) {
      return;
    }

    navigate(route);
  });
});


/* =========================================================
   RECENT PROJECTS
========================================================= */

document.querySelectorAll(".project-row").forEach(button => {
  button.addEventListener("click", () => {
    const projectName =
      button.dataset.project || "Project";

    showToast(`Project selected: ${projectName}`);
  });
});


/* =========================================================
   NOTIFICATIONS
========================================================= */

if (notificationsBtn) {
  notificationsBtn.addEventListener("click", () => {
    navigate("notifications");
  });
}


/* =========================================================
   PROFILE
========================================================= */

if (profileBtn) {
  profileBtn.addEventListener("click", () => {
    showToast(
      "Profile will be connected when the account system is built."
    );
  });
}


/* =========================================================
   MOBILE MENU
========================================================= */

if (mobileMenu) {
  mobileMenu.addEventListener("click", () => {
    sidebar.classList.toggle("open");
  });
}


/* =========================================================
   SEARCH
========================================================= */

if (globalSearch) {
  globalSearch.addEventListener("keydown", event => {
    if (event.key !== "Enter") {
      return;
    }

    const query = globalSearch.value.trim();

    if (!query) {
      showToast("Type something to search BigHelpAI.");
      return;
    }

    showToast(`Searching BigHelpAI for "${query}"`);
  });
}


/* =========================================================
   KEYBOARD SHORTCUT
========================================================= */

document.addEventListener("keydown", event => {
  const target = event.target;

  const isTyping =
    target instanceof HTMLInputElement ||
    target instanceof HTMLTextAreaElement;

  if (event.key === "/" && !isTyping) {
    event.preventDefault();

    if (globalSearch) {
      globalSearch.focus();
    }
  }

  if (event.key === "Escape") {
    closeMobileSidebar();
  }
});


/* =========================================================
   HASH CHANGES
========================================================= */

window.addEventListener("hashchange", () => {
  const route =
    window.location.hash.replace("#", "") ||
    "dashboard";

  renderRoute(route);
});


/* =========================================================
   START
========================================================= */

const startingRoute =
  window.location.hash.replace("#", "") ||
  "dashboard";

renderRoute(startingRoute);
