# Standard Operating Procedure: Apify LinkedIn Scraping
*Directive Layer 1 — nayva tech industries*

## Objective
Scrape LinkedIn public profile and recent posts for attendees using Apify actors to formulate strategic conversation starters.

## Tools
- Node: `APIFY Web Scraper`
- Subworkflow: `Email & linkedin scraping for meeting prep.json`

## Rate Limiting
- Enforce a 5-second backoff between concurrent attendee queries to prevent temporary IP throttles.
