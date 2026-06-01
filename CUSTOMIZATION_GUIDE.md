# Customization Guide - Mohamed Tarek Portfolio

## Quick Reference

This guide covers how to customize every aspect of the portfolio to match your personal brand and information.

---

## 1. Personal Information Updates

### Hero Section (`src/components/Hero.jsx`)

**Location:** Lines 40-60

Update your name and title:
```jsx
<h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
  <span className="gradient-text">Mohamed Tarek</span>  {/* CHANGE THIS */}
</h1>

<h2 className="text-2xl sm:text-3xl lg:text-4xl text-gray-300 mb-8 font-light">
  System Operations Engineer  {/* CHANGE THIS */}
</h2>
```

Update tech stack tags:
```jsx
{['Linux', 'AWS', 'Docker', 'Kubernetes', 'Ansible'].map((tech) => (
  // Add/remove items from this array
))}
```

Update introduction paragraph:
```jsx
<motion.p variants={itemVariants} className="...">
  DevOps enthusiast with expertise in Linux administration...
  {/* REPLACE WITH YOUR INTRODUCTION */}
</motion.p>
```

### Footer (`src/components/Footer.jsx`)

Update footer tagline:
```jsx
<p className="text-gray-500 text-sm">
  © {currentYear} Your Name. All Rights Reserved.  {/* CHANGE THIS */}
</p>
```

---

## 2. About Section (`src/components/About.jsx`)

### Professional Summary
Around line 60:
```jsx
<p className="text-gray-300 text-lg leading-relaxed">
  I am a dedicated System Operations Engineer...
  {/* REPLACE WITH YOUR SUMMARY */}
</p>
```

### Expertise List
Around line 68:
```jsx
{[
  'Linux Administration',
  'AWS Cloud Services',
  'Container Technologies',
  // ADD/REMOVE YOUR EXPERTISE ITEMS
].map((item, index) => (
  // mapped over
))}
```

### Highlight Cards
Around line 30, update the `highlights` array:
```jsx
const highlights = [
  {
    icon: FiServer,
    title: 'Your Skill Title',
    desc: 'Your skill description',
  },
  // Add more highlights
]
```

---

## 3. Skills Section (`src/components/Skills.jsx`)

### Add or Modify Skill Categories

Find the `skillCategories` array (around line 30) and customize:

```jsx
const skillCategories = [
  {
    category: 'Linux',  // Category name
    skills: [
      { name: 'RHEL', icon: FaLinux },      // Change skill name
      { name: 'CentOS', icon: FaLinux },
      // Add more skills
    ],
  },
  // Add more categories
]
```

### Add New Icon
Import from react-icons:
```jsx
import { FiYourIcon } from 'react-icons/fi'
```

Then use it:
```jsx
{ name: 'YourSkill', icon: FiYourIcon }
```

Available icon libraries:
- `react-icons/fi` - Feather Icons
- `react-icons/fa` - Font Awesome
- `react-icons/bs` - Bootstrap Icons
- `react-icons/md` - Material Design
- `react-icons/bi` - BoxIcons

---

## 4. Projects Section (`src/components/Projects.jsx`)

### Add/Edit Projects

Find the `projects` array (around line 9):

```jsx
const projects = [
  {
    title: 'Your Project Title',
    description: 'Your project description explaining what it does and technologies used.',
    tags: [
      { name: 'Technology1', icon: IconName },
      { name: 'Technology2', icon: IconName },
    ],
    image: 'bg-gradient-to-br from-cyan-900/30 to-blue-900/30',  // Gradient color
    github: 'https://github.com/yourusername/yourproject',  // Your GitHub link
    demo: 'https://demo-link.com',  // Your demo link
  },
  // Add more projects
]
```

### Gradient Color Options
```
from-cyan-900/30 to-blue-900/30      // Blue-Cyan
from-red-900/30 to-orange-900/30     // Red-Orange
from-yellow-900/30 to-orange-900/30  // Yellow-Orange
from-green-900/30 to-cyan-900/30     // Green-Cyan
from-purple-900/30 to-pink-900/30    // Purple-Pink
```

---

## 5. Certifications Section (`src/components/Certifications.jsx`)

### Update Certifications

Find the `certifications` array (around line 8):

```jsx
const certifications = [
  {
    title: 'Your Certification Name',
    issuer: 'Issuing Organization',
    icon: FiAward,  // Choose icon
    color: 'from-orange-500 to-yellow-500',  // Gradient
    date: 'Issued YYYY',
  },
  // Add more certifications
]
```

### Available Icon Colors
- `from-orange-500 to-yellow-500` - Orange/Yellow
- `from-red-500 to-pink-500` - Red/Pink
- `from-blue-500 to-cyan-500` - Blue/Cyan
- `from-purple-500 to-blue-500` - Purple/Blue
- `from-green-500 to-teal-500` - Green/Teal

---

## 6. Experience Section (`src/components/Experience.jsx`)

### Update Work Experience

Find the `experiences` array (around line 5):

```jsx
const experiences = [
  {
    title: 'Your Job Title',
    company: 'Company Name',
    duration: 'Start Year - Present',
    responsibilities: [
      'Responsibility 1',
      'Responsibility 2',
      'Responsibility 3',
      // Add more responsibilities
    ],
  },
]
```

### Add Education Items

Around line 70, update the education list:
```jsx
{[
  'Your Degree or Certification',
  'Another Achievement',
  // Add more
].map((item, index) => (
  // mapping
))}
```

---

## 7. Blog Section (`src/components/Blog.jsx`)

### Add Blog Articles

Find the `articles` array (around line 5):

```jsx
const articles = [
  {
    title: 'Article Title',
    excerpt: 'Short excerpt that describes the article...',
    date: 'Month Day, Year',
    readTime: 'X min read',
    tags: ['Tag1', 'Tag2', 'Tag3'],
    color: 'from-blue-900/30 to-cyan-900/30',  // Background gradient
  },
  // Add more articles
]
```

### Color Combinations
```
from-blue-900/30 to-cyan-900/30      // Blue-Cyan
from-red-900/30 to-orange-900/30     // Red-Orange
from-purple-900/30 to-pink-900/30    // Purple-Pink
from-orange-900/30 to-yellow-900/30  // Orange-Yellow
```

---

## 8. Contact Section (`src/components/Contact.jsx`)

### Update Contact Information

Find the `contactMethods` array (around line 10):

```jsx
const contactMethods = [
  {
    icon: FiMail,
    label: 'Email',
    value: 'tarek@example.com',  // Your email
    href: 'mailto:tarek@example.com',
  },
  {
    icon: FiPhone,
    label: 'Phone',
    value: '+1 (555) 123-4567',  // Your phone
    href: 'tel:+15551234567',
  },
  {
    icon: FiLinkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/mohamedtarek',  // Your LinkedIn
    href: 'https://linkedin.com/in/mohamedtarek',
  },
  {
    icon: FiGithub,
    label: 'GitHub',
    value: 'github.com/mohamedtarek',  // Your GitHub
    href: 'https://github.com/mohamedtarek',
  },
]
```

### Contact Form Submission

To enable actual email sending, install a service:
```bash
npm install emailjs-com
```

Update `Contact.jsx`:
```jsx
import emailjs from 'emailjs-com'

const handleSubmit = (e) => {
  e.preventDefault()
  emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData)
    .then(() => setSubmitted(true))
    .catch(err => console.error(err))
}
```

---

## 9. Color Theme Customization

### Global Colors (`tailwind.config.js`)

Around line 8, customize colors:
```javascript
colors: {
  dark: {
    bg: '#0a0e27',      // Main background - your color
    secondary: '#1a1f3a',  // Secondary background
    tertiary: '#252d48'    // Tertiary background
  },
  accent: {
    blue: '#00d4ff',    // Primary accent
    cyan: '#00f0ff',    // Secondary accent
    purple: '#a855f7'   // Tertiary accent
  }
}
```

### Update CSS Variables

In `src/index.css`, update gradient animations:
```css
.animated-bg {
  background: linear-gradient(-45deg, #00d4ff, #0a0e27, #a855f7, #00f0ff);
  /* Change color values above */
}
```

### Quick Color Palettes

**Professional Blue Theme:**
```
bg: #0f0f1e, secondary: #1a1a2e, accent-blue: #0066ff, accent-cyan: #00bfff
```

**DevOps Orange Theme:**
```
bg: #1a1410, secondary: #2d2419, accent-blue: #ff6600, accent-cyan: #ffaa33
```

**Hacker Green Theme:**
```
bg: #0a0e0a, secondary: #1a1f1a, accent-blue: #00ff00, accent-cyan: #66ff66
```

---

## 10. Typography Customization

### Font Families (`src/index.css`)

Update font-family in the body:
```css
body {
  font-family: 'Your Font Name', -apple-system, BlinkMacSystemFont, ...;
}
```

Add Google Fonts to `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=Your+Font&display=swap" rel="stylesheet">
```

Then use in Tailwind config:
```javascript
theme: {
  fontFamily: {
    sans: ['Your Font', ...],
  }
}
```

### Text Size Adjustments

In `tailwind.config.js`:
```javascript
fontSize: {
  '2xl': ['1.5rem', { lineHeight: '2rem' }],
  '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
  // Customize as needed
}
```

---

## 11. Animation Customization

### Framer Motion Examples

Make animations faster:
```jsx
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.3 }}  // Reduce from 0.8
```

Disable animations for performance:
```jsx
transition={{ duration: 0 }}  // Instant
```

### Custom Keyframe Animations

In `src/index.css`:
```css
@keyframes customAnimation {
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
}

.animate-custom {
  animation: customAnimation 1.5s ease-in-out infinite;
}
```

Then use in components:
```jsx
<div className="animate-custom">Animated content</div>
```

---

## 12. Adding New Sections

### Template for New Section

Create `src/components/NewSection.jsx`:
```jsx
import React from 'react'
import { motion } from 'framer-motion'

const NewSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section id="newsection" className="py-24 px-4 sm:px-6 lg:px-8">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">
            Section Title
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-blue to-accent-cyan mx-auto" />
        </motion.div>

        {/* Your content here */}
      </motion.div>
    </section>
  )
}

export default NewSection
```

Then add to `App.jsx`:
```jsx
import NewSection from './components/NewSection'

function App() {
  return (
    <main>
      {/* ... existing sections ... */}
      <NewSection />
    </main>
  )
}
```

---

## 13. Image Optimization

### Replace Gradient Placeholders

Instead of:
```jsx
<div className="bg-gradient-to-br from-cyan-900/30 to-blue-900/30 h-40" />
```

Use:
```jsx
<img 
  src="/images/project-name.webp" 
  alt="Project description"
  className="w-full h-40 object-cover rounded-lg"
/>
```

### Add Images to Public Folder

1. Create `public/images/` directory
2. Add your images as `.webp` format (smaller file size)
3. Reference as shown above

### Image Optimization Tools

- TinyPNG.com - Compress images
- CloudConvert.com - Convert to WebP
- ImageOptim - Batch processing

---

## 14. SEO Customization

### Update Meta Tags (`index.html`)

```html
<meta name="description" content="Your professional summary">
<meta name="keywords" content="devops, linux, aws, docker">
<meta property="og:title" content="Your Name - Your Title">
<meta property="og:description" content="Your summary">
<meta property="og:image" content="https://yourdomain.com/og-image.png">
<meta name="twitter:card" content="summary_large_image">
```

### Add JSON-LD Schema

In `App.jsx`:
```jsx
useEffect(() => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Your Name",
    "jobTitle": "Your Title",
    "url": "https://yourdomain.com",
  }
  // Inject into page
}, [])
```

---

## 15. Common Customization Tasks

### Remove a Section
1. Remove component import from `App.jsx`
2. Remove component usage from JSX
3. Remove from navigation menu

### Change Navigation Links
In `Navigation.jsx`, update the `menuItems` array

### Update CV Download Link
In `Hero.jsx`, update the `handleDownloadCV` function:
```jsx
const handleDownloadCV = () => {
  window.open('https://yourdomain.com/cv.pdf', '_blank')
}
```

### Add GitHub Integration
Install: `npm install @octokit/rest`

Fetch GitHub data dynamically instead of hardcoding

### Enable Dark/Light Mode
Install: `npm install next-themes`

Implement theme toggle button

---

## Verification Checklist

After customizations, verify:

- [ ] All names and titles updated
- [ ] All links pointing to correct URLs
- [ ] Images loading properly
- [ ] Colors match your brand
- [ ] Animations working smoothly
- [ ] Mobile responsive layout
- [ ] Navigation links working
- [ ] Contact form functional
- [ ] SEO meta tags updated
- [ ] No console errors

---

## Need Help?

- Check component comments for guidance
- Test changes with `npm run dev`
- Build and preview with `npm run build && npm run preview`
- Reference React documentation for deeper customizations

---

**Happy customizing! 🎨**
