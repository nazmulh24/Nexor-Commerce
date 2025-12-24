import Layout from "../components/Layout";

export default function About() {
  return (
    <Layout title="About Nexor Commerce">
      <section className="section">
        <div className="container narrow">
          <h1>About Nexor Commerce</h1>
          <p>
            Nexor Commerce LLC is a modern e-commerce and wholesale company
            established to support brands, distributors, and suppliers with
            reliable online distribution.
          </p>
          <p>
            Our core operations focus on wholesale sourcing and
            marketplace-based retail, enabling efficient product placement,
            consistent sales channels, and brand integrity. We believe in
            building long-term relationships through clear communication,
            ethical sourcing, and dependable execution.
          </p>
          <h2>Our Mission</h2>
          <p>
            Our mission is to create sustainable value by connecting quality
            products with global online marketplaces through efficient and
            transparent operations.
          </p>
          <h2>Values</h2>
          <ul className="bullet-list">
            <li>Professional integrity</li>
            <li>Long-term partnerships</li>
            <li>Operational efficiency</li>
            <li>Market transparency</li>
          </ul>
        </div>
      </section>
    </Layout>
  );
}
