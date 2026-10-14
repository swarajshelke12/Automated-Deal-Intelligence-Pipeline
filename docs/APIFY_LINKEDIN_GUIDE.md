# Apify LinkedIn Actor Scraping Configuration
*Data Extraction Standard — nayva tech industries*

## Integration Blueprint
- **Actor**: LinkedIn Profile & Activity Scraper via Apify API.
- **Input Parameters**: Attendee LinkedIn public URL extracted from invite or contact email domain.
- **Extracted Fields**:
  - Current Title & Company
  - Past Experience Summary
  - Recent posts & shared articles
- **Rate Limit Safeguards**: Configured with request delays and ephemeral proxy pools to ensure continuous scraping reliability.
