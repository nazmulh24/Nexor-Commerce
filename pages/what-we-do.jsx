import Layout from "../components/Layout";
import Link from "next/link";

export default function WhatWeDo() {
  return (
    <Layout title="What We Do">
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
              What We Do
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
              Professional e-commerce and wholesale solutions for
              marketplace-driven distribution
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
              BUSINESS OPERATIONS
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
              Our Business Operations
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
              Nexor Commerce LLC operates as a professional e-commerce and
              wholesale company, specializing in marketplace-driven distribution
              and strategic supplier partnerships. Our business model focuses on
              creating sustainable value through reliable operations, compliance
              excellence, and long-term relationship building.
            </p>
          </div>

          {/* Core Operations */}
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
                Core Operations
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
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "2.5rem",
              }}
            >
              {/* Operation 1 */}
              <div
                style={{
                  background:
                    "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
                  padding: "2.5rem",
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
                    width: "70px",
                    height: "70px",
                    borderRadius: "18px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "2rem",
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
                    margin: 0,
                  }}
                >
                  Strategic procurement and sourcing from authorized suppliers,
                  manufacturers, and distributors. We establish direct
                  partnerships to ensure product authenticity, competitive
                  pricing, and reliable supply chains for sustainable business
                  growth.
                </p>
              </div>

              {/* Operation 2 */}
              <div
                style={{
                  background:
                    "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
                  padding: "2.5rem",
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
                    width: "70px",
                    height: "70px",
                    borderRadius: "18px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "2rem",
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
                    margin: 0,
                  }}
                >
                  Professional marketplace operations with a primary focus on
                  Amazon and other leading e-commerce platforms. We maintain
                  strict compliance with marketplace policies while maximizing
                  brand visibility and sales performance through data-driven
                  optimization strategies.
                </p>
              </div>

              {/* Operation 3 */}
              <div
                style={{
                  background:
                    "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
                  padding: "2.5rem",
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
                    width: "70px",
                    height: "70px",
                    borderRadius: "18px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "2rem",
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
                    margin: 0,
                  }}
                >
                  Comprehensive distribution management covering inventory flow,
                  logistics coordination, and multi-channel fulfillment. Our
                  systems ensure efficient product movement from suppliers to
                  end customers while maintaining quality standards and delivery
                  performance.
                </p>
              </div>

              {/* Operation 4 */}
              <div
                style={{
                  background:
                    "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
                  padding: "2.5rem",
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
                    width: "70px",
                    height: "70px",
                    borderRadius: "18px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "2rem",
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
                  Supplier & Brand Partnerships
                </h3>
                <p
                  style={{
                    fontSize: "1.1rem",
                    lineHeight: "1.7",
                    color: "#4b5563",
                    margin: 0,
                  }}
                >
                  Strategic partnership development with suppliers,
                  manufacturers, and brands to establish consistent, scalable,
                  and mutually beneficial business relationships. We focus on
                  long-term collaboration and market expansion opportunities.
                </p>
              </div>
            </div>
          </div>

          {/* Business Approach */}
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
              Our Business Approach
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
                  icon: "🎯",
                  title: "Strategic Focus",
                  desc: "Targeted marketplace operations with clear business objectives",
                },
                {
                  icon: "⚖️",
                  title: "Compliance Excellence",
                  desc: "Strict adherence to marketplace policies and regulations",
                },
                {
                  icon: "🔒",
                  title: "Brand Integrity",
                  desc: "Protecting brand value through authorized distribution channels",
                },
                {
                  icon: "📈",
                  title: "Scalable Growth",
                  desc: "Building systems designed for sustainable business expansion",
                },
                {
                  icon: "💼",
                  title: "Professional Standards",
                  desc: "Maintaining industry best practices in all operations",
                },
                {
                  icon: "🔄",
                  title: "Continuous Improvement",
                  desc: "Regular optimization of processes and performance metrics",
                },
              ].map((approach, index) => (
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
                    {approach.icon}
                  </div>
                  <h3
                    style={{
                      fontSize: "1.2rem",
                      color: "#1e3a8a",
                      marginBottom: "0.5rem",
                      fontWeight: "700",
                    }}
                  >
                    {approach.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "1rem",
                      color: "#6b7280",
                      margin: 0,
                      lineHeight: "1.5",
                    }}
                  >
                    {approach.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Operational Excellence */}
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
              Operational Excellence
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
              Our operations are built on the foundation of reliability,
              transparency, and accountability. We maintain professional
              standards that ensure consistent performance, regulatory
              compliance, and sustainable partnerships across all aspects of our
              business activities.
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
                Learn More About Our Services
              </h3>
              <p
                style={{
                  fontSize: "1.2rem",
                  color: "#6b7280",
                  marginBottom: "2rem",
                  lineHeight: "1.6",
                }}
              >
                Discover how our professional approach can support your business
                goals.
                <br />
                Explore our comprehensive service offerings and partnership
                opportunities.
              </p>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  justifyContent: "center",
                  flexWrap: "wrap",
                }}
              >
                <Link href="/our-services">
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
                    }}
                  >
                    Our Services
                  </button>
                </Link>
                <Link href="/contact">
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
                    Contact Us
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
