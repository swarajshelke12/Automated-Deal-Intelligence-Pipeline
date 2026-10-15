# Standard Operating Procedure: Gmail Correspondence Recap
*Directive Layer 1 — Swaraj Shelke Automations*

## Objective
Retrieve the most recent email thread with each attendee and summarize key context points using AI.

## Pipeline Path
- Subworkflow: `Email & linkedin scraping for meeting prep.json`
- Node: `Get Last Correspondence` -> `Correspondance Recap Agent`

## Security Rule
- Strip all raw auth headers or tokens before passing text to the LLM summarizer.
