import Subhead from "../components/starfsmenn/subhead";
import Employee from "../components/starfsmenn/employee";
import Hero from "../components/starfsmenn/hero";
import HqCard from "../components/starfsmenn/hq-card";
import StoryCard from "../components/starfsmenn/story-card";
import Videos from "../components/starfsmenn/videos";
import Layout from "../components/Layout";
import fetch from "isomorphic-unfetch";
import Filter from "../components/starfsmenn/filter";
import { useEffect, useState } from "react";

const Employees = ({ data }) => {
  const [employeeList, setEmployeeList] = useState([]);

  const search = (text) => {
    let newList = data.member;
    if (text) {
      newList = data.member.filter((d) => {
        console.log(d.name.toLowerCase());
        console.log(text.toLowerCase());
        return d.name.toLowerCase().search(text.toLowerCase()) !== -1;
      });
    }
    setEmployeeList(newList);
  };

  useEffect(() => {
    search();
  }, []);

  const videosData = [
    {
      image: "/img/hvalfjardargong-thumb.jpg",
      videoUrl: "https://www.youtube.com/watch?v=zpR_m2_7XDI",
      text: "Hvalfjarðargöngin",
    },
    {
      image: "/img/stofnun-istaks-thumb.jpg",
      videoUrl: "https://www.youtube.com/watch?v=CWu29PRCUvQ",
      text: "Ístak 50 ára",
    },
  ];
  return (
    <Layout>
      <div className="employees">
        <Hero data={data.Hero} />
        <Subhead data={data} />
        <Filter onSearchChange={search} />

        <div className="container">
          <div className="employee-cards">
            {employeeList.length ? (
              employeeList.map((e) => {
                return (
                  <Employee
                    key={e._id}
                    photo={`${process.env.NEXT_PUBLIC_HOST}${e.picture.url}`}
                    name={e.name}
                    designation={e.designation}
                    email={e.email}
                    phone={e.phone}
                    phone2={e.phone2}
                  />
                );
              })
            ) : (
              <div className="not-found">No records found</div>
            )}
          </div>
          {/* .employee-cards */}
        </div>
        {/* .container */}
        <HqCard data={data.HeadQuarter} />
        <StoryCard data={data.Story} />
        <Videos data={videosData} />
      </div>
      {/* .employees */}
      <style jsx>{`
        .employee-cards {
          display: flex;
          flex-wrap: wrap;
          @media (max-width: 767px) {
            width: calc(100vw - 40px);
            margin-left: -20px;
          }
          .not-found {
            width: 100%;
            text-align: center;
          }
        }
      `}</style>
    </Layout>
  );
};

//data fetching
export async function getStaticProps() {
  // Fetch data from external API
  const res = await fetch(`${process.env.HOST}/team`);
  const data = await res.json();
  // Pass data to the page via props
  return { props: { data } };
}

export default Employees;
