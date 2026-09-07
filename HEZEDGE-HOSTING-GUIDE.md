# HezEdge Consulting Website

This package contains the production source for the HezEdge Consulting website.

## Requirements

- Node.js 22 or later
- npm

## Run locally

```bash
npm ci
npm run dev
```

Open the local address shown in the terminal.

## Production build

```bash
npm ci
npm run build
```

The website uses the native Next.js runtime and can be deployed directly to Vercel.

## Recommended hosting options

### Option 1: Keep the managed deployment

The site is already deployed. Connect the final domain to the existing hosted project instead of uploading this archive.

### Option 2: Cloudflare Workers

1. Create a Cloudflare account and Workers project.
2. Connect a GitHub repository containing this source.
3. Use Node.js 22 or later.
4. Set the build command to `npm run build`.
5. Deploy the generated Worker output.
6. Add `hezedge.com` as a custom domain after testing.

### Option 3: Hand the package to Codex

Attach the ZIP to a Codex project and instruct Codex to:

> Deploy this existing Vinext website to my Cloudflare account. Preserve its design, content, routes and responsive behaviour. Run the production build first. Do not replace it with a template. Configure the custom domain only after the temporary deployment has been verified.

## Enquiry form

The enquiry form currently prepares an email to `info@hezedge.co.uk` in the visitor's email application. This requires no server credentials.

For direct background submission, connect the form to a transactional email provider or CRM and add spam protection before public launch.

## Domain cutover safety

Do not change the current `hezedge.com` DNS until the new deployment has been tested using its temporary URL. Record the existing DNS values before making changes.
