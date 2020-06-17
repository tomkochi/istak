import Hero from "../../components/projects/hero";
import Filter from "../../components/projects/filter";
import Project from "../../components/projects/project";
import Layout from "../../components/Layout";

const Projects = (props) => {
  return (
    <Layout>
      <div className="projects">
        <Hero />
        <Filter />
        <div className="project-list d-flex flex-wrap">
          <Project
            image="/img/project-thumb-4.jpg"
            year="1980"
            name="Flugstöð Leifs Eiríkssonar"
          />
          <Project
            image="/img/project-thumb-5.jpg"
            year="2014"
            name="Háskólinn í Reykjavík"
          />
          <Project
            image="/img/project-thumb-6.jpg"
            year="2001"
            name="Háskólinn í Reykjavík"
          />
          <Project
            image="/img/project-thumb-4.jpg"
            year="1980"
            name="Flugstöð Leifs Eiríkssonar"
          />
          <Project
            image="/img/project-thumb-5.jpg"
            year="2014"
            name="Háskólinn í Reykjavík"
          />
          <Project
            image="/img/project-thumb-6.jpg"
            year="2001"
            name="Háskólinn í Reykjavík"
          />
        </div>
        {/* .project-list */}
      </div>
      {/* .projects */}
    </Layout>
  );
};

export default Projects;
