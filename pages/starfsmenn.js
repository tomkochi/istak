import Hero from "../components/employees/hero";
import Employee from "../components/employees/employee";
import Layout from "../components/Layout";
import fetch from "isomorphic-unfetch";
import { useState } from "react";

const Employees = ({ data }) => {
  const [state, setstate] = useState(data.member);
  function handleChange(e) {
    const search = e.target.value;
    var result = data.member.filter(
      (item) =>
        item.name.includes(search) ||
        item.designation.includes(search) ||
        item.phone.includes(search) ||
        item.email.includes(search)
    );
    setstate(result);
  }
  //
  return (
    <Layout>
      <div className="employees">
        <Hero data={data} change={handleChange} />
        <div className="container">
          <div className="employee-cards d-flex flex-wrap justify-content-between">
            {state.map((e) => {
              return (
                <Employee
                  key={e._id}
                  photo={`${process.env.NEXT_PUBLIC_HOST}${e.picture.url}`}
                  name={e.name}
                  designation={e.designation}
                  email={e.email}
                  phone={e.phone}
                />
              );
            })}
          </div>
          {/* .employee-cards */}
        </div>
        {/* .container */}
      </div>
      {/* .employees */}
      <style jsx>{`
        .employee-cards {
          width: calc(100% + 50px);
          margin-left: -25px;
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
