# Standard Operating Procedure: WhatsApp Cloud API Delivery
*Directive Layer 1 — nayva tech industries*

## Objective
Dispatch the synthesized intelligence briefing 60 minutes prior to call time directly to the executive's WhatsApp.

## Endpoint
- `POST https://graph.facebook.com/v21.0/{phone_number_id}/messages`

## Delivery Fallback
- Primary: Text payload with markdown formatting.
- Secondary: Pre-approved `hello_world` template if 24-hour conversation session is closed.
