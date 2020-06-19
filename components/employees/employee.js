const Employee = ({ name, designation, email, phone }) => {
  return (
    <>
      <div className="employee">
        <img src="/img/contact-photo.jpg" alt="" />
        <div className="employee-details">
          <div className="name">name}</div>
          <div className="designation">designation}</div>
          <div className="contact">
            <div className="email">email}</div>
            <div className="phone">phone}</div>
          </div>
          {/* .contact */}
        </div>
        {/* .employee-details */}
      </div>
      {/* .employee */}
    </>
  );
};

export default Employee;
