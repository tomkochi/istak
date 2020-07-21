import Hero from "../components/index/hero";
import BlueParaOnWhite from "../components/index/blue-para-on-white";
import BigCardRight from "../components/big-card-image-at-right";
import BigCardLeft from "../components/big-card-image-at-left";
import ServiceDepartments from "../components/index/service-departments";
import Projects from "../components/index/projects";

export default function Slice({ data }) {
  switch (data.__component) {
    case "home.hero":
      return <Hero data={data} />;
    case "home.text-section":
      return <BlueParaOnWhite data={data.text} />;
    case "home.img-left-txt-right":
      return <BigCardLeft data={data} />;
    case "home.text-left-img-right":
      return <BigCardRight data={data} />;
    case "home.services":
      return <ServiceDepartments data={data} />;
    case "home.featured-projects":
      return <Projects />;
  }
  return null;
}
