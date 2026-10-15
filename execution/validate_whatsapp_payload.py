"""
Validate WhatsApp Cloud API Payload
Layer 3 Deterministic Tool — Swaraj Shelke Automations
"""
import re
from utils import logger

def validate_whatsapp_recipient(phone_number):
    cleaned = re.sub(r'\D', '', phone_number)
    if len(cleaned) < 10 or len(cleaned) > 15:
        logger.warning(f"[FAIL] Invalid international phone number: {phone_number}")
        return False
    logger.info(f"[PASS] Valid WhatsApp destination: +{cleaned}")
    return True

if __name__ == "__main__":
    assert validate_whatsapp_recipient("+919876543210")
