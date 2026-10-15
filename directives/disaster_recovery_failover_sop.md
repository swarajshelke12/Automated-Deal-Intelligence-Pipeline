# Standard Operating Procedure: Disaster Recovery & Failover
*Directive Layer 1 — Swaraj Shelke Automations*

## Objective
Handle ngrok tunnel drops, API timeouts, or temporary rate limits gracefully without interrupting calendar tracking.

## Failover Strategy
- Retry failed LLM calls up to 3 times with exponential backoff.
- Cache attendee dossiers locally in CRM storage so executives have offline access during meetings.
