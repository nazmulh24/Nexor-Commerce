import Meta from "./Meta";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ title, children }) {
  return (
    <>
      <Meta title={title} />
      <Header />
      <main className="site-main" id="content">
        {children}
      </main>
      <Footer />
    </>
  );
}
