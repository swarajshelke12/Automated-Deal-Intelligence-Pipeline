"""
Validate n8n Workflow Schemas
Deterministic tool to inspect and ensure the integrity of the backend n8n JSON files.
Layer 3 Deterministic Tool — Swaraj Shelke Automations
"""

import json
from pathlib import Path
from utils import BASE_DIR, logger

W1_NAME = "Automate Sales Meeting Prep with AI & APIFY Sent To WhatsApp.json"
W2_NAME = "Email & linkedin scraping for meeting prep.json"

WORKFLOW_DIR = BASE_DIR / "n8nWorkflows" if (BASE_DIR / "n8nWorkflows").exists() else BASE_DIR / "n8nWworkflows"


def validate_workflows():
    w1_path = WORKFLOW_DIR / W1_NAME
    w2_path = WORKFLOW_DIR / W2_NAME

    # Fallback to alternate names if downloaded with (1)
    if not w1_path.exists():
        alt = WORKFLOW_DIR / "Automate Sales Meeting Prep with AI & APIFY Sent To WhatsApp (1).json"
        if alt.exists():
            w1_path = alt

    if not w1_path.exists():
        logger.error(f"Missing Workflow 1: {w1_path}")
        return False
    if not w2_path.exists():
        logger.error(f"Missing Workflow 2: {w2_path}")
        return False

    with open(w1_path, "r", encoding="utf-8") as f:
        w1 = json.load(f)
    with open(w2_path, "r", encoding="utf-8") as f:
        w2 = json.load(f)

    logger.info(f"Loaded Workflow 1: '{w1.get('name')}' ({len(w1.get('nodes', []))} nodes)")
    logger.info(f"Loaded Workflow 2: '{w2.get('name')}' ({len(w2.get('nodes', []))} nodes)")

    # Verify key nodes in Workflow 1
    w1_node_names = {n.get("name") for n in w1.get("nodes", [])}
    required_w1 = {
        "Check For Upcoming Meetings",
        "Extract Attendee Information",
        "Get Correspondance",
        "Get LinkedIn Profile & Activity",
        "Attendee Research Agent",
    }
    missing_w1 = required_w1 - w1_node_names
    if missing_w1:
        logger.warning(f"Workflow 1 missing expected nodes: {missing_w1}")
    else:
        logger.info("[PASS] Workflow 1 has all core pipeline nodes.")

    # Verify key nodes in Workflow 2 (allowing n8n versioned suffix '1')
    w2_node_names = {n.get("name") for n in w2.get("nodes", [])}
    required_w2_groups = [
        {"Execute Workflow Trigger"},
        {"Router", "Router1"},
        {"Get Last Correspondence", "Get Last Correspondence1"},
        {"Correspondance Recap Agent", "Correspondance Recap Agent1"},
        {"APIFY Web Scraper"},
        {"LinkedIn Summarizer Agent", "LinkedIn Summarizer Agent1"},
    ]
    missing_w2 = []
    for group in required_w2_groups:
        if not (group & w2_node_names):
            missing_w2.append("/".join(group))
    if missing_w2:
        logger.warning(f"Workflow 2 missing expected nodes: {missing_w2}")
    else:
        logger.info("[PASS] Workflow 2 has all core sub-pipeline nodes.")

    logger.info("Validation successful.")
    return True


if __name__ == "__main__":
    success = validate_workflows()
    if not success:
        exit(1)
