"""
Test Gmail Correspondence Filter
Layer 3 Deterministic Tool — nayva tech industries
"""
from utils import logger

SAMPLE_THREADS = [
    {"from": "sarah@cyberdyne.io", "snippet": "Looking forward to reviewing the Q4 roadmap and pricing tiers."},
    {"from": "newsletter@tech.com", "snippet": "Weekly digest of artificial intelligence news."}
]

def filter_correspondence(threads, attendee_email):
    relevant = [t for t in threads if attendee_email in t["from"]]
    logger.info(f"[PASS] Filtered {len(relevant)} relevant email threads for {attendee_email}.")
    return relevant

if __name__ == "__main__":
    res = filter_correspondence(SAMPLE_THREADS, "sarah@cyberdyne.io")
    assert len(res) == 1
