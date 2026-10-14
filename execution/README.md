# Execution (Layer 3: Deterministic Tools)

This directory houses deterministic Python scripts and utilities for validating, testing, and interacting with the MeetPrep CRM backend automations and external endpoints.

## Tools
- `utils.py`: Standard library utilities for `.env` loading, `.tmp/` management, and structured logging.
- `validate_workflow_schemas.py`: Validates the structure and integrity of both n8n workflow JSON files in `n8nWworkflows/`.
- `test_n8n_webhook.py`: Dispatches sample webhook payloads to the configured n8n endpoint and tests normalization into CRM Meeting objects.
