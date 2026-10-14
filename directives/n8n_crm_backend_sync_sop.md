# SOP: n8n Dual-Workflow Backend Integration & CRM Sync

## 1. Goal
Orchestrate and synchronize the dual n8n backend workflows powering MeetPrep CRM:
1. **Primary Workflow**: `Automate Sales Meeting Prep with AI & APIFY Sent To WhatsApp` (Workflow ID: `DxPA1OGu39FxU9os`)
2. **Sub-Workflow**: `Email & linkedin scraping for meeting prep` (Workflow ID: `90nr9TEfn5wnaJBk`)

Deliver autonomous attendee extraction, Gmail correspondence summarization, Apify LinkedIn profile enrichment, Groq/OpenAI synthesis, and executive briefing dispatch to WhatsApp and Telegram.

## 2. Dual-Workflow Pipeline Architecture

```
[Google Calendar Trigger / Webhook]
       │
       ▼
[Extract Attendee Information (LangChain)]
 ├── Attendee Name
 ├── Email
 └── LinkedIn URL
       │
       ├─────────────────────────────────┐
       ▼                                 ▼
[Set Route Email]               [Set Route LinkedIn]
       │                                 │
       ▼                                 ▼
(Call Sub-Workflow: 90nr9TEfn5wnaJBk)
 ├── Route "email":                      ├── Route "linkedin":
 │    Gmail: Get Last Correspondence     │    Apify Web Scraper (run-sync)
 │    Gmail: Get Message Contents        │    Extract About & Activity HTML
 │    LLM: Correspondance Recap Agent    │    LLM: LinkedIn Summarizer Agent
 │    Return: email_summary              │    Return: linkedin_summary
       │                                 │
       └────────────────┬────────────────┘
                        │
                        ▼
           [Merge Attendee with Summaries]
                        │
                        ▼
           [Attendee Research Agent (Groq LLM)]
           - Meeting Summary (Date, Time, Hangout Link)
           - Email Threads & Relevance
           - LinkedIn Activity & Talking Points
                        │
                        ▼
           [Dispatch: WhatsApp / Telegram]
```

## 3. Required Credentials & Mapping
- **Google OAuth2**: Authorized for `https://www.googleapis.com/auth/calendar.readonly` and `https://www.googleapis.com/auth/gmail.readonly`.
- **AI / LLM Provider Key**: Groq API Key (`gsk_...` with `openai/gpt-oss-20b` or Llama 3) or OpenAI API Key (`sk-...`).
- **Apify Token**: `apify_api_...` for running `apify~web-scraper`.
- **LinkedIn Session Cookie**: `li_at` cookie passed to Apify to bypass the LinkedIn public login wall.
- **WhatsApp / Telegram**: Meta Phone Number ID + System User Access Token (`EAA...`) or Telegram Bot Token + Chat ID.

## 4. Execution Tools
- Schema Validator: `execution/validate_workflow_schemas.py`
- Webhook Test Dispatcher: `execution/test_n8n_webhook.py`

## 5. Edge Cases & Mitigations
- **No Email Correspondence**: Handled gracefully by the sub-workflow returning `"No correspondance found."`
- **No LinkedIn Activity**: Handled by sub-workflow returning `"No activities found."`
- **WhatsApp 24-Hour Window**: If sending freeform text fails, send the pre-approved `hello_world` template or trigger direct WhatsApp deep-link (`wa.me/...`).
