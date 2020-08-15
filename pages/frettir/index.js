import Layout from "../../components/Layout";
import Hero from "../../components/news/hero";
import NewsCard from "../../components/news/news-card";

const Index = (props) => {
  console.log(props);
  return (
    <Layout>
      <div className="articles">
        <Hero />
        {props.data.map((news) => {
          return (
            <NewsCard
              key={news._id}
              image={`${process.env.NEXT_PUBLIC_HOST}${news.image.formats.medium.url}`}
              title={news.title}
              link={`frettir/${news.slug}`}
            />
          );
        })}
      </div>
      {/* .articles */}
    </Layout>
  );
};

//data fetching
export async function getServerSideProps(context) {
  // Fetch data from external API
  const res = await fetch(`${process.env.HOST}/articles`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}

export default Index;
