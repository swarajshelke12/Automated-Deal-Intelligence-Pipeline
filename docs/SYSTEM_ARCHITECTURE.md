# System Architecture: AI Meeting Prepration automation
*Engineered by nayva tech industries*

## Executive Overview
The AI Meeting Prepration automation architecture strictly decouples the client-facing presentation and credential intake layer from the autonomous backend execution layer.

```mermaid
graph TD
    subgraph Client Experience Layer
        GC[Google Calendar Invites]
        WA[WhatsApp Received Briefing]
        CRM[MeetingOS Client Portal]
    end

    subgraph Autonomous Background Engine
        SCHED[n8n Schedule Trigger: 1-2h] --> POLL[Check Upcoming Meetings]
        POLL --> EXT[Attendee Information Extractor]
        EXT --> SUB1[Gmail Correspondence Recap Agent]
        EXT --> SUB2[Apify LinkedIn Profile Scraper]
        SUB1 --> SYNTH[Groq/OpenAI Dossier Synthesis]
        SUB2 --> SYNTH
        SYNTH --> DISP[WhatsApp Cloud API Dispatcher]
        DISP --> WA
    end
```

## Architectural Decoupling Principles
1. **Client Isolation**: The client never interacts with n8n canvas, nodes, or execution trees.
2. **Autonomous Scheduling**: The workflow executes on an automated 1–2 hour timer.
3. **Multi-Agent Research**: Uses LangChain LLM chains for semantic parsing and Apify for deep LinkedIn scraping.
