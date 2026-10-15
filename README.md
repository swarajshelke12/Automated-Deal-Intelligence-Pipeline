<div align="center">

# AI Meeting Preparation CRM
### *Autonomous Pre-Meeting Intelligence & Executive Dossier Pipeline*

[![React 19](https://img.shields.io/badge/React-19.2-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8.2-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vite.dev/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4.3-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![n8n Automation](https://img.shields.io/badge/n8n-Workflow_Engine-EA4B71?style=flat-square&logo=n8n&logoColor=white)](https://n8n.io/)
[![Security Model](https://img.shields.io/badge/Security-12h_Auto--Purge-10B981?style=flat-square&logo=shield&logoColor=white)](#-security--privacy-architecture)
[![Author](https://img.shields.io/badge/Author-Swaraj_Shelke-8B5CF6?style=flat-square)](https://github.com/swarajshelke12)

<p align="center">
  <strong>Client Automation Portal engineered & built by <a href="https://github.com/swarajshelke12">Swaraj Shelke</a></strong>
</p>

<p align="center">
  A high-polish, client-facing intelligence portal that bridges enterprise calendar scheduling with background n8n automation and multi-agent AI research (GPT-4o + Apify + Gmail) to deliver structured meeting dossiers and WhatsApp briefings 60 minutes prior to calls.
</p>

---

[Key Highlights](#-key-highlights) •
[System Architecture](#-system-architecture--workflow) •
[How n8n & Frontend Work Together](#-how-n8n-and-frontend-work-together) •
[Security Model](#-security--privacy-architecture) •
[n8n Automation](#-n8n-automation-engine-integration) •
[Creator & Links](#-creator--support)

---

</div>

## 📖 Executive Summary

Senior executives and sales professionals often lose **30 to 45 minutes per meeting** manually digging through prior email correspondence, reviewing LinkedIn profiles, and drafting conversation agendas.

**AI Meeting Preparation CRM** eliminates this overhead completely:

1. **Monitors your calendar autonomously** via Google Calendar OAuth2 background poller every 1–2 hours.
2. **Conducts autonomous research** using Gmail API correspondence history and Apify LinkedIn scrapers.
3. **Synthesizes strategic dossiers** using LangChain Groq/OpenAI agents into actionable talking points.
4. **Dispatches WhatsApp briefings** directly to the executive's mobile device 60 minutes before calls.

---

## 🔄 How n8n and Frontend Work Together

```
+-----------------------------------------------------------------------------------+
|                           AUTONOMOUS BACKGROUND ENGINE                            |
|                                                                                   |
|  [n8n Schedule Trigger]                                                           |
|       (Runs every 1-2 hours automatically in background)                          |
|             |                                                                     |
|             v                                                                     |
|  [Google Calendar API] ---------> Discovers upcoming meetings in next 60m         |
|             |                                                                     |
|             v                                                                     |
|  [AI Extractor & Apify] --------> Researches attendees, emails, & LinkedIn        |
|             |                                                                     |
|             v                                                                     |
|  [Groq / OpenAI Agent] ---------> Synthesizes executive talking points            |
|             |                                                                     |
|             v                                                                     |
|  [WhatsApp Cloud API] ----------> Dispatches briefing to executive's mobile       |
+-----------------------------------------------------------------------------------+
                                          |
                                          | (Independent & Decoupled)
                                          v
+-----------------------------------------------------------------------------------+
|                        EXECUTIVE CLIENT PORTAL (FRONTEND)                         |
|                                                                                   |
|  [Private Gatekeeper Login] ----> Requires Developer-issued Client ID & Pass      |
|             |                                                                     |
|             +---> [Meetings View] : Review upcoming briefings & dossiers          |
|             +---> [Connections]   : Configure credentials safely (12h vault)      |
|             +---> [Developer Handoff]: Swaraj Shelke links keys securely         |
+-----------------------------------------------------------------------------------+
```

---

## 👨‍💻 Creator & Links

Built and engineered by **Swaraj Shelke**.

- **GitHub**: [github.com/swarajshelke12](https://github.com/swarajshelke12)
- **LinkedIn**: [linkedin.com/in/swaraj-shelke-0a3a752b8](https://linkedin.com/in/swaraj-shelke-0a3a752b8)

---

## 📄 License & Attribution

© 2024–2026 **Swaraj Shelke**. All rights reserved.  
Engineered with privacy-first principles and production-grade reliability.
