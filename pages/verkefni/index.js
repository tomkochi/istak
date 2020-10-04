import Hero from "../../components/projects/hero";
import Filter from "../../components/projects/filter";
import Project from "../../components/projects/project";
import Layout from "../../components/Layout";
import moment from "moment";

const Projects = ({ data }) => {
  return (
    <Layout>
      <div className="projects">
        <Hero />
        <Filter />
        <div className="project-list d-flex flex-wrap">
          {data.map((d) => {
            return (
              <Project
                image={`${process.env.NEXT_PUBLIC_HOST}${d.image.formats.medium.url}`}
                year={moment(d.period.from).format("YYYY")}
                name={`${d.title}`}
                slug={d.slug}
              />
            );
          })}
        </div>
        {/* .project-list */}
      </div>
      {/* .projects */}
    </Layout>
  );
};

//data fetching
export async function getStaticProps(context) {
  // Fetch data from external API
  const res = await fetch(`${process.env.HOST}/projects`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data, baseUrl: process.env.HOST } };
}

export default Projects;
