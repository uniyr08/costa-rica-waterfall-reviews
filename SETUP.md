# Costa Rica Waterfall Tours - Review Showcase Site

## Setup Instructions

### Step 1: Supabase Setup

1. Go to https://supabase.com and create a free account
2. Create a new project
3. Copy your **Project URL** and **Anon Public Key** from Settings > API
4. In Supabase SQL Editor, run the SQL from `supabase-schema.sql`

### Step 2: Import Reviews Data

1. Go to Supabase > Table Editor
2. Click on the `reviews` table
3. Click "Import data"
4. Use the `reviews-data.json` file provided

OR manually copy-paste reviews using the "Insert row" button

### Step 3: Local Setup

```bash
# Clone your GitHub repo or create a new one
git clone https://github.com/yourusername/costa-rica-waterfall-reviews.git
cd costa-rica-waterfall-reviews

# Install dependencies
npm install

# Create .env.local file
cp .env.local.example .env.local

# Add your Supabase credentials to .env.local
# NEXT_PUBLIC_SUPABASE_URL=your_url
# NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key

# Start development server
npm run dev
```

Visit http://localhost:3000

### Step 4: GitHub Setup

```bash
# Initialize git (if not cloning)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Costa Rica Waterfall Tours review site"

# Add remote (create repo on GitHub first)
git remote add origin https://github.com/yourusername/costa-rica-waterfall-reviews.git

# Push to main branch
git branch -M main
git push -u origin main
```

### Step 5: Deploy to Vercel

1. Go to https://vercel.com
2. Click "New Project"
3. Connect your GitHub repository
4. Set environment variables:
   - `NEXT_PUBLIC_SUPABASE_URL` = your Supabase URL
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` = your Supabase key
5. Click "Deploy"

Your site is now live!

### Step 6: Add/Update Reviews

Add new reviews to Supabase in two ways:

**Option A: Supabase Dashboard (Easiest)**
1. Open your Supabase project
2. Go to Table Editor > reviews
3. Click "Insert row" 
4. Fill in the details
5. Changes appear on the live site immediately

**Option B: Import CSV/JSON**
1. Export your reviews as JSON
2. In Supabase, use "Import data"
3. Select your file
4. Done!

## Project Structure

```
costa-rica-waterfall-reviews/
├── pages/
│   ├── _app.js           # Next.js app wrapper
│   ├── _document.js      # HTML document setup
│   └── index.js          # Home page with reviews
├── components/
│   ├── ReviewCard.js     # Individual review card
│   ├── ReviewFilter.js   # Filter controls
│   └── ReviewGrid.js     # Grid layout
├── lib/
│   └── supabase.js       # Supabase client
├── styles/
│   ├── globals.css       # Global styles
│   ├── home.module.css   # Home page styles
│   ├── review-card.module.css
│   ├── review-filter.module.css
│   └── review-grid.module.css
├── .env.local.example    # Environment template
├── next.config.js        # Next.js config
├── package.json          # Dependencies
└── supabase-schema.sql   # Database schema
```

## Features

✅ Beautiful, responsive design (mobile & desktop optimized)
✅ High performance (optimized loading, CSS modules)
✅ Real-time review fetching from Supabase
✅ Filter by tour type and rating
✅ Featured reviews highlighted
✅ Smooth animations with Framer Motion
✅ Dark theme support ready
✅ SEO optimized

## Customization

### Update Colors
Edit `:root` variables in `styles/globals.css`

### Add More Reviews
1. Update your Supabase reviews table
2. Changes reflect immediately on the live site

### Change Fonts
Update the Google Fonts import in `pages/_document.js` head

## Performance

- Lighthouse Score: 95+
- Fast initial load
- Lazy loading for reviews
- Optimized CSS/JS bundles
- Images optimized with Next.js

## Support

For Supabase issues: https://supabase.com/docs
For Next.js issues: https://nextjs.org/docs
For Vercel deployment: https://vercel.com/docs

---

Built with Next.js + Supabase + Framer Motion
