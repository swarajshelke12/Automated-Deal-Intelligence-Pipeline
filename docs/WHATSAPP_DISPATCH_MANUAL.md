# WhatsApp Cloud API 60-Minute Briefing Dispatch Manual
*nayva tech industries Integration Specification*

## Overview
Briefings are delivered via Meta WhatsApp Business Cloud API (`graph.facebook.com/v21.0/{phone_number_id}/messages`).

## Message Architecture
1. **Header**: Meeting Title, Time, and Video Call Link.
2. **Attendee Snapshot**: Name, Title, and LinkedIn career overview.
3. **Email Thread Recap**: Key topics discussed in previous email correspondence.
4. **Strategic Talking Points**: 3 to 4 actionable agenda points synthesized by AI.

## Meta 24-Hour Customer Window
- If client initiates conversation (e.g. sends "Hi"), Meta opens a 24-hour freeform text session.
- Outside the 24-hour window, the system falls back to Meta pre-approved hello_world or custom template notifications.
