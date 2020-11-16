const Employee = ({ photo, name, designation, email, phone, phone2 }) => {
  return (
    <>
      <div className="employee">
        <div className="image">
          <img
            src={photo}
            className="wow fadeInUp"
            alt=""
            data-wow-duration="300ms"
          />
        </div>
        <div className="employee-details wow fadeIn">
          <div className="name f-gtam-bold">{name}</div>
          <div className="designation f-gtam-regular">{designation}</div>
          <div className="contact">
            <div className="email f-gtam-thin">{email}</div>
            <div className="phone f-gtam-thin">{phone}</div>
            <div className="phone f-gtam-thin">{phone2}</div>
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
          width: calc(100% / 4 - 20px);
          margin-bottom: 45px;
          margin-right: 20px;
          &:nth-child(4n + 4) {
            margin-right: 0;
          }
          @media (max-width: 991px) {
            width: calc(100% / 3 - 20px);
            &:nth-child(3n + 3) {
              margin-right: 0;
            }
            &:nth-child(4n + 4) {
              margin-right: 20px;
            }
          }
          @media (max-width: 767px) {
            width: calc(100% / 2 - 20px);
            &:nth-child(2n + 2) {
              margin-right: 0;
            }
            &:nth-child(3n + 3) {
              margin-right: 20px;
            }
          }
          .image {
            width: 100%;
            height: 325px;
            margin-bottom: 26px;
            @media (max-width: 991px) {
              height: 260px;
            }
            @media (max-width: 767px) {
              height: 182px;
            }
            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }
          .employee-details {
            .name {
              font-family: 'GT America Medium';
              font-size: 16px;
              line-height: 150%;
              color: #202020;
            }
            .designation {
              font-size: 14px;
              line-height: 150%;
              letter-spacing: -0.01em;
              color: #204f9c;
              margin-bottom: 12px;
            }
          }
        }
      `}</style>
    </>
  )
}

export default Employee
