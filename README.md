# Faster Meet — interactive client prototype

Prepared by **Allam Solutions** · 22 October 2026. [Open the live GitHub Pages preview](https://rojieramy.github.io/fastermeet-prototype/).

This responsive, static demonstration contains a Customer Workspace and an admin console. Open the link, select **Admin console → Enter admin demo** or **Customer workspace → Enter customer demo**. The sample workspace is stored in your browser; **Settings → Reset sample data** restores it. No production Laravel API or vendor service is contacted.

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

The prototype has sample meeting, calendar, room, recording, team, reporting and integration previews. Customer records remain an admin entity linked to subscriptions and events. The Customer Workspace demonstrates a customer-facing view of meetings, calendar, recordings, team and subscription. The full workstream allocation of the agreed **EGP 265,000 / two calendar months** development quotation is available in Admin → Scope & budget and `docs/SCOPE_BUDGET.md`. Sample product-plan prices are unrelated to that project quotation.

## Customer Workspace and AI helper preview

The Customer Workspace includes a dashboard, meeting scheduling and joining, calendar, recordings, team collaboration, subscription plans, sample invoices, settings and a guided AI helper. The admin console manages customer records, products, subscriptions, events and hosting. The helper answers English and Arabic questions from fictional browser data and links to relevant pages. Customer prompts cover meetings, recordings, team and plans; admin prompts cover subscriptions, hosting, events and catalog. Chat history lasts for the current tab only.

**This is an AI experience prototype, not a live language model.** Responses follow deterministic rules; no prompts are sent to a vendor. The customer-facing screens are a proposed presentation layer, while the reviewed ZIP contains admin customer records. The ZIP contains no Laravel backend or AI endpoint. See `docs/AI_HELPER.md` for the production integration plan.

## Run and verify

The root `index.html` is a standalone generated page for GitHub Pages. You can also serve `dist/` from any static server. Run `npm run build` to regenerate the root file and `npm run check` for syntax and static references. No npm dependencies are required. The Pages workflow deploys the generated page on changes to the application files.

`docs/SCOPE_BUDGET.md` records the complete project allocation, `docs/SOURCE_MAPPING.md` records the ZIP review, `docs/QA.md` records tested flows, and `docs/STATUS.md` explains production boundaries. No `.env` file or secret from the ZIP is included in this repository.
