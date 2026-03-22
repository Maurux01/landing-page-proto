# AutoVentas - Landing Page 

A modern and responsive landing page for car sales with elegant design, smooth animations, and complete functionality.

## Live Demo

**View the live page:** [https://maurux01.github.io/landing-page-proto/](https://maurux01.github.io/landing-page-proto/)

---

## Features

- **Modern Design**: Attractive interface with gradients, smooth animations, and visual effects
- **100% Responsive**: Optimized for mobile, tablet, and desktop
- **Fast and Lightweight**: No external dependencies, vanilla HTML/CSS/JS
- **SEO Optimized**: Meta tags, semantic structure, and accessibility
- **Contact Form**: With validation and user feedback
- **Scroll Animations**: Intersection Observer for elegant animations
- **Smooth Navigation**: Smooth scrolling and intuitive navigation

---

## Sections

- **Hero**: Main banner with call-to-action
- **About Us**: Business features and benefits
- **Featured Cars**: Vehicle gallery with descriptions and prices
- **Testimonials**: Satisfied customer opinions
- **Contact**: Inquiry form
- **Footer**: Contact information and rights

---

## Technologies Used

- **HTML5**: Semantic and accessible structure
- **CSS3**: Modern styles, animations, and media queries
- **Vanilla JavaScript**: No frameworks, pure JavaScript
- **Google Fonts**: Premium typography (Poppins + Playfair Display)

---

## File Structure

```
landing-page-proto/
├── index.html          # Main HTML file
├── styles.css          # CSS styles
├── script.js           # JavaScript code
└── README.md           # This file
```

---

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Maurux01/landing-page-proto.git
   cd landing-page-proto
   ```
2. **Open the page:**

   - Simply open `index.html` in your browser
   - Or use a local server (recommended):
     ```bash
     # With Python 3
     python -m http.server 8000

     # With Node.js (http-server)
     npx http-server
     ```
3. **View in browser:**

   - Go to `http://localhost:8000`

---

## Customization

### Change Colors

Edit the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #c0392b;
    --secondary-color: #e74c3c;
    /* ... more colors ... */
}
```

### Add/Modify Cars

Edit the cars section in `index.html`:

```html
<div class="car-card">
    <img src="your-image.jpg" alt="Car Model">
    <h3>Car Model Year</h3>
    <p>Car description...</p>
    <div class="car-price">$Price USD</div>
</div>
```

### Configure Contact Form

The form validates data but doesn't send by default. To integrate backend:

- Edit the `contactForm.addEventListener` function in `script.js`
- Integrate with services like Formspree, EmailJS, or your own backend

---

## Responsive Breakpoints

- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: 480px - 767px
- **Small Mobile**: < 480px

---

## Color Palette

| Color         | Code        | Usage                 |
| ------------- | ----------- | --------------------- |
| Primary Red   | `#c0392b` | Buttons, accents      |
| Secondary Red | `#e74c3c` | Gradients, hover      |
| Blue          | `#3498db` | Accents               |
| Gold          | `#f39c12` | Testimonials, stars   |
| Dark          | `#1a2332` | Header background     |
| Light Gray    | `#f8f9fa` | Alternate backgrounds |

---

## JavaScript Features

- **Smooth Scrolling**: Smooth navigation between sections
- **Form Validation**: Field validation before submission
- **Intersection Observer**: Animations on scroll
- **Active Link Tracking**: Highlights active navigation link
- **Parallax Effect**: Parallax effect in hero section

---

## SEO Optimization

- Structured meta tags
- SEO-friendly titles and descriptions
- Semantic HTML structure
- Optimized images with alt text
- Clear navigation with anchors

---

## License

This project is under the MIT license. You can use it freely in personal and commercial projects.

---

## Author

**Maurux01** - [GitHub](https://github.com/Maurux01)

---

## Future Improvements

- [ ] Backend integration for contact form
- [ ] Featured cars slider
- [ ] Live chat
- [ ] Blog or news section
- [ ] Booking system
- [ ] Dark mode

---

## Support

For questions or suggestions, open an [Issue](https://github.com/Maurux01/landing-page-proto/issues) on the repository.

---

**Last updated:** March 2026
