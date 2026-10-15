"""
Audit Client Portal Security Gate
Layer 3 Deterministic Tool — Swaraj Shelke Automations
"""
from utils import logger

def audit_gatekeeper_credentials(client_id, password):
    if len(client_id) < 5:
        logger.warning("[FAIL] Client ID too short.")
        return False
    if len(password) < 8:
        logger.warning("[FAIL] Password too weak (must be >= 8 chars).")
        return False
    logger.info("[PASS] Client portal security credentials satisfy policy.")
    return True

if __name__ == "__main__":
    assert audit_gatekeeper_credentials("client_admin", "Swaraj2026!")
