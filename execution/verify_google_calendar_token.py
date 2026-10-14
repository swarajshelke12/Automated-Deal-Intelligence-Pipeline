"""
Verify Google Calendar OAuth Token
Layer 3 Deterministic Tool — nayva tech industries
"""
import sys
from utils import logger

def verify_token_format(client_id, client_secret):
    if not client_id or not client_secret:
        logger.warning("[FAIL] Missing Google OAuth credentials.")
        return False
    if not client_id.endswith(".apps.googleusercontent.com"):
        logger.warning("[FAIL] Google Client ID must end with .apps.googleusercontent.com")
        return False
    if not client_secret.startswith("GOCSPX-"):
        logger.warning("[FAIL] Google Client Secret must start with GOCSPX-")
        return False
    logger.info("[PASS] Google OAuth credential format valid.")
    return True

if __name__ == "__main__":
    cid = sys.argv[1] if len(sys.argv) > 1 else "123456789-sample.apps.googleusercontent.com"
    sec = sys.argv[2] if len(sys.argv) > 2 else "GOCSPX-SampleSecretKey123"
    valid = verify_token_format(cid, sec)
    sys.exit(0 if valid else 1)
