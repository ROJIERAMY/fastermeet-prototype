# Client walkthrough and development handover

1. Open the published preview. Enter the admin demo and show Customers → Products → Plans/Add-ons/Billing cycles.
2. In Subscriptions, show the customer/plan relationship, then Events for subscription-linked fixed and scheduled events.
3. In Video hosting, walk through Platform → Account type → Capacity → Hosting account. Open a record to show assignment, usage and status. Credentials are intentionally absent.
4. Show System users, Meetings, Calendar, Recordings, Team space, reports and the AI helper. Open Admin → Scope & budget to explain each workstream and its allocation.
5. Enter Customer Workspace, schedule a sample meeting, open the calendar, recordings, team and Subscription page, and ask the helper about the next meeting or plan. Switch to Admin and ask about subscriptions or hosting usage. Explain that Customers is the admin entity and Customer Workspace is the customer-facing view; both currently use fictional local data.
6. Use Settings → Reset sample data before the next presentation.

For development, obtain and review Laravel routes/controllers, migrations, auth/authorization, API contracts and integration tests. Reconcile backend behavior with the frontend contracts recorded in `SOURCE_MAPPING.md`, then wire the reviewed UI to real services. Confirm vendor licensing, payment rules, infrastructure, security, data handling and acceptance criteria with the client. The separately agreed EGP 265,000 / two-month quotation is unchanged.
