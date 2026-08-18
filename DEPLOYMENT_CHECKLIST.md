# 🚀 K9 Shop Location Pages — Deployment Checklist

## Pre-Deployment (Development Complete ✅)

### Code Quality
- [ ] All 7 locations have complete data
- [ ] No console errors locally (`npm run dev`)
- [ ] Responsive design tested on mobile, tablet, desktop
- [ ] Navigation works across all pages
- [ ] 404 page displays correctly
- [ ] Links are not broken

### Testing
- [ ] Visit home page: http://localhost:3000
- [ ] Visit each location: http://localhost:3000/locations/[slug]
- [ ] Visit blog: http://localhost:3000/blog
- [ ] Test mobile view (F12 → Toggle device toolbar)
- [ ] Test dark mode (if implemented)
- [ ] Test on different browsers (Chrome, Safari, Firefox)

### SEO Pre-Check
- [ ] All page titles are unique and descriptive
- [ ] Meta descriptions are set
- [ ] No duplicate content
- [ ] Images have alt text
- [ ] Mobile-friendly (Lighthouse check)

### Build Verification
```bash
npm run build  # Should complete with no errors
npm start      # Should serve without errors
```

---

## Deployment to Vercel

### Step 1: Connect Repository (10 min)

- [ ] Push code to GitHub (or GitLab/Bitbucket)
- [ ] Go to https://vercel.com
- [ ] Click "New Project"
- [ ] Select "Import Project"
- [ ] Choose your Git provider
- [ ] Select the k9-location-pages repository
- [ ] Click "Import"

### Step 2: Configure Project (5 min)

In Vercel Settings:
- [ ] Project Name: `k9-location-pages`
- [ ] Framework: `Next.js`
- [ ] Root Directory: `./`
- [ ] Build Command: `npm run build`
- [ ] Output Directory: `.next`

### Step 3: Environment Variables (5 min)

In Vercel Dashboard → Settings → Environment Variables:
```
Add the following (leave empty for now, fill later):

NEXT_PUBLIC_SITE_URL = https://k9locations.vercel.app
NEXT_PUBLIC_SUPABASE_URL = (leave blank for now)
NEXT_PUBLIC_SUPABASE_ANON_KEY = (leave blank for now)
```

- [ ] Add all environment variables
- [ ] Set them for all environments (Production, Preview, Development)

### Step 4: Deploy (1-2 min)

- [ ] Click "Deploy"
- [ ] Wait for build to complete (3-5 minutes)
- [ ] Check deployment logs for errors
- [ ] Deployment complete! ✅

**Your site is now live at:** `https://k9locations.vercel.app` (or similar)

---

## Post-Deployment Verification

### Functional Testing
- [ ] Home page loads: https://k9locations.vercel.app/
- [ ] All 7 locations are accessible
- [ ] Navigation works
- [ ] 404 page works at random URL
- [ ] Blog page loads
- [ ] Links to external sites work

### Performance Check
- [ ] Run Lighthouse: https://web.dev/measure/
  - [ ] Performance: 90+
  - [ ] Accessibility: 95+
  - [ ] Best Practices: 95+
  - [ ] SEO: 100

### SEO Verification
- [ ] Google Search Console connection
- [ ] Sitemap is accessible: `/sitemap.xml`
- [ ] Robots.txt is accessible: `/robots.txt`
- [ ] Meta tags are correct (Inspect → Head)
- [ ] Open Graph tags present (social media preview)

### Security Check
- [ ] HTTPS is enforced
- [ ] Security headers present (F12 → Network → Headers)
- [ ] No console errors
- [ ] No sensitive data in HTML/JS

---

## Custom Domain Setup (Optional)

### Add Custom Domain to Vercel

In Vercel Dashboard → Settings → Domains:

1. [ ] Click "Add"
2. [ ] Enter domain (e.g., `locations.thek9shop.com`)
3. [ ] Choose DNS provider
4. [ ] Vercel provides DNS records:
   - [ ] Copy CNAME record
   - [ ] Paste into your DNS provider
   - [ ] Wait 24-48 hours for propagation
5. [ ] Verify domain in Vercel

### DNS Configuration Example

If using GoDaddy, Namecheap, or Route 53:
```
Type: CNAME
Name: locations
Value: cname.vercel-dns.com
TTL: 3600
```

- [ ] Domain DNS configured
- [ ] Domain verified in Vercel
- [ ] HTTPS certificate auto-issued
- [ ] Site accessible at custom domain

---

## Analytics Setup (Optional)

### Google Analytics (Recommended)

```bash
npm install next-google-analytics
```

1. [ ] Create Google Analytics account
2. [ ] Get Measurement ID (G-XXXXXXXXXX)
3. [ ] Add to `.env.local`:
   ```
   NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
   ```
4. [ ] Redeploy to Vercel
5. [ ] Verify tracking in GA dashboard

### Monitor Performance

- [ ] Check Vercel Analytics dashboard
- [ ] Review Google Analytics data
- [ ] Monitor Core Web Vitals
- [ ] Check error logs

---

## Email & Notifications (For Phase 2)

### Brevo Setup

- [ ] Create Brevo account: https://www.brevo.com
- [ ] Get API key
- [ ] Add to environment variables:
  ```
  NEXT_PUBLIC_BREVO_API_KEY=your_key_here
  ```
- [ ] Create email template for form submissions

---

## Supabase Integration (Phase 2)

When ready to add form submissions:

### Create Supabase Project

1. [ ] Go to https://supabase.com
2. [ ] Create new project
3. [ ] Get Project URL and Anon Key
4. [ ] Run SQL schema: `SUPABASE_SCHEMA_LOCATION_PAGES.sql`
5. [ ] Add credentials to Vercel env vars:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key
   ```
6. [ ] Redeploy to Vercel

---

## Launch Day Timeline

### Morning (Pre-Launch Check)
- [ ] Verify site is live and functioning
- [ ] Check all 7 locations load correctly
- [ ] Verify performance metrics
- [ ] Test on mobile devices
- [ ] Check analytics setup

### Launch
- [ ] Send launch email to franchisees
- [ ] Share links to all 7 location pages
- [ ] Post on social media
- [ ] Update website with link to new locations site

### Afternoon
- [ ] Monitor error logs
- [ ] Check analytics for traffic
- [ ] Respond to any issues
- [ ] Track franchisee responses

### Follow-Up (Next 24-48 Hours)
- [ ] Collect feedback from franchisees
- [ ] Monitor for any bugs
- [ ] Check analytics data
- [ ] Plan Phase 2 (Supabase integration)

---

## Monitoring & Maintenance

### Daily (First Week)
- [ ] Check error logs in Vercel
- [ ] Verify all pages are loading
- [ ] Monitor performance metrics
- [ ] Check for 404 errors

### Weekly
- [ ] Review analytics data
- [ ] Check for any reported issues
- [ ] Verify uptime (100% expected)
- [ ] Update any location information

### Monthly
- [ ] Full performance audit
- [ ] Security check
- [ ] Backup check
- [ ] Content review

---

## Rollback Plan (If Issues)

If deployment causes problems:

1. [ ] Identify the issue
2. [ ] Go to Vercel Dashboard
3. [ ] Go to Deployments tab
4. [ ] Select previous working deployment
5. [ ] Click "Promote to Production"
6. [ ] Site reverts within 1 minute
7. [ ] Fix issue locally
8. [ ] Redeploy when ready

---

## Success Metrics

### Traffic Goals
- [ ] 100+ views per week (week 1)
- [ ] Average session duration: 2+ min
- [ ] Bounce rate: < 50%
- [ ] All 7 locations viewed within first week

### Franchisee Engagement
- [ ] Franchisees visit their location pages
- [ ] Franchisees request form access
- [ ] Positive feedback received
- [ ] Form submissions start coming in

### Technical Goals
- [ ] 99.9% uptime
- [ ] Page load < 2 seconds
- [ ] Lighthouse score 90+
- [ ] Zero critical security issues

---

## Troubleshooting During Launch

### Site Not Loading
- [ ] Check Vercel deployment status
- [ ] Verify domain DNS is correct
- [ ] Clear browser cache (Ctrl+Shift+Del)
- [ ] Try incognito/private browsing

### Pages Showing Old Content
- [ ] Hard refresh (Ctrl+F5 or Cmd+Shift+R)
- [ ] Clear CloudFlare cache (if using)
- [ ] Wait up to 5 minutes for ISR refresh

### Form Not Working (Phase 2)
- [ ] Check Supabase connection
- [ ] Verify API keys in Vercel env vars
- [ ] Check browser console for errors
- [ ] Test locally first

### Performance Issues
- [ ] Check Vercel dashboard for CPU/memory issues
- [ ] Review analytics for traffic spikes
- [ ] Clear browser cache
- [ ] Contact Vercel support if needed

---

## Post-Launch (First Month)

### Week 1
- [ ] Monitor all metrics daily
- [ ] Respond to franchisee feedback
- [ ] Fix any reported bugs
- [ ] Celebrate launch! 🎉

### Week 2-3
- [ ] Analyze initial analytics data
- [ ] Gather franchisee feedback
- [ ] Plan Phase 2 implementation
- [ ] Start collecting location data via forms

### Week 4
- [ ] Review full month of data
- [ ] Plan blog content
- [ ] Schedule Phase 2 development
- [ ] Prepare franchisee documentation

---

## Sign-Off

- [ ] Project Lead: ________________  Date: ________
- [ ] QA/Testing: ________________  Date: ________
- [ ] DevOps/Deployment: ________________  Date: ________
- [ ] Client Approval: ________________  Date: ________

---

**Ready to launch! 🚀**

For questions or issues, refer to:
- `README.md` - Project documentation
- `K9_LOCATION_PAGES_SETUP_GUIDE.md` - Setup instructions
- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
