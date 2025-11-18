# MAB AI Strategies Website

Production-ready marketing site for MAB AI Strategies LLC built with Next.js 14 (App Router), React, TypeScript, Tailwind CSS, and Prisma.

## Getting Started

```bash
npm install
cp .env.example .env
# update DATABASE_URL
npx prisma migrate dev --name init
npm run dev
```

## Deploying

Deploy to Vercel, set environment variables (`DATABASE_URL`, `NEXT_PUBLIC_SITE_URL`), and enable Prisma migrations through `prisma migrate deploy`.
