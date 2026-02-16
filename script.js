/* ========================================
   1. DATA CONFIGURATION
   ========================================
*/

const servicesData = [
    {
        id: 1,
        title: "Industrial Automation",
        icon: "fa-robot", 
        image: "project1.png",
        shortDesc: "PLC programming and sensor integration for smarter manufacturing lines.",
        details: "We provide complete PLC logic design, HMI development, and SCADA integration. Our automation solutions reduce human error by 40% and increase throughput by streamlining the communication between your sensors, conveyors, and robotic arms. We use industry-standard controllers like Siemens, Allen-Bradley, and Delta."
    },
    {
        id: 2,
        title: "Electrical Upgradation",
        icon: "fa-bolt",
        image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        shortDesc: "Modernizing vintage panels with latest switchgears and safety protocols.",
        details: "Old panels are fire hazards and energy drains. We completely retrofit your electrical infrastructure with modern MCBs, contactors, and soft starters. Our service includes a full energy audit, thermal imaging of busbars, and rewiring to meet current ISO safety standards."
    },
    {
        id: 3,
        title: "Mechanical Services",
        icon: "fa-gears",
        image: "https://images.unsplash.com/photo-1531297461136-82lw9z3x?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        shortDesc: "Heavy machinery maintenance, alignment, and mechanical repairs.",
        details: "Specializing in toggle link mechanisms and hydraulic cylinder repairs. We offer laser alignment for motor shafts, gearbox overhauling, and preventative maintenance schedules to minimize downtime in your injection moulding plant."
    },
    {
        id: 4,
        title: "Poka-yoke Solutions",
        icon: "fa-shield-halved",
        image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        shortDesc: "Error-proofing systems to ensure zero-defect manufacturing.",
        details: "We implement sensor-based rejection systems and vision inspection integration. If a part doesn't meet the specific weight or dimension criteria, our custom logic triggers a rejection chute, ensuring 100% quality control before the product reaches the bin."
    },
    {
        id: 5,
        title: "Heater & Powder Panels",
        icon: "fa-temperature-high",
        image: "https://images.unsplash.com/photo-1581093588402-4857474d5fca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        shortDesc: "Custom fabrication of control panels for heating and coating systems.",
        details: "Our panels utilize PID controllers with Solid State Relays (SSR) for precise temperature control within +/- 1 degree. Ideal for powder coating ovens, plastic extrusion heating zones, and industrial furnaces."
    },
    {
        id: 6,
        title: "Servo System Retrofit",
        icon: "fa-microchip",
        image: "servo.png",
        shortDesc: "Replacing old hydraulics with energy-efficient servo motors.",
        details: "Replace constant-speed induction motors with servo-driven hydraulic pumps. This retrofit yields power savings of up to 60%, reduces oil heating, and provides faster cycle times with higher precision for injection moulding applications."
    }
];

const productsData = [
    {
        id: 1,
        title: "Custom PLC Panel",
        category: "Electronics",
        image: "https://images.unsplash.com/photo-1555664424-778a6902201b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        details: "A fully customized PLC panel built for complex logic operations. Features IP65 protection, cooling fans, and neat wiring dressing."
    },
    {
        id: 2,
        title: "Hydraulic Power Pack",
        category: "Mechanical",
        image: "https://images.unsplash.com/photo-1531297461136-82lw9z3x?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        details: "Compact hydraulic power units designed for clamping systems. customizable pressure ranges from 50 bar to 250 bar."
    },
    {
        id: 3,
        title: "Proximity Sensor Kit",
        category: "Sensors",
        image: "https://images.unsplash.com/photo-1580983561371-7f4b242d8ec0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        details: "Industrial grade inductive and capacitive sensors. High switching frequency and durable metal housing for harsh environments."
    },
    {
        id: 4,
        title: "Injection Mould Tie Bar",
        category: "Spares",
        image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        details: "High-tensile steel tie bars chrome plated for wear resistance. Available in various diameters for different tonnage machines."
    }
];

/* ========================================
   2. CONTENT RENDERING
   ========================================
*/

function renderServices() {
    const grid = document.getElementById('service-grid');
    if(!grid) return;

    grid.innerHTML = servicesData.map(service => `
        <div class="service-card" style="background-image: url('${service.image}');">
            <div class="service-content">
                <div class="icon-box">
                    <i class="fa-solid ${service.icon}"></i>
                </div>
                <h3>${service.title}</h3>
                <p>${service.shortDesc}</p>
                <button class="details-btn" onclick="openModal('service', ${service.id})">
                    Show Details <i class="fa-solid fa-arrow-right"></i>
                </button>
            </div>
        </div>
    `).join('');
}

function renderProducts() {
    const scroller = document.getElementById('products-scroller');
    if(!scroller) return;

    scroller.innerHTML = productsData.map(product => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.title}" class="product-img">
            <div class="product-info">
                <span class="product-tag">${product.category}</span>
                <h4>${product.title}</h4>
                <button class="details-btn" onclick="openModal('product', ${product.id})">
                    Show Details <i class="fa-solid fa-arrow-right"></i>
                </button>
            </div>
        </div>
    `).join('');
}

/* ========================================
   3. MODAL LOGIC
   ========================================
*/

function openModal(type, id) {
    const modal = document.getElementById('info-modal');
    const modalImg = document.getElementById('modal-img');
    const modalTitle = document.getElementById('modal-title');
    const modalCat = document.getElementById('modal-category');
    const modalDesc = document.getElementById('modal-desc');

    let data;
    if (type === 'service') {
        data = servicesData.find(item => item.id === id);
        modalCat.innerText = "SERVICE SOLUTION";
    } else {
        data = productsData.find(item => item.id === id);
        modalCat.innerText = `PRODUCT - ${data.category.toUpperCase()}`;
    }

    if (data) {
        modalImg.src = data.image;
        modalTitle.innerText = data.title;
        modalDesc.innerText = data.details || data.shortDesc;
        modal.classList.add('active');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('info-modal');
    const closeBtn = document.querySelector('.modal-close');

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.classList.remove('active');
        });
    }

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });

    // --- MOBILE MENU LOGIC (New) ---
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');
    
    if(menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            
            // Optional: Toggle icon between bars and times (X)
            const icon = menuToggle.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-xmark');
            } else {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        });

        // Close menu when a link is clicked
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            });
        });
    }
});


/* ========================================
   4. ANIMATIONS & INTERACTIONS
   ========================================
*/

document.addEventListener('DOMContentLoaded', () => {
    
    renderServices();
    renderProducts();

    // --- Hero Animation ---
    const heroElements = document.querySelectorAll('.hero h1, .hero p, .hero-buttons');
    heroElements.forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
            el.style.transition = 'all 0.8s ease-out';
        }, index * 200 + 300);
    });

    // --- Navbar Blur ---
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // --- Observer ---
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));

    // --- Stats ---
    const statsObserver = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counters = entry.target.querySelectorAll('.counter');
                counters.forEach(counter => {
                    const target = +counter.getAttribute('data-target');
                    const duration = 2000;
                    const increment = target / (duration / 16);
                    
                    let current = 0;
                    const updateCounter = () => {
                        current += increment;
                        if (current < target) {
                            counter.innerText = Math.ceil(current);
                            requestAnimationFrame(updateCounter);
                        } else {
                            counter.innerText = target;
                        }
                    };
                    updateCounter();
                });
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    const statsSection = document.querySelector('.stats-section');
    if(statsSection) statsObserver.observe(statsSection);

    // --- Creative: Mouse Parallax (Only on Desktop) ---
    const heroSection = document.querySelector('.hero');
    if(heroSection && window.matchMedia("(min-width: 769px)").matches) {
        heroSection.addEventListener('mousemove', (e) => {
            const x = (window.innerWidth - e.pageX * 2) / 100;
            const y = (window.innerHeight - e.pageY * 2) / 100;
            const content = document.querySelector('.parallax-target');
            if(content) content.style.transform = `translate(${x}px, ${y}px)`;
            
            const gear1 = document.querySelector('.gear-1');
            const gear2 = document.querySelector('.gear-2');
            if(gear1) gear1.style.transform = `translate(${-x*2}px, ${-y*2}px) rotate(${window.scrollY * 0.2}deg)`;
            if(gear2) gear2.style.transform = `translate(${-x*3}px, ${-y*3}px) rotate(${-window.scrollY * 0.2}deg)`;
        });
    }

    // --- Gear Rotation on Scroll ---
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        const gear1 = document.querySelector('.gear-1');
        const gear2 = document.querySelector('.gear-2');
        if (gear1) gear1.style.transform = `rotate(${scrollY * 0.1}deg)`;
        if (gear2) gear2.style.transform = `rotate(${-scrollY * 0.15}deg)`;
    });

    // --- Product Slider ---
    const scroller = document.getElementById('products-scroller');
    const btnLeft = document.getElementById('scroll-left');
    const btnRight = document.getElementById('scroll-right');
    
    if(btnLeft && scroller) {
        btnLeft.addEventListener('click', () => {
            scroller.scrollBy({ left: -300, behavior: 'smooth' });
        });
    }
    if(btnRight && scroller) {
        btnRight.addEventListener('click', () => {
            scroller.scrollBy({ left: 300, behavior: 'smooth' });
        });
    }
});