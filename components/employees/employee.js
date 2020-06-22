const Employee = ({ photo, name, designation, email, phone }) => {
  return (
    <>
      <div className="employee">
        <img src={photo} alt="" />
        <div className="employee-details">
          <div className="name f-gtam-bold">{name}</div>
          <div className="designation f-gtam-regular">{designation}</div>
          <div className="contact">
            <div className="email f-gtam-thin">{email}</div>
            <div className="phone f-gtam-thin">{phone}</div>
          </div>
          {/* .contact */}
        </div>
        {/* .employee-details */}
      </div>
      {/* .employee */}

      <style jsx>{`
        $brand: #204f9c;
        $black: #202020;

        .employee {
          margin: 0 25px 90px 25px;
          img {
            width: 287px;
            height: 253px;
            object-fit: cover;
            border: 1px solid #c4c4c4;
            margin-bottom: 26px;
          }
          .employee-details {
            .name {
              font-size: 18px;
              line-height: 150%;
              color: $black;
              margin-bottom: 6px;
            }
            .designation {
              font-size: 16px;
              line-height: 150%;
              color: $brand;
              margin-bottom: 20px;
            }
            .contact {
              .email {
                font-size: 16px;
                color: $black;
                margin-bottom: 12px;
              }
              .phone {
                font-size: 16px;
                color: $black;
                line-height: 100%;
              }
            }
          }
        }
      `}</style>
    </>
  );
};

export default Employee;
