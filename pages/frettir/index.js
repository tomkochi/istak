import Layout from '../../components/Layout'
import Hero from '../../components/news/hero'
import NewsCard from '../../components/news/news-card'

const Index = (props) => {
  return (
    <Layout>
      <div className="articles">
        <Hero />
        {props.data.map((e) => {
          console.log(e)
          return (
            <NewsCard
              key={e._id}
              image={`${process.env.NEXT_PUBLIC_HOST}${e.image.formats.medium.url}`}
              title={e.title}
              link={`/frettir/${e.slug}`}
            />
          )
        })}
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
