# Testing Strategy: Deterministic & Frontend Verification
*nayva tech industries Quality Assurance*

## Multi-Tier Testing Pyramid
1. **Deterministic Execution Layer**:
   - Python tests in `execution/` run against real JSON schemas and endpoints.
   - Run via `python execution/run_all_deterministic_tests.py`.
2. **Frontend Type & Lint Layer**:
   - TypeScript strict mode checks: `npm run build`.
   - Oxlint static analysis: `npm run lint`.
3. **Browser E2E Layer**:
   - Verified automated browser subagent flows for login gate, dashboard review, and sign-out locking.
