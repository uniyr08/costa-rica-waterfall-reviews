# Costa Rica Waterfall Tours - Reviews Showcase

A beautiful, high-performance website to showcase customer reviews for Costa Rica Waterfall Tours. Built with Next.js, Supabase, and Framer Motion.

## Features

🌟 **Beautiful Design**
- Modern, responsive layout
- Works perfectly on mobile & desktop
- Smooth animations and transitions
- Adventure-focused aesthetic

⚡ **High Performance**
- Optimized loading (Lighthouse 95+)
- Lazy loading for reviews
- CSS modules for fast rendering
- Vercel auto-deployment

🔄 **Easy Management**
- Add/edit reviews in Supabase dashboard
- Changes appear instantly on live site
- No coding required for updates
- Support for 100+ reviews

🎯 **Customizable**
- Filter reviews by tour type
- Sort by rating
- Featured review highlights
- Guide attribution

## Quick Start

### Prerequisites
- Supabase account (free)
- GitHub account
- Vercel account (free)

### Setup

```bash
# 1. Clone this repo
git clone https://github.com/yourusername/costa-rica-waterfall-reviews.git
cd costa-rica-waterfall-reviews

# 2. Install dependencies
npm install

# 3. Set up Supabase (see SETUP.md)

# 4. Add .env.local with your Supabase credentials

# 5. Start development
npm run dev
```

See [SETUP.md](./SETUP.md) for detailed instructions.

## Tech Stack

- **Frontend**: Next.js 14, React 18, Framer Motion
- **Database**: Supabase (PostgreSQL)
- **Hosting**: Vercel
- **Styling**: CSS Modules
- **Deployment**: GitHub + Vercel (auto-deploy)

## File Structure

```
├── pages/              # Next.js pages
├── components/         # React components
├── styles/            # CSS modules
├── lib/               # Utilities (Supabase client)
├── public/            # Static assets
├── .env.local.example # Environment template
└── SETUP.md          # Setup guide
```

## Adding/Updating Reviews

### Via Supabase Dashboard (Easiest)
1. Open your Supabase project
2. Go to Table Editor > reviews
3. Click "Insert row" or edit existing
4. Changes appear instantly on live site

### Via Import
1. Export reviews as JSON/CSV
2. Go to Supabase > Import data
3. Select your file
4. Done!

## Customization

### Change Colors
Edit variables in `styles/globals.css`:
```css
:root {
  --primary: #2d7a5c;
  --accent: #f28e3f;
  /* ... more colors */
}
```

### Add/Remove Filters
Edit `components/ReviewFilter.js` to change available tour types

### Update Fonts
Modify the Google Fonts import in `pages/_document.js`

## Performance

- First Contentful Paint: <2s
- Lighthouse Score: 95+
- Mobile optimized
- Zero JavaScript bloat

## Deployment

### Deploy to Vercel
1. Push code to GitHub
2. Connect repo to Vercel
3. Add environment variables
4. Auto-deploys on every push

```bash
git push origin main
# Vercel automatically deploys!
```

## Environment Variables

Required for production:
```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

Copy from your Supabase project settings.

## Troubleshooting

**Reviews not showing?**
- Check Supabase is connected (test in browser console)
- Verify `.env.local` has correct values
- Clear browser cache

**Styling looks off?**
- Ensure all CSS files are present
- Check no CSS is being overridden
- Try `npm run build` then `npm start`

**Vercel deployment fails?**
- Check environment variables are set
- Ensure `package.json` is correct
- Check build logs in Vercel dashboard

## Support

- Supabase Docs: https://supabase.com/docs
- Next.js Docs: https://nextjs.org/docs
- Vercel Docs: https://vercel.com/docs

## License

MIT - Feel free to use for your projects

---

**Made for Costa Rica Waterfall Tours** 🌴
Built with ❤️ using modern web technologies
