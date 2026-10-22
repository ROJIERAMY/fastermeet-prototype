# Client walkthrough and development handover

## Suggested seven-minute demo

1. Select Enter customer demo and introduce the workspace dashboard.
2. Schedule a new webinar, choose a team and recording option. Open its details to share an invite and preview calendar export.
3. Join a session, enter the demo room, and end it. Show the newly created recording and sample playback.
4. Open Team space, invite a teammate and send a channel message.
5. Open Subscription. Simulate a failed upgrade, then retry successfully. Preview its invoice and use Print / Save PDF if appropriate.
6. Open Reports and switch among the six datasets.
7. Open Integrations to demonstrate master Zoom accounts, Moodle course mapping and archive settings. Explain that vendor flows are simulated.
8. Switch to admin in Settings and show customer/subscription management. Reset the workspace before the next client session if needed.

## Backend review once source access is granted

Read the actual repository before turning this checklist into findings. These are areas to verify, not claims of missing implementation:

- Laravel authentication, verification/reset, token/session lifetime, server authorization and customer isolation.
- API request/response formats, validation, errors, pagination, filters and frontend integration.
- Plans/add-ons/subscriptions, prorations, payment callbacks/signature verification/idempotency, failures, refunds and tax/legal invoice rules.
- Authorized Zoom master-account provisioning, meeting/webinar capabilities, scheduling constraints, host conflicts, guest/cohost roles and signed SDK join flows.
- Webhook event validation/retries/idempotency; recording discovery, signed playback/download/share links, retention and S3 archival.
- Team/member invitations and acceptance, permission policy, persistent authorized group chat, notifications and email delivery.
- Existing Moodle instance authorization, course/session linking and user mapping. ClassX multi-instance LMS provisioning remains outside this prototype.
- Six reports with real data visibility rules and CSV export.
- Schema/migrations, queues/workers/scheduler, backups, storage limits, rate limits, audit logs, dependency risks, deployment/rollback and CI checks.
- Native iOS/Android applications remain separate; this prototype is responsive web.

Confirm final API, commercial rules, vendor licenses, environment targets and acceptance criteria before production implementation. Preserve the separately agreed two-month delivery period and unified EGP265,000 quotation unless the parties agree otherwise.
