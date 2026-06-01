# ⚡ Quick Start Guide

## 🚀 30-Second Setup

```bash
# 1. Navigate to project
cd d:\portfolio

# 2. Install dependencies (skip if already done)
npm install

# 3. Start development server
npm run dev

# 4. Open browser
# Visit http://localhost:5173
```

That's it! Your portfolio is now running.

---

## 📋 Essential Commands

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start development server (localhost:5173) |
| `npm run build` | Create production build |
| `npm run preview` | Test production build locally |
| `npm install` | Install dependencies |
| `npm update` | Update all packages |

---

## ✏️ Quick Customizations

### Change Your Name
File: `src/components/Hero.jsx` (line 45)
```jsx
<span className="gradient-text">YOUR NAME HERE</span>
```

### Change Your Title
File: `src/components/Hero.jsx` (line 50)
```jsx
<h2 className="text-2xl...">YOUR TITLE HERE</h2>
```

### Change Your Email
File: `src/components/Contact.jsx` (line 12)
```jsx
{
  icon: FiMail,
  label: 'Email',
  value: 'YOUR_EMAIL@example.com',
  href: 'mailto:YOUR_EMAIL@example.com',
}
```

### Change LinkedIn URL
File: `src/components/Contact.jsx` (line 25)
```jsx
href: 'https://linkedin.com/in/YOUR_PROFILE',
```

### Change GitHub URL
File: `src/components/Contact.jsx` (line 31)
```jsx
href: 'https://github.com/YOUR_USERNAME',
```

---

## 🎨 Color Customization

### Change Primary Colors
File: `tailwind.config.js` (line 8-18)

```javascript
colors: {
  dark: {
    bg: '#0a0e27',      // Main background
    secondary: '#1a1f3a', // Cards background
    tertiary: '#252d48'   // Hover background
  },
  accent: {
    blue: '#00d4ff',    // Primary accent
    cyan: '#00f0ff',    // Secondary accent
    purple: '#a855f7'   // Tertiary accent
  }
}
```

---

## 📚 File Guide

### Configuration Files
- `package.json` - Dependencies & scripts
- `vite.config.js` - Build settings
- `tailwind.config.js` - Colors & styles
- `postcss.config.js` - CSS processing
- `index.html` - HTML template

### React Files
- `src/main.jsx` - Entry point
- `src/App.jsx` - Main component
- `src/components/*.jsx` - 11 sections

### Documentation
- `README.md` - Project info
- `DEPLOYMENT_GUIDE.md` - How to deploy
- `CUSTOMIZATION_GUIDE.md` - Customization details
- `PROJECT_OVERVIEW.md` - Full overview
- `QUICK_START_GUIDE.md` - This file

---

## 🚀 Deployment (Choose One)

### Option 1: Vercel (Easiest)
1. Push to GitHub
2. Go to https://vercel.com
3. Import project
4. Deploy! 🎉

### Option 2: Netlify
1. Run `npm run build`
2. Drag & drop `dist/` to https://netlify.com
3. Deploy! 🎉

### Option 3: GitHub Pages
1. Run `npm run build`
2. Upload `dist/` to GitHub
3. Enable GitHub Pages

See `DEPLOYMENT_GUIDE.md` for full instructions on all 5 options.

---

## ❓ Common Questions

**Q: How do I change the color scheme?**
A: Edit colors in `tailwind.config.js`

**Q: How do I add more projects?**
A: Edit `src/components/Projects.jsx` - add to the `projects` array

**Q: How do I add more skills?**
A: Edit `src/components/Skills.jsx` - add to the `skillCategories` array

**Q: How do I deploy?**
A: See `DEPLOYMENT_GUIDE.md` for 5 deployment options

**Q: Can I use different fonts?**
A: Yes! Update in `tailwind.config.js` and `src/index.css`

**Q: Mobile responsive?**
A: Yes! Fully responsive on all devices

**Q: How do I make the contact form work?**
A: Install EmailJS: `npm install emailjs-com`
   Then update `src/components/Contact.jsx`

---

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/        # 11 React sections
│   ├── App.jsx           # Main component
│   ├── main.jsx          # Entry point
│   └── index.css         # Global styles
├── public/               # Static files
├── index.html            # HTML template
├── package.json          # Dependencies
├── vite.config.js        # Build config
├── tailwind.config.js    # Color config
└── postcss.config.js     # CSS config
```

---

## 🐛 Troubleshooting

### Problem: Styles not loading
```bash
# Delete node_modules and reinstall
rm -r node_modules
npm install
npm run dev
```

### Problem: Port 5173 already in use
```bash
# Kill the process and restart
npm run dev
# Or use a different port: npm run dev -- --port 3000
```

### Problem: Build fails
```bash
# Check for errors
npm run build

# If still failing, check console for specific error
```

### Problem: Component not showing
1. Check it's imported in `App.jsx`
2. Check the component ID matches navigation href
3. Run `npm run dev` to restart server

---

## 📊 Performance Tips

✅ **Already Optimized:**
- Lazy animations
- CSS minification
- Code splitting
- Image optimization

✅ **To Improve Further:**
- Add real images (instead of gradients)
- Enable compression
- Add CDN for images
- Use image lazy loading

---

## 🔒 Security

✅ **Already Included:**
- HTTPS ready (all hosting options support it)
- No sensitive data in code
- Dependencies regularly updated
- Content Security Policy ready

---

## 📈 Analytics (Optional)

To add Google Analytics:

1. Add to `index.html` in `<head>`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

2. Replace `GA_ID` with your Google Analytics ID

---

## 💾 Backup & Version Control

```bash
# Initialize git (if not already)
git init
git add .
git commit -m "Initial portfolio commit"

# Create GitHub repository and push
git remote add origin https://github.com/YOUR_USERNAME/portfolio
git push -u origin main
```

---

## 🎯 Action Checklist

Before deploying:

- [ ] Update your name in Hero section
- [ ] Update your title/description
- [ ] Update contact email
- [ ] Update LinkedIn URL
- [ ] Update GitHub URL
- [ ] Update projects (or remove dummy ones)
- [ ] Update skills
- [ ] Update certifications
- [ ] Update experience
- [ ] Test with `npm run dev`
- [ ] Run `npm run build` - should succeed
- [ ] Deploy using chosen platform

---

## 🚀 Deploy Now!

```bash
# 1. Verify everything works
npm run dev

# 2. Build for production
npm run build

# 3. Deploy using Vercel/Netlify/GitHub Pages
# (See DEPLOYMENT_GUIDE.md for instructions)
```

---

## 📞 Need Help?

1. Check `CUSTOMIZATION_GUIDE.md` for detailed customization
2. Check `DEPLOYMENT_GUIDE.md` for deployment help
3. Check `PROJECT_OVERVIEW.md` for technical details
4. Review component comments for code guidance
5. Check browser console (`F12`) for errors

---

## ✨ You're Ready!

Your portfolio is complete and ready to go live. Start customizing your information and deploy!

**Happy portfolio-building! 🎨**

---

**Next Step:** Follow `CUSTOMIZATION_GUIDE.md` to personalize your portfolio.
