import Layout from "../components/Layout";
//slice
import Slice from "../components/slice";

const Index = ({ data }) => {
  const { content } = data;
  return (
    <Layout>
      {content.map((item) => (
        <Slice data={item} />
      ))}
    </Layout>
  );
};

//data fetching
export async function getStaticProps() {
  // Fetch data from external API
  const homeData = await fetch(`${process.env.HOST}/home`);
  const data = await homeData.json();
  // Pass data to the page via props
  return { props: { data } };
}

export default Index;
