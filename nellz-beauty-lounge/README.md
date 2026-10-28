# Nell’z Beauty Lounge: minimalist static site (no build step)
Open index.html or upload the folder to Netlify, Vercel, GitHub Pages, etc.
Routes: #/ #/about #/services #/gallery #/contact #/book (unknown route shows the 404 page)

## Editing
- Content (services and prices, gallery, team, hero slides, hours, phone, address, map URL) is at the top of app.js. Each service group lists items as [name, note, [prices]]; `c` sets column labels such as S/M/L/XL.
- Colors and fonts: :root in styles.css (deep green from the logo, muted gold, warm off-white). Fonts: Cormorant Garamond + Jost (Google Fonts).
- Sample images are in /images (SVG illustrations). To use real photos, drop in .jpg/.webp files and change the paths in app.js (hero, services, gallery, team, about).
- Animations: scroll reveals, hero crossfade with slow zoom, marquee, hover zooms, smooth accordion, gallery lightbox. All are disabled for visitors who prefer reduced motion.
- Booking and contact forms email your Gmail through FormSubmit. Set EMAIL, FB and IG at the top of app.js. The first submission sends an activation email to that address; click the link once and later requests arrive normally.
- Replace [bracketed] text with real details.
