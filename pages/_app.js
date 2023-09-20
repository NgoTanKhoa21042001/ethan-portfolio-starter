import Layout from "../components/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    // lun lun thấy component Layout
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
