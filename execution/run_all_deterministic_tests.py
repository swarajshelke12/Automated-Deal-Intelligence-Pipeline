"""
Master Deterministic Test Suite
Layer 3 Deterministic Tool — Swaraj Shelke Automations
"""
from utils import logger
import validate_workflow_schemas
import test_n8n_webhook
import verify_n8n_node_configs

def run_suite():
    logger.info("=== Running Swaraj Shelke Automations Master Test Suite ===")
    assert validate_workflow_schemas.validate_workflows()
    assert test_n8n_webhook.test_webhook()
    assert verify_n8n_node_configs.inspect_nodes()
    logger.info("=== [ALL PASS] All deterministic tests succeeded ===")
    return True

if __name__ == "__main__":
    run_suite()
