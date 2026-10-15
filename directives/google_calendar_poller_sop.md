# Standard Operating Procedure: Google Calendar Poller
*Directive Layer 1 — Swaraj Shelke Automations*

## Objective
Regularly monitor the client's Google Calendar OAuth2 API to discover scheduled events beginning within the next 60 minutes.

## Inputs
- Google Calendar OAuth2 refresh token.
- User primary calendar ID.
- Search window: `$now.toUTC()` to `$now.toUTC().plus(1, 'hour')`.

## Execution Tool
- `execution/verify_google_calendar_token.py`

## Expected Output
- Array of matching meeting JSON objects containing title, start time, hangout link, and attendee emails.
