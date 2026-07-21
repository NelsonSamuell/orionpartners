# Orion Partners — Landing Page

Static one-page site for Orion Partners (forensics, assurance & cybersecurity advisory, Nairobi), with two SEO article pages.

## Structure
- `index.html` — landing page (services, team, insights, booking form)
- `blog-procure-to-pay-red-flags.html`, `blog-iso-27001-kenyan-smes.html` — article pages
- `styles.css` — single stylesheet (design tokens + all page styles)
- `script.js` — nav menu, scroll fade-ins, booking form
- `assets/` — images

## Deploying
No build step. Push to GitHub and either:
- **Vercel:** import the repo, framework preset "Other", output directory `.`
- **GitHub Pages:** Settings → Pages → deploy from branch → root

## Consultation form
The form posts to [FormSubmit](https://formsubmit.co) and delivers to `nelsonnelsoon2@gmail.com`.
**First submission on the live domain triggers a one-time confirmation email to that inbox — click the link in it to activate delivery.** To change the destination address, edit the `formsubmit.co/ajax/...` URL in `script.js`.
