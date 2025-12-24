import Layout from "../components/Layout";

export default function OurServices() {
  return (
    <Layout title="Our Services">
      <section className="section">
        <div className="container narrow">
          <h1>What We Do</h1>
          <p>
            We provide structured e-commerce and wholesale services designed for
            brands and distributors seeking reliable online distribution.
          </p>
          <ul className="bullet-list">
            <li>
              <strong>Wholesale Sourcing</strong> — Identifying and sourcing
              products directly from authorized suppliers and distributors.
            </li>
            <li>
              <strong>Online Marketplace Retail</strong> — Selling products
              through established online marketplaces with compliance and brand
              awareness.
            </li>
            <li>
              <strong>Product Distribution</strong> — Managing inventory flow
              and distribution across online channels.
            </li>
            <li>
              <strong>Supplier Partnerships</strong> — Working closely with
              suppliers to establish consistent and scalable supply
              relationships.
            </li>
          </ul>
        </div>
      </section>
    </Layout>
  );
}
