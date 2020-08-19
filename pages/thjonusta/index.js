import Hero from "../../components/services/hero";
import Layout from "../../components/Layout";
import CardImageRight from "../../components/services/service-card-image-at-right";
import CardImageLeft from "../../components/services/service-card-image-at-left";

const ServicesIndex = (props) => {
  const title = { title: "Þjónstudeildir" };
  return (
    <>
      <Layout>
        <Hero data={title} />
        {props.data.map((s, i) => {
          return i % 2 ? (
            <CardImageRight key={s.id} data={s} />
          ) : (
            <CardImageLeft key={s.id} data={s} />
          );
        })}
      </Layout>
    </>
  );
};

export async function getStaticProps() {
  // Fetch data from external API
  const res = await fetch(`${process.env.HOST}/services`);
  const data = await res.json();
  // Pass data to the page via props
  return { props: { data } };
}

export default ServicesIndex;
