const BigCard = ({
  "image-position": imagePosition,
  image,
  heading,
  para,
  link,
}) => {
  return (
    <>
      <div
        className={`project-card ${
          imagePosition === "left" ? "left" : "right"
        }`}
      >
        <div className="d-flex align-items-center">
          <div
            className={`image ${
              imagePosition === "left" ? "order-1" : "order-2"
            }`}
          >
            <img src={image} alt="" />
          </div>
          {/* .image */}
          <div
            className={`text ${
              imagePosition === "left" ? "order-2 right" : "order-1 left"
            }`}
          >
            <div className="wrapper">
              <h2 className="f-gtam-bold">{heading}</h2>
              <p className="f-gtam-thin">{para}</p>
              <h3 className="f-gtam-medium d-flex align-items-center">
                <div className="arrow d-flex align-items-center justify-content-center">
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
                      stroke-width="1.75"
                    />
                  </svg>
                </div>
                {link}
              </h3>
            </div>
            {/* .wrapper */}
          </div>
          {/* .text */}
        </div>
        {/* .d-flex */}
      </div>
      <style jsx>{`
        $brand: #204f9c;
        $text: #202020;

        .project-card {
          position: relative;
          padding: 90px 0;
          margin: 90px 0;
          &:before {
            content: "";
            position: absolute;
            top: 0;
            width: calc(50% + 155px);
            height: 100%;
            background: #fbfbfb;
            z-index: -1;
          }
          &.left:before {
            right: 0;
          }
          &.right:before {
            left: 0;
          }
          .image {
            width: 50%;
            height: 600px;
            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }
          .text {
            padding-left: 155px;
            width: 50%;
            &.left {
              padding-left: 15%;
            }
            .wrapper {
              max-width: 290px;
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
                .arrow {
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
