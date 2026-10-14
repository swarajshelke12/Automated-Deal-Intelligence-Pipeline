# Integration Bridge: How n8n and the Frontend Collaborate
*nayva tech industries Technical Guide*

## Conceptual Model
A common misconception is that the CRM frontend must continuously trigger n8n webhooks on every user click. In enterprise production, this is an anti-pattern. Instead:

1. **n8n is the Autonomous Engine**:
   - Runs in the background 24/7.
   - Watches Google Calendar independently.
   - Synthesizes dossiers and dispatches directly to WhatsApp.

2. **The Frontend is the Executive Portal**:
   - **Configuration Gate**: Securely accepts client credentials and stores them in a 12-hour client vault.
   - **Display Window**: Visualizes upcoming meetings, prepared talking points, attendee backgrounds, and automation health.
   - **Zero Direct Coupling**: Even if the client closes their browser, the n8n automation continues running smoothly.

3. **Developer Hand-Off**:
   - nayva tech industries engineers take client credentials from the vault, link them to the n8n workflow credentials vault, and activate the workflow.
