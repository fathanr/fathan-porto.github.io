# QA Engineer Portfolio Website

A professional single-page portfolio website showcasing QA Engineering expertise, projects, and skills.

## Features

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Smooth scrolling navigation
- ✅ Project filtering system
- ✅ Collapsible sections
- ✅ Contact form with validation
- ✅ Back-to-top button
- ✅ Fade-in animations
- ✅ Minimalist professional design

## Structure

```
portfolio/
├── index.html          # Main HTML file
├── css/
│   ├── style.css       # Main styles
│   └── responsive.css  # Responsive styles
├── js/
│   ├── main.js         # Core functionality
│   └── filter.js       # Project filtering
├── assets/
│   ├── images/         # Project images
│   │   ├── mindid/
│   │   ├── mountseerah/
│   │   ├── pertamina/
│   │   ├── pamafix/
│   │   └── pamafix-sap/
│   └── icons/          # UI icons
└── README.md           # This file
```

## How to Update Content

### Personal Information

Edit `index.html` and update:
- Hero section (lines 30-35): Your name and tagline
- About section (lines 39-43): Your bio and description

### Skills

Edit the skills section in `index.html` (lines 47-70):
- Add or remove skill badges
- Update categories as needed

### Experience

Edit experience items in `index.html` (lines 74-95):
- Update job titles, companies, and descriptions
- Add new experience items by copying the `.experience-item` structure

### Projects

Projects are in `index.html` (lines 115-220):
- Update project descriptions
- Replace images in `assets/images/` folders
- Update GitHub links (currently placeholders)
- Modify `data-category` attributes for filtering

### Blog

Edit blog cards in `index.html` (lines 224-250):
- Add real blog posts or external links
- Update titles, dates, and excerpts

### Contact Form

The contact form (lines 254-275) currently shows a success message but doesn't send emails.

To connect to a backend:
1. Edit `js/main.js` (around line 120)
2. Replace the success message with an actual API call
3. Options: FormSpree, EmailJS, or your own backend

### GitHub Links

Update GitHub repository links in each project card:
- Find `<a href="#" class="github-link"` in `index.html`
- Replace `#` with your actual GitHub repository URLs

## Customization

### Colors

Edit CSS variables in `css/style.css` (lines 1-10):
```css
--primary-color: #2c3e50;
--secondary-color: #3498db;
--accent-color: #e74c3c;
```

### Fonts

Change font family in `css/style.css`:
```css
--font-primary: -apple-system, BlinkMacSystemFont, 'Segoe UI', ...;
```

### Spacing

Adjust spacing variables in `css/style.css`:
```css
--spacing-sm: 1rem;
--spacing-md: 2rem;
--spacing-lg: 3rem;
```

## Deployment

### GitHub Pages

1. Create a GitHub repository
2. Push your code
3. Go to Settings > Pages
4. Select main branch as source
5. Your site will be live at `https://yourusername.github.io/repository-name`

### Netlify

1. Create account at netlify.com
2. Drag and drop your portfolio folder
3. Site will be live instantly

### Vercel

1. Create account at vercel.com
2. Import your GitHub repository
3. Deploy with one click

## Image Optimization

To optimize images for better performance:

```bash
# Using ImageMagick
mogrify -resize 1200x -quality 85 assets/images/**/*.png

# Or use online tools:
# - TinyPNG (tinypng.com)
# - Squoosh (squoosh.app)
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Technologies Used

- HTML5
- CSS3 (Grid, Flexbox)
- Vanilla JavaScript
- No frameworks or libraries

## Performance

- Lazy loading images
- Minimal JavaScript
- Optimized CSS
- Fast load times

## Accessibility

- Semantic HTML
- ARIA labels
- Keyboard navigation
- Screen reader friendly

## License

This portfolio template is free to use and modify for personal use.

## Contact

Update your contact information in the footer and contact section.

---

**Last Updated:** February 2026
