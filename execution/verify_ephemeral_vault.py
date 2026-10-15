"""
Verify Ephemeral Vault Memory Lifecycle
Layer 3 Deterministic Tool — Swaraj Shelke Automations
"""
import time
from utils import logger

LOCK_DURATION_MS = 12 * 60 * 60 * 1000

def check_vault_expiration(submitted_at_epoch_ms):
    now_ms = int(time.time() * 1000)
    diff = now_ms - submitted_at_epoch_ms
    is_expired = diff >= LOCK_DURATION_MS
    logger.info(f"[PASS] Vault status: {'EXPIRED' if is_expired else 'ACTIVE'} ({diff}ms elapsed)")
    return is_expired

if __name__ == "__main__":
    # Check 1 hour ago (Active)
    assert not check_vault_expiration(int(time.time() * 1000) - 3600000)
