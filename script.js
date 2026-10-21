// ==========================================
// UMAFLIX: CENTRALIZED PORTFOLIO DATABASE
// ==========================================
const UMA_DATABASE = {
  candidate: {
    fullName: "Jonnalagadda Umamalleswara Rao",
    title: "Flutter Developer & AI/ML Engineer",
    email: "umamalleswararaojonnalagadda55@gmail.com",
    phone: "+91 9985340375",
    location: "Vijayawada, Andhra Pradesh, India (520007)",
    linkedin: "https://www.linkedin.com/in/umamalleswara-rao-jonnalagadda-429290232/",
    resumeFile: "Resume.docx"
  },

  projects: [
    {
      id: "reigo",
      title: "ReigoGuide App",
      badge: "FLUTTER ORIGINAL",
      category: "Cross-Platform Mobile",
      match: "99% Match",
      year: "2026",
      icon: "fa-solid fa-compass",
      summary: "High-performance cross-platform regional tourism & discovery app engineered with Flutter & Dart, dynamic lists, and reusable modular UI architecture.",
      bullets: [
        "Implemented category-based navigation with smooth page transitions and responsive layouts for iOS & Android.",
        "Built modular and reusable widget architecture to guarantee future scalability and zero frame drops.",
        "Structured content mapping with image-rich dynamic listings for seamless discovery.",
        "Prepared architecture for future expansion with Google Maps API and Cloud Firebase integration."
      ],
      tags: ["Flutter", "Dart", "Clean Architecture", "Dynamic Lists", "Cross-Platform", "Mobile UI"],
      role: "Lead Mobile Developer / Architect",
      actionLink: "Resume.docx",
      actionText: "Download Technical Specs"
    },
    {
      id: "rag",
      title: "RAG Academic Q&A System",
      badge: "AI STREAMING TOP 10",
      category: "Generative AI & LLMs",
      match: "98% Match",
      year: "2026",
      icon: "fa-solid fa-robot",
      summary: "AI-powered academic question-answering platform combining Retrieval-Augmented Generation (RAG), vector embeddings, and FAISS for zero-hallucination accuracy.",
      bullets: [
        "Architected semantic document search utilizing FAISS vector indexing for sub-second retrieval from large academic corpora.",
        "Engineered retrieval + generation pipeline with context verification to eliminate hallucinations.",
        "Integrated dense vector embeddings with large language models to provide precise, citation-grounded answers.",
        "Evaluated model inference against accuracy benchmarks for robust scale."
      ],
      tags: ["Python", "RAG Pipeline", "Vector DB (FAISS)", "LLMs", "Embeddings", "NLP"],
      role: "AI & ML Engineer",
      actionLink: "Resume.docx",
      actionText: "Explore RAG Pipeline"
    },
    {
      id: "eduerp",
      title: "EduERP - Campus Management Suite",
      badge: "ENTERPRISE FLUTTER",
      category: "Cross-Platform Enterprise",
      match: "99% Match",
      year: "2026",
      icon: "fa-solid fa-school",
      summary: "Comprehensive institution ERP system built with Flutter frontend, handling student lifecycles, faculty records, fee structures, timetable automation, and role-based portals.",
      bullets: [
        "Architected cross-platform Flutter frontend with responsive dashboard widgets and real-time state synchronization.",
        "Integrated role-based access control (Admin, Faculty, Student, Parent) with granular permission trees.",
        "Implemented real-time academic records, automated fee receipt generation, and biometric attendance modules.",
        "Engineered offline caching and resilient REST API network interceptors for low-connectivity environments."
      ],
      tags: ["Flutter", "Dart", "Enterprise ERP", "REST APIs", "State Management", "Role-Based Auth"],
      role: "Lead Mobile & ERP Developer",
      actionLink: "Resume.docx",
      actionText: "Explore ERP System"
    },
    {
      id: "lms",
      title: "Smart LMS - Learning Management System",
      badge: "EDTECH ORIGINAL",
      category: "EdTech & Learning",
      match: "98% Match",
      year: "2026",
      icon: "fa-solid fa-graduation-cap",
      summary: "Scalable digital learning management system featuring interactive video courses, quiz engines, assignment submissions, progress telemetry, and certificate issuance.",
      bullets: [
        "Built responsive learner portal with video lecture streaming, timestamp bookmarks, and resource downloads.",
        "Engineered automated quiz and assessment engine with instant score telemetry and analytics dashboards.",
        "Integrated assignment submission pipelines with instructor grading feedback loops.",
        "Designed clean mobile-first UI with dark/light themes and student gamification badges."
      ],
      tags: ["Flutter", "React.js", "EdTech", "LMS", "Video Player", "Analytics Engine"],
      role: "Full-Stack EdTech Developer",
      actionLink: "Resume.docx",
      actionText: "View LMS Architecture"
    },
    {
      id: "fruitup",
      title: "FruitUp - Fresh Produce E-Commerce",
      badge: "E-COMMERCE ORIGINAL",
      category: "Mobile Commerce",
      match: "97% Match",
      year: "2025",
      icon: "fa-solid fa-apple-whole",
      summary: "Fresh farm produce ordering and delivery mobile app featuring interactive catalogue browsing, instant cart calculations, coupon validations, and live order tracking.",
      bullets: [
        "Designed vibrant, user-centric e-commerce browsing interface with category filtering and real-time inventory checks.",
        "Implemented reactive cart management with dynamic price computation, discount coupons, and tax calculations.",
        "Integrated secure checkout workflows, address book management, and order status tracking milestones.",
        "Optimized image loading pipelines and caching for silky-smooth 60fps catalogue scrolling."
      ],
      tags: ["Flutter", "Dart", "E-Commerce", "Cart State", "Payment Flow", "Mobile UI"],
      role: "Mobile App Developer",
      actionLink: "Resume.docx",
      actionText: "Explore FruitUp App"
    },
    {
      id: "bloodbank",
      title: "Blood Bank Management System",
      badge: "FULL-STACK WEB",
      category: "Web Application",
      match: "96% Match",
      year: "2025",
      icon: "fa-solid fa-hand-holding-droplet",
      summary: "Django-powered web platform for real-time blood donor coordination, inventory tracking, role-based security, and emergency multi-filter availability search.",
      bullets: [
        "Implemented secure CRUD operations, role-based authentication, and normalized SQL schema designs.",
        "Engineered real-time inventory tracking for immediate blood availability during medical emergencies.",
        "Built responsive web frontend utilizing Bootstrap 5 and Django template engine.",
        "Streamlined administrative overhead through automatic audit validation."
      ],
      tags: ["Django", "Python", "SQL", "Bootstrap 5", "CRUD & Auth", "Inventory Management"],
      role: "Full-Stack Web Developer",
      actionLink: "Resume.docx",
      actionText: "View Architecture"
    }
  ],

  skills: [
    {
      id: "flutter_stack",
      title: "Flutter & Dart Ecosystem",
      badge: "PRIMARY STACK",
      category: "Mobile",
      match: "99% Match",
      year: "2024-2026",
      icon: "fa-brands fa-flutter",
      summary: "Deep specialization in building performant cross-platform mobile apps using Flutter and Dart, reactive state management, and native device integrations.",
      bullets: [
        "Declarative UI development, custom renderers, and multi-device responsive adaptations.",
        "State management paradigms (Bloc, Provider) ensuring predictable reactive app data flows.",
        "Firebase mobile backend integration (Authentication, Firestore, Storage)."
      ],
      tags: ["Flutter", "Dart", "Widget Architecture", "State Management", "Mobile Performance"],
      role: "Mobile Specialist"
    },
    {
      id: "ai_ml",
      title: "Machine Learning (ML)",
      badge: "SCIENTIFIC",
      category: "Machine Learning",
      match: "97% Match",
      year: "2024-2026",
      icon: "fa-solid fa-chart-line",
      summary: "End-to-end Machine Learning workflows: feature engineering, classification models, regression, clustering, and published disease predictive modeling.",
      bullets: [
        "Support Vector Machines (SVM), Random Forests, Decision Trees, and K-Means Clustering.",
        "Categorical symptom encoding and high-dimensional feature preprocessing.",
        "Model evaluation through ROC-AUC, Precision, Recall, and Confusion Matrices."
      ],
      tags: ["Support Vector Machines", "Scikit-Learn", "Feature Engineering", "Clustering", "ROC-AUC"],
      role: "ML Researcher"
    },
    {
      id: "deep_learning",
      title: "Deep Learning & Neural Networks",
      badge: "ADVANCED AI",
      category: "Deep Learning",
      match: "95% Match",
      year: "2025-2026",
      icon: "fa-solid fa-network-wired",
      summary: "Core foundations in Artificial Neural Networks (ANN), Convolutional Networks (CNN), Recurrent Networks (RNN & LSTM), and optimization techniques.",
      bullets: [
        "Understanding gradient backpropagation, activation functions (ReLU, Sigmoid, Softmax), and loss optimization (Adam, SGD).",
        "Regularization methods including Dropout, Batch Normalization, and Weight Decay.",
        "Experience with PyTorch & TensorFlow fundamentals."
      ],
      tags: ["ANN", "CNN", "RNN & LSTM", "Adam / SGD", "PyTorch / TensorFlow", "Neural Architecture"],
      role: "Deep Learning Enthusiast"
    },
    {
      id: "modern_web",
      title: "React.js & Modern Web",
      badge: "FRONTEND STACK",
      category: "Frontend Web",
      match: "94% Match",
      year: "2024-2026",
      icon: "fa-brands fa-react",
      summary: "Component-driven single page web application development using React.js, responsive layouts with Bootstrap 5, and JavaScript APIs.",
      bullets: [
        "Reusable component architectures, state hooks, and virtual DOM performance tuning.",
        "Bootstrap 5 responsive flexbox grid layouts and custom CSS glassmorphism styling.",
        "REST API consumption and asynchronous client-server data synchronization."
      ],
      tags: ["React.js", "Bootstrap 5", "HTML5", "Vanilla CSS", "JavaScript ES6+", "REST APIs"],
      role: "Frontend Developer"
    },
    {
      id: "backend_cloud",
      title: "Firebase & Django Cloud",
      badge: "BACKEND STACK",
      category: "Cloud & DB",
      match: "96% Match",
      year: "2024-2026",
      icon: "fa-solid fa-fire",
      summary: "Serverless backend integration using Google Firebase ecosystem alongside Django Python server architectures and relational SQL databases.",
      bullets: [
        "Firebase Firestore real-time NoSQL streaming, Cloud Storage, and Authentication.",
        "Django ORM, user session security, and structured relational SQL schemas.",
        "API endpoint integration and Git version control workflows."
      ],
      tags: ["Firebase Firestore", "Firebase Auth", "Django", "SQL", "Git / GitHub"],
      role: "Backend Integrator"
    }
  ],

  experience: [
    {
      id: "datavalley",
      title: "DataValley Internship",
      badge: "6 MONTHS PRODUCTION",
      category: "Commercial Experience",
      match: "100% Verified",
      year: "Commercial Track",
      icon: "fa-solid fa-briefcase",
      summary: "Flutter Developer Intern at DataValley developing production-ready cross-platform mobile apps with real-time Firebase backend services.",
      bullets: [
        "Developed cross-platform responsive mobile applications using Flutter & Dart with high frame rates.",
        "Integrated Firebase Authentication, Cloud Firestore real-time sync, and Storage for active dynamic workflows.",
        "Engineered smooth profile onboarding, state updates, and dynamic record listing widgets.",
        "Diagnosed runtime performance bottlenecks and optimized widget tree rebuilds."
      ],
      tags: ["Flutter", "Dart", "Firebase Auth", "Firestore DB", "Commercial App"],
      role: "Flutter Developer Intern",
      actionLink: "Resume.docx",
      actionText: "Verify in Resume"
    }
  ],

  research: [
    {
      id: "zenodo_paper",
      title: "Predictive Modelling of Human Diseases Using SVM",
      badge: "PUBLISHED SCIENTIFIC PAPER",
      category: "Research Original",
      match: "DOI Verified",
      year: "Published Paper",
      icon: "fa-solid fa-book-bookmark",
      summary: "Peer-reviewed scientific research paper formulating machine learning classification models leveraging Support Vector Machines and symptom frequency encoding.",
      bullets: [
        "Formulated SVM classification algorithms paired with multi-attribute symptom frequency encoding.",
        "Published with official Zenodo DOI: 10.5281/zenodo.19229452.",
        "Validated diagnostic prediction reliability across dimensional healthcare datasets."
      ],
      tags: ["Machine Learning", "SVM", "Symptom Encoding", "Scientific Research", "Zenodo DOI"],
      role: "Author / Researcher",
      actionLink: "https://doi.org/10.5281/zenodo.19229452",
      actionText: "Read Paper on Zenodo"
    }
  ],

  education: [
    {
      id: "msc_cs",
      title: "M.Sc. Computer Science",
      badge: "POSTGRADUATE • 80%",
      category: "Higher Education",
      match: "80% Aggregate",
      year: "2024 – 2026",
      icon: "fa-solid fa-graduation-cap",
      summary: "P.B. Siddhartha College of Arts and Science, Vijayawada. Comprehensive focus on Advanced Algorithms, Machine Learning, Operating Systems, and Intelligent Software Engineering.",
      bullets: [
        "Scored 80% aggregate in Master of Science in Computer Science.",
        "Specialized in cross-platform mobile architectures and neural data analytics.",
        "Active technical mentor and project contributor."
      ],
      tags: ["M.Sc Computer Science", "P.B. Siddhartha College", "80% CGPA", "Algorithms"],
      role: "Master's Scholar"
    },
    {
      id: "bsc_cs",
      title: "B.Sc. Computer Science",
      badge: "GRADUATION • 70%",
      category: "Undergraduate",
      match: "70% Aggregate",
      year: "2021 – 2024",
      icon: "fa-solid fa-user-graduate",
      summary: "P.B. Siddhartha College of Arts and Science. Foundational training in Data Structures, Database Systems (SQL), Object-Oriented Programming, and Web Basics.",
      bullets: [
        "Scored 70% in Bachelor of Science in Computer Science.",
        "Core foundational programming in Python, C, and SQL."
      ],
      tags: ["B.Sc Computer Science", "70%", "Database Systems", "Software Engineering"],
      role: "Bachelor's Graduate"
    },
    {
      id: "cert_nptel",
      title: "NPTEL: Data Analytics Using Python",
      badge: "PROFESSIONAL CERTIFICATION",
      category: "Certifications",
      match: "IIT Certified",
      year: "Analytics",
      icon: "fa-solid fa-award",
      summary: "Certified training through NPTEL / IIT covering descriptive & inferential data analytics, Pandas wrangling, regression models, and statistical analysis with Python.",
      bullets: [
        "Exploratory Data Analysis (EDA) and data cleaning.",
        "Inferential statistical modeling with Python libraries."
      ],
      tags: ["NPTEL", "IIT", "Data Analytics", "Python"],
      role: "Certified Specialist"
    },
    {
      id: "cert_cisco",
      title: "CISCO Networking Academy Certifications",
      badge: "DUAL CREDENTIALS",
      category: "Certifications",
      match: "Cisco Verified",
      year: "Networking & OS",
      icon: "fa-solid fa-network-wired",
      summary: "Dual Cisco certifications: 'Operating System Basics' (process scheduling, memory & filesystems) and 'Python Essentials 1' (algorithmic thinking and data structures).",
      bullets: [
        "Cisco: Operating System Basics certification.",
        "Cisco: Python Essentials 1 certification."
      ],
      tags: ["Cisco Academy", "Operating Systems", "Python Essentials"],
      role: "Certified Student"
    }
  ]
};

// ==========================================
// RENDER CAROUSEL TRACKS (STREAMING ROWS)
// ==========================================
function renderCarousel(containerId, items) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = items.map((item, idx) => `
    <div class="title-card" data-id="${item.id}" tabindex="0">
      <div class="card-top">
        <div class="card-icon-badge">
          <i class="${item.icon}"></i>
        </div>
        <span class="card-category-tag">${item.badge}</span>
      </div>

      <div class="card-middle">
        <h3 class="card-headline">${item.title}</h3>
        <p class="card-preview">${item.summary}</p>
      </div>

      <div class="card-bottom">
        <div class="card-meta-chips">
          <span class="mini-chip">${item.match}</span>
          <span class="mini-chip">${item.year}</span>
        </div>
        <div class="card-play-action" title="Preview Title">
          <i class="fa-solid fa-play"></i>
        </div>
      </div>
    </div>
  `).join("");
}

// Find item across all database tables
function findItemById(id) {
  const all = [
    ...UMA_DATABASE.projects,
    ...UMA_DATABASE.skills,
    ...UMA_DATABASE.experience,
    ...UMA_DATABASE.research,
    ...UMA_DATABASE.education
  ];
  return all.find(x => x.id === id);
}

// ==========================================
// MODAL TITLE VIEWER (NETFLIX POPUP)
// ==========================================
const netflixModal = document.getElementById("netflix-modal");
const modalCloseBtn = document.getElementById("modal-close-btn");
const modalBackdropClose = document.getElementById("modal-backdrop-close");

function openTitleModal(item) {
  if (!item) return;

  document.getElementById("modal-title").textContent = item.title;
  document.getElementById("modal-badge").textContent = item.badge;
  document.getElementById("modal-match").textContent = item.match;
  document.getElementById("modal-year").textContent = item.year;
  document.getElementById("modal-category").textContent = item.category;
  document.getElementById("modal-desc").textContent = item.summary;
  document.getElementById("modal-role").textContent = item.role || "Lead Specialist";

  const bulletsContainer = document.getElementById("modal-bullets");
  bulletsContainer.innerHTML = item.bullets.map(b => `
    <li><i class="fa-solid fa-circle-check"></i> <span>${b}</span></li>
  `).join("");

  const tagsContainer = document.getElementById("modal-tags");
  tagsContainer.innerHTML = item.tags.map(t => `<span class="info-tag">${t}</span>`).join("");

  const actionBox = document.getElementById("modal-action-box");
  if (item.actionLink) {
    actionBox.innerHTML = `
      <a href="${item.actionLink}" ${item.actionLink.startsWith("http") ? 'target="_blank" rel="noopener noreferrer"' : 'download'} class="btn-netflix-play" style="width:100%; justify-content:center;">
        <i class="${item.actionLink.startsWith("http") ? 'fa-solid fa-arrow-up-right-from-square' : 'fa-solid fa-download'}"></i> <span>${item.actionText || 'Open Link'}</span>
      </a>
    `;
  } else {
    actionBox.innerHTML = `
      <a href="#contact-banner" class="btn-netflix-play" id="modal-connect-btn" style="width:100%; justify-content:center;">
        <i class="fa-solid fa-paper-plane"></i> <span>Discuss with Uma</span>
      </a>
    `;
    const btn = document.getElementById("modal-connect-btn");
    if (btn) {
      btn.addEventListener("click", () => {
        closeTitleModal();
      });
    }
  }

  netflixModal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeTitleModal() {
  netflixModal.classList.add("hidden");
  document.body.style.overflow = "";
}

// ==========================================
// APP INITIALIZATION
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  // 1. Render all category rows
  renderCarousel("carousel-projects", UMA_DATABASE.projects);
  renderCarousel("carousel-skills", UMA_DATABASE.skills);
  renderCarousel("carousel-experience", UMA_DATABASE.experience);
  renderCarousel("carousel-research", UMA_DATABASE.research);
  renderCarousel("carousel-education", UMA_DATABASE.education);

  // 2. Delegate click on title cards for cinematic popup
  document.addEventListener("click", (e) => {
    const card = e.target.closest(".title-card");
    if (card) {
      const id = card.getAttribute("data-id");
      const item = findItemById(id);
      if (item) openTitleModal(item);
    }
  });

  // Modal close handlers
  if (modalCloseBtn) modalCloseBtn.addEventListener("click", closeTitleModal);
  if (modalBackdropClose) modalBackdropClose.addEventListener("click", closeTitleModal);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !netflixModal.classList.contains("hidden")) {
      closeTitleModal();
    }
  });

  // Featured billboard action
  const openFeaturedBtn = document.getElementById("btn-open-featured");
  if (openFeaturedBtn) {
    openFeaturedBtn.addEventListener("click", () => {
      openTitleModal(UMA_DATABASE.projects[0]); // Open ReigoGuide App
    });
  }

  // 3. "Who's watching?" Gateway Logic
  const netflixGate = document.getElementById("netflix-gate");
  const streamingApp = document.getElementById("streaming-app");
  const gateProfiles = document.querySelectorAll(".gate-profile-card:not(.add-profile-slot)");
  const gateStartBtn = document.getElementById("gate-start-btn");
  const currentPersonaBadge = document.getElementById("current-persona-badge");
  const switchWhoWatching = document.getElementById("switch-who-watching");
  const footerSwitchPersona = document.getElementById("footer-switch-persona");

  function enterStreaming(personaName) {
    if (currentPersonaBadge) currentPersonaBadge.textContent = personaName || "Recruiter";
    netflixGate.classList.add("hidden");
    streamingApp.classList.remove("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function returnToGate() {
    streamingApp.classList.add("hidden");
    netflixGate.classList.remove("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  gateProfiles.forEach(p => {
    p.addEventListener("click", () => {
      const name = p.querySelector(".profile-name").textContent;
      enterStreaming(name);
    });
  });

  if (gateStartBtn) {
    gateStartBtn.addEventListener("click", () => {
      enterStreaming("Recruiter");
    });
  }

  if (switchWhoWatching) switchWhoWatching.addEventListener("click", returnToGate);
  if (footerSwitchPersona) footerSwitchPersona.addEventListener("click", returnToGate);

  // Add profile slot easter egg
  const addSlot = document.getElementById("slot-add-profile");
  if (addSlot) {
    addSlot.addEventListener("click", () => {
      alert("Custom Persona Slot: Tailor your perspective anytime as Hiring Manager, Engineering Director, or Peer!");
    });
  }

  // 4. Navbar scroll backdrop
  const navbar = document.getElementById("netflix-nav");
  window.addEventListener("scroll", () => {
    if (navbar) {
      if (window.scrollY > 80) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    }
  });

  // 5. Live Search Filter for Projects
  const searchInput = document.getElementById("project-filter");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const q = e.target.value.toLowerCase().trim();
      const cards = document.querySelectorAll("#carousel-projects .title-card, #carousel-skills .title-card");
      cards.forEach(card => {
        const text = card.textContent.toLowerCase();
        if (text.includes(q)) {
          card.style.display = "flex";
        } else {
          card.style.display = "none";
        }
      });
    });
  }
});
