# Faster Meet — interactive client prototype

Prepared by **Allam Solutions** · 22 October 2026. [Open the live GitHub Pages preview](https://rojieramy.github.io/fastermeet-prototype/).

This responsive, static demonstration contains a customer workspace, student learning space and an admin console. Open the link, select **Admin console → Enter admin demo**, **Student space → Enter student demo**, or **Enter customer demo**. The sample workspace is stored in your browser; **Settings → Reset sample data** restores it. No production Laravel API or vendor service is contacted.

## Source alignment

The admin sections were mapped against the user-supplied `app.fastermeet.com-develop.zip` frontend source, especially `config/routes.ts`, active `src/pages` forms and TypeScript data contracts. The ZIP is an Ant Design Pro / Umi frontend, not the Laravel backend. Generic Ant Design template pages and scaffold API examples are excluded. The interface retains Allam Solutions' client-preview design while reflecting the source's concrete entities and relationships.

| Admin area | Interactive records and relationships |
|---|---|
| Customers | Contact user, customer type, names, company/display name, address, email and phones |
| Products | Product name and description; grouped plans, add-ons and billing cycles |
| Plans | Product, hosting capacity, billing cycle, customer type, pooled/dedicated assignment, account limit, price and active state |
| Add-ons | Product, storage size in MB and price |
| Subscriptions | Customer → plan, dates, status and auto-renew |
| Events | Subscription → event, fixed/scheduled type, dates, status and demo UUID |
| Video hosting | Platform → account type → capacity → hosting account; parent, assignment, usage, concurrency and status |
| System users | Name, email, role and a password-shaped demo field that is discarded immediately |

Each admin collection supports list, search, view, create, edit and delete. Deletion is blocked while other demo records reference an item. The public demo never stores hosting credentials, passwords or real customer data.

The customer experience includes sample login/registration/recovery views, dashboard, meeting scheduling, calendar, lobby/room simulation, recording previews, team chat, subscription checkout simulation, invoices, reports, settings and integration previews. These are illustrative client journeys beyond the active admin routes in the ZIP. Demo product prices are unrelated to the separately agreed **EGP 265,000 / two calendar months** development quotation.

## Student and AI helper preview

The new Student space includes fictional courses, short lessons, progress tracking and links to sample live sessions. A floating **Ask AI** button and a dedicated **AI helper** page are available in all roles. The guided assistant answers English or Arabic questions using current demo data, suggests next steps and opens relevant pages. Student prompts cover lessons, progress, sessions and recordings; admin prompts cover subscriptions, hosting usage, events, catalog, customers and reports. Its chat history is kept only in the current tab; lesson progress is browser-local.

**This is an AI experience prototype, not a live language model.** Responses use deterministic rules and fictional records; no prompts are sent to a vendor. The ZIP did not contain student routes or an AI endpoint, so these are proposed additions. See `docs/AI_HELPER.md` for the secure backend integration plan.

## Run and verify

The root `index.html` is a standalone generated page for GitHub Pages. You can also serve `dist/` from any static server. Run `npm run build` to regenerate the root file and `npm run check` for syntax and static references. No npm dependencies are required. The Pages workflow deploys the generated page on changes to the application files.

`docs/SOURCE_MAPPING.md` records the ZIP review, `docs/QA.md` records tested flows, and `docs/STATUS.md` explains production boundaries. No `.env` file or secret from the ZIP is included in this repository.
