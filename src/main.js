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
      mainImage: "/assets/portfolio_living_modern_1763925374746.png",
      detailImage: "/assets/detail_living.png"
    },
    'chambre': {
      title: "Suite Parentale Cocooning",
      subtitle: "Aménagement Sur-Mesure - Neuilly",
      description: "Une véritable bulle de sérénité. L'objectif était de créer un espace hors du temps, propice à la déconnexion totale. La tête de lit, dessinée sur mesure, intègre des chevets suspendus et un éclairage indirect doux. Les teintes sables et terracota créent une atmosphère chaleureuse et enveloppante. Le dressing a été conçu comme une boutique de luxe, avec des façades en verre fumé et un éclairage intérieur soigné.",
      mainImage: "/assets/portfolio_bedroom_1763921716174.png",
      detailImage: "/assets/detail_bedroom.png"
    },
    'cuisine': {
      title: "Cuisine Minimaliste Chic",
      subtitle: "Rénovation & Ouverture - Lyon 6ème",
      description: "Cette cuisine n'est pas seulement fonctionnelle, c'est une pièce de réception à part entière. En ouvrant l'espace sur le séjour, nous avons créé une fluidité nouvelle. L'îlot central, véritable sculpture monolithique en pierre naturelle, devient le cœur de la maison. Les façades noir mat contrastent avec la chaleur du bois noyer. Chaque détail a été pensé : robinetterie encastrée, prises invisibles et électroménager dissimulé pour une pureté visuelle absolue.",
      mainImage: "/assets/portfolio_kitchen_1763921779490.png",
      detailImage: "/assets/detail_kitchen.png"
    }
  };

  // Services Data
  const services = {
    'architecture': {
      title: "Architecture d'Intérieur",
      subtitle: "Conception & Maîtrise d'Œuvre",
      description: "Mon approche de l'architecture d'intérieur est globale. Je ne me contente pas de décorer, je repense la structure même de votre habitat pour qu'il s'adapte à votre vie. \n\nMon processus :\n1. Étude de faisabilité et relevé de l'existant.\n2. Conception des plans 2D et modélisation 3D photoréaliste.\n3. Sélection rigoureuse des artisans et suivi de chantier.\n\nJe sculpte les volumes, joue avec la lumière naturelle et crée des circulations fluides pour un espace qui respire et qui dure.",
      mainImage: "/assets/service_architecture.png",
      detailImage: "/assets/logo_bmb_crown.png" // Using logo as secondary image for branding
    },
    'decoration': {
      title: "Décoration & Styling",
      subtitle: "Ambiance & Matières",
      description: "La décoration est l'âme de votre maison. C'est elle qui raconte votre histoire. Je vous accompagne dans la création d'une identité visuelle unique, loin des catalogues standardisés.\n\nMes prestations :\n- Planches d'ambiance (Moodboards) et recherche de style.\n- Sélection de mobilier, luminaires et objets d'art.\n- Choix des textiles (rideaux, tapis, coussins) et des revêtements muraux.\n\nJe privilégie les matières nobles (bois, pierre, lin, velours) et les pièces de créateurs pour un rendu intemporel et sophistiqué.",
      mainImage: "/assets/service_decoration.png",
      detailImage: "/assets/logo_bmb_crown.png"
    },
    'geobiologie': {
      title: "Géobiologie de l'Habitat",
      subtitle: "Harmonie & Bien-être",
      description: "Votre lieu de vie a une influence directe sur votre vitalité. La géobiologie est l'étude de l'impact de l'environnement sur le vivant. En tant qu'experte, j'analyse votre habitat pour détecter les perturbations invisibles (réseaux telluriques, failles, ondes électromagnétiques).\n\nPourquoi faire une étude ?\n- Pour retrouver un sommeil réparateur.\n- Pour se sentir apaisé et ressourcé chez soi.\n- Pour harmoniser les énergies d'un lieu avant un emménagement.\n\nJ'intègre ces principes dès la conception pour créer des 'maisons-santé' qui prennent soin de vous.",
      mainImage: "/assets/service_geobiology.png",
      detailImage: "/assets/logo_bmb_crown.png"
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

  // Function to open modal with data
  const openModal = (data) => {
    if (data) {
      modalTitle.textContent = data.title;
      modalSubtitle.textContent = data.subtitle;
      modalDesc.innerHTML = data.description.replace(/\n/g, '<br>'); // Handle line breaks
      modalMainImg.src = data.mainImage;

      // Handle detail image visibility (hide if same as main or generic)
      if (data.detailImage) {
        modalDetailImg.src = data.detailImage;
        modalDetailImg.style.display = 'block';
      } else {
        modalDetailImg.style.display = 'none';
      }

      modal.showModal();
      document.body.style.overflow = 'hidden';
    }
  };

  // Add click event to Portfolio items
  document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const projectId = item.getAttribute('data-project');
      openModal(projects[projectId]);
    });
  });

  // Add click event to Service items
  document.querySelectorAll('.service-card').forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const serviceId = item.getAttribute('data-service');
      openModal(services[serviceId]);
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

  // Preload Images for Performance
  const preloadImages = () => {
    const imageUrls = [];

    // Collect all project images
    Object.values(projects).forEach(project => {
      if (project.mainImage) imageUrls.push(project.mainImage);
      if (project.detailImage) imageUrls.push(project.detailImage);
    });

    // Collect all service images
    Object.values(services).forEach(service => {
      if (service.mainImage) imageUrls.push(service.mainImage);
      if (service.detailImage) imageUrls.push(service.detailImage);
    });

    // Preload them
    imageUrls.forEach(url => {
      const img = new Image();
      img.src = url;
    });

    console.log(`Preloaded ${imageUrls.length} images for instant access.`);
  };

  // Trigger preload after main content loads
  window.addEventListener('load', () => {
    // Small delay to prioritize main thread
    setTimeout(preloadImages, 1000);
  });
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
