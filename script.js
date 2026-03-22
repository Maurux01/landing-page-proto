// ===== THEME TOGGLE =====
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

// Detectar preferencia del sistema e inicializar tema
function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    let theme = 'light';
    
        theme = savedTheme;
    } else if (prefersDark) {
        theme = 'dark';
    }
    
    applyTheme(theme);
}

function applyTheme(theme) {
    if (theme === 'dark') {
        html.classList.add('dark-mode');
        html.classList.remove('light-mode');
        themeToggle.textContent = '☀️';
        localStorage.setItem('theme', 'dark');
    } else {
        html.classList.add('light-mode');
        html.classList.remove('dark-mode');
        themeToggle.textContent = '🌙';
        localStorage.setItem('theme', 'light');
    }
}

// Event listener para el botón de tema
themeToggle.addEventListener('click', () => {
    const currentTheme = html.classList.contains('dark-mode') ? 'dark' : 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
});

// Escuchar cambios en la preferencia del sistema
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    const newTheme = e.matches ? 'dark' : 'light';
    if (!localStorage.getItem('theme')) {
        applyTheme(newTheme);
    }
});

// Inicializar tema al cargar la página
initTheme();

// ===== MENU HAMBURGUESA =====
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    menuToggle.setAttribute('aria-expanded', navMenu.classList.contains('active'));
});

// Cerrar menú al hacer clic en un enlace
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', false);
    });
});

// Cerrar menú al hacer clic fuera
document.addEventListener('click', (e) => {
    if (!e.target.closest('nav')) {
        navMenu.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', false);
    }
});

// ===== SMOOTH SCROLLING =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
}); 

// ===== ACTIVE NAVIGATION LINK =====
window.addEventListener('scroll', () => {
    const navLinks = document.querySelectorAll('nav ul li a');
    let current = '';

    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ===== FORM SUBMISSION CON VALIDACIÓN MEJORADA =====
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Obtener valores del formulario
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const message = document.getElementById('message');

        // Resetear estilos previos
        [name, email, message].forEach(el => {
            el.style.borderColor = '';
            el.style.backgroundColor = '';
        });

        // Validar campos
        let isValid = true;
        if (name.value.trim() === '') {
            name.style.borderColor = '#ff6b6b';
            name.style.backgroundColor = 'rgba(255, 107, 107, 0.1)';
            isValid = false;
        }
        if (email.value.trim() === '') {
            email.style.borderColor = '#ff6b6b';
            email.style.backgroundColor = 'rgba(255, 107, 107, 0.1)';
            isValid = false;
        }
        if (message.value.trim() === '') {
            message.style.borderColor = '#ff6b6b';
            message.style.backgroundColor = 'rgba(255, 107, 107, 0.1)';
            isValid = false;
        }

        if (!isValid) {
            showNotification('Por favor, completa todos los campos.', 'error');
            return;
        }

        // Validar email mejorada
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value)) {
            email.style.borderColor = '#ff6b6b';
            email.style.backgroundColor = 'rgba(255, 107, 107, 0.1)';
            showNotification('Por favor, ingresa un email válido.', 'error');
            return;
        }

        // Mostrar mensaje de éxito
        showNotification(`¡Gracias ${name.value}! Tu mensaje ha sido enviado. Te contactaremos pronto.`, 'success');

        // Limpiar formulario
        this.reset();
        [name, email, message].forEach(el => {
            el.style.borderColor = '';
            el.style.backgroundColor = '';
        });
    });
}

// Función para mostrar notificaciones mejoradas
function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.textContent = message;
    const bgColor = type === 'success' ? '#4caf50' : '#ff6b6b';
    notification.style.cssText = 'position:fixed;top:20px;left:50%;transform:translateX(-50%);padding:15px 25px;background:' + bgColor + ';color:white;border-radius:8px;box-shadow:0 8px 25px rgba(0, 0, 0, 0.2);z-index:2000;font-weight:500;';
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 4000);
}

// ===== ANIMACIÓN AL SCROLL (Intersection Observer) =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'slideInUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observar elementos de la página
document.querySelectorAll('.feature, .car-card, .testimonial').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

// ===== EFECTO PARALLAX EN EL HERO =====
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    if (hero) {
        const scrollPosition = window.pageYOffset;
        hero.style.backgroundPosition = 'center ' + (scrollPosition * 0.5) + 'px';
    }
});

// ===== BOTON VOLVER ARRIBA =====
const backToTopBtn = document.getElementById('backToTopBtn');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ===== BOTONES VER DETALLES (Car Details) =====
document.querySelectorAll('.car-details-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        const carCard = this.closest('.car-card');
        const carName = carCard.querySelector('h3').textContent;
        const carPrice = carCard.querySelector('.car-price').textContent;
        
        showNotification(carName + ' - ' + carPrice + '. Contactanos para mas informacion!', 'success');
    });
});

// ===== COUNTER ANIMATION (Opcional para agregar números) =====
function animateValue(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        element.textContent = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

console.log('Script loaded successfully!');
