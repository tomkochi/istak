import Hero from '../components/employees/hero'
import Employee from '../components/employees/employee'
import Layout from '../components/Layout'
import fetch from 'isomorphic-unfetch'

const Employees = ({ data }) => {
  return (
    <Layout>
      <div className="employees">
        <Hero />
        <div className="container">
          <div className="employee-cards d-flex flex-wrap justify-content-between">
            {data.map((e, i) => {
              return (
                <Employee
                  photo={e.picture.large}
                  name={`${e.name.title}. ${e.name.first} ${e.name.last}`}
                  designation="BIM / VDc Þróunarstjóri"
                  email={e.email}
                  phone={e.phone}
                />
              )
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
  )
}

Employees.getInitialProps = async (ctx) => {
  const res = await fetch(`https://randomuser.me/api/?results=33`)
  const json = await res.json()
  return { data: json.results }
}

export default Employees
