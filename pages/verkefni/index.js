import Hero from "../../components/projects/hero";
import Filter from "../../components/projects/filter";
import Project from "../../components/projects/project";
import Layout from "../../components/Layout";
import moment from "moment";
import { useEffect, useState } from "react";

const Projects = ({ data }) => {
  const [projectList, setProjectList] = useState([]);

  const search = (text, sortOn) => {
    let newList = data;
    if (text) {
      newList = data.filter((d) => {
        return d.title.toLowerCase().search(text.toLowerCase()) !== -1;
      });
    }
    setProjectList(newList);
  };

  useEffect(() => {
    search();
  }, []);
  return (
    <Layout>
      <div className="projects">
        <Hero />
        <Filter onSearchChange={search} />
        <div className="project-list d-flex flex-wrap">
          {projectList.length ? (
            projectList.map((d, i) => {
              return (
                <Project
                  key={i}
                  image={`${process.env.NEXT_PUBLIC_HOST}${d.image.formats.medium.url}`}
                  year={moment(d.period.from).format("YYYY")}
                  name={`${d.title}`}
                  slug={d.slug}
                />
              );
            })
          ) : (
            <div className="not-found">No records found</div>
          )}
        </div>
        {/* .project-list */}
      </div>
      {/* .projects */}
      <style jsx>{`
        .not-found {
          width: 100%;
          text-align: center;
          margin-bottom: 90px;
        }
      `}</style>
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
