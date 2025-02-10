// Initialize Lucide icons
lucide.createIcons();

// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Mobile menu toggle
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = document.getElementById('menu-icon');
const closeIcon = document.getElementById('close-icon');

function toggleMobileMenu() {
  mobileMenu.classList.toggle('active');
  menuIcon.classList.toggle('hidden');
  closeIcon.classList.toggle('hidden');
}

// Smooth scroll
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
    if (mobileMenu.classList.contains('active')) {
      toggleMobileMenu();
    }
  }
}

// Form Validation and Email Sending
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();  // Prevent the default form submission

  const name = e.target.name.value.trim();
  const email = e.target.email.value.trim();
  const message = e.target.message.value.trim();
  let valid = true;

  // Clear previous errors
  clearErrors();

  // Name Validation
  if (!name) {
      showError('name', 'Name is required');
      valid = false;
  }

  // Email Validation
  if (!email || !validateEmail(email)) {
      showError('email', 'Please enter a valid email');
      valid = false;
  }

  // Message Validation
  if (!message) {
      showError('message', 'Message cannot be empty');
      valid = false;
  }

  if (valid) {
      // Send email using EmailJS
      emailjs.sendForm('service_qp9wp0k', 'template_27bvmdr', this)
          .then(function(response) {
              alert('Message Sent Successfully!');
              e.target.reset();
          }, function(error) {
              alert('Failed to send message. Please try again.');
          });
  }
});

// Email Validation Function
function validateEmail(email) {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zAZ0-9.-]+\.[a-zA-Z]{2,6}$/;
  return emailPattern.test(email);
}

// Show Error Function
function showError(field, message) {
  const errorElement = document.createElement('p');
  errorElement.classList.add('error');
  errorElement.textContent = message;
  const inputField = document.getElementById(field);
  inputField.style.borderColor = 'red';
  inputField.insertAdjacentElement('afterend', errorElement);
}

// Clear Errors Function
function clearErrors() {
  const errorMessages = document.querySelectorAll('.error');
  errorMessages.forEach(msg => msg.remove());

  const formFields = document.querySelectorAll('input, textarea');
  formFields.forEach(field => field.style.borderColor = '#ccc');
}

function createAnimatedBackground() {
  const symbols = ['13', '=>', '🙃', '</', '{', '}', '/>', 'O(n)', 'Ω(n)','φ','√', '∫', '∂', 'α', 'β', 'γ', 'π', '∑ ', 'Δ', '∇', '∞',, '∑', '∇', 'ℂ', 'Δ', 'λ', '∀', '∃', '⟦', '⟧', '→', '∝', '≠', ];
  const container = document.querySelector('.animated-bg');
  const fragment = document.createDocumentFragment();  // Create a fragment to minimize reflows

  // Pre-calculate random values to avoid recalculating multiple times inside the loop
  const symbolsLength = symbols.length;
  
  for (let i = 0; i < 50; i++) {
    const symbol = document.createElement('div');
    symbol.className = 'animated-symbol';
    symbol.textContent = symbols[Math.floor(Math.random() * symbolsLength)];
    symbol.style.left = `${Math.random() * 100}%`;
    symbol.style.top = `${Math.random() * 100}%`;
    symbol.style.animationDelay = `${Math.random() * 10}s`;
    symbol.style.fontSize = `${Math.random() * 20 + 10}px`;
    symbol.style.opacity = '0.9';

    fragment.appendChild(symbol);  // Append to the fragment instead of directly to the container
  }

  container.appendChild(fragment);  // Append the fragment to the container once all elements are created
}


// Initialize when DOM loads
document.addEventListener('DOMContentLoaded', createAnimatedBackground);

// Typing effect
const typedText = document.getElementById('typed-text');
const text = "Dedicated to the pursuit of excellence through technological mastery and innovative solutions.";
let index = 0;

function typeText() {
  if (index < text.length) {
    typedText.textContent = text.slice(0, index + 1);
    index++;
    setTimeout(typeText, 100);
  }
}

setTimeout(typeText, 1000);

// Interests section
const interests = [
  {
    icon: 'code-2',
    title: "Software Development",
    description: "Passionate about creating efficient, scalable applications using modern technologies."
  },
  {
    icon: 'brain',
    title: "Machine Learning",
    description: "Exploring AI and ML algorithms to solve complex real-world problems."
  },
  {
    icon: 'database',
    title: "Data Structures",
    description: "Strong foundation in optimizing data structures and algorithms."
  },
  {
    icon: 'shield',
    title: "Cybersecurity",
    description: "Interested in building secure systems and understanding security protocols."
  }
];

const interestsGrid = document.getElementById('interests-grid');
interests.forEach(interest => {
  const card = document.createElement('div');
  card.className = 'interest-card';
  card.innerHTML = `
    <div class="interest-icon">
      <i data-lucide="${interest.icon}"></i>
    </div>
    <h3 class="interest-title">${interest.title}</h3>
    <p>${interest.description}</p>
  `;
  interestsGrid.appendChild(card);
});

// Projects section
const projects = [
  {
    title: "GradeVista: Stay on Top of Your Grades 📚🎓",
    description:
      "A grade management tool for Computer Engineering students at PU, designed to track academic performance across engineering disciplines. It offers a user-friendly interface to input, monitor, and analyze grades. The tool helps students stay on top of their progress and make informed decisions for future coursework.",
    image: "/images/GradeVista.jpg",
    tags: ["HTML", "CSS", "JavaScript"],
    category: "Web Development",
    github: "https://github.com/binayakbartaula11/uni-grade-system",
    demo: "https://gradevista.netlify.app/"
  },
  {
    title: "KiranaKutumba: Your Local Goods Marketplace 🏪📦",
    description:
      "A user-friendly platform with a ledger system for tracking borrowed goods, integrated delivery, and festive discounts, ensuring convenient access to essential local products.",
    image: "/images/KiranaKutumba.jpg",
    tags: ["JavaScript", "Tailwind CSS", "Firebase", "Node.js"],
    category: "Web Development",
    github: "https://github.com/binayakbartaula11/KiranaKutumba",
    demo: "https://kiranakutumba.netlify.app"
  },
  {
    title: "TajaPhal: AI-Powered Fruit Freshness Detection 🍎🧪",
    description:
      "An AI-powered app that assesses fruit freshness using visual attributes, providing real-time predictions for Nepali fruit varieties to help reduce waste and make informed choices.",
    image: "/images/TajaPhal.jpg",
    tags: ["Machine Learning", "Python", "Flask", "Computer Vision"],
    category: "AI & ML",
    github: "https://github.com/binayakbartaula11/TajaPhal",
    demo: "#"
  },
  {
    title: "FlapFly: Fly to New Heights 🦅🐦",
    description:
      "An implementation of the classic Flappy Bird game with real-time scoring and automatic game-over handling.",
    image: "/images/FlapFly.jpg",
    tags: ["Java"],
    category: "Game Development",
    github: "https://github.com/binayakbartaula11/FlappyBird",
    demo: "#"
  }
];

const projectFilters = document.getElementById('project-filters');
const projectsGrid = document.getElementById('projects-grid');
let currentFilter = "All";

// Create filters
const categories = ["All", ...new Set(projects.map(project => project.category))];
categories.forEach(category => {
  const button = document.createElement('button');
  button.className = `filter-button ${category === currentFilter ? 'active' : ''}`;
  button.textContent = category;
  button.onclick = () => {
    currentFilter = category;
    updateProjects();
    // Update active state
    document.querySelectorAll('.filter-button').forEach(btn => {
      btn.classList.toggle('active', btn.textContent === category);
    });
  };
  projectFilters.appendChild(button);
});

function updateProjects() {
  projectsGrid.innerHTML = '';
  const filteredProjects = projects.filter(project => 
    currentFilter === "All" ? true : project.category === currentFilter
  );

  filteredProjects.forEach(project => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.innerHTML = `
      <div class="project-image">
        <img src="${project.image}" alt="${project.title}">
      </div>
      <div class="project-content">
        <h3 class="project-title">${project.title}</h3>
        <p class="project-description">${project.description}</p>
        <div class="project-tags">
          ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
        </div>
        <div class="project-links">
          <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="project-link">
            <i data-lucide="github"></i>
            <span>Code</span>
          </a>
          ${project.demo ? `
            <a href="${project.demo}" target="_blank" rel="noopener noreferrer" class="project-link">
              <i data-lucide="external-link"></i>
              <span>Live Demo</span>
            </a>
          ` : ''}
        </div>
      </div>
    `;
    projectsGrid.appendChild(card);
    lucide.createIcons();
  });
}

// Initial projects render
updateProjects();

// Skills section
const skills = [
  {
    category: "Programming Languages",
    items: [
      { name: "Python", level: 86 },
      { name: "JavaScript", level: 83 },
      { name: "C++", level: 78 },
      { name: "Java", level: 81 }      
    ]
  },
  {
    category: "Web Technologies",
    items: [
      { name: "React", level: 77 },
      { name: "Node.js", level: 74 },
      { name: "TypeScript", level: 71 },
      { name: "HTML/CSS", level: 83 }
    ]
  },
  {
    category: "Tools & Frameworks",
    items: [
      { name: "Git", level: 85 },
      { name: "Docker", level: 70 },
      { name: "AWS", level: 65 },
      { name: "MongoDB", level: 68 }
    ]
  },
  {
    category: "Other Skills",
    items: [
      { name: "Machine Learning", level: 66 },
      { name: "Data Structures", level: 71 },
      { name: "System Design", level: 64 },
      { name: "Problem Solving", level: 73 }
    ]
  }
];

const skillsGrid = document.getElementById('skills-grid');
skills.forEach(category => {
  const section = document.createElement('div');
  section.className = 'skill-category';
  section.innerHTML = `
    <h3 class="category-title">${category.category}</h3>
    <div class="skill-items">
      ${category.items.map(skill => `
        <div class="skill-item">
          <div class="skill-header">
            <span>${skill.name}</span>
            <span>${skill.level}%</span>
          </div>
          <div class="skill-bar">
            <div class="skill-progress" style="transform: scaleX(${skill.level / 100})"></div>
          </div>
        </div>
      `).join('')}
    </div>
  `;
  skillsGrid.appendChild(section);
});

//Experience section
const timeline = [
  {
    type: 'education',
    title: "Bachelor's Degree in Computer Engineering",
    organization: 'Pokhara University, NCIT College | Balkumari, Lalitpur',
    period: 'Dec 2022 - Aug 2026',
    description: [
      'Major in Computer Engineering',
      'Focused on AI, Data Structures, and Cloud Computing within the Computer Engineering discipline.',
      'Worked on projects involving full-stack development and system optimization.'
    ]
  },
  {
    type: 'education',
    title: 'Pre-University Education in Science (Physical Group)',
    organization: 'NIST College, Banepa',
    period: 'Sep 2020 - May 2022',
    description: [
      'Focused on Physics, Chemistry, and Mathematics.',
      'Designed and developed a physics-based simulation project to demonstrate real-world applications of theoretical concepts.'
    ]
  },
  {
    type: 'education',
    title: 'Academic Foundation',
    organization: 'Shree Janak Secondary School | Bhakundebesi, Kashikhanda',
    period: 'Apr 2013 - Mar 2020',
    description: [
      'Completed foundational education with a strong academic record.',
      'Excelled in Mathematics and Science subjects.',
      'Actively engaged in extracurricular activities and competitions.'
    ]
  }
];

const timelineContainer = document.getElementById('timeline');
const iconMap = {
  education: ["graduation-cap", "book-open", "school" ],
};

let educationCounter = 0;

timeline.forEach(item => {
  let iconType;
  if (item.type === 'education') {
    const educationIcons = iconMap.education;
    iconType = educationIcons[educationCounter % educationIcons.length];
    educationCounter++;
  } else {
    iconType = iconMap[item.type] || "circle";
  }

  const timelineItem = document.createElement('div');
  timelineItem.classList.add('timeline-item');
  timelineItem.innerHTML = `
    <div class="timeline-dot">
      <i data-lucide="${iconType}"></i>
    </div>
    <div class="timeline-content">
      <span class="timeline-period">${item.period}</span>
      <h3 class="timeline-title">${item.title}</h3>
      <p class="timeline-organization">${item.organization}</p>
      <ul class="timeline-description">
        ${item.description.map(desc => `<li>${desc}</li>`).join('')}
      </ul>
    </div>
  `;

  timelineContainer.appendChild(timelineItem);
});

// Initialize Lucide icons
lucide.createIcons();


// Contact form
const contactForm = document.getElementById('contact-form');

function initializeContact() {
  const form = document.getElementById('contact-form');
  const submitButton = form.querySelector('button[type="submit"]');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Show loading state
    submitButton.disabled = true;
    submitButton.innerHTML = `
      <i data-lucide="loader-2" class="loading-spinner"></i>
      Sending...
    `;
    lucide.createIcons();

    // Get form data
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    console.log('Form submitted:', data);  // Add your form submission logic here

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Show success message
      const successMessage = document.createElement('p');
      successMessage.className = 'text-green-600 text-center mt-4';
      successMessage.textContent = 'Message sent successfully!';
      form.appendChild(successMessage);

      // Reset form
      form.reset();

      // Remove success message after 3 seconds
      setTimeout(() => {
        successMessage.remove();
      }, 3000);
    } catch (error) {
      // Show error message
      const errorMessage = document.createElement('p');
      errorMessage.className = 'text-red-600 text-center mt-4';
      errorMessage.textContent = 'Failed to send message. Please try again.';
      form.appendChild(errorMessage);

      // Remove error message after 3 seconds
      setTimeout(() => {
        errorMessage.remove();
      }, 3000);
    } finally {
      // Reset button state
      submitButton.disabled = false;
      submitButton.innerHTML = `
        <i data-lucide="send"></i>
        Send Message
      `;
      lucide.createIcons();
    }
  });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeContact);

// Update copyright year
document.getElementById('current-year').textContent = new Date().getFullYear();