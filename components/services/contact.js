const Contact = (props) => {
  return (
    <>
      <div className="contact-card">
        <div className="wrapper d-flex align-items-center">
          <div className="image">
            <img src="/img/contact-photo.jpg" alt="" />
            <div className="overlay f-gtam-bold">Tengiliður</div>
            {/* .overlay */}
          </div>
          {/* .image */}
          <div className="text">
            <div className="name f-gtam-bold">
              Ingibjörg Birna Kjartansdóttir
            </div>
            <div className="designation f-gtam-medium">
              BIM / VDc Þróunarstjóri
            </div>
            <div className="contact">
              <div className="email f-gtam-thin">ingibjorg@istak.is</div>
              <div className="phone f-gtam-thin">581 2345</div>
            </div>
            {/* .contact */}
          </div>
          {/* .text */}
        </div>
        {/* .wrapper */}
      </div>
      {/* .contact-card */}

      <style jsx>{`
        $brand: #204f9c;
        $black: #202020;

        .contact-card {
          width: 100%;
          margin-bottom: 140px;
          .wrapper {
            position: relative;
            margin: 0 auto;
            width: 800px;
            padding: 63px 0;
            &:before {
              content: "";
              position: absolute;
              left: 25%;
              right: 0;
              top: 0;
              bottom: 0;
              background: #fcfcfc;
              z-index: -1;
            }
            .image {
              position: relative;
              padding: 15px;
              background: white;
              img {
                width: 250px;
                height: 250px;
                object-fit: cover;
              }
              .overlay {
                position: absolute;
                left: 15px;
                top: 37px;
                background: $brand;
                color: white;
                padding: 8px 13px;
              }
            }
            .text {
              padding-left: 80px;
              .name {
                font-size: 22px;
                line-height: 150%;
                margin-bottom: 8px;
                color: $black;
              }
              .designation {
                font-size: 18px;
                color: $brand;
                margin-bottom: 25px;
              }
              .contact {
                .email {
                  font-size: 18px;
                  color: $black;
                }
                .phone {
                  font-size: 18px;
                  color: $black;
                }
              }
            }
          }
        }
      `}</style>
    </>
  );
};

export default Contact;
