"""
Test Apify LinkedIn Actor Payload
Layer 3 Deterministic Tool — Swaraj Shelke Automations
"""
from utils import logger

def validate_actor_payload(profile_url):
    if not profile_url or "linkedin.com/in/" not in profile_url:
        logger.warning(f"[FAIL] Invalid LinkedIn URL: {profile_url}")
        return False
    logger.info(f"[PASS] Valid LinkedIn profile target: {profile_url}")
    return True

if __name__ == "__main__":
    assert validate_actor_payload("https://www.linkedin.com/in/executive-leader")
