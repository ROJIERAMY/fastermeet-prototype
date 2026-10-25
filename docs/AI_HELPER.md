# AI helper: prototype and production handover

## What the public preview demonstrates

- Floating assistant in student and admin roles, plus a dedicated helper page.
- Guided answers to English/Arabic questions, based on current fictional browser data.
- Student: next lesson, completed count, live session, recordings, joining and certificate boundary.
- Admin: pending subscriptions, hosting utilization, scheduled events, catalog counts, customers and reports.
- Contextual action buttons navigate to the relevant page. Student lesson completion changes progress and subsequent answers.
- Session-only conversation; no chat data is written to the application database or sent to an external API. No AI model is currently invoked.

## Production implementation

1. Add an authenticated Laravel assistant endpoint with server-side role and tenant authorization. Derive role and tenant from the session, never from a client-supplied role value.
2. Build explicit read-only tools for allowed data: student course/progress/session/recording lookups, and admin scoped subscription/event/hosting/catalog aggregates. Apply the same access policy as each normal API endpoint.
3. Retrieve knowledge from reviewed course content and support documentation, keep source attribution, and handle no-result cases. Do not grant the model direct database or credential access.
4. Use a server-side model provider key with rate limits, cost quotas, logging redaction, prompt injection defenses and short retention. Never place a provider key or hosting credentials in the public frontend.
5. Validate all tool arguments, make mutation tools opt-in with explicit user confirmation, and provide clear error/handoff behavior when the answer is uncertain.
6. Test role isolation, cross-tenant leakage, Arabic/English responses, stale data, prompt injection, accessibility and mobile flows before production release.

The uploaded React/Umi ZIP has no AI/student routes or Laravel source. This is a proposed capability for review, independent of the existing backend's verified implementation.
