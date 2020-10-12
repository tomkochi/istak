import Subhead from '../components/starfsmenn/subhead'
import Employee from '../components/starfsmenn/employee'
import Hero from '../components/starfsmenn/hero'
import HqCard from '../components/starfsmenn/hq-card'
import StoryCard from '../components/starfsmenn/story-card'
import Videos from '../components/starfsmenn/videos'
import Layout from '../components/Layout'
import fetch from 'isomorphic-unfetch'

const Employees = ({ data }) => {
  const heroData = {
    title:
      'Við sjáum um framkvæmdir, virkjanir, stóriðju, jarðvinnu, mannvirkjun, auk vega- og brúargerðir.',
    image: '/img/big-card-image-2.jpg',
  }
  const hqCardData = {
    image: '/img/article-image-1.jpg',
    title: 'Höfuðstöðvar okkar eru í Bugðufljóti 19, 270 Mosfellsbæ',
    description:
      'Við sjáum bæði um stór og smá verkefni, ekki hika við að hafa samband.',
    address1: 'Bugðufljót 19',
    address2: ' 270, Mosfellsbær',
    tel: '530 2700',
    email: 'istak@istak.is',
  }
  const storyCardData = {
    image: '/img/article-image-2.jpg',
    title: 'Kynntu þér upprunan',
    description: 'Við höfum verið starfandi í 50 ár, Kynntu þér söguna',
    url: '/story',
    button_text: 'Sagan okkar',
  }
  const videosData = [
    {
      image: '/img/article-image-2.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=zpR_m2_7XDI',
      text: 'Hvalfjarðargöngin',
    },
    {
      image: '/img/article-image-1.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=zpR_m2_7XDI',
      text: 'Ístak 50 ára',
    },
  ]
  return (
    <Layout>
      <div className="employees">
        <Hero data={heroData} />
        <Subhead data={data} />
        <div className="container">
          <div className="employee-cards d-flex flex-wrap justify-content-between">
            {data.member.map((e) => {
              return (
                <Employee
                  key={e._id}
                  photo={`${process.env.NEXT_PUBLIC_HOST}${e.picture.url}`}
                  name={e.name}
                  designation={e.designation}
                  email={e.email}
                  phone={e.phone}
                />
              )
            })}
          </div>
          {/* .employee-cards */}
        </div>
        {/* .container */}
        <HqCard data={hqCardData} />
        <StoryCard data={storyCardData} />
        <Videos data={videosData} />
      </div>
      {/* .employees */}
      <style jsx>{`
        .employee-cards {
          width: calc(100% + 50px);
          margin-left: -25px;
        }
      `}</style>
    </Layout>
  )
}

//data fetching
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`${process.env.HOST}/team`)
  const data = await res.json()
  // Pass data to the page via props
  return { props: { data } }
}

export default Employees
