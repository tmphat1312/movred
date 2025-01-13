# MovRed - Movie Recommendations

Movred is a web application all about movie recommendations, make sure you don't struggle with binge-watching after visiting [`movred.vercel.app`](https://movred.vercel.app/).

## Getting Started

### Make it live

First, do whatever possible to get this repository.

Second, install dependencies:

```bash
npm install
```

Third, fill in all environment variables displayed in `.env.example`:

```bash
# clerk.com
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

NEXT_PUBLIC_CLERK_SIGN_IN_FORCE_REDIRECT_URL=/
NEXT_PUBLIC_CLERK_SIGN_UP_FORCE_REDIRECT_URL=/

TMDB_READ_ACCESS_TOKEN=
TMDB_API_KEY=

# Turso.tech
DATABASE_URL=
DATABASE_AUTH_TOKEN=
```

> **Note**: `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` and `CLERK_SECRET_KEY` are from [`clerk.com`](https://clerk.com/)

> **Note**: `DATABASE_URL` and `DATABASE_AUTH_TOKEN` are from [`turso.tech`](https://turso.tech/)

Finally, run the development server:

```bash
npm run dev
```

Open [`http://localhost:3000`](http://localhost:3000) with your browser to see the result.

### Get some data to your application

First, create static data by running this command:

```bash
npm run db:port
```

Second, scrape some data from [`tmdb API`](https://developer.themoviedb.org/docs/getting-started) by running:

```bash
npm run db:scrape
```

> **Note**: <br />You can adjust how many movie records to scrape in `./src/data/__scrape-data.ts` on the two variables `fromPage` and `toPage`. <br /> The total number of movie records is `(toPage - fromPage) * 20`

## Licence

No, you must not use this project for any purposes without my permission.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [`Next.js Documentation`](https://nextjs.org/docs) - learn about Next.js features and API.
- [`Learn Next.js`](https://nextjs.org/learn) - an interactive Next.js tutorial.

> You can check out [`the Next.js GitHub repository`](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

To learn more about TailwindCSS, take a look at:

- [`TailwindCSS Documenation`](https://tailwindcss.com/) - learn about utility classes and functionalities of Tailwind.
- [`Tailwind Motion`](https://rombo.co/tailwind/) - beautiful animations all for free.

This project is not here without:

- [`Clerk Authentication`](https://clerk.com/) - the most comprehensive User Management Platform.
- [`Turso Database`](https://turso.tech/) - the way to go for SQLite lovers.
- [`Drizzle ORM`](https://orm.drizzle.team/) - a loving ORM for TypeScript lovers.

## Deployment

### Docker

The `Dockerfile` is already there for you to mess around with `Docker`. Alternatively, you could use my hosted version on [`tmphat1312/movred`](https://hub.docker.com/repository/docker/tmphat1312/movred/general).

### Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
