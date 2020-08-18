import Hero from '../../components/services/hero'
import Layout from '../../components/Layout'
//slice
import Slice from '../../components/slice'

const Services = ({ data }) => {
  const { content } = data[0]

  return (
    <>
      <Layout>
        <Hero data={data[0]} />
        {content.map((item, i) => (
          <Slice data={item} key={i} />
        ))}
      </Layout>
    </>
  )
}

//data fetching
export async function getServerSideProps(context) {
  // Fetch data from external API
  const res = await fetch(
    `${process.env.HOST}/services?slug=${context.params.slug}`,
  )
  const data = await res.json()
  // Pass data to the page via props
  return { props: { data } }
}

export default Services
