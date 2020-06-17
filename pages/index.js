import Layout from "../components/Layout";
import Hero from "../components/index/hero";
import BlueParaOnWhite from "../components/index/blue-para-on-white";
import BigCard from "../components/index/big-card";
import ServiceDepartments from "../components/index/service-departments";
import Projects from "../components/index/projects";
import BottomPick from "../components/bottom-pick";

const Index = (props) => {
  return (
    <Layout>
      <Hero />
      <BlueParaOnWhite para="Við erum leiðandi verktakafyrirtæki sem mætir þörfum framkvæmda af ýmsum toga og veitir bestu þjónustu sem völ er á." />
      <BigCard
        image-position="left"
        image="/img/big-card-image-1.jpg"
        heading="Ístak byggir skóla í Nuuk"
        para="Byggingin mun þjóna bæði leik- og grunnskólum en jafnframt sem íþrótta- og menningarmiðstöð."
        link="Sjá nánar"
      />
      <BigCard
        image-position="right"
        image="/img/big-card-image-2.jpg"
        heading="Vilt þú vinna hjá Ístak?"
        para="Hjá Ístak starfa yfir 300 starfsfólk  spennandi og fjölbreytt verk."
        link="Laus störf"
      />
      <ServiceDepartments
        image="/img/services.jpg"
        departments={[
          "Innkaupadeild",
          "Vélaverkstæði",
          "Rafmagnsverkstæði",
          "Vélsmiðja",
          "Steypuskáli",
          "Viðhaldsdeild",
          "VDC/BIM",
        ]}
      />
      <Projects
        para="Við önnumst verkefni eins og byggingar, virkjanir, álversframkvæmdir, hafnarframkvæmdir auk vega- og brúargerðar."
        projects={[
          {
            image: "/img/project-thumb-1.jpg",
            year: "1980",
            name: "Flugstöð Leifs Eiríkssonar",
          },
          {
            image: "/img/project-thumb-2.jpg",
            year: "2014",
            name: "Háskólinn í Reykjavík",
          },
          {
            image: "/img/project-thumb-3.jpg",
            year: "2020",
            name: "Smáralind",
          },
        ]}
      />
      <BottomPick image="" heading="" para="" />
    </Layout>
  );
};

export default Index;
