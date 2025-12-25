import Layout from "../components/Layout";
import Link from "next/link";

export default function OurServices() {
  return (
    <Layout title="Our Services">
      {/* Hero Section */}
      <section
        style={{
          background: "linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",
          color: "white",
          padding: "5rem 0",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage:
              "radial-gradient(circle at 25px 25px, rgba(255, 255, 255, 0.1) 2px, transparent 0)",
            backgroundSize: "50px 50px",
            opacity: 0.3,
          }}
        />
        <div
          className="container narrow"
          style={{ position: "relative", zIndex: 2 }}
        >
          <div style={{ textAlign: "center" }}>
            <h1
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                fontWeight: "800",
                marginBottom: "1.5rem",
                letterSpacing: "-0.02em",
                textShadow: "0 2px 4px rgba(0,0,0,0.1)",
              }}
            >
              Our Services
            </h1>
            <p
              style={{
                fontSize: "1.3rem",
                opacity: 0.9,
                maxWidth: "700px",
                margin: "0 auto",
                lineHeight: "1.6",
              }}
            >
              Comprehensive e-commerce and wholesale solutions for professional
              marketplace distribution
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section" style={{ padding: "4rem 0" }}>
        <div className="container narrow">
          {/* Introduction */}
          <div
            style={{
              background: "linear-gradient(135deg, #f8fafc 0%, #ffffff 100%)",
              padding: "3rem",
              borderRadius: "20px",
              boxShadow: "0 20px 60px rgba(0, 0, 0, 0.08)",
              marginBottom: "5rem",
              border: "1px solid #e2e8f0",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "-10px",
                left: "30px",
                background: "linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",
                color: "white",
                padding: "0.5rem 2rem",
                borderRadius: "25px",
                fontSize: "0.9rem",
                fontWeight: "600",
                letterSpacing: "0.05em",
              }}
            >
              PROFESSIONAL SOLUTIONS
            </div>
            <h2
              style={{
                color: "#1e3a8a",
                fontSize: "2.2rem",
                marginBottom: "1.5rem",
                fontWeight: "700",
                marginTop: "1rem",
              }}
            >
              What We Do
            </h2>
            <p
              style={{
                fontSize: "1.2rem",
                lineHeight: "1.8",
                color: "#4b5563",
                textAlign: "justify",
                margin: 0,
              }}
            >
              Nexor Commerce LLC provides structured e-commerce and wholesale
              services designed for brands, distributors, and suppliers seeking
              reliable, compliant, and scalable online marketplace distribution.
              Our comprehensive approach ensures operational excellence across
              all aspects of marketplace commerce.
            </p>
          </div>

          {/* Core Services */}
          <div style={{ marginBottom: "5rem" }}>
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <h2
                style={{
                  color: "#1e3a8a",
                  fontSize: "2.5rem",
                  fontWeight: "700",
                  marginBottom: "1rem",
                }}
              >
                Core Services
              </h2>
              <div
                style={{
                  width: "60px",
                  height: "4px",
                  background:
                    "linear-gradient(90deg, #1e3a8a 0%, #3b82f6 100%)",
                  margin: "0 auto",
                  borderRadius: "2px",
                }}
              />
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
                gap: "2.5rem",
              }}
            >
              {/* Service 1 */}
              <div
                style={{
                  background:
                    "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
                  padding: "3rem",
                  borderRadius: "20px",
                  boxShadow: "0 15px 50px rgba(30, 58, 138, 0.1)",
                  border: "1px solid #e2e8f0",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    width: "100px",
                    height: "100px",
                    background:
                      "linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",
                    opacity: 0.1,
                    borderRadius: "0 20px 0 100px",
                  }}
                />
                <div
                  style={{
                    background:
                      "linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",
                    color: "white",
                    width: "60px",
                    height: "60px",
                    borderRadius: "15px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.5rem",
                    marginBottom: "1.5rem",
                  }}
                >
                  📦
                </div>
                <h3
                  style={{
                    color: "#1e3a8a",
                    fontSize: "1.6rem",
                    marginBottom: "1rem",
                    fontWeight: "700",
                  }}
                >
                  Wholesale Sourcing
                </h3>
                <p
                  style={{
                    fontSize: "1.1rem",
                    lineHeight: "1.7",
                    color: "#4b5563",
                    marginBottom: "1.5rem",
                  }}
                >
                  Strategic sourcing and procurement from authorized suppliers,
                  distributors, and manufacturers. We establish direct
                  relationships to ensure product authenticity, competitive
                  pricing, and reliable supply chain management.
                </p>
                <ul
                  style={{
                    fontSize: "1rem",
                    color: "#6b7280",
                    paddingLeft: "1.5rem",
                    lineHeight: "1.6",
                  }}
                >
                  <li>Direct supplier partnerships</li>
                  <li>Quality verification processes</li>
                  <li>Competitive pricing negotiations</li>
                  <li>Supply chain optimization</li>
                </ul>
              </div>

              {/* Service 2 */}
              <div
                style={{
                  background:
                    "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
                  padding: "3rem",
                  borderRadius: "20px",
                  boxShadow: "0 15px 50px rgba(30, 58, 138, 0.1)",
                  border: "1px solid #e2e8f0",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    width: "100px",
                    height: "100px",
                    background:
                      "linear-gradient(135deg, #059669 0%, #10b981 100%)",
                    opacity: 0.1,
                    borderRadius: "0 20px 0 100px",
                  }}
                />
                <div
                  style={{
                    background:
                      "linear-gradient(135deg, #059669 0%, #10b981 100%)",
                    color: "white",
                    width: "60px",
                    height: "60px",
                    borderRadius: "15px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.5rem",
                    marginBottom: "1.5rem",
                  }}
                >
                  🛒
                </div>
                <h3
                  style={{
                    color: "#059669",
                    fontSize: "1.6rem",
                    marginBottom: "1rem",
                    fontWeight: "700",
                  }}
                >
                  Online Marketplace Retail
                </h3>
                <p
                  style={{
                    fontSize: "1.1rem",
                    lineHeight: "1.7",
                    color: "#4b5563",
                    marginBottom: "1.5rem",
                  }}
                >
                  Professional marketplace operations across leading e-commerce
                  platforms. We maintain strict compliance with marketplace
                  policies while maximizing brand visibility and sales
                  performance through data-driven strategies.
                </p>
                <ul
                  style={{
                    fontSize: "1rem",
                    color: "#6b7280",
                    paddingLeft: "1.5rem",
                    lineHeight: "1.6",
                  }}
                >
                  <li>Multi-platform marketplace management</li>
                  <li>Policy compliance and brand protection</li>
                  <li>Performance optimization</li>
                  <li>Inventory management systems</li>
                </ul>
              </div>

              {/* Service 3 */}
              <div
                style={{
                  background:
                    "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
                  padding: "3rem",
                  borderRadius: "20px",
                  boxShadow: "0 15px 50px rgba(30, 58, 138, 0.1)",
                  border: "1px solid #e2e8f0",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    width: "100px",
                    height: "100px",
                    background:
                      "linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)",
                    opacity: 0.1,
                    borderRadius: "0 20px 0 100px",
                  }}
                />
                <div
                  style={{
                    background:
                      "linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)",
                    color: "white",
                    width: "60px",
                    height: "60px",
                    borderRadius: "15px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.5rem",
                    marginBottom: "1.5rem",
                  }}
                >
                  🚚
                </div>
                <h3
                  style={{
                    color: "#7c3aed",
                    fontSize: "1.6rem",
                    marginBottom: "1rem",
                    fontWeight: "700",
                  }}
                >
                  Product Distribution
                </h3>
                <p
                  style={{
                    fontSize: "1.1rem",
                    lineHeight: "1.7",
                    color: "#4b5563",
                    marginBottom: "1.5rem",
                  }}
                >
                  Comprehensive distribution management covering inventory flow,
                  logistics coordination, and multi-channel fulfillment. Our
                  systems ensure efficient product movement from suppliers to
                  end customers across all sales channels.
                </p>
                <ul
                  style={{
                    fontSize: "1rem",
                    color: "#6b7280",
                    paddingLeft: "1.5rem",
                    lineHeight: "1.6",
                  }}
                >
                  <li>Inventory flow management</li>
                  <li>Multi-channel fulfillment</li>
                  <li>Logistics coordination</li>
                  <li>Distribution analytics</li>
                </ul>
              </div>

              {/* Service 4 */}
              <div
                style={{
                  background:
                    "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
                  padding: "3rem",
                  borderRadius: "20px",
                  boxShadow: "0 15px 50px rgba(30, 58, 138, 0.1)",
                  border: "1px solid #e2e8f0",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    width: "100px",
                    height: "100px",
                    background:
                      "linear-gradient(135deg, #dc2626 0%, #ef4444 100%)",
                    opacity: 0.1,
                    borderRadius: "0 20px 0 100px",
                  }}
                />
                <div
                  style={{
                    background:
                      "linear-gradient(135deg, #dc2626 0%, #ef4444 100%)",
                    color: "white",
                    width: "60px",
                    height: "60px",
                    borderRadius: "15px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.5rem",
                    marginBottom: "1.5rem",
                  }}
                >
                  🤝
                </div>
                <h3
                  style={{
                    color: "#dc2626",
                    fontSize: "1.6rem",
                    marginBottom: "1rem",
                    fontWeight: "700",
                  }}
                >
                  Supplier Partnerships
                </h3>
                <p
                  style={{
                    fontSize: "1.1rem",
                    lineHeight: "1.7",
                    color: "#4b5563",
                    marginBottom: "1.5rem",
                  }}
                >
                  Strategic partnership development with suppliers,
                  manufacturers, and distributors to establish consistent,
                  scalable, and mutually beneficial business relationships
                  focused on long-term growth and market expansion.
                </p>
                <ul
                  style={{
                    fontSize: "1rem",
                    color: "#6b7280",
                    paddingLeft: "1.5rem",
                    lineHeight: "1.6",
                  }}
                >
                  <li>Partnership development</li>
                  <li>Contract negotiation</li>
                  <li>Relationship management</li>
                  <li>Performance monitoring</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Service Features */}
          <div
            style={{
              background: "linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%)",
              padding: "3rem",
              borderRadius: "20px",
              marginBottom: "5rem",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "-50px",
                right: "-50px",
                width: "200px",
                height: "200px",
                background: "linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",
                borderRadius: "50%",
                opacity: 0.05,
              }}
            />
            <h2
              style={{
                color: "#1e3a8a",
                fontSize: "2.2rem",
                fontWeight: "700",
                textAlign: "center",
                marginBottom: "2rem",
              }}
            >
              Service Features
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "2rem",
              }}
            >
              {[
                {
                  icon: "✅",
                  title: "Compliance Focus",
                  desc: "Strict adherence to marketplace policies and regulations",
                },
                {
                  icon: "📊",
                  title: "Data-Driven Approach",
                  desc: "Performance analytics and optimization strategies",
                },
                {
                  icon: "🔒",
                  title: "Brand Protection",
                  desc: "Maintaining brand integrity and authorized distribution",
                },
                {
                  icon: "⚡",
                  title: "Scalable Operations",
                  desc: "Growth-ready systems and processes",
                },
                {
                  icon: "🎯",
                  title: "Strategic Planning",
                  desc: "Long-term partnership and market development",
                },
                {
                  icon: "💼",
                  title: "Professional Management",
                  desc: "Experienced team with industry expertise",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  style={{
                    background: "white",
                    padding: "2rem",
                    borderRadius: "15px",
                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.08)",
                    textAlign: "center",
                  }}
                >
                  <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
                    {feature.icon}
                  </div>
                  <h3
                    style={{
                      fontSize: "1.2rem",
                      color: "#1e3a8a",
                      marginBottom: "0.5rem",
                      fontWeight: "700",
                    }}
                  >
                    {feature.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "1rem",
                      color: "#6b7280",
                      margin: 0,
                      lineHeight: "1.5",
                    }}
                  >
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Industry Standards */}
          <div
            style={{
              background: "linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",
              color: "white",
              padding: "3rem",
              borderRadius: "20px",
              marginBottom: "5rem",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                bottom: "-100px",
                left: "-100px",
                width: "300px",
                height: "300px",
                background: "rgba(255, 255, 255, 0.1)",
                borderRadius: "50%",
              }}
            />
            <h2
              style={{
                fontSize: "2.2rem",
                fontWeight: "700",
                textAlign: "center",
                marginBottom: "2rem",
                position: "relative",
              }}
            >
              Industry Standards
            </h2>
            <p
              style={{
                fontSize: "1.3rem",
                lineHeight: "1.8",
                textAlign: "center",
                margin: 0,
                opacity: 0.95,
                position: "relative",
              }}
            >
              Our services are designed to meet the highest industry standards
              for e-commerce operations, marketplace compliance, and wholesale
              distribution. We maintain professional certifications and follow
              best practices to ensure reliability and accountability in all
              business relationships.
            </p>
          </div>

          {/* Call to Action */}
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
                padding: "3rem",
                borderRadius: "20px",
                boxShadow: "0 20px 60px rgba(0, 0, 0, 0.08)",
                border: "1px solid #e2e8f0",
              }}
            >
              <h3
                style={{
                  fontSize: "1.8rem",
                  color: "#1e3a8a",
                  marginBottom: "1rem",
                  fontWeight: "700",
                }}
              >
                Ready to Get Started?
              </h3>
              <p
                style={{
                  fontSize: "1.2rem",
                  color: "#6b7280",
                  marginBottom: "2rem",
                  lineHeight: "1.6",
                }}
              >
                Learn more about how our professional services can support your
                business goals.
                <br />
                Contact us to discuss partnership opportunities.
              </p>
              <Link href="/contact">
                <button
                  style={{
                    background:
                      "linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",
                    color: "white",
                    padding: "1.2rem 3rem",
                    fontSize: "1.1rem",
                    fontWeight: "600",
                    border: "none",
                    borderRadius: "50px",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    textDecoration: "none",
                    display: "inline-block",
                    boxShadow: "0 10px 30px rgba(30, 58, 138, 0.3)",
                    letterSpacing: "0.5px",
                    marginRight: "1rem",
                  }}
                >
                  Contact Us
                </button>
              </Link>
              <Link href="/why-nexor">
                <button
                  style={{
                    background: "transparent",
                    color: "#1e3a8a",
                    padding: "1.2rem 3rem",
                    fontSize: "1.1rem",
                    fontWeight: "600",
                    border: "2px solid #1e3a8a",
                    borderRadius: "50px",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    textDecoration: "none",
                    display: "inline-block",
                    letterSpacing: "0.5px",
                  }}
                >
                  Why Choose Nexor
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
