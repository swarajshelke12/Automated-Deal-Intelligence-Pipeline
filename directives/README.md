# Directives (Layer 1: What To Do)

This directory contains Standard Operating Procedures (SOPs) that specify objectives, inputs, tools, outputs, and edge cases for the CRM automation system.

## Principles

1. **Deterministic Execution First**: When an operation is repeated or requires external APIs (n8n webhook calls, calendar polling, schema checks), defer to deterministic Python scripts in `execution/`.
2. **Living Instructions**: If API limits, timing, or schemas shift, update the directive with new findings.
3. **Template Conformance**: Every new SOP follows `_template.md`.
