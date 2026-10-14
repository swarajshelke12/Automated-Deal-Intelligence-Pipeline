"""
Simulate Attendee Extractor
Layer 3 Deterministic Tool — nayva tech industries
"""
import json
from utils import logger

SAMPLE_EVENT = {
    "summary": "AI Product Strategy Review",
    "description": "Meeting with Sarah Connor (CTO at Cyberdyne). LinkedIn: https://linkedin.com/in/sarah-connor",
    "attendees": [
        {"email": "host@company.com", "organizer": True},
        {"email": "sarah@cyberdyne.io", "displayName": "Sarah Connor"}
    ]
}

def extract_attendees(event):
    guests = [a for a in event.get("attendees", []) if not a.get("organizer")]
    logger.info(f"[PASS] Extracted {len(guests)} non-organizer attendee(s).")
    return guests

if __name__ == "__main__":
    guests = extract_attendees(SAMPLE_EVENT)
    print(json.dumps(guests, indent=2))
