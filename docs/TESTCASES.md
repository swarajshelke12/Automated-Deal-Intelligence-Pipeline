# AI Meeting Preparation Automation — Master Test Suite & Validation Cases
**Nayva Tech Industries** | Internal QA & Founder-Facing Demo Test Matrix  
*Use this checklist to systematically verify every module, edge case, and integration point before reaching out to prospective clients and founders.*

---

## 📌 Test Execution Guidelines
- Mark items as `[x]` when verified, or leave as `[ ]` pending test.
- Every section maps directly to real-world founder/executive user journeys.
- All test scenarios can also be tested interactively in the CRM under the **Test Cases** view.

---

## 1. 🔐 Client Gatekeeper & Access Control Tests

- [ ] **TC-01: Correct Developer-Issued Login**
  - **Input**: Email `client@navyatech.co.in`, Password `NayvaTech2026`.
  - **Expected**: Successfully grants entry to the CRM dashboard; session is preserved across reloads.
- [ ] **TC-02: Admin Fallback Login**
  - **Input**: Email `admin`, Password `admin123`.
  - **Expected**: Successfully logs in; activates Developer Oversight badge.
- [ ] **TC-03: Invalid Password Rejection**
  - **Input**: Email `client@navyatech.co.in`, Password `WrongPassword999`.
  - **Expected**: Access denied; red error banner with clear guidance displayed; zero CRM views leaked.
- [ ] **TC-04: Empty Field Validation**
  - **Input**: Empty username or empty password.
  - **Expected**: Field validation triggers; prevents request; highlights missing fields.
- [ ] **TC-05: Session Logout Integrity**
  - **Action**: Click "Log out" in the sidebar.
  - **Expected**: Clears active session; immediately redirects to the Login Gate; browser back button cannot bypass lock.

---

## 2. 🔑 Ephemeral Credential Vault & Integration Setup Tests

- [ ] **TC-06: Google Calendar Direct External Portal Link**
  - **Action**: Click "Open Google Cloud ↗" in Google Calendar card.
  - **Expected**: Opens `https://console.cloud.google.com/apis/credentials` in a new secure tab.
- [ ] **TC-07: Groq / OpenAI Direct External Key Link**
  - **Action**: Click "Open Groq Console ↗" or "Open OpenAI ↗".
  - **Expected**: Directs client straight to the API Key management page.
- [ ] **TC-08: Apify Direct Integrations Link**
  - **Action**: Click "Open Apify Console ↗".
  - **Expected**: Opens Apify Console integrations settings page.
- [ ] **TC-09: Meta Developer Portal Direct Link**
  - **Action**: Click "Open Meta Dev Portal ↗".
  - **Expected**: Opens Facebook Developer App Dashboard for WhatsApp Cloud API.
- [ ] **TC-10: Incomplete Credentials Blocking**
  - **Action**: Fill only 2 of 4 cards and attempt "Lock & Encrypt Credentials".
  - **Expected**: Action blocked; highlights remaining cards with amber/red badge; summary shows exact missing fields.
- [ ] **TC-11: 12-Hour Ephemeral Auto-Purge Countdown**
  - **Action**: Save complete credentials.
  - **Expected**: Vault status changes to "🟢 Production Active"; countdown timer displays remaining time out of 12 hours.
- [ ] **TC-12: Zero Database Storage Rule**
  - **Action**: Inspect local storage and network payloads.
  - **Expected**: Sensitive tokens never logged in cleartext to remote external servers; client-side memory safety confirmed.

---

## 3. 🌐 n8n Automation Engine & Webhook Bridge Tests

- [ ] **TC-13: Live n8n Webhook Connectivity (GET Method)**
  - **Endpoint**: `https://overtensely-polygynous-emilee.ngrok-free.dev/webhook/meeting`
  - **Action**: Trigger calendar sync or run HTTP GET.
  - **Expected**: Returns HTTP 200 with payload `{"message":"Workflow was started"}`.
- [ ] **TC-14: On-Demand Calendar Sync Trigger**
  - **Action**: In the CRM header, click "Sync with n8n" / "Refresh Calendar".
  - **Expected**: Dispatches webhook trigger; displays success toast `✓ Checked Google Calendar. Autonomous schedule running in background.`
- [ ] **TC-15: Background Schedule Autonomous Execution**
  - **Trigger**: n8n Schedule Trigger (Cron: every 1–2 hours).
  - **Expected**: n8n node activates autonomously without user intervention, searches Google Calendar for upcoming meetings.
- [ ] **TC-16: Webhook Offline / Fallback Graceful Handling**
  - **Action**: Disconnect ngrok or provide invalid URL.
  - **Expected**: CRM UI remains functional; displays fallback message without white-screening or crashing.

---

## 4. 📅 Meeting Discovery & Calendar Ingestion Tests

- [ ] **TC-17: Google Calendar Event Retrieval Window**
  - **Condition**: Meeting scheduled between 60 to 120 minutes from current time.
  - **Expected**: Workflow correctly flags meeting as requiring intelligence preparation.
- [ ] **TC-18: Distinguish Internal vs External Attendees**
  - **Condition**: Event with colleague `@navyatech.co.in` vs external prospect `@enterprise.com`.
  - **Expected**: Prioritizes external prospective clients and founders for deep LinkedIn/web enrichment.
- [ ] **TC-19: Multiple Attendees Handling**
  - **Condition**: Meeting invite with 3 external stakeholders.
  - **Expected**: Synthesizes primary contact dossier and lists secondary attendees in notes.
- [ ] **TC-20: Missing Attendee Email Graceful Handling**
  - **Condition**: Calendar invite has only meeting title, no guest email.
  - **Expected**: Creates meeting record; notes "Email not provided"; skips failing scraping steps without crashing.

---

## 5. 🔍 Web Scraping & LinkedIn Intelligence (Apify) Tests

- [ ] **TC-21: Attendee LinkedIn Profile Discovery**
  - **Input**: Attendee Full Name + Company Name.
  - **Expected**: Apify Google Search / LinkedIn scraper returns top profile URL.
- [ ] **TC-22: Company Website & News Extraction**
  - **Input**: Attendee company domain.
  - **Expected**: Pulls latest funding round, core product summary, and recent press release.
- [ ] **TC-23: Scraper Rate-Limit / Block Mitigation**
  - **Condition**: LinkedIn cookie expired or Apify task delayed.
  - **Expected**: Pipeline falls back to general search engine knowledge graph rather than halting execution.
- [ ] **TC-24: Prospect Career History Parsing**
  - **Input**: Scraped profile payload.
  - **Expected**: Extracts current role, previous senior positions, and core industry background.

---

## 6. 🧠 AI Intelligence Synthesis (Groq / OpenAI) Tests

- [ ] **TC-25: Executive Summary Generation Quality**
  - **Prompt**: Attendee info + email history + meeting title.
  - **Expected**: Concise 2-sentence summary outlining meeting goal and high-stakes context.
- [ ] **TC-26: Contextual Talking Points Formulation**
  - **Expected**: Generates 3–4 punchy, non-generic talking points directly relevant to the prospect's pain points.
- [ ] **TC-27: Past Email Thread Summarization**
  - **Condition**: Prior Gmail thread exists with attendee.
  - **Expected**: Distills key requests, agreed deadlines, and open objections.
- [ ] **TC-28: Zero AI Hallucination Guardrails**
  - **Condition**: Incomplete prospect data provided.
  - **Expected**: AI explicitly states "Insufficient public history" rather than inventing past companies.

---

## 7. 📲 WhatsApp Executive Dispatch Tests

- [ ] **TC-29: Direct One-Click WhatsApp Quick Test**
  - **Action**: In Connections Setup, click "Direct WhatsApp Test" with recipient phone.
  - **Expected**: Opens `https://wa.me/{phone}?text=...` with pre-filled test message.
- [ ] **TC-30: Meta Cloud API Pre-approved Template ('hello_world')**
  - **Action**: Dispatch test using approved business template.
  - **Expected**: Delivers instantly to recipient mobile even outside the 24-hour customer service window.
- [ ] **TC-31: Briefing Formatting on Mobile Screen**
  - **Delivered Payload**: Executive briefing via WhatsApp.
  - **Expected**: Clear bold markdown headers (`*Meeting Briefing*`, `*Key Talking Points*`), under 300 words, readable at a glance on mobile.
- [ ] **TC-32: Timed Dispatch (T-minus 60 Minutes)**
  - **Condition**: Autonomous n8n schedule run.
  - **Expected**: WhatsApp message reaches founder/executive phone exactly 45–60 minutes before scheduled call.

---

## 8. 💼 Founder Pitch & Demonstration Readiness Tests

- [ ] **TC-33: White-Label Agency Branding Integrity**
  - **Verification**: All views, badges, titles, and footers strictly display `AI Meeting Prepration automation` powered by `nayva tech industries`.
  - **Expected**: Zero third-party boilerplate or unbranded watermarks visible to prospective clients.
- [ ] **TC-34: Instant Demo Mode / Prepared Dossier Inspection**
  - **Action**: Switch between Dashboard, Meetings, and Meeting Preparation tabs.
  - **Expected**: Loads rich, realistic executive dossiers (e.g., Sarah Chen / Apex Global, Marcus Vance / CloudScale).
- [ ] **TC-35: End-to-End Walkthrough Timing**
  - **Flow**: Login ➔ View Upcoming Meeting ➔ Open AI Dossier ➔ Test WhatsApp ➔ Review Setup.
  - **Expected**: Entire demo can be convincingly demonstrated to a founder in under 3 minutes.
