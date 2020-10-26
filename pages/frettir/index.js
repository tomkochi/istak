import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import Filter from "../../components/news/filter";
import Hero from "../../components/news/hero";
import NewsCard from "../../components/news/news-card";

const Index = (props) => {
  const [articleList, setArticleList] = useState([]);

  const search = (text) => {
    let newList = props.data;
    if (text) {
      newList = props.data.filter((d) => {
        return d.title.toLowerCase().search(text.toLowerCase()) !== -1;
      });
    }
    setArticleList(newList);
  };

  useEffect(() => {
    search();
  }, []);

  return (
    <Layout>
      <div className="articles">
        <Hero />
        <Filter onSearchChange={search} />
        {articleList.length ? (
          articleList.map((e) => {
            return (
              <NewsCard
                key={e._id}
                image={`${process.env.NEXT_PUBLIC_HOST}${e.image.formats.medium.url}`}
                title={e.title}
                link={`/frettir/${e.slug}`}
              />
            );
          })
        ) : (
          <div className="not-found">No records found</div>
        )}
      </div>
      {/* .articles */}
      <style jsx>{`
        .not-found {
          text-align: center;
          margin-bottom: 90px;
        }
      `}</style>
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
