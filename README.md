# Demo CRM

A simple CRM used to demonstrate the AI Customization Platform.

## What this is

A vanilla Next.js CRM app (deals, contacts, pipeline) with **zero customization code**. The only trace of the platform is one script tag in `src/app/layout.tsx`:

```html
<script src="https://vendo.run/widget.js" data-deploy-id="..." defer />
```

Everything else (AI, forking, building, deploying, routing) is handled by the platform externally.

## Running the demo

Each demo user has their own deployed instance:

1. Navigate to the user's CRM URL (e.g., `crm-demo-a.demo.vendo.run`)
2. Click the sparkle button in the bottom-right corner
3. Type any customization in plain English
4. Watch it go live

### Example customizations

- "Add a priority field to deals with color coding — red for high, yellow for medium, green for low"
- "Replace the deals table with a Kanban board grouped by status"
- "Notify me on Slack when a deal is marked as won"
- "Add a search bar that filters deals by customer name"
- "Show a chart of total deal value by status"

## Tech stack

- Next.js 15 (App Router)
- Neon Postgres (via Drizzle ORM)
- Tailwind CSS
- Deployed on Railway via Vendo

## Development

```bash
pnpm install
DATABASE_URL="postgres://..." pnpm dev
```

## Environment variables

| Variable | Description |
|----------|-------------|
| `DATABASE_URL` | Neon Postgres connection string |

The customization widget is injected automatically by the Vendo app-proxy when `widget_enabled` is set on the deployment. No app-side configuration needed.
