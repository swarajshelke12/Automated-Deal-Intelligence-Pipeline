# Standard Operating Procedure: Client Gatekeeper Authentication
*Directive Layer 1 — Swaraj Shelke Automations*

## Objective
Enforce strict access control on the CRM web portal so only verified enterprise clients can access dossiers.

## Verification Logic
- Match client ID and password against developer-provisioned environment variables.
- Maintain session token in browser memory.
