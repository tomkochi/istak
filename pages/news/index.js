import Layout from '../../components/Layout'
import Hero from '../../components/news/hero'
import NewsCard from '../../components/news/news-card'

const Index = (props) => {
  console.log(props)
  return (
    <Layout>
      <div className="articles">
        <Hero />
        {props.data.map((news) => {
          return (
            <NewsCard
              key={news._id}
              image={`${process.env.HOST}${news.image.formats.medium.url}`}
              title={news.title}
              link={`news/${news.slug}`}
            />
          )
        })}

        {/* remove bellow cards */}
        {/* remove bellow cards */}
        {/* remove bellow cards */}
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
  )
}

//data fetching
export async function getServerSideProps(context) {
  // Fetch data from external API
  const res = await fetch(`${process.env.HOST}/articles`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}

export default Index
