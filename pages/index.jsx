import Link from "next/link";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <section className="hero">
        <div className="container">
          <h1>Reliable E-Commerce & Wholesale Partner</h1>
          <p className="subtext">
            Delivering trusted sourcing and online retail solutions through leading global marketplaces.
          </p>
          <p>
            Nexor Commerce LLC is a US-based e-commerce and wholesale company focused on sourcing quality products and distributing them through established online marketplaces such as Amazon. We operate with a strong commitment to professionalism, transparency, and long-term partnerships.
          </p>
          <p>
            <Link href="/contact" className="btn btn-primary">
              Contact Our Team
            </Link>
          </p>
        </div>
      </section>

      <section className="grid-4 container">
        <div className="card">
          <h2>Trusted Wholesale Sourcing</h2>
          <p>We source from authorized suppliers and distributors to ensure authenticity and reliability.</p>
        </div>
        <div className="card">
          <h2>Marketplace-Focused Distribution</h2>
          <p>Operational processes tailored for established marketplaces with compliance in mind.</p>
        </div>
        <div className="card">
          <h2>Supplier Partnership Model</h2>
          <p>We build long-term, scalable relationships that support predictable growth.</p>
        </div>
        <div className="card">
          <h2>Operational Transparency</h2>
          <p>Clear communication and accountable workflows to support partner confidence.</p>
        </div>
      </section>
    </Layout>
  );
}
