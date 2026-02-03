# X-POSE Fitness Club Website

A responsive, professional gym website built with HTML, CSS, and JavaScript. Live at: **https://x-pose.netlify.app/**

## 📋 Pages

- **index.html** - Homepage with hero section, services, testimonials
- **about-us.html** - About the gym, mission, and values
- **services.html** - Fitness services and programs
- **gallery.html** - Photo gallery of facilities
- **contact.html** - Contact form with Google Maps
- **404.html** - Error page

## ✨ Features

✅ Mobile-responsive design (mobile-first)  
✅ SEO optimized with meta tags, Open Graph, Twitter Cards  
✅ Schema.org structured data (LocalBusiness, Organization)  
✅ Professional contact form with validation  
✅ Google Maps integration  
✅ Fast loading with gzip compression & caching  
✅ HTTPS ready  
✅ Sitemap & robots.txt for search engines  

## 🚀 Quick Start

1. Clone the repository
2. Open `index.html` in a browser
3. Deploy to your hosting (Netlify, GitHub Pages, etc.)

## 📁 File Structure

```
├── index.html              # Homepage
├── about-us.html           # About page
├── services.html           # Services page
├── gallery.html            # Gallery page
├── contact.html            # Contact page
├── 404.html                # Error page
├── css/                    # Stylesheets (responsive)
├── js/                     # JavaScript files
├── img/                    # Images
├── fonts/                  # Web fonts
├── robots.txt              # SEO - crawler directives
├── sitemap.xml             # SEO - page index
└── .htaccess               # Server config (compression, caching)
```

## 🔧 Configuration

### Contact Form
Uses Formspree for email. Update the form action in `contact.html`:
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### Google Maps
Embedded Google Maps in `contact.html`. Update coordinates as needed.

### Meta Information
Update business info in schema.org markup:
- **index.html** - LocalBusiness (hours, phone, address)
- **contact.html** - Organization (name, logo, address)

## 📊 SEO Features

- Optimized page titles and descriptions
- Open Graph tags for social media
- Twitter Card tags
- Canonical URLs
- Sitemap (sitemap.xml)
- Robots file (robots.txt)
- LocalBusiness and Organization schema
- Mobile-friendly responsive design

## 🎨 Customization

### Colors & Styling
Edit `css/style.css` for custom colors and layouts.

### Content
Update text directly in HTML files.

### Images
Replace images in `img/` folder while keeping filenames the same.

## 📱 Mobile Responsive

- Mobile: ≤576px
- Tablet: 577px-767px  
- Desktop: ≥768px

## 🔐 Security & Performance

- HTTPS enforced via .htaccess
- Gzip compression (60-80% smaller files)
- Browser caching (1 month for static assets)
- Security headers configured
- Input validation on forms

## 📞 Contact

For support or questions, refer to the contact form on the website.

---

**Live Demo:** https://x-pose.netlify.app/  
**Repository:** https://github.com/Antigraviton-Labs/X-pose-Gym

Last Updated: February 2026
