import Hero from "../../components/services/hero";
import Layout from "../../components/Layout";
import BottomPick from "../../components/bottom-pick";

const ServiceIndex = (props) => {
  return (
    <>
      <Layout>
        <Hero />
      </Layout>
    </>
  );
};

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`${process.env.HOST}/servces`);
  const data = await res.json();
  // Pass data to the page via props
  return { props: { data } };
}

export default ServiceIndex;
