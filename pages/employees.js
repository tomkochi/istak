import Hero from "../components/employees/hero";
import Employee from "../components/employees/employee";
import Layout from "../components/Layout";

const Employees = (props) => {
  return (
    <Layout>
      <div className="employees">
        <Hero />
        <div className="container">
          <Employee
            name="Ingibjörg Birna Kjartansdóttir"
            designation="BIM / VDc Þróunarstjóri"
            email="ingibjorg@istak.is"
            phone="581 2345"
          />
        </div>
        {/* .container */}
      </div>
      {/* .employees */}
    </Layout>
  );
};

export default Employees;
