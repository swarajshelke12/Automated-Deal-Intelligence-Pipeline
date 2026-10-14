# Standard Operating Procedure: Netlify Continuous Deployment
*Directive Layer 1 — nayva tech industries*

## Objective
Deploy updates to Netlify production seamlessly upon git pushes to the `main` branch.

## Build Parameters
- Build Command: `npm run build`
- Publish Directory: `dist`
- SPA Redirect: `/* /index.html 200`
