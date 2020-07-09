const Employee = ({ photo, name, designation, email, phone }) => {
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
          margin-bottom: 90px;
          @media (max-width: 991px) {
            margin-bottom: 40px;
          }
          @media (max-width: 767px) {
            width: calc(50vw - 35px);
          }
          .image {
            width: 100%;
            height: 253px;
            margin-bottom: 26px;
            @media (max-width: 991px) {
              width: calc(100vw / 3 - 35px);
              height: 173px;
            }
            @media (max-width: 767px) {
              width: 100%;
              height: 173px;
              margin-bottom: 20px;
            }
            img {
              width: 287px;
              height: 253px;
              object-fit: cover;
              border: 1px solid #c4c4c4;
              margin-bottom: 26px;
              @media (max-width: 991px) {
                width: calc(100vw / 3 - 35px);
                height: 173px;
              }
              @media (max-width: 767px) {
                width: calc(50vw - 35px);
                height: 173px;
              }
            }
          }
          .employee-details {
            @media (max-width: 991px) {
              width: calc(100vw / 3 - 35px);
              height: 173px;
            }
            @media (max-width: 767px) {
              width: calc(50vw - 35px);
            }
            .name {
              font-size: 18px;
              line-height: 150%;
              color: $black;
              margin-bottom: 6px;
              @media (max-width: 767px) {
                font-size: 16px;
              }
            }
            .designation {
              font-size: 16px;
              line-height: 150%;
              color: $brand;
              margin-bottom: 20px;
              @media (max-width: 767px) {
                font-size: 14px;
              }
            }
            .contact {
              .email {
                font-size: 16px;
                color: $black;
                margin-bottom: 12px;
                -ms-word-break: break-all;
                word-break: break-all;
                word-break: break-word;
                @media (max-width: 767px) {
                  font-size: 14px;
                }
              }
              .phone {
                font-size: 16px;
                color: $black;
                line-height: 100%;
                @media (max-width: 767px) {
                  font-size: 14px;
                }
              }
            }
          }
        }
      `}</style>
    </>
  )
}

export default Employee
