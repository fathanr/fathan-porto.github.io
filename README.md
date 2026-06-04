# QA Engineer Portfolio Website

A professional single-page QA Engineer portfolio showcasing test strategy, automation, API testing, performance testing, enterprise project evidence, and QA articles.

## Features

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Smooth scrolling navigation
- ✅ Project filtering system
- ✅ Public sanitized QA artifacts (test case, bug report, API scenario, K6 summary, release checklist)
- ✅ Collapsible sections
- ✅ EmailJS contact form with validation and honeypot spam check
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
├── artifacts/          # Sanitized public QA sample documents
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
- Private company repositories are documented with clear non-disclosure notes
- Modify `data-category` attributes for filtering

### QA Artifacts

Public sanitized QA samples are stored in `artifacts/` and linked from the `QA Artifacts` section in `index.html`:
- `sample-test-case.md`
- `sample-bug-report.md`
- `sample-api-test-scenario.md`
- `sample-k6-summary.md`
- `sample-release-checklist.md`

Keep these documents free from confidential client names, real tokens, internal URLs, production data, and private repository details.

### Blog

Edit blog cards in `index.html`:
- Add real blog posts or external links
- Update titles, dates, and excerpts

### Contact Form

The contact form is static-hosting friendly. It uses EmailJS directly from `js/main.js`, so it can run on GitHub Pages without a backend server. Client-side validation and a honeypot field are included for basic spam protection.

If you do not want to expose EmailJS service/template IDs in a public repository, replace the form with direct LinkedIn/email CTA or move the email sending logic to a separate private backend.

### GitHub Links

Repository links are intentionally not shown for private company projects:
- Keep the private-repository note for company projects
- Add public GitHub links only for sanitized/demo QA artifacts

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

This portfolio is a static website. GitHub Pages can serve it directly; no Node, Python, backend, or long-running server is required.

1. Push this repository to GitHub
2. Go to Settings > Pages
3. Select `Deploy from a branch`
4. Choose branch `main` and folder `/ (root)`
5. Save
6. The site will be live from the GitHub Pages URL

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

**Last Updated:** June 2026

