# 🏁 AutoVentas - Landing Page

Una landing page moderna y responsiva para la venta de autos con un diseño elegante, animaciones suaves y funcionalidades completas.

## 🔗 Live Demo

**Ver la página en vivo:** [https://maurux01.github.io/landing-page-proto/](https://maurux01.github.io/landing-page-proto/)

---

## ✨ Características

✅ **Diseño Moderno**: Interfaz atractiva con gradientes, animaciones suave y efectos visuales  
✅ **100% Responsivo**: Optimizado para móviles, tablets y desktop  
✅ **Rápido y Ligero**: Sin dependencias externas, código vanilla HTML/CSS/JS  
✅ **Optimizado para SEO**: Meta tags, estructura semántica y accesibilidad  
✅ **Formulario de Contacto**: Con validación y feedback de usuario  
✅ **Animaciones Scroll**: Intersection Observer para animaciones elegantes  
✅ **Navegación Suave**: Smooth scrolling y navegación intuitiva  

---

## 📋 Secciones

- **Hero**: Banner principal con llamada a la acción
- **Sobre Nosotros**: Características y ventajas del negocio
- **Autos Destacados**: Galería de vehículos con descripción y precios
- **Testimonios**: Opiniones de clientes satisfechos
- **Contacto**: Formulario para consultas
- **Footer**: Información de contacto y derechos

---

## 🛠️ Tecnologías Usadas

- **HTML5**: Estructura semántica y accesible
- **CSS3**: Estilos modernos, animaciones y media queries
- **JavaScript Vanilla**: Sin frameworks, solo JavaScript puro
- **Google Fonts**: Tipografía premium (Poppins + Playfair Display)

---

## 📁 Estructura de Archivos

```
landing-page-proto-1/
├── INDEX.html          # Archivo HTML principal
├── styles.css          # Estilos CSS separados
├── script.js           # JavaScript separado
└── README.md           # Este archivo
```

---

## 🚀 Cómo Usar

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/Maurux01/landing-page-proto.git
   cd landing-page-proto
   ```

2. **Abrir la página:**
   - Simplemente abre `INDEX.html` en tu navegador
   - O usa un servidor local (recomendado):
     ```bash
     # Con Python 3
     python -m http.server 8000
     
     # Con Node.js (http-server)
     npx http-server
     ```

3. **Ver en el navegador:**
   - Ve a `http://localhost:8000`

---

## 📝 Personalización

### Cambiar Colores
Edita las variables CSS en `styles.css`:
```css
:root {
    --primary-color: #c0392b;
    --secondary-color: #e74c3c;
    /* ... más colores ... */
}
```

### Agregar/Modificar Autos
Edita la sección de autos en `INDEX.html`:
```html
<div class="car-card">
    <img src="tu-imagen.jpg" alt="Modelo Auto">
    <h3>Modelo Auto Año</h3>
    <p>Descripción del auto...</p>
    <div class="car-price">$Precio USD</div>
</div>
```

### Configurar Formulario de Contacto
El formulario valida datos pero no envía por defecto. Para integrar backend:
- Modifica la función `contactForm.addEventListener` en `script.js`
- Integra con servicios como Formspree, EmailJS o tu propio backend

---

## 📱 Responsive Breakpoints

- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Móvil**: 480px - 767px
- **Móvil pequeño**: < 480px

---

## 🎨 Paleta de Colores

| Color | Código | Uso |
|-------|--------|-----|
| Rojo Principal | `#c0392b` | Botones, acentos |
| Rojo Secundario | `#e74c3c` | Gradientes, hover |
| Azul | `#3498db` | Acentos |
| Dorado | `#f39c12` | Testimonios, estrellas |
| Oscuro | `#1a2332` | Fondo header |
| Gris Claro | `#f8f9fa` | Fondos alternos |

---

## ✅ Funcionalidades JavaScript

- **Smooth Scrolling**: Navegación suave entre secciones
- **Form Validation**: Validación de campos antes de envío
- **Intersection Observer**: Animaciones al scroll
- **Active Link Tracking**: Resalta el link activo en navegación
- **Parallax Effect**: Efecto parallax en hero section

---

## 🔒 SEO Optimization

✅ Meta tags estructurados  
✅ Títulos y descripciones  
✅ Estructura HTML semántica  
✅ Imágenes optimizadas con alt text  
✅ Navegación clara con anclas  

---

## 📄 Licencia

Este proyecto está bajo licencia MIT. Puedes usarlo libremente en proyectos personales y comerciales.

---

## 👨‍💻 Autor

**Maurux01** - [GitHub](https://github.com/Maurux01)

---

## 💡 Mejoras Futuras

- [ ] Integración con backend para formulario
- [ ] Slider de autos destacados
- [ ] Chat en vivo
- [ ] Blog o noticias
- [ ] Sistema de reservas
- [ ] Dark mode

---

## 📞 Contacto

Para preguntas o sugerencias, abre un [Issue](https://github.com/Maurux01/landing-page-proto/issues) en el repositorio.

---

**Última actualización:** Marzo 2024