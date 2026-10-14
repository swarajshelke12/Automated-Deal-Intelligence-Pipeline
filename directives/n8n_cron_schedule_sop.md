# Standard Operating Procedure: n8n Cron Schedule Configuration
*Directive Layer 1 — nayva tech industries*

## Objective
Configure the n8n automation engine to trigger autonomously every 1 to 2 hours without manual intervention.

## Parameters
- Workflow Active status: `true`
- Trigger Node: `Schedule Trigger` (Cron interval: `0 * * * *` or `0 */2 * * *`)
