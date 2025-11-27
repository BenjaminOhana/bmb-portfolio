import './style.css'

document.addEventListener('DOMContentLoaded', () => {
  // Intersection Observer for Fade In Animations
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const fadeElements = document.querySelectorAll('.fade-in');
  fadeElements.forEach(el => observer.observe(el));

  // Smooth Scroll for Anchor Links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  // Project Data
  const projects = {
    'salon': {
      title: "Le Salon Haussmannien",
      subtitle: "Rénovation Complète - Paris 7ème",
      description: "Pour ce projet, le défi était de conserver l'âme historique du lieu (moulures, parquet point de Hongrie) tout en y insufflant une modernité radicale. Nous avons travaillé sur une mise en lumière scénographique avec des suspensions en laiton brossé et des corniches LED invisibles. Le mobilier, aux lignes organiques, vient adoucir la rigueur de l'architecture classique. Une attention particulière a été portée aux textures : velours de soie, chêne fumé et touches de marbre noir.",
      mainImage: "/src/assets/portfolio_living_modern_1763925374746.png",
      detailImage: "/src/assets/detail_living.png"
    },
    'chambre': {
      title: "Suite Parentale Cocooning",
      subtitle: "Aménagement Sur-Mesure - Neuilly",
      description: "Une véritable bulle de sérénité. L'objectif était de créer un espace hors du temps, propice à la déconnexion totale. La tête de lit, dessinée sur mesure, intègre des chevets suspendus et un éclairage indirect doux. Les teintes sables et terracota créent une atmosphère chaleureuse et enveloppante. Le dressing a été conçu comme une boutique de luxe, avec des façades en verre fumé et un éclairage intérieur soigné.",
      mainImage: "/src/assets/portfolio_bedroom_1763921716174.png",
      detailImage: "/src/assets/detail_bedroom.png"
    },
    'cuisine': {
      title: "Cuisine Minimaliste Chic",
      subtitle: "Rénovation & Ouverture - Lyon 6ème",
      description: "Cette cuisine n'est pas seulement fonctionnelle, c'est une pièce de réception à part entière. En ouvrant l'espace sur le séjour, nous avons créé une fluidité nouvelle. L'îlot central, véritable sculpture monolithique en pierre naturelle, devient le cœur de la maison. Les façades noir mat contrastent avec la chaleur du bois noyer. Chaque détail a été pensé : robinetterie encastrée, prises invisibles et électroménager dissimulé pour une pureté visuelle absolue.",
      mainImage: "/src/assets/portfolio_kitchen_1763921779490.png",
      detailImage: "/src/assets/detail_kitchen.png"
    }
  };

  // Modal Logic
  const modal = document.getElementById('project-modal');
  const closeBtn = document.getElementById('close-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalSubtitle = document.getElementById('modal-subtitle');
  const modalDesc = document.getElementById('modal-description');
  const modalMainImg = document.getElementById('modal-main-image');
  const modalDetailImg = document.getElementById('modal-detail-image');

  // Add click event to all portfolio items
  document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault(); // Prevent default anchor behavior if any
      const projectId = item.getAttribute('data-project');
      const data = projects[projectId];

      if (data) {
        modalTitle.textContent = data.title;
        modalSubtitle.textContent = data.subtitle;
        modalDesc.textContent = data.description;
        modalMainImg.src = data.mainImage;
        modalDetailImg.src = data.detailImage;

        modal.showModal();
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
      }
    });
  });

  // Close Modal Function
  const closeModal = () => {
    modal.close();
    document.body.style.overflow = ''; // Restore scrolling
  };

  closeBtn.addEventListener('click', closeModal);

  // Close when clicking outside the wrapper
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  // Header Scroll Effect
  const header = document.getElementById('header');
  const logoImg = document.querySelector('.logo img');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
      header.style.padding = '0.5rem 0';
      logoImg.style.height = '80px'; // Shrink logo on scroll
      logoImg.style.width = '80px'; // Keep it square
      logoImg.style.top = '5px';
    } else {
      header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
      header.style.padding = '1rem 0';
      logoImg.style.height = '120px'; // Restore large size
      logoImg.style.width = '120px'; // Keep it square
      logoImg.style.top = '10px';
    }
  });
});
