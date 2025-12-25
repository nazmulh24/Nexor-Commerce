import Layout from "../components/Layout";
import Link from "next/link";

export default function About() {
  return (
    <Layout title="About Nexor Commerce">
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
              About Nexor Commerce
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
              Professional e-commerce and wholesale solutions for modern
              marketplace distribution
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section" style={{ padding: "4rem 0" }}>
        <div className="container narrow">
          {/* Company Overview */}
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
              ESTABLISHED 2025
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
              Who We Are
            </h2>
            <p
              style={{
                fontSize: "1.2rem",
                lineHeight: "1.8",
                color: "#4b5563",
                textAlign: "justify",
                marginBottom: "1.5rem",
              }}
            >
              Nexor Commerce LLC is a professional e-commerce and wholesale
              company established to support brands, distributors, and suppliers
              with reliable, compliant, and scalable online marketplace
              distribution. We operate with a clear focus on operational
              excellence, regulatory compliance, and sustainable business
              relationships.
            </p>
            <p
              style={{
                fontSize: "1.2rem",
                lineHeight: "1.8",
                color: "#4b5563",
                textAlign: "justify",
                margin: 0,
              }}
            >
              Our business model centers on wholesale sourcing,
              marketplace-based retail operations, and strategic supplier
              partnerships. We believe in building long-term value through
              transparent communication, ethical business practices, and
              dependable execution across all aspects of our operations.
            </p>
          </div>

          {/* Mission, Vision, Values */}
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
                Our Foundation
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
              {/* Mission */}
              <div
                style={{
                  background:
                    "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
                  padding: "3rem",
                  borderRadius: "20px",
                  boxShadow: "0 15px 50px rgba(30, 58, 138, 0.1)",
                  border: "1px solid #e2e8f0",
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
                  🎯
                </div>
                <h3
                  style={{
                    color: "#1e3a8a",
                    fontSize: "1.8rem",
                    marginBottom: "1rem",
                    fontWeight: "700",
                  }}
                >
                  Our Mission
                </h3>
                <p
                  style={{
                    fontSize: "1.1rem",
                    lineHeight: "1.7",
                    color: "#4b5563",
                    margin: 0,
                  }}
                >
                  To create sustainable value by connecting quality products
                  with global online marketplaces through efficient,
                  transparent, and compliant operations that benefit all
                  stakeholders in the distribution ecosystem.
                </p>
              </div>

              {/* Vision */}
              <div
                style={{
                  background:
                    "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
                  padding: "3rem",
                  borderRadius: "20px",
                  boxShadow: "0 15px 50px rgba(30, 58, 138, 0.1)",
                  border: "1px solid #e2e8f0",
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
                  🚀
                </div>
                <h3
                  style={{
                    color: "#059669",
                    fontSize: "1.8rem",
                    marginBottom: "1rem",
                    fontWeight: "700",
                  }}
                >
                  Our Vision
                </h3>
                <p
                  style={{
                    fontSize: "1.1rem",
                    lineHeight: "1.7",
                    color: "#4b5563",
                    margin: 0,
                  }}
                >
                  To become a trusted and reliable partner in the e-commerce
                  ecosystem, known for our professional standards, operational
                  excellence, and commitment to building sustainable business
                  relationships that drive mutual growth and success.
                </p>
              </div>
            </div>
          </div>

          {/* Core Values */}
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
                marginBottom: "3rem",
              }}
            >
              Our Core Values
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                gap: "2rem",
              }}
            >
              {[
                {
                  icon: "🏆",
                  title: "Professional Integrity",
                  desc: "Maintaining the highest standards of business ethics and professional conduct in all operations",
                },
                {
                  icon: "🤝",
                  title: "Long-Term Partnerships",
                  desc: "Building sustainable relationships based on mutual trust, transparency, and shared success",
                },
                {
                  icon: "⚙️",
                  title: "Operational Excellence",
                  desc: "Delivering consistent, reliable, and efficient performance across all business processes",
                },
                {
                  icon: "📊",
                  title: "Market Transparency",
                  desc: "Providing clear, honest communication and maintaining open business practices with all partners",
                },
                {
                  icon: "🔒",
                  title: "Compliance Focus",
                  desc: "Strict adherence to marketplace policies, regulations, and industry best practices",
                },
                {
                  icon: "🌱",
                  title: "Sustainable Growth",
                  desc: "Pursuing business expansion that benefits all stakeholders and supports long-term value creation",
                },
              ].map((value, index) => (
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
                    {value.icon}
                  </div>
                  <h3
                    style={{
                      fontSize: "1.2rem",
                      color: "#1e3a8a",
                      marginBottom: "1rem",
                      fontWeight: "700",
                    }}
                  >
                    {value.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "1rem",
                      color: "#6b7280",
                      margin: 0,
                      lineHeight: "1.6",
                    }}
                  >
                    {value.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Business Approach */}
          <div style={{ marginBottom: "5rem" }}>
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <h2
                style={{
                  color: "#1e3a8a",
                  fontSize: "2.2rem",
                  fontWeight: "700",
                  marginBottom: "1rem",
                }}
              >
                Our Business Approach
              </h2>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "2rem",
              }}
            >
              {/* Approach 1 */}
              <div
                style={{
                  background:
                    "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
                  padding: "2.5rem",
                  borderRadius: "16px",
                  boxShadow: "0 10px 40px rgba(30, 58, 138, 0.1)",
                  border: "1px solid #e2e8f0",
                }}
              >
                <h3
                  style={{
                    color: "#1e3a8a",
                    fontSize: "1.4rem",
                    marginBottom: "1rem",
                    fontWeight: "700",
                  }}
                >
                  🎯 Strategic Focus
                </h3>
                <p
                  style={{
                    fontSize: "1rem",
                    lineHeight: "1.6",
                    color: "#6b7280",
                    margin: 0,
                  }}
                >
                  We maintain a clear strategic focus on marketplace operations,
                  ensuring all activities align with our core competencies and
                  business objectives.
                </p>
              </div>

              {/* Approach 2 */}
              <div
                style={{
                  background:
                    "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
                  padding: "2.5rem",
                  borderRadius: "16px",
                  boxShadow: "0 10px 40px rgba(30, 58, 138, 0.1)",
                  border: "1px solid #e2e8f0",
                }}
              >
                <h3
                  style={{
                    color: "#059669",
                    fontSize: "1.4rem",
                    marginBottom: "1rem",
                    fontWeight: "700",
                  }}
                >
                  📈 Data-Driven Decisions
                </h3>
                <p
                  style={{
                    fontSize: "1rem",
                    lineHeight: "1.6",
                    color: "#6b7280",
                    margin: 0,
                  }}
                >
                  Our operations are guided by comprehensive data analysis,
                  performance metrics, and market intelligence to optimize
                  outcomes.
                </p>
              </div>

              {/* Approach 3 */}
              <div
                style={{
                  background:
                    "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
                  padding: "2.5rem",
                  borderRadius: "16px",
                  boxShadow: "0 10px 40px rgba(30, 58, 138, 0.1)",
                  border: "1px solid #e2e8f0",
                }}
              >
                <h3
                  style={{
                    color: "#7c3aed",
                    fontSize: "1.4rem",
                    marginBottom: "1rem",
                    fontWeight: "700",
                  }}
                >
                  🔄 Continuous Improvement
                </h3>
                <p
                  style={{
                    fontSize: "1rem",
                    lineHeight: "1.6",
                    color: "#6b7280",
                    margin: 0,
                  }}
                >
                  We regularly evaluate and optimize our processes, systems, and
                  partnerships to enhance performance and drive innovation.
                </p>
              </div>
            </div>
          </div>

          {/* Company Commitment */}
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
              Our Commitment
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
              Nexor Commerce LLC is committed to delivering exceptional value
              through professional operations, regulatory compliance, and
              sustainable business practices. We strive to be a dependable
              partner that contributes positively to the e-commerce ecosystem
              while maintaining the highest standards of business integrity.
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
                Partner With Us
              </h3>
              <p
                style={{
                  fontSize: "1.2rem",
                  color: "#6b7280",
                  marginBottom: "2rem",
                  lineHeight: "1.6",
                }}
              >
                Learn more about our services and discover how we can support
                your business objectives.
                <br />
                We welcome inquiries from qualified business partners.
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
