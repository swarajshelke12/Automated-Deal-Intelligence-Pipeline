# Developer Operations Runbook
*Internal SOP — nayva tech industries*

## Deployment & Hosting
- Frontend: Hosted on Netlify with automated builds (`npm run build`).
- Automation Engine: Hosted on private self-hosted n8n or n8n Cloud.
- Secrets: Maintained in Netlify Environment Variables and n8n credentials vault.

## Health Monitoring
- Check schedule execution logs in n8n execution history every 24 hours.
- Verify OAuth2 token refresh status for Google Calendar.
- Monitor Meta Cloud API token expiry (replace temporary tokens with System User permanent tokens).
