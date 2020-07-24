import Hero from "../../components/services/hero";
import Layout from "../../components/Layout";
//slice
import Slice from "../../components/slice";

const Services = ({ data }) => {
  const { content } = data[0];
  return (
    <>
      <Layout>
        <Hero />
        {content.map((item) => (
          <Slice data={item} />
        ))}
      </Layout>
    </>
  );
};

//data fetching
export async function getServerSideProps(context) {
  // Fetch data from external API
  const res = await fetch(
    `${process.env.HOST}/services?slug=${context.params.slug}`
  );
  const data = await res.json();
  console.log(data);
  // Pass data to the page via props
  return { props: { data } };
}

export default Services;
