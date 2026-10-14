# Standard Operating Procedure: 12-Hour Ephemeral Vault Lifecycle
*Directive Layer 1 — nayva tech industries*

## Objective
Guarantee client privacy by automatically locking and zeroing credential state 12 hours after submission.

## Steps
1. Client submits credentials -> `expiresAtTimestamp = Date.now() + 12h`.
2. Heartbeat timer polls every 5 seconds.
3. If `Date.now() >= expiresAtTimestamp`, purge all fields and mark `Locked & Expired`.
