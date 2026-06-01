# Mohamed Tarek - Portfolio Website

A modern, professional, and responsive personal portfolio website for Mohamed Tarek, System Operations Engineer and DevOps Enthusiast.

## Features

- 🎨 **Modern Dark Theme** - Premium DevOps/Cloud Engineer style
- 📱 **Fully Responsive** - Desktop, tablet, and mobile optimized
- ✨ **Smooth Animations** - Framer Motion for beautiful transitions
- 🎯 **Glassmorphism Design** - Modern frosted glass card effects
- 🚀 **Fast Performance** - Optimized for quick loading
- 🔍 **SEO-Friendly** - Meta tags and proper semantic HTML
- 🎭 **Professional Animations** - Engaging user interactions
- 💨 **Smooth Scrolling** - Seamless section navigation

## Tech Stack

- **React 18** - UI library
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Icons** - Comprehensive icon library

## Sections

1. **Hero Section** - Captivating landing page with CTA buttons
2. **About Me** - Professional summary and expertise highlights
3. **Skills** - Categorized technical skills with icons
4. **Projects** - Featured portfolio projects with descriptions
5. **Certifications** - Professional credentials and achievements
6. **Experience** - Work experience and responsibilities
7. **Blog** - Latest articles and technical insights
8. **Contact** - Contact form and social links
9. **Navigation** - Smooth scrolling navigation bar
10. **Scroll to Top** - Quick navigation button

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone or navigate to the project directory**

```bash
cd portfolio
```

2. **Install dependencies**

```bash
npm install
```

3. **Start the development server**

```bash
npm run dev
```

The portfolio will be available at `http://localhost:5173`

## Building for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` directory.

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically detect the Vite configuration and deploy

### Deploy to Netlify

1. Build the project locally: `npm run build`
2. Connect your GitHub repository to Netlify
3. Set build command to `npm run build`
4. Set publish directory to `dist`

### Other Hosting Options

- GitHub Pages
- Firebase Hosting
- AWS S3 + CloudFront
- Any static hosting service

## Customization

### Update Personal Information

Edit the component files to add your personal details:

- **Hero.jsx** - Update name, title, and introduction
- **About.jsx** - Professional summary
- **Skills.jsx** - Technical skills
- **Projects.jsx** - Project information
- **Certifications.jsx** - Credentials
- **Experience.jsx** - Work experience
- **Blog.jsx** - Blog articles
- **Contact.jsx** - Contact information

### Change Colors

Edit `tailwind.config.js` to customize the color scheme:

```javascript
colors: {
  accent: {
    blue: '#00d4ff',
    cyan: '#00f0ff',
    purple: '#a855f7'
  }
}
```

### Add Your Content

Replace placeholder links and information throughout the components with your actual:
- GitHub profile URL
- LinkedIn profile URL
- Email address
- Project repositories
- Blog article links
- CV/Resume link

## Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Navigation.jsx       # Navigation bar
│   │   ├── Hero.jsx            # Hero section
│   │   ├── About.jsx           # About me section
│   │   ├── Skills.jsx          # Skills section
│   │   ├── Projects.jsx        # Projects section
│   │   ├── Certifications.jsx  # Certifications
│   │   ├── Experience.jsx      # Experience section
│   │   ├── Blog.jsx            # Blog articles
│   │   ├── Contact.jsx         # Contact section
│   │   ├── Footer.jsx          # Footer
│   │   └── ScrollToTop.jsx     # Scroll to top button
│   ├── App.jsx                 # Main app component
│   ├── main.jsx                # Entry point
│   └── index.css               # Global styles
├── index.html                  # HTML template
├── vite.config.js             # Vite configuration
├── tailwind.config.js         # Tailwind configuration
├── postcss.config.js          # PostCSS configuration
├── package.json               # Dependencies
└── README.md                  # This file
```

## Key Features Explained

### Glassmorphism
Modern frosted glass effect using Tailwind's `backdrop-blur` and transparent backgrounds.

### Animations
- Smooth page transitions using Framer Motion
- Staggered animations for content reveal
- Hover effects for interactive elements
- Scroll-triggered animations

### Responsive Design
- Mobile-first approach
- Responsive grid layouts
- Adaptive typography
- Touch-friendly navigation

### Performance
- Code splitting with Vite
- Optimized images
- Minimal dependencies
- Fast loading times

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This project is open source and available for personal use.

## Contact & Support

For questions or support, please reach out through the contact form on the portfolio website.

## Future Enhancements

- [ ] Dark/Light mode toggle
- [ ] Blog functionality with CMS integration
- [ ] Image optimization with next-gen formats
- [ ] Comments section on blog posts
- [ ] Newsletter subscription
- [ ] Search functionality
- [ ] Multiple language support
- [ ] Analytics integration

## Credits

- Design inspiration from modern portfolio websites
- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- Animation library [Framer Motion](https://www.framer.com/motion/)
- Styling with [Tailwind CSS](https://tailwindcss.com/)

---

**Ready to deploy?** Start with the deployment section and get your portfolio online! 🚀
