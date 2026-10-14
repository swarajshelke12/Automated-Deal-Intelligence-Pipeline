# Multi-Agent LLM Attendee Research Specification
*AI Architecture by nayva tech industries*

## Agents in the Pipeline
1. **Attendee Extraction Agent**:
   - Model: openai/gpt-oss-20b (via Groq Chat Model)
   - Task: Parses raw calendar description and attendees array into structured contact JSON.
2. **Correspondence Recap Agent**:
   - Model: openai/gpt-oss-safeguard-20b
   - Task: Distills lengthy Gmail email threads into 2-bullet executive summaries.
3. **LinkedIn Summarizer Agent**:
   - Task: Synthesizes scraped Apify posts and employment history into conversational icebreakers.
4. **Master Dossier Synthesis Agent**:
   - Task: Assembles the final WhatsApp message and CRM briefing card.
