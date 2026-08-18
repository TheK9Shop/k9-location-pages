# K9 Shop Location Pages — Setup & Deployment Guide

## 📦 Project Overview

A Next.js application showcasing all 7 K9 Shop locations with individual store pages, blog structure, and real-time status banner support.

**Live URL (after deployment):** `https://k9locations-staging.vercel.app` (or your custom domain)

---

## 🗂️ File Structure

```
k9-location-pages/
├── pages/
│   ├── _app.js                  # Global app wrapper
│   ├── index.js                 # Home/gallery page (all locations)
│   ├── locations/
│   │   ├── [slug].js            # Dynamic location pages
│   │   └── index.js             # Locations index (optional)
│   ├── blog/
│   │   ├── index.js             # Blog archive page
│   │   └── [slug].js            # Dynamic blog post pages
│   └── 404.js                   # Custom 404 page (optional)
├── components/
│   ├── Navigation.jsx           # Header nav with location selector
│   ├── LocationHero.jsx         # Hero section for location pages
│   ├── LocationPage.jsx         # Main location page component
│   ├── StatusBanner.jsx         # Urgent status banners (Supabase ready)
│   └── Footer.jsx               # Footer shared across all pages
├── data/
│   ├── locations.js             # All 7 locations data
│   └── blog.js                  # Blog structure & metadata
├── styles/
│   └── globals.css              # Design system & global styles
├── public/
│   └── (images, icons, etc.)
├── package.json
├── next.config.js
└── README.md
```

---

## 🚀 Quick Start (Local Development)

### 1. Create the Project Structure

```bash
# Create project directory
mkdir k9-location-pages
cd k9-location-pages

# Copy all the files you created into the appropriate directories
# pages/ files go into pages/
# components/ files go into components/
# data/ files go into data/
# styles/ files go into styles/
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Run Development Server

```bash
npm run dev
# or
yarn dev
```

Visit `http://localhost:3000` to see your site.

### 4. Test All Pages

- **Home:** `http://localhost:3000/`
- **Locations:** 
  - `http://localhost:3000/locations/bohemia`
  - `http://localhost:3000/locations/greenville`
  - etc.
- **Blog:** `http://localhost:3000/blog`

---

## 📋 File Mapping

Here's where each file from the outputs should go:

| File | Destination | Notes |
|------|-------------|-------|
| `package.json` | `./package.json` | Root level |
| `next.config.js` | `./next.config.js` | Root level |
| `globals.css` | `./styles/globals.css` | Create styles/ folder |
| `Navigation.jsx` | `./components/Navigation.jsx` | Create components/ folder |
| `LocationHero.jsx` | `./components/LocationHero.jsx` | Create components/ folder |
| `LocationPage.jsx` | `./components/LocationPage.jsx` | Create components/ folder |
| `StatusBanner.jsx` | `./components/StatusBanner.jsx` | Create components/ folder |
| `Footer.jsx` | `./components/Footer.jsx` | Create components/ folder |
| `locations.js` | `./data/locations.js` | Create data/ folder |
| `blog.js` | `./data/blog.js` | Create data/ folder |
| `pages_index.js` | `./pages/index.js` | Create pages/ folder, rename |
| `pages_locations_slug.js` | `./pages/locations/[slug].js` | Create locations/ subfolder, rename |
| `pages_blog_index.js` | `./pages/blog/index.js` | Create blog/ subfolder, rename |
| `pages_blog_slug.js` | `./pages/blog/[slug].js` | Create blog/ subfolder, rename |
| `pages__app.js` | `./pages/_app.js` | Rename |

---

## 🎨 Customization

### Update Location Data

Edit `data/locations.js` to:
- Add new location fields
- Update team information
- Add events
- Modify products
- Change images/photos

### Add Blog Posts (Future)

When ready, add to `data/blog.js`:
```javascript
export const blogPosts = [
  {
    slug: 'raw-feeding-101',
    title: 'Complete Guide to Raw Feeding for Beginners',
    author: 'The K9 Shop',
    date: '2026-09-01',
    category: 'nutrition',
    content: '...',
    excerpt: '...'
  },
  // ... more posts
];
```

### Customize Design

All colors and spacing are in `styles/globals.css` using CSS variables:
```css
--k9-primary-red: #c0392b
--k9-bg-light: #f9f9f7
--k9-text-light: #2c2c2c
/* ... etc */
```

Change these to update the entire site's appearance.

---

## 🚀 Deployment to Vercel

### Step 1: Push to GitHub

```bash
# Initialize git
git init
git add .
git commit -m "Initial K9 Shop location pages"

# Push to GitHub
git remote add origin https://github.com/YOUR_USERNAME/k9-location-pages.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow the prompts:
# - Connect to your GitHub account
# - Select the repository
# - Accept default settings
```

**Or use Vercel Dashboard:**
1. Go to vercel.com
2. Click "New Project"
3. Import your GitHub repository
4. Click "Deploy"

### Step 3: Set Environment Variables (if needed later)

In Vercel Dashboard → Settings → Environment Variables:
```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_key
```

### Step 4: Custom Domain (Optional)

In Vercel Dashboard → Settings → Domains:
- Add your custom domain
- Update DNS records

---

## 🔗 Integration Roadmap

### Phase 1: (CURRENT - DONE ✅)
- ✅ Location pages with all 7 stores
- ✅ Blog structure and categories
- ✅ StatusBanner component (ready for Supabase)
- ✅ Responsive design
- ✅ Navigation and footer

### Phase 2: (NEXT - Supabase Integration)
- [ ] Set up Supabase database with schema from `SUPABASE_SCHEMA_LOCATION_PAGES.sql`
- [ ] Connect intake form to Supabase
- [ ] Deploy approval dashboard
- [ ] Connect StatusBanner to real-time updates
- [ ] Email notifications (Brevo/Mailgun)

### Phase 3: (LATER - Blog Content)
- [ ] Add blog posts to Supabase
- [ ] Implement dynamic blog post rendering
- [ ] Add related posts suggestions
- [ ] Email subscription system

### Phase 4: (FUTURE - Advanced)
- [ ] Comment system
- [ ] Location-specific analytics
- [ ] Newsletter integration
- [ ] Product reviews integration

---

## 📱 Responsive Design

The site is fully responsive:
- **Desktop:** 1200px max-width container
- **Tablet:** Optimized for 768px - 1024px
- **Mobile:** Optimized for < 768px

All CSS media queries are built-in.

---

## ⚡ Performance Tips

1. **Images:** Optimize all product/team photos:
   ```bash
   npx next/image-optimizer
   ```

2. **Cache:** Vercel automatically caches static pages
   - ISR (Incremental Static Regeneration) set to 1 hour
   - Adjust in `getStaticProps()` → `revalidate`

3. **Analytics:** Add Google Analytics later:
   ```bash
   npm install next-google-analytics
   ```

---

## 🔐 Security Checklist

- ✅ HTTPS enforced (Vercel default)
- ✅ Security headers in `next.config.js`
- ✅ X-Frame-Options enabled
- ✅ Content Security Policy ready (add if needed)
- ✅ Environment variables not in code

---

## 🐛 Troubleshooting

### Port 3000 already in use?
```bash
npm run dev -- -p 3001
```

### Build errors?
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### Components not rendering?
- Check import paths
- Verify CSS-in-JSX syntax
- Check for typos in component names

### Deployment fails on Vercel?
1. Check build logs in Vercel Dashboard
2. Verify `package.json` scripts
3. Check for missing dependencies
4. Try `npm install` locally first

---

## 📞 Support & Questions

For issues:
1. Check Next.js docs: https://nextjs.org/docs
2. Check component imports and paths
3. Verify data structure in `locations.js`
4. Test locally with `npm run dev` first

---

## 🎯 Next Steps

1. **Deploy to Vercel** (5 min)
2. **Set up Supabase** (1 hour)
3. **Connect intake form** (2 hours)
4. **Deploy approval dashboard** (1 hour)
5. **Add content and customize** (ongoing)

---

## 📊 Site Structure Summary

```
robertt181.sg-host.com/ (WordPress homepage - stays as-is)
└── k9-location-pages.vercel.app/ (THIS NEW SITE)
    ├── / (Gallery with all 7 locations)
    ├── /locations/bohemia (Individual location pages)
    ├── /locations/greenville
    ├── /locations/[slug] (etc.)
    ├── /blog (Blog archive - ready for posts)
    └── /blog/[slug] (Individual blog posts)
```

---

**Status:** 🟢 Ready for deployment

**Created:** August 2026  
**Last Updated:** August 18, 2026

All 7 locations are live and ready to show franchisees! 🐾
