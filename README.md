Turborepo Monorepo

This is a monorepo managed by Turborepo, containing several Next.js applications and packages. The monorepo is structured with the applications and packages in the apps and packages directories respectively.
Applications

The applications included in this monorepo are:

- ahadith: A Next.js website built with Tailwind CSS. It includes a changelog, hero content, and site metadata that can be customized. For more details, refer to the README in the apps/ahadith directory.

# Commit

Commit is a [Tailwind UI](https://tailwindui.com) site template built using [Tailwind CSS](https://tailwindcss.com) and [Next.js](https://nextjs.org).

## Getting started

To get started, first install dependencies via npm:

```bash
npm install
```

Next, create a `.env.local` file in the root of your project and set the `NEXT_PUBLIC_SITE_URL` environment variable to your site's public URL:

```
NEXT_PUBLIC_SITE_URL=https://example.com
```

Then start the development server:

```bash
npm run dev
```

Finally, open [http://localhost:3000](http://localhost:3000) in your browser to view the website.

## Customizing

We've tried to build this template exactly the same way we'd build it if it we were building a real website, so there's no weird configuration files or global variables like you might see in a product that has been built as a "theme" rather than as an actual site.

Instead, you make changes by just opening the files you want to change, and changing whatever it is you want to change.

We'll cover a lot of the fundamentals here to help you get going quickly, but at the end of the day the whole codebase is yours and you should feel free to edit everything directly as much as you need to.

### Project structure

The template is built as a pretty standard Next.js website, but using the `src` folder so things like the `app` directory are located at `./src/app` instead of being top-level.

### Title and metadata

You can update your site's metadata in `./src/app/layout.jsx`.

### Hero content

The main hero section for the site that includes your logo, headline, description, and links are all located in `./src/components/Intro.jsx`.

### Adding changelog entries

All of the changelog entries are stored in one big `./src/app/page.mdx` file. We were inspired to set it up this way by how projects commonly maintain plaintext `CHANGELOG` files, and thought it would be cool to parse this sort of format and turn it into a nicely designed site.

Each changelog entry should be separated by a horizontal rule (`---`) and should include an `<h2>` with a date, specified as an [MDX annotation](https://github.com/bradlc/mdx-annotations):

```md
---

![](@/images/your-screenshot.png)

## My new changelog entry {{ date: '2023-04-06T00:00Z' }}

Your content...
```

### Newsletter

You can find the newsletter sign up form in `./src/components/SignUpForm.jsx` — if you have a newsletter you'll want to wire this up with whatever mailing list software you use to get it to actually work.

### RSS feed

The site uses a [route handler](https://nextjs.org/docs/app/building-your-application/routing/router-handlers) to automatically generate an RSS feed at run time based on the rendered home page.

You can edit the metadata for the feed (like the title and description) in `./src/app/feed.xml/route.js`.

Make sure to set your `NEXT_PUBLIC_SITE_URL` environment variable as the RSS feed needs this to generate the correct links for each entry.

## License

This site template is a commercial product and is licensed under the [Tailwind UI license](https://tailwindui.com/license).

## Learn more

To learn more about the technologies used in this site template, see the following resources:

- [Tailwind CSS](https://tailwindcss.com/docs) - the official Tailwind CSS documentation
- [Next.js](https://nextjs.org/docs) - the official Next.js documentation
- [Motion One](https://motion.dev/) - the official Motion One documentation
- [MDX](https://mdxjs.com/) - the official MDX documentation

````markdown
# Micu Next.js Project

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

To begin, follow these steps:

1. Run the development server using one of the following commands:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   npm  dev
   ```
````

The development server will be accessible at [http://mosque.icu:3000](http://mosque.icu:3000). However, please note that to access the development server, you need to use the subdomain `dev.`. For example, access it via [http://dev.mosque.icu:3000](http://dev.mosque.icu:3000).

> **Note:** Setting this up requires some additional steps.

To access the development server via the subdomain "dev.mosque.icu" instead of "dev.localhost:3000", you'll need to make adjustments to your local environment and DNS settings. Here's a general outline of the steps you might need to take:

1.  **Edit Hosts File (Windows/macOS/Linux):**

    - On Windows: Open the file `C:\Windows\System32\drivers\etc\hosts` in a text editor with administrative privileges. Add the following line:
      ```
      127.0.0.1 dev.mosque.icu
      ```
    - On macOS/Linux: Open the terminal and edit the `/etc/hosts` file using a command like:
      ```
      sudo nano /etc/hosts
      ```
      Add the same line as above to the file.

2.  **Server Configuration:**

    - Update your server configuration to listen for requests on `dev.mosque.icu` instead of `localhost`.

3.  **DNS Configuration:**

    - If you want this subdomain to be accessible beyond your local machine, you'll need to configure DNS settings for the domain `mosque.icu` to point to your server's IP address. This involves updating DNS records on your domain registrar's website.

4.  **SSL/TLS Configuration (Optional but Recommended):**

    - If you're using HTTPS (recommended for security reasons), set up a valid SSL certificate for the subdomain `dev.mosque.icu`. Services like Let's Encrypt offer free SSL certificates.

5.  **Browser Testing:**

    - After making the necessary changes, access the development server via the URL [http://dev.mosque.icu:3000](http://dev.mosque.icu:3000) in your browser.

Please note that configuring custom domains and subdomains involves networking, domain management, and server configuration. If you're unfamiliar, seek guidance from someone experienced or refer to specific documentation.

2. You can start editing the page by modifying `app/page.tsx`. The page will auto-update as you edit the file.

3. This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, explore the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can also contribute to the [Next.js GitHub repository](https://github.com/vercel/next.js/).

## Deploy on Vercel

The easiest way to deploy your Next.js app is using the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) by the creators of Next.js.

For detailed deployment instructions, refer to the [Next.js deployment documentation](https://nextjs.org/docs/deployment).

```

```



