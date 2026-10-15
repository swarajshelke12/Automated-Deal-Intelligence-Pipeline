"""
Verify n8n Node Configurations
Layer 3 Deterministic Tool — Swaraj Shelke Automations
"""
import json
from pathlib import Path
from utils import BASE_DIR, logger

def inspect_nodes():
    w1_path = BASE_DIR / "n8nWorkflows" / "Automate Sales Meeting Prep with AI & APIFY Sent To WhatsApp.json"
    with open(w1_path, "r", encoding="utf-8") as f:
        data = json.load(f)
    node_types = {n.get("type") for n in data.get("nodes", [])}
    assert "n8n-nodes-base.googleCalendar" in node_types
    assert "@n8n/n8n-nodes-langchain.chainLlm" in node_types
    logger.info("[PASS] Primary n8n node types verified.")
    return True

if __name__ == "__main__":
    inspect_nodes()
