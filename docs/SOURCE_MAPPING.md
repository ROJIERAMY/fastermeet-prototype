# Source-to-prototype mapping

Reviewed 22 October 2026 from the supplied `app.fastermeet.com-develop.zip`. The ZIP is the React/Umi frontend. `config/routes.ts`, active page forms, `data.d.ts` contracts and related services were used; generic Ant Design scaffold pages were excluded.

| Frontend route/source | Prototype location | Source fields and behavior represented |
|---|---|---|
| `/user/login`, `/user/register`, `/user/verify-email` | Login and recovery previews | Customer/admin entry, registration and verification preview; sample-only session |
| `/dashboard/analysis` | Overview | Demo metrics; source dashboard includes template charts, so this is a client-preview dashboard |
| `/customers` | Admin → Customers | Contact user, customer type, names, primary contact, company/display name, address, email, work/mobile phone |
| `/products/item` | Admin → Products → Products | Product name and description |
| `/products/subscription-items` and `products/plan` | Admin → Products → Plans | Product, capacity, billing cycle, customer type, assignment mode, account limit, base price, active flag |
| `products/addon` | Admin → Products → Add-ons | Product, description, storage size, price |
| `billing-cycle` source used from product tab | Admin → Products → Billing cycles | Count/duration; the standalone billing-cycle page is not in `routes.ts` |
| `/subscriptions` | Admin → Subscriptions | Customer/plan, start/end, active/canceled/expired/pending_payment, auto-renew |
| `/events` | Admin → Events | Subscription, title, description, fixed/scheduled, times, status and UUID |
| `/video-hosting/hosting-platforms` | Admin → Video hosting → Platforms | Name, active state |
| `/video-hosting/account-types` | Admin → Video hosting → Account types | Platform and type name |
| `/video-hosting/hosting-account-capacities` | Admin → Video hosting → Capacities | Account type, capacity and label |
| `/video-hosting/hosting-accounts` | Admin → Video hosting → Hosting accounts | Capacity, parent, identifier, assignment, usage, concurrency, status; credentials deliberately omitted from public preview |
| `/system-settings/users` | Admin → System users | Name, email, role; password input discarded, not persisted |

The original frontend has several demo/template screens and a generic README. Its presence does not prove that matching backend endpoints work. This prototype is a UI review artifact with fictional local data. Meeting room, chat, recording, payment, Moodle, S3 and Zoom experiences are simulations, not verified production features of the ZIP. Laravel routes, controllers, schema, tests and private API contracts were not in the uploaded archive.

The source `Customers` route is an admin CRUD module. Customer Workspace is a proposed customer-facing presentation of meetings, recordings, team and subscription data, not a route verified in this ZIP. The AI helper is also proposed; see `SCOPE_BUDGET.md` and `AI_HELPER.md`.

## New Vision business vision

The three-page New Vision document supplied 25 October 2026 describes Individual and Business capabilities and Zoom Meeting/Webinar capacities and billing terms. It is product direction, distinct from the reviewed React/Umi ZIP. Package price and final logic are explicitly pending from Amr. The prototype displays the distribution without claiming backend completion or a commercial rate.

The supplied screenshot of `/products/subscription-items` shows product cards with linked plan/add-on counts, a selected-product details area and Add Plan, Add Addon and Add Billing Cycle actions. The admin prototype now presents that hierarchy, backed by its browser-local sample collections. On 25 October, access to the live admin was available for read-only inspection. The authenticated Subscription items page showed Product 1 (one pooled individual plan, webinar 1,000, Bill 1, EGP 1,000) and product 2 (no plans). Its Add Plan form includes capacity, billing cycle, customer type, assignment type, price and active state; Add Addon includes storage and price; Add Billing Cycle uses count and duration unit. Those are incomplete sample records and are not copied as the approved catalog. The prototype uses its own fictional sample records and follows the live screen’s blue identity and orange/blue/green create actions.

## Full admin review and customer linkage — 25 October 2026

An authenticated, read-only review covered Dashboard, Customers, Product Item, Subscription Items, Subscriptions, Events, Video Hosting (platforms, types, capacities and accounts), and System Settings → Users. The live Dashboard still contains generic template metrics, while the CRUD modules expose the concrete relationships used in this prototype. Customer rows link to users and customer type; subscriptions link customer to plan, dates, auto-renew and status; events link to a subscription with fixed/scheduled type, status, times and UUID. Video hosting follows platform → account type → capacity → hosting account with status, assignment and concurrency. The source event detail did not expose a generated Zoom join URL. Live records were not modified.

The customer workspace is a proposed presentation of these linked entities. The prototype derives its meetings from the admin event collection for the selected customer, checks the active subscription before scheduling or joining, and uses only active matching demo hosting accounts. It does not call the source website or Laravel backend.
