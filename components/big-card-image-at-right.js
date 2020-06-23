const BigCard = ({ image, heading, para, link }) => {
  return (
    <>
      <div className="big-card">
        <div className="container d-flex">
          <div className="dummy w-50 d-none"></div>
          <div className="d-flex">
            <div className="text d-flex">
              <div className="wrapper d-flex flex-column justify-content-center">
                <div className="content">
                  <h2 className="f-gtam-bold wow fadeInUp" data-wow-delay="1s">
                    {heading}
                  </h2>
                  <p className="f-gtam-thin wow fadeInUp" data-wow-delay="1.5s">
                    {para}
                  </p>
                  {link && (
                    <h3
                      className="f-gtam-medium d-flex align-items-center wow fadeIn"
                      data-wow-delay="2s"
                    >
                      <div className="icon d-flex align-items-center justify-content-center">
                        <svg
                          width="13"
                          height="12"
                          viewBox="0 0 13 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0 6H11M11 6L5.92308 1M11 6L5.92308 11"
                            stroke="#204F9C"
                            strokeWidth="1.75"
                          />
                        </svg>
                      </div>
                      {link}
                    </h3>
                  )}
                </div>
                {/* .content */}
              </div>
              {/* .wrapper */}
            </div>
            {/* .text */}
            <div className="image">
              <div className="wrapper">
                <img src={image} alt="" />
              </div>
              {/* .wrapper */}
            </div>
            {/* .image */}
          </div>
          {/* .d-flex */}
        </div>
        {/* .container */}
      </div>
      {/* .big-card */}

      <style jsx>{`
        $brand: #204f9c;
        $text: #202020;

        .big-card {
          position: relative;
          padding: 90px 0;
          margin: 90px 0;
          &:before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: calc(50% + 155px);
            height: 100%;
            background: #fbfbfb;
            z-index: -1;
          }
          &:hover {
            .image {
              transform: scale(1.05);
              img {
                transform: scale(1.07);
              }
            }
          }
          .image {
            width: 50vw;
            height: 600px;
            position: absolute;
            right: 0;
            transition: all 0.5s;
            overflow: hidden;
            img {
              width: 50vw;
              height: 600px;
              object-fit: cover;
              transition: all 0.5s;
            }
          }
          .text {
            .wrapper {
              max-width: 290px;
              height: 600px;
              h2 {
                font-size: 48px;
                color: $brand;
                line-height: 120%;
                margin-bottom: 20px;
              }
              p {
                font-size: 17px;
                color: $text;
                line-height: 150%;
                margin-bottom: 30px;
              }
              h3 {
                font-size: 18px;
                color: $brand;
                line-height: 120%;
                .icon {
                  width: 42px;
                  height: 42px;
                  border: 1px solid rgba(32, 79, 156, 0.2);
                  border-radius: 50%;
                  margin-right: 15px;
                }
              }
            }
          }
        }
      `}</style>
    </>
  );
};

export default BigCard;
