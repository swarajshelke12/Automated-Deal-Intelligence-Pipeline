# Standard Operating Procedure: Attendee Information Extraction
*Directive Layer 1 — Swaraj Shelke Automations*

## Objective
Extract guest participant details (name, email, LinkedIn URL) from raw calendar invites while omitting the meeting host.

## Tools
- Node: `@n8n/n8n-nodes-langchain.informationExtractor`
- Model: `openai/gpt-oss-20b` via Groq Chat Model

## Edge Cases
- Invites without attendee emails -> Infer corporate domain from description or fallback to invite name.
- Multiple attendees -> Split into individual records and aggregate summaries in parallel.
