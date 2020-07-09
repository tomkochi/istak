const Contact = (props) => {
  return (
    <>
      <div className="contact-card">
        <div className="wrapper d-md-flex align-items-center">
          <div className="image wow fadeIn">
            <div
              className="overlay f-gtam-bold wow fadeInLeft"
              data-wow-delay="250ms"
            >
              Tengiliður
            </div>
            {/* .overlay */}
            <img src="/img/contact-photo.jpg" alt="" />
          </div>
          {/* .image */}
          <div className="text wow fadeInUp" data-wow-delay="500ms">
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
          @media (max-width: 991px) {
            margin: 0 auto 60px auto;
            width: calc(100% - 40px);
          }
          @media (max-width: 767px) {
            width: 100%;
          }
          .wrapper {
            position: relative;
            margin: 0 auto;
            width: 800px;
            padding: 63px 0;
            @media (max-width: 767px) {
              width: 100vw;
              padding: 0 20px;
            }
            &:before {
              content: '';
              position: absolute;
              left: 25%;
              right: 0;
              top: 0;
              bottom: 0;
              background: #fcfcfc;
              z-index: -1;
              @media (max-width: 991px) {
                right: 100px;
              }
              @media (max-width: 767px) {
                display: none;
              }
            }
            .image {
              position: relative;
              padding: 15px;
              background: white;
              @media (max-width: 767px) {
                padding: 0;
                margin-bottom: 18px;
              }
              img {
                width: 250px;
                height: 250px;
                object-fit: cover;
                border: 1px solid $black;
                @media (max-width: 767px) {
                  width: 147px;
                  height: 147px;
                }
              }
              .overlay {
                position: absolute;
                left: 15px;
                top: 37px;
                background: $brand;
                color: white;
                padding: 8px 13px;
                @media (max-width: 767px) {
                  position: static;
                  width: fit-content;
                  margin-bottom: 20px;
                }
              }
            }
            .text {
              padding-left: 80px;
              @media (max-width: 767px) {
                padding: 0;
              }
              .name {
                font-size: 22px;
                line-height: 150%;
                margin-bottom: 8px;
                color: $black;
                @media (max-width: 767px) {
                  font-size: 18px;
                }
              }
              .designation {
                font-size: 18px;
                color: $brand;
                margin-bottom: 25px;
                @media (max-width: 767px) {
                  font-size: 14px;
                }
              }
              .contact {
                .email {
                  font-size: 18px;
                  color: $black;
                  @media (max-width: 767px) {
                    font-size: 16px;
                  }
                }
                .phone {
                  font-size: 18px;
                  color: $black;
                  @media (max-width: 767px) {
                    font-size: 16px;
                  }
                }
              }
            }
          }
        }
      `}</style>
    </>
  )
}

export default Contact
