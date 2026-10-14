# [Directive Name]

## 1. Goal
High-level description of what this workflow or operation achieves.

## 2. Inputs & Prerequisites
- Environment variables required (from `.env`)
- Credentials and tokens (Google OAuth, Apify, Groq/OpenAI, WhatsApp/Telegram)
- Local files or payload inputs

## 3. Execution Steps
1. Step 1: Tool/Script to call in `execution/` with explicit parameters.
2. Step 2: Verification and validation step.
3. Step 3: Handling responses and state updates.

## 4. Outputs & Deliverables
- Destination of deliverables (n8n Webhook, WhatsApp/Telegram, Google Calendar, CRM local state)
- Temporary files saved in `.tmp/`

## 5. Edge Cases & Mitigations
- Token expiration (e.g. Meta WhatsApp 24h window or Google OAuth refresh)
- Empty correspondence in Gmail (handling "No correspondance found")
- Apify scraping block or missing LinkedIn cookie (`li_at`)
