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
