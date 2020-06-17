import Layout from "../../components/Layout";
import { useRouter } from "next/router";

const Project = (props) => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <Layout>
      <div className="project">
        <section className="hero">
          <div className="icon">
            <svg
              width="13"
              height="12"
              viewBox="0 0 13 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 6H2M2 6L7.07692 1M2 6L7.07692 11"
                stroke="#204F9C"
                stroke-width="1.75"
              />
            </svg>
          </div>
          <h3>Verkefni</h3>
          <h1>Flugstöð Leyfs Eiríkssonar</h1>
        </section>
        {/* .hero */}
        <section className="image">
          <img src="/img/services.jpg" alt="" />
        </section>
        {/* .image */}
        <div className="container">
          <div className="project-details">
            <div className="head">
              <div className="text">
                <h4>Verkkaupi</h4>
                <h3>Isavia</h3>
              </div>
              {/* .text */}
              <div className="text">
                <h4>Tímabil</h4>
                <h3>01.11.14 – 01.12.15</h3>
              </div>
              {/* .text */}
              <div className="text">
                <h4>Hlutverk</h4>
                <h3>Aðalverktaki</h3>
              </div>
              {/* .text */}
            </div>
          </div>
          {/* .project-details */}
        </div>
        {/* .cotainer */}
      </div>
      {/* .project */}
    </Layout>
  );
};

export default Project;
