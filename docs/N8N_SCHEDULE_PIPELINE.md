# n8n Background Schedule Pipeline Specification
*nayva tech industries Automation Engineering*

## Execution Cadence
- **Trigger**: Autonomous Schedule Interval (every 1 to 2 hours)
- **Target Calendar Window**: `[ $now.toUTC(), $now.toUTC().plus(1, 'hour') ]`
- **Concurrency**: Sequential execution per user calendar to avoid rate-limiting.

## Node Pipeline Stages
1. **Google Calendar Trigger**: Queries primary calendar for events starting in the next 60 minutes.
2. **Attendee Filter**: Filters out the meeting organizer to isolate guest attendees.
3. **LangChain Extractor**: Extracts guest names, corporate emails, and linked profile URLs.
4. **Subworkflow Parallel Execution**:
   - Get Correspondance: Searches Gmail threads via Gmail API OAuth2.
   - Get LinkedIn Profile & Activity: Triggers Apify crawler actor.
5. **Dossier Compilation**: Merges correspondent recap and career insights.
6. **WhatsApp Dispatch**: Formats and transmits concise executive summary 60 minutes prior to call.
