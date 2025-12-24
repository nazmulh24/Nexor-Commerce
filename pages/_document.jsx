import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const description =
    "Nexor Commerce LLC (NEXOR) — a US-based e-commerce and wholesale company specializing in supplier partnerships and online retail on major marketplaces.";
  const siteName = "NEXOR";
  const url = "https://nexorcommerce.com/";

  const ldJson = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Nexor Commerce LLC",
    url,
    email: "sales@nexorcommerce.com",
    brand: {
      "@type": "Brand",
      name: "NEXOR",
    },
  };

  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={description} />
        <meta name="theme-color" content="#0A2A4A" />

        {/* Inter font (performance-friendly via swap) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
          rel="stylesheet"
        />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="NEXOR — Nexor Commerce LLC" />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:site_name" content={siteName} />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="NEXOR — Nexor Commerce LLC" />
        <meta name="twitter:description" content={description} />

        <link rel="canonical" href={url} />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
