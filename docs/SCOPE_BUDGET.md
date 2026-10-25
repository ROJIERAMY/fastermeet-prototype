# Faster Meet — project allocation for discussion

**Fixed project quotation:** EGP 265,000 over **two calendar months**. This is a distribution of the agreed one-time professional-services amount, including implementation still to be completed. It is not a set of extra charges or a statement of actual wages/vendor invoices.

| Feature / workstream | EGP | What the allocation covers | Planned window | Evidence in supplied ZIP |
|---|---:|---|---|---|
| Requirements & architecture | 10,000 | Workshops, frontend audit, Laravel/API architecture, data model, backlog, acceptance criteria | Weeks 1–2 | Project-wide |
| Identity & access | 22,000 | Laravel authentication, verification/reset, secure sessions, role and tenant policies, customer/admin login UI | Weeks 1–4 | Frontend routes; backend not reviewed |
| Customers & system users | 17,000 | Customer/contact/user endpoints, validation, permissions, linked records and admin forms | Weeks 2–4 | Admin UI contracts |
| Products, plans & add-ons | 23,000 | Product and billing-cycle rules, plan/pricing/capacity assignment, add-on data, admin API/forms | Weeks 2–5 | Admin UI contracts |
| Subscriptions & billing | 27,000 | Lifecycle/renewals, payment state, gateway callbacks, invoices, failures and admin UI | Weeks 3–6 | Subscription UI; gateway not verified |
| Events & collaboration | 29,000 | Fixed/scheduled events, calendar, meeting flow, host availability, join flow and scoped team features | Weeks 3–6 | Event UI; room/chat are demo only |
| Video hosting & recordings | 36,000 | Platform/account/capacity management, Zoom provisioning/webhooks, recording retrieval/storage integration | Weeks 3–7 | Hosting admin UI; vendor behavior not verified |
| Customer workspace | 23,000 | Customer dashboard, meetings/calendar, recordings, team, self-service plans and invoices, with Laravel tenant access policies | Weeks 4–7 | Customer journey is a prototype; backend not reviewed |
| AI helper for customers/admins | 35,000 | Secure Laravel assistant endpoint, model connection, role-scoped tools, bilingual retrieval, limits and evaluation | Weeks 5–8 | Proposed; guided prototype responses |
| Dashboards & reports | 18,000 | Admin metrics, reports, filters, CSV and permission-safe queries | Weeks 5–7 | Template dashboard; demo reports |
| QA, security & launch | 25,000 | End-to-end/integration testing, access checks, fixes, deployment, monitoring setup, training and handover | Weeks 6–8 | Delivery work |
| **Total** | **265,000** | **Complete implementation allocation** | **Two months** | |

## Customer Workspace

`Customers` is an admin entity representing an organization or person who owns a subscription and its events. **Customer Workspace** is the customer-facing experience: dashboard, meetings, calendar, recordings, team space, subscription and invoices. The static preview uses fictional local records; production requires verified Laravel authentication, tenant separation and links to the corresponding subscription and event data. The EGP 23,000 row covers this work within the fixed total.

## Commercial boundary and assumptions

- The allocation includes frontend completion, Laravel/backend development, integrations, testing and launch labor. The ZIP contains React/Umi frontend source only. Laravel implementation status cannot be established from it, so this is a planning allocation, subject to a first-week code and requirements review.
- The prototype's “AI helper” is deterministic. The EGP 35,000 row is for a production backend/model integration, not proof that a live AI service is already connected.
- External recurring charges and usage, including hosting, Zoom licenses, model API, cloud storage and payment processing fees, require separately selected vendor plans/actual consumption. No fabricated supplier prices are included in this fixed services total. Taxes, if applicable, follow the signed quotation.
- The two-month target assumes timely access to the backend, vendor accounts and decisions and a frozen agreed scope. Material changes need a written change order; this page itself does not amend the quotation.
