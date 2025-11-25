# Deployment Guide - Vercel

## Prerequisites

1. GitHub account
2. Vercel account (sign up at https://vercel.com with your GitHub account)

## Step-by-Step Deployment

### Step 1: Initialize Git Repository

```bash
cd /j/DOCUMENTS/Programming/burnandturn-website
git init
git add .
git commit -m "Initial commit: Burn and Turn website with Privacy Policy, Terms, and Support pages"
```

### Step 2: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `burnandturn-website`
3. Description: "Official website for Burn and Turn Poker Trainer"
4. Public or Private: **Public** (recommended for Vercel free tier)
5. DO NOT initialize with README (we already have one)
6. Click "Create repository"

### Step 3: Push to GitHub

```bash
git remote add origin https://github.com/YOUR_USERNAME/burnandturn-website.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

### Step 4: Deploy to Vercel

#### Option A: Vercel Web Dashboard (Easiest)

1. Go to https://vercel.com/new
2. Click "Import Git Repository"
3. Select your GitHub account and find `burnandturn-website`
4. Click "Import"
5. Configure Project:
   - **Project Name**: `burnandturn-website` (or custom subdomain)
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: `./`
   - **Build Command**: `npm run build` (auto-detected)
   - **Output Directory**: `out` (auto-detected)
6. Click "Deploy"
7. Wait 1-2 minutes for deployment to complete

#### Option B: Vercel CLI (Alternative)

```bash
npm install -g vercel
cd /j/DOCUMENTS/Programming/burnandturn-website
vercel
```

Follow the prompts:
- Set up and deploy? **Y**
- Which scope? (select your account)
- Link to existing project? **N**
- Project name: `burnandturn-website`
- Directory: `./` (press Enter)
- Override settings? **N**

### Step 5: Get Your URLs

After deployment, Vercel will provide:

**Production URL** (example):
```
https://burnandturn-website.vercel.app
```

Your pages will be available at:
- Homepage: `https://burnandturn-website.vercel.app`
- Privacy Policy: `https://burnandturn-website.vercel.app/privacy`
- Terms of Service: `https://burnandturn-website.vercel.app/terms`
- Support: `https://burnandturn-website.vercel.app/support`

### Step 6: (Optional) Add Custom Domain

1. Go to Vercel Dashboard → Your Project → Settings → Domains
2. Click "Add"
3. Enter your domain (e.g., `burnandturnpoker.com`)
4. Follow instructions to configure DNS
5. Wait for DNS propagation (5-60 minutes)

If you don't have a custom domain, the `.vercel.app` URLs work perfectly for app store requirements!

## Using URLs in App Stores

### Apple App Store Connect

1. Go to App Store Connect → Your App → App Information
2. **Privacy Policy URL**: `https://burnandturn-website.vercel.app/privacy`
3. **Support URL**: `https://burnandturn-website.vercel.app/support`

### Google Play Console

1. Go to Play Console → Your App → Store presence → Store listing
2. **Privacy policy**: `https://burnandturn-website.vercel.app/privacy`
3. **Website**: `https://burnandturn-website.vercel.app` (optional but recommended)
4. Go to App content → Privacy policy
5. Enter: `https://burnandturn-website.vercel.app/privacy`

## Updating the Website

To update content after deployment:

```bash
# Make your changes to the files
git add .
git commit -m "Update privacy policy" # or whatever you changed
git push
```

Vercel will automatically deploy the changes within 1-2 minutes!

## Troubleshooting

### Build Fails

- Check that `package.json` has correct dependencies
- Ensure Node.js version is 18+ (specified in `package.json`)
- Check build logs in Vercel dashboard

### Pages Not Loading

- Verify `next.config.js` has `output: 'export'`
- Check that all page files are in `app/` directory
- Ensure no server-side features (API routes, server components with database calls)

### Custom Domain Not Working

- Verify DNS records are correctly configured
- Wait 24-48 hours for full DNS propagation
- Check domain status in Vercel dashboard

## Support

- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
- Email: wguidero@gmail.com

## Deployment Checklist

- [ ] Git repository initialized
- [ ] GitHub repository created
- [ ] Code pushed to GitHub
- [ ] Vercel project created and linked
- [ ] Website deployed successfully
- [ ] All pages accessible (/, /privacy, /terms, /support)
- [ ] URLs added to App Store Connect
- [ ] URLs added to Google Play Console
- [ ] (Optional) Custom domain configured

Once deployed, you're ready to submit your app to the stores!
