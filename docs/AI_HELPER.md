# AI helper: prototype and production handover

## What the public preview demonstrates

- Floating assistant in customer and admin roles, plus a dedicated helper page.
- Guided answers to English/Arabic questions, based on current fictional browser data.
- Customer: upcoming meetings, recordings, team members and subscription plans.
- Admin: pending subscriptions, hosting utilization, scheduled events, catalog counts, customers and reports.
- Contextual action buttons navigate to the relevant page. Customer meeting and subscription previews inform the guided answers.
- English/Arabic meeting requests can include tomorrow/today, weekdays or an ISO date, a time and optional duration. The planner checks sample host conflicts and suggests a later available slot on the same date. A proposed meeting opens the existing form prefilled for explicit review and save. No real invitation is sent.
- Session-only conversation; no chat data is written to the application database or sent to an external API. No AI model is currently invoked.
- Scheduling can span several messages (for example, “Book a meeting”, “tomorrow”, then “at 11 am for 30 minutes”). Follow-ups can change the time without losing the selected day. Quoted titles and guest emails can be carried into the review form.
- Saving a booking reviewed from the helper returns a confirmation in the chat with a meeting-details/link action. Host availability is checked against all demo customers sharing that account. Conversation context resets when the selected customer or role changes.
- The floating dialog supports keyboard focus containment, Escape to close, Arabic text direction and a mobile bottom sheet with 16 px input text to avoid iOS focus zoom.

## Production implementation

1. Add an authenticated Laravel assistant endpoint with server-side role and tenant authorization. Derive role and tenant from the session, never from a client-supplied role value.
2. Build explicit read-only tools for allowed data: customer meeting/recording/team/subscription lookups, and admin scoped subscription/event/hosting/catalog aggregates. Apply the same access policy as each normal API endpoint.
3. Retrieve knowledge from reviewed course content and support documentation, keep source attribution, and handle no-result cases. Do not grant the model direct database or credential access.
4. Use a server-side model provider key with rate limits, cost quotas, logging redaction, prompt injection defenses and short retention. Never place a provider key or hosting credentials in the public frontend.
5. Validate all tool arguments, make mutation tools opt-in with explicit user confirmation, and provide clear error/handoff behavior when the answer is uncertain.
6. Test role isolation, cross-tenant leakage, Arabic/English responses, stale data, prompt injection, accessibility and mobile flows before production release.

The uploaded React/Umi ZIP has no AI/customer-facing routes or Laravel source. This is a proposed capability for review, independent of the existing backend's verified implementation.
