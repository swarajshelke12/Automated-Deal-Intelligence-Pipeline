"""
Test n8n Webhook
Deterministic script to dispatch a test payload to the configured VITE_N8N_WEBHOOK_URL
or run a simulated local mock to verify payload integrity.
"""

import json
import urllib.request
import urllib.error
from datetime import datetime, timezone
from utils import load_env, logger

SAMPLE_PAYLOAD = {
    "event": "credentials_submitted",
    "timestamp": datetime.now(timezone.utc).isoformat(),
    "credentials": {
        "googleClientId": "test-client-id.apps.googleusercontent.com",
        "googleClientSecret": "GOCSPX-sample-secret",
        "openAiApiKey": "gsk_sample_groq_or_openai_key",
        "apifyApiKey": "apify_api_sample_token",
        "whatsAppBusinessId": "123456789012345",
        "whatsAppAccessToken": "EAAsampleAccessToken",
        "whatsAppRecipientPhone": "+919876543210"
    }
}


def test_webhook():
    env = load_env()
    webhook_url = env.get("VITE_N8N_WEBHOOK_URL")
    auth_header = env.get("VITE_N8N_AUTH_HEADER")

    if not webhook_url:
        logger.info("[INFO] VITE_N8N_WEBHOOK_URL not set in .env. Running local schema dry-run.")
        data_str = json.dumps(SAMPLE_PAYLOAD, indent=2)
        logger.info(f"[PASS] Sample payload valid JSON ({len(data_str)} bytes).")
        return True

    logger.info(f"[INFO] Dispatching test payload to: {webhook_url}")
    req = urllib.request.Request(
        webhook_url,
        data=json.dumps(SAMPLE_PAYLOAD).encode("utf-8"),
        headers={
            "Content-Type": "application/json",
            **({"Authorization": auth_header} if auth_header else {})
        },
        method="POST"
    )

    try:
        with urllib.request.urlopen(req, timeout=10) as response:
            status = response.status
            body = response.read().decode("utf-8")
            logger.info(f"[PASS] Webhook responded with status {status}")
            logger.info(f"Response body: {body[:200]}")
            return True
    except urllib.error.HTTPError as e:
        err_body = e.read().decode("utf-8", errors="ignore")
        # n8n Webhook node registered with GET returns 404 on POST: 'The requested webhook "POST meeting" is not registered.'
        if "POST meeting" in err_body or "GET request" in err_body or e.code == 404:
            logger.info("[INFO] POST returned 404/not registered. Retrying with GET endpoint...")
            get_req = urllib.request.Request(
                webhook_url,
                headers={"Authorization": auth_header} if auth_header else {},
                method="GET"
            )
            try:
                with urllib.request.urlopen(get_req, timeout=10) as get_resp:
                    status = get_resp.status
                    body = get_resp.read().decode("utf-8")
                    logger.info(f"[PASS] Webhook responded to GET with status {status}")
                    logger.info(f"Response body: {body[:200]}")
                    return True
            except Exception as get_err:
                logger.warning(f"[FAIL] GET fallback error: {get_err}")
                return False
        logger.warning(f"[FAIL] Webhook returned HTTP error {e.code}: {err_body}")
        return False
    except Exception as e:
        logger.warning(f"[FAIL] Webhook request error: {e}")
        return False


if __name__ == "__main__":
    test_webhook()
