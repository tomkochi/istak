import Layout from "../../components/Layout";
import Hero from "../../components/news/hero";
import ArticleCard from "../../components/news/news-card";

const Index = (props) => {
  return (
    <Layout>
      <div className="articles">
        <Hero />
        <ArticleCard
          image="/img/article-image-1.jpg"
          title="Ístak byggir skóla í NUUK"
          link="/"
        />
        <ArticleCard
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
