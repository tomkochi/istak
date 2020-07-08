import Layout from '../components/Layout'
import Hero from '../components/index/hero'
import BlueParaOnWhite from '../components/index/blue-para-on-white'
import BigCardImageAtRight from '../components/big-card-image-at-right'
import BigCardImageAtLeftt from '../components/big-card-image-at-left'
import ServiceDepartments from '../components/index/service-departments'
import Projects from '../components/index/projects'
import BottomPick from '../components/bottom-pick'

const Index = (props) => {
  return (
    <Layout>
      <Hero />
      <BlueParaOnWhite para="Við erum leiðandi verktakafyrirtæki sem mætir þörfum framkvæmda af ýmsum toga og veitir bestu þjónustu sem völ er á." />
      <BigCardImageAtRight
        image="/img/big-card-image-1.jpg"
        heading="Ístak byggir skóla í Nuuk"
        para="Byggingin mun þjóna bæði leik- og grunnskólum en jafnframt sem íþrótta- og menningarmiðstöð."
        link="Sjá nánar"
      />
      <BigCardImageAtLeftt
        image="/img/big-card-image-2.jpg"
        heading="Vilt þú vinna hjá Ístak?"
        para="Hjá Ístak starfa yfir 300 starfsfólk  spennandi og fjölbreytt verk."
        link="Laus störf"
      />
      <ServiceDepartments
        id="servide-dept"
        image="/img/services.jpg"
        departments={[
          {
            name: 'Innkaupadeild',
            description:
              'Consectetur adipiscing elit. Aliquam sed ultricies nunc. Etiam venenatis eros vel ante sagittis, non luctus magna feugiat.',
          },
          {
            name: 'Vélaverkstæði',
            description:
              'Ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed ultricies nunc. Etiam venenatis eros vel ante sagittis, non luctus magna feugiat.',
          },
          {
            name: 'Rafmagnsverkstæði',
            description:
              'Dolor sit amet, consectetur adipiscing elit. Aliquam sed ultricies nunc. Etiam venenatis eros vel ante sagittis, non luctus magna feugiat.',
          },
          {
            name: 'Vélsmiðja',
            description:
              'Amet, consectetur adipiscing elit. Aliquam sed ultricies nunc. Etiam venenatis eros vel ante sagittis, non luctus magna feugiat.',
          },
          {
            name: 'Steypuskáli',
            description:
              'Sit amet, consectetur adipiscing elit. Aliquam sed ultricies nunc. Etiam venenatis eros vel ante sagittis, non luctus magna feugiat.',
          },
          {
            name: 'Viðhaldsdeild',
            description:
              'Pum dolor sit amet, consectetur adipiscing elit. Aliquam sed ultricies nunc. Etiam venenatis eros vel ante sagittis, non luctus magna feugiat.',
          },
          {
            name: 'VDC/BIM',
            description:
              'Orem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed ultricies nunc. Etiam venenatis eros vel ante sagittis, non luctus magna feugiat.',
          },
        ]}
      />
      <Projects
        para="Við önnumst verkefni eins og byggingar, virkjanir, álversframkvæmdir, hafnarframkvæmdir auk vega- og brúargerðar."
        projects={[
          {
            image: '/img/project-thumb-1.jpg',
            year: '1980',
            name: 'Flugstöð Leifs Eiríkssonar',
          },
          {
            image: '/img/project-thumb-2.jpg',
            year: '2014',
            name: 'Háskólinn í Reykjavík',
          },
          {
            image: '/img/project-thumb-3.jpg',
            year: '2020',
            name: 'Smáralind',
          },
        ]}
      />
      <BottomPick
        image="/img/bottom-pick.jpg"
        title="Saga stofnun Ístaks"
        para="Myndband um stofnendur og uppruna Ístaks árið 1970."
        video="my-video-url"
      />
    </Layout>
  )
}

export default Index
