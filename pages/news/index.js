import Layout from "../../components/Layout";
import Hero from "../../components/news/hero";
import NewsCard from "../../components/news/news-card";

const Index = (props) => {
  return (
    <Layout>
      <div className="articles">
        <Hero />
        <NewsCard
          image="/img/article-image-1.jpg"
          title="Ístak byggir skóla í NUUK"
          link="/"
        />
        <NewsCard
          image="/img/article-image-2.jpg"
          title="Verksmiðjuhús Algaennovation á Hellisheiði vígt"
          link="/"
        />
      </div>
      {/* .articles */}
    </Layout>
  );
};

export default Index;
