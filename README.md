This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Languages

The website has Slovak, English, and German pages at `/sk`, `/en`, and `/de`, including their `/odoo` pages. Unprefixed `/` and `/odoo` redirect according to the `x-vercel-ip-country` header provided by Vercel: Slovakia and Czechia use Slovak; Germany, Austria, Switzerland, Liechtenstein, Luxembourg, and Belgium use German; other countries use English. If the header is missing, the site uses Slovak. A visitor's manual choice is saved in the `novem_locale` cookie and takes priority on later unprefixed visits. Direct language URLs always keep their chosen language.

Copy is stored in `src/lib/i18n.ts`. The contact form sends its data to the existing email endpoint; its labels and status messages follow the selected site language. Country detection requires a host that supplies the Vercel country header. When running locally, the fallback is Slovak.
