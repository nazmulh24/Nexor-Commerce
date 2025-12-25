import Head from "next/head";

export default function Meta({ title, description, keywords, author }) {
  const siteTitle = title ? `${title} — NEXOR` : "NEXOR — Nexor Commerce LLC";
  const siteDescription =
    description ||
    "Nexor Commerce LLC is a US-based e-commerce and wholesale company focused on reliable sourcing and marketplace-driven distribution.";
  const siteKeywords =
    keywords ||
    "ecommerce, wholesale, sourcing, distribution, online retail, marketplace";
  const siteAuthor = author || "Nexor Commerce LLC";

  return (
    <Head>
      <title>{siteTitle}</title>
      <meta name="description" content={siteDescription} />
      <meta name="keywords" content={siteKeywords} />
      <meta name="author" content={siteAuthor} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
