import Link from "next/link";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section
        style={{
          background: "linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",
          color: "white",
          padding: "6rem 0",
          position: "relative",
          overflow: "hidden",
          minHeight: "90vh",
          display: "flex",
          alignItems: "center",
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
          style={{
            position: "absolute",
            top: "10%",
            right: "10%",
            width: "300px",
            height: "300px",
            background: "rgba(255, 255, 255, 0.1)",
            borderRadius: "50%",
            animation: "float 6s ease-in-out infinite",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "15%",
            left: "5%",
            width: "200px",
            height: "200px",
            background: "rgba(255, 255, 255, 0.05)",
            borderRadius: "50%",
            animation: "float 8s ease-in-out infinite reverse",
          }}
        />
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div
            style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}
          >
            <div
              style={{
                background: "rgba(255, 255, 255, 0.1)",
                padding: "0.5rem 1.5rem",
                borderRadius: "30px",
                fontSize: "0.9rem",
                fontWeight: "600",
                letterSpacing: "1px",
                marginBottom: "2rem",
                display: "inline-block",
                border: "1px solid rgba(255, 255, 255, 0.2)",
              }}
            >
              🚀 PROFESSIONAL E-COMMERCE SOLUTIONS
            </div>
            <h1
              style={{
                fontSize: "clamp(3rem, 6vw, 5rem)",
                fontWeight: "800",
                marginBottom: "2rem",
                lineHeight: "1.1",
                letterSpacing: "-0.02em",
                textShadow: "0 4px 8px rgba(0,0,0,0.2)",
              }}
            >
              Reliable E-Commerce &<br />
              <span
                style={{
                  background:
                    "linear-gradient(90deg, #60a5fa 0%, #a78bfa 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Wholesale Partner
              </span>
            </h1>
            <p
              style={{
                fontSize: "1.4rem",
                opacity: 0.9,
                marginBottom: "2rem",
                lineHeight: "1.6",
                fontWeight: "300",
              }}
            >
              Delivering trusted sourcing and online retail solutions through
              leading global marketplaces with a focus on professional
              excellence and sustainable growth.
            </p>
            <div
              style={{
                background: "rgba(255, 255, 255, 0.1)",
                padding: "2rem",
                borderRadius: "20px",
                marginBottom: "3rem",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                backdropFilter: "blur(10px)",
              }}
            >
              <p
                style={{
                  fontSize: "1.1rem",
                  lineHeight: "1.7",
                  margin: 0,
                  opacity: 0.95,
                }}
              >
                Nexor Commerce LLC is a US-based e-commerce and wholesale
                company focused on sourcing quality products and distributing
                them through established online marketplaces such as Amazon. We
                operate with a strong commitment to professionalism,
                transparency, and long-term partnerships.
              </p>
            </div>
            <div
              style={{
                display: "flex",
                gap: "1.5rem",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <Link href="/contact">
                <button
                  style={{
                    background:
                      "linear-gradient(135deg, #ffffff 0%, #f1f5f9 100%)",
                    color: "#1e3a8a",
                    padding: "1.5rem 3.5rem",
                    fontSize: "1.2rem",
                    fontWeight: "700",
                    border: "none",
                    borderRadius: "60px",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    textDecoration: "none",
                    display: "inline-block",
                    boxShadow: "0 15px 40px rgba(255, 255, 255, 0.3)",
                    letterSpacing: "0.5px",
                  }}
                >
                  Get Started Today
                </button>
              </Link>
              <Link href="/our-services">
                <button
                  style={{
                    background: "transparent",
                    color: "white",
                    padding: "1.5rem 3.5rem",
                    fontSize: "1.2rem",
                    fontWeight: "600",
                    border: "2px solid rgba(255, 255, 255, 0.3)",
                    borderRadius: "60px",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    textDecoration: "none",
                    display: "inline-block",
                    letterSpacing: "0.5px",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  Our Services
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section
        style={{
          padding: "5rem 0",
          background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
        }}
      >
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2
              style={{
                fontSize: "2.5rem",
                color: "#1e3a8a",
                marginBottom: "1rem",
                fontWeight: "700",
              }}
            >
              Trusted by Industry Leaders
            </h2>
            <p style={{ fontSize: "1.2rem", color: "#64748b" }}>
              Professional e-commerce solutions that deliver measurable results
            </p>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "3rem",
              maxWidth: "1000px",
              margin: "0 auto",
            }}
          >
            {[
              { number: "100+", label: "Products Managed", icon: "📦" },
              { number: "99%", label: "Client Satisfaction", icon: "⭐" },
              { number: "24/7", label: "Professional Support", icon: "🛡️" },
              { number: "5+", label: "Marketplace Partners", icon: "🤝" },
            ].map((stat, index) => (
              <div
                key={index}
                style={{
                  textAlign: "center",
                  background: "white",
                  padding: "2.5rem 1.5rem",
                  borderRadius: "20px",
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                  border: "1px solid #e2e8f0",
                }}
              >
                <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>
                  {stat.icon}
                </div>
                <div
                  style={{
                    fontSize: "3rem",
                    fontWeight: "800",
                    color: "#1e3a8a",
                    marginBottom: "0.5rem",
                  }}
                >
                  {stat.number}
                </div>
                <div
                  style={{
                    fontSize: "1.1rem",
                    color: "#64748b",
                    fontWeight: "600",
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section style={{ padding: "6rem 0" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2
              style={{
                fontSize: "2.8rem",
                color: "#1e3a8a",
                marginBottom: "1rem",
                fontWeight: "700",
              }}
            >
              Professional E-Commerce Solutions
            </h2>
            <div
              style={{
                width: "80px",
                height: "4px",
                background: "linear-gradient(90deg, #1e3a8a 0%, #3b82f6 100%)",
                margin: "1rem auto 2rem",
                borderRadius: "2px",
              }}
            />
            <p
              style={{
                fontSize: "1.3rem",
                color: "#64748b",
                maxWidth: "600px",
                margin: "0 auto",
                lineHeight: "1.6",
              }}
            >
              Comprehensive solutions designed for modern marketplace
              distribution and sustainable business growth.
            </p>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "2.5rem",
            }}
          >
            {[
              {
                title: "Trusted Wholesale Sourcing",
                description:
                  "We source from authorized suppliers and distributors to ensure authenticity and reliability across all product categories.",
                icon: "🏭",
                color: "#1e3a8a",
                bgGradient: "linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",
              },
              {
                title: "Marketplace-Focused Distribution",
                description:
                  "Operational processes tailored for established marketplaces with compliance and optimization in mind.",
                icon: "🌐",
                color: "#059669",
                bgGradient: "linear-gradient(135deg, #059669 0%, #10b981 100%)",
              },
              {
                title: "Strategic Supplier Partnerships",
                description:
                  "We build long-term, scalable relationships that support predictable growth and mutual success.",
                icon: "🤝",
                color: "#7c3aed",
                bgGradient: "linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)",
              },
              {
                title: "Operational Transparency",
                description:
                  "Clear communication and accountable workflows to support partner confidence and business integrity.",
                icon: "📊",
                color: "#dc2626",
                bgGradient: "linear-gradient(135deg, #dc2626 0%, #ef4444 100%)",
              },
            ].map((service, index) => (
              <div
                key={index}
                style={{
                  background:
                    "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
                  padding: "3rem",
                  borderRadius: "25px",
                  boxShadow: "0 20px 60px rgba(0, 0, 0, 0.08)",
                  border: "1px solid #e2e8f0",
                  transition: "all 0.3s ease",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "-20px",
                    right: "-20px",
                    width: "100px",
                    height: "100px",
                    background: service.bgGradient,
                    borderRadius: "50%",
                    opacity: 0.1,
                  }}
                />
                <div
                  style={{
                    background: service.bgGradient,
                    color: "white",
                    width: "80px",
                    height: "80px",
                    borderRadius: "20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "2.5rem",
                    marginBottom: "2rem",
                    position: "relative",
                  }}
                >
                  {service.icon}
                </div>
                <h3
                  style={{
                    color: service.color,
                    fontSize: "1.6rem",
                    marginBottom: "1.5rem",
                    fontWeight: "700",
                    lineHeight: "1.3",
                  }}
                >
                  {service.title}
                </h3>
                <p
                  style={{
                    fontSize: "1.1rem",
                    lineHeight: "1.7",
                    color: "#64748b",
                    margin: 0,
                  }}
                >
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section
        style={{
          padding: "6rem 0",
          background: "linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%)",
        }}
      >
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
              gap: "4rem",
              alignItems: "center",
            }}
          >
            <div>
              <div
                style={{
                  background:
                    "linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",
                  color: "white",
                  padding: "0.8rem 2rem",
                  borderRadius: "30px",
                  fontSize: "0.9rem",
                  fontWeight: "600",
                  letterSpacing: "1px",
                  marginBottom: "2rem",
                  display: "inline-block",
                }}
              >
                WHY NEXOR COMMERCE
              </div>
              <h2
                style={{
                  fontSize: "2.8rem",
                  color: "#1e3a8a",
                  marginBottom: "2rem",
                  fontWeight: "700",
                  lineHeight: "1.2",
                }}
              >
                Professional Excellence in Every Partnership
              </h2>
              <p
                style={{
                  fontSize: "1.2rem",
                  lineHeight: "1.7",
                  color: "#64748b",
                  marginBottom: "2rem",
                }}
              >
                We combine industry expertise with cutting-edge technology to
                deliver superior results for our partners. Our commitment to
                transparency, compliance, and operational excellence sets us
                apart in the competitive e-commerce landscape.
              </p>
              <div style={{ marginBottom: "2rem" }}>
                {[
                  "Verified supplier network with quality assurance",
                  "Marketplace compliance and policy expertise",
                  "Transparent reporting and communication",
                  "Scalable operations for growing businesses",
                ].map((feature, index) => (
                  <div
                    key={index}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "1rem",
                      fontSize: "1.1rem",
                      color: "#4b5563",
                    }}
                  >
                    <span
                      style={{
                        background:
                          "linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",
                        color: "white",
                        width: "24px",
                        height: "24px",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginRight: "1rem",
                        fontSize: "0.8rem",
                        fontWeight: "700",
                      }}
                    >
                      ✓
                    </span>
                    {feature}
                  </div>
                ))}
              </div>
              <Link href="/why-nexor">
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
                  }}
                >
                  Learn More About Us
                </button>
              </Link>
            </div>
            <div
              style={{
                background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
                padding: "3rem",
                borderRadius: "25px",
                boxShadow: "0 25px 70px rgba(0, 0, 0, 0.1)",
                border: "1px solid #e2e8f0",
              }}
            >
              <h3
                style={{
                  fontSize: "1.8rem",
                  color: "#1e3a8a",
                  marginBottom: "2rem",
                  fontWeight: "700",
                }}
              >
                Partnership Benefits
              </h3>
              <div style={{ display: "grid", gap: "1.5rem" }}>
                {[
                  {
                    icon: "🚀",
                    title: "Rapid Market Entry",
                    desc: "Get your products to market faster with our established infrastructure",
                  },
                  {
                    icon: "📈",
                    title: "Scalable Growth",
                    desc: "Flexible solutions that grow with your business needs and objectives",
                  },
                  {
                    icon: "🛡️",
                    title: "Risk Mitigation",
                    desc: "Professional compliance and quality assurance for peace of mind",
                  },
                  {
                    icon: "💡",
                    title: "Strategic Insights",
                    desc: "Market intelligence and optimization recommendations for better performance",
                  },
                ].map((benefit, index) => (
                  <div
                    key={index}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "1rem",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "2rem",
                        flexShrink: 0,
                      }}
                    >
                      {benefit.icon}
                    </div>
                    <div>
                      <h4
                        style={{
                          fontSize: "1.2rem",
                          color: "#1e3a8a",
                          marginBottom: "0.5rem",
                          fontWeight: "600",
                        }}
                      >
                        {benefit.title}
                      </h4>
                      <p
                        style={{
                          fontSize: "1rem",
                          color: "#64748b",
                          margin: 0,
                          lineHeight: "1.5",
                        }}
                      >
                        {benefit.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section
        style={{
          padding: "6rem 0",
          background: "linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",
          color: "white",
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
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div
            style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto" }}
          >
            <h2
              style={{
                fontSize: "2.8rem",
                fontWeight: "700",
                marginBottom: "1.5rem",
                lineHeight: "1.2",
              }}
            >
              Ready to Transform Your E-Commerce Operations?
            </h2>
            <p
              style={{
                fontSize: "1.3rem",
                marginBottom: "3rem",
                opacity: 0.9,
                lineHeight: "1.6",
              }}
            >
              Partner with Nexor Commerce for professional, reliable, and
              scalable e-commerce solutions. Let's discuss how we can support
              your business objectives and drive sustainable growth together.
            </p>
            <div
              style={{
                display: "flex",
                gap: "1.5rem",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <Link href="/contact">
                <button
                  style={{
                    background:
                      "linear-gradient(135deg, #ffffff 0%, #f1f5f9 100%)",
                    color: "#1e3a8a",
                    padding: "1.5rem 4rem",
                    fontSize: "1.2rem",
                    fontWeight: "700",
                    border: "none",
                    borderRadius: "60px",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    textDecoration: "none",
                    display: "inline-block",
                    boxShadow: "0 15px 40px rgba(255, 255, 255, 0.3)",
                    letterSpacing: "0.5px",
                  }}
                >
                  Start Your Partnership
                </button>
              </Link>
              <Link href="/our-services">
                <button
                  style={{
                    background: "transparent",
                    color: "white",
                    padding: "1.5rem 4rem",
                    fontSize: "1.2rem",
                    fontWeight: "600",
                    border: "2px solid rgba(255, 255, 255, 0.3)",
                    borderRadius: "60px",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    textDecoration: "none",
                    display: "inline-block",
                    letterSpacing: "0.5px",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  Explore Services
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>
    </Layout>
  );
}
