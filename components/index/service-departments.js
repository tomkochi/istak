import Link from "next/link";

const ServiceDepartments = ({ departments, image }) => {
  return (
    <>
      <div className="service-dept">
        <div className="d-flex align-items-center">
          <div className="image wow fadeInUp">
            <img src={image} alt="" />
          </div>
          {/* .image */}
          <div className="text wow fadeInRight">
            <div className="wrapper">
              <h3 className="f-gtam-medium wow fadeInUp">Þjónustudeildir</h3>
              <ul className="list-unstyled">
                {departments.map((d, i) => {
                  return (
                    <li
                      className="f-gtam-bold wow fadeIn"
                      key={i}
                      data-wow-duration={`${i}s`}
                    >
                      <h2>
                        <Link href="#" passHref>
                          <a>{d}</a>
                        </Link>
                      </h2>
                    </li>
                  );
                })}
              </ul>
            </div>
            {/* .wrapper */}
          </div>
          {/* .text */}
        </div>
        {/* d-flex */}
      </div>
      <style jsx>{`
        $brand: #204f9c;
        $text: #202020;

        .service-dept {
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
            right: 0;
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
            .wrapper {
              max-width: 360px;
              h3 {
                font-size: 16px;
                color: $text;
                padding-bottom: 20px;
                border-bottom: 1px solid #f0f0f0;
                margin-bottom: 40px;
              }
              h2 {
                font-size: 36px;
                line-height: 120%;
                margin-bottom: 23px;
                a {
                  color: $brand;
                  transition: all 0.2s;
                  &:hover {
                    opacity: 0.6;
                  }
                }
              }
            }
          }
        }
      `}</style>
    </>
  );
};

export default ServiceDepartments;
