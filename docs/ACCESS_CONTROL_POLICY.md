# Client Portal Access Control & Gatekeeper Policy
*Security Architecture — nayva tech industries*

## Access Control Objectives
- **Zero Public Exposure**: The CRM web application is never accessible to unauthenticated public visitors.
- **Developer-Provisioned Credentials**: Each enterprise client receives a unique Client ID and Access Key provisioned by nayva tech industries.
- **Session Isolation**: Client sessions are stored in ephemeral browser storage (sessionStorage) with optional local persistence.

## Gatekeeper Protocol
1. Unauthenticated request -> Greeted by LoginGateView with zero CRM data rendered.
2. Credential verification against VITE_CLIENT_PORTAL_ID and VITE_CLIENT_PORTAL_PASSWORD.
3. Authorized token issued -> CRM unlocks dashboard, dossiers, and credentials manager.
4. Single-click Sign Out destroys session tokens and immediately re-locks the view.
