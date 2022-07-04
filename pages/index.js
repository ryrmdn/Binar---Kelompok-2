import Layout from "../components/general/Layout";
import HomeBanner from "../components/home/HomeBanner";
import ListProduct from "../components/home/ListProduct";

export default function Home() {
  return (
    <>
      <Layout>
        <HomeBanner/>
        <ListProduct/>
      </Layout>
    </>
  );
}
