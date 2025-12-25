import Layout from "../components/Layout";
import Link from "next/link";

export default function WhyNexor() {
  return (
    <Layout title="Why Nexor">
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
              Why Nexor
            </h1>
            <p
              style={{
                fontSize: "1.3rem",
                opacity: 0.9,
                maxWidth: "600px",
                margin: "0 auto",
                lineHeight: "1.6",
              }}
            >
              Your trusted partner for professional marketplace distribution
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section" style={{ padding: "4rem 0" }}>
        <div className="container narrow">
          {/* Introduction Card */}
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
              PARTNERSHIP FOCUSED
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
              Why Partner With Nexor Commerce LLC
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
              Nexor Commerce LLC is built with a clear focus on reliability,
              transparency, and long-term value creation. We work with brands,
              distributors, and suppliers who seek a professional and structured
              approach to online marketplace distribution.
            </p>
          </div>

          {/* Our Approach Section */}
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
                Our Approach
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
                gap: "2rem",
              }}
            >
              {/* Card 1 */}
              <div
                style={{
                  background:
                    "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
                  padding: "2.5rem",
                  borderRadius: "16px",
                  boxShadow: "0 10px 40px rgba(30, 58, 138, 0.1)",
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
                    width: "80px",
                    height: "80px",
                    background:
                      "linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",
                    opacity: 0.1,
                    borderRadius: "0 16px 0 80px",
                  }}
                />
                <h3
                  style={{
                    color: "#1e3a8a",
                    fontSize: "1.5rem",
                    marginBottom: "1rem",
                    fontWeight: "700",
                  }}
                >
                  🎯 Marketplace Expertise
                </h3>
                <p
                  style={{
                    fontSize: "1.1rem",
                    lineHeight: "1.7",
                    color: "#4b5563",
                    margin: 0,
                  }}
                >
                  We maintain a strong understanding of online marketplace
                  operations, policies, and compliance requirements. Our
                  processes are designed to align with marketplace standards
                  while protecting brand integrity.
                </p>
              </div>

              {/* Card 2 */}
              <div
                style={{
                  background:
                    "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
                  padding: "2.5rem",
                  borderRadius: "16px",
                  boxShadow: "0 10px 40px rgba(30, 58, 138, 0.1)",
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
                    width: "80px",
                    height: "80px",
                    background:
                      "linear-gradient(135deg, #059669 0%, #10b981 100%)",
                    opacity: 0.1,
                    borderRadius: "0 16px 0 80px",
                  }}
                />
                <h3
                  style={{
                    color: "#059669",
                    fontSize: "1.5rem",
                    marginBottom: "1rem",
                    fontWeight: "700",
                  }}
                >
                  ⚡ Reliable Operations
                </h3>
                <p
                  style={{
                    fontSize: "1.1rem",
                    lineHeight: "1.7",
                    color: "#4b5563",
                    margin: 0,
                  }}
                >
                  Our workflows are structured to ensure accuracy,
                  accountability, and operational efficiency across sourcing and
                  distribution activities.
                </p>
              </div>

              {/* Card 3 */}
              <div
                style={{
                  background:
                    "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
                  padding: "2.5rem",
                  borderRadius: "16px",
                  boxShadow: "0 10px 40px rgba(30, 58, 138, 0.1)",
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
                    width: "80px",
                    height: "80px",
                    background:
                      "linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)",
                    opacity: 0.1,
                    borderRadius: "0 16px 0 80px",
                  }}
                />
                <h3
                  style={{
                    color: "#7c3aed",
                    fontSize: "1.5rem",
                    marginBottom: "1rem",
                    fontWeight: "700",
                  }}
                >
                  💬 Transparent Communication
                </h3>
                <p
                  style={{
                    fontSize: "1.1rem",
                    lineHeight: "1.7",
                    color: "#4b5563",
                    margin: 0,
                  }}
                >
                  We prioritize clear and professional communication to ensure
                  that expectations, timelines, and processes are well
                  understood by all partners.
                </p>
              </div>

              {/* Card 4 */}
              <div
                style={{
                  background:
                    "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
                  padding: "2.5rem",
                  borderRadius: "16px",
                  boxShadow: "0 10px 40px rgba(30, 58, 138, 0.1)",
                  border: "1px solid #e2e8f0",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  position: "relative",
                  overflow: "hidden",
                  gridColumn: "span 2",
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
                    borderRadius: "0 16px 0 100px",
                  }}
                />
                <h3
                  style={{
                    color: "#dc2626",
                    fontSize: "1.5rem",
                    marginBottom: "1rem",
                    fontWeight: "700",
                  }}
                >
                  🚀 Long-Term Focus
                </h3>
                <p
                  style={{
                    fontSize: "1.1rem",
                    lineHeight: "1.7",
                    color: "#4b5563",
                    margin: 0,
                  }}
                >
                  We are committed to building sustainable partnerships and
                  focus on long-term collaboration rather than short-term gains.
                </p>
              </div>
            </div>
          </div>

          {/* What Partners Can Expect */}
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
              What Partners Can Expect
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                gap: "1.5rem",
              }}
            >
              <div
                style={{
                  background: "white",
                  padding: "2rem",
                  borderRadius: "12px",
                  boxShadow: "0 8px 30px rgba(0, 0, 0, 0.08)",
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                <span style={{ fontSize: "2rem" }}>🏆</span>
                <span
                  style={{
                    fontSize: "1.1rem",
                    color: "#374151",
                    fontWeight: "500",
                  }}
                >
                  Professional and compliance-focused operations
                </span>
              </div>
              <div
                style={{
                  background: "white",
                  padding: "2rem",
                  borderRadius: "12px",
                  boxShadow: "0 8px 30px rgba(0, 0, 0, 0.08)",
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                <span style={{ fontSize: "2rem" }}>⚙️</span>
                <span
                  style={{
                    fontSize: "1.1rem",
                    color: "#374151",
                    fontWeight: "500",
                  }}
                >
                  Structured and reliable workflows
                </span>
              </div>
              <div
                style={{
                  background: "white",
                  padding: "2rem",
                  borderRadius: "12px",
                  boxShadow: "0 8px 30px rgba(0, 0, 0, 0.08)",
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                <span style={{ fontSize: "2rem" }}>💼</span>
                <span
                  style={{
                    fontSize: "1.1rem",
                    color: "#374151",
                    fontWeight: "500",
                  }}
                >
                  Clear business communication
                </span>
              </div>
              <div
                style={{
                  background: "white",
                  padding: "2rem",
                  borderRadius: "12px",
                  boxShadow: "0 8px 30px rgba(0, 0, 0, 0.08)",
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                <span style={{ fontSize: "2rem" }}>🤝</span>
                <span
                  style={{
                    fontSize: "1.1rem",
                    color: "#374151",
                    fontWeight: "500",
                  }}
                >
                  Long-term partnership mindset
                </span>
              </div>
            </div>
          </div>

          {/* Our Commitment */}
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
              Nexor Commerce LLC operates with integrity and accountability in
              every business relationship. Our goal is to serve as a dependable
              e-commerce and wholesale partner for businesses seeking
              responsible, marketplace-driven distribution.
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
                Ready to Partner With Us?
              </h3>
              <p
                style={{
                  fontSize: "1.2rem",
                  color: "#6b7280",
                  marginBottom: "2rem",
                  lineHeight: "1.6",
                }}
              >
                Interested in working with Nexor Commerce LLC?
                <br />
                We welcome business inquiries from qualified partners.
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
                  }}
                >
                  Contact Us Today
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
