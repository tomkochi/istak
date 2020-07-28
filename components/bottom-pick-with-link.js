import Link from 'next/link'

const BottomPick = ({ data, image, title, para, url }) => {
  return (
    <>
      <div
        className="bottom-pick d-md-flex align-items-center wow fadeIn"
        data-wow-duration="1s"
      >
        <img src={`${process.env.HOST}${data.background.url}`} alt="" />
        <div className="container">
          <div className="content wow fadeIn" data-wow-duration="1s">
            <h2
              className="f-gtam-bold wow fadeInUp"
              data-wow-delay="300ms"
              data-wow-duration="300ms"
            >
              {data.title}
            </h2>
            {data.description && (
              <p
                className="f-gtam-thin wow fadeInUp"
                data-wow-delay="500ms"
                data-wow-duration="300ms"
              >
                {data.description}
              </p>
            )}
            <Link href={'/'} passHref>
              <a
                className="d-flex align-items-center wow fadeInUp"
                data-wow-delay="750ms"
                data-wow-duration="300ms"
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
                      d="M0 5.99951H11M11 5.99951L5.92308 0.999512M11 5.99951L5.92308 10.9995"
                      stroke="white"
                      stroke-width="1.75"
                    />
                  </svg>
                </div>
                <h3 className="f-gtam-medium">Sjá öll verkefni</h3>
              </a>
            </Link>
          </div>
          {/* .content */}
        </div>
        {/* .container */}
      </div>
      <style jsx>{`
        $brand: #204f9c;
        $text: #222222;

        .bottom-pick {
          height: 100vh;
          position: relative;
          margin-top: 90px;
          @media (max-width: 991px) {
            margin-top: 60px;
            height: 615px;
          }
          @media (max-width: 767px) {
            height: auto;
          }
          &:before,
          &:after {
            content: '';
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            @media (max-width: 767px) {
              bottom: auto;
              height: 220px;
            }
          }
          &:before {
            background: linear-gradient(
              90.1deg,
              rgba(32, 79, 156, 0.3) 0.16%,
              rgba(32, 79, 156, 0) 99.82%
            );
          }
          &:after {
            background: linear-gradient(
              90.38deg,
              #204f9c 0.16%,
              rgba(32, 79, 156, 0.4) 31.3%,
              rgba(32, 79, 156, 0.2) 62.45%,
              rgba(32, 79, 156, 0.2) 83.21%,
              #204f9c 99.82%
            );
            opacity: 0.5;
          }
          img {
            position: absolute;
            width: 100%;
            height: 100%;
            object-fit: cover;
            z-index: -1;
            @media (max-width: 767px) {
              position: static;
              height: 220px;
            }
          }
          .container {
            @media (max-width: 767px) {
              width: 100vw;
            }
            .content {
              position: relative;
              padding: 50px;
              background: $brand;
              color: white;
              width: 404px;
              box-shadow: 0px 34px 94px rgba(0, 0, 0, 0.3);
              z-index: 1000;
              @media (max-width: 767px) {
                padding: 20px;
                position: static;
                max-width: 100vw;
                box-shadow: none;
                background: white;
                padding-bottom: 60px;
              }
              h2 {
                font-size: 48px;
                line-height: 120%;
                margin-bottom: 20px;
                @media (max-width: 991px) {
                  font-size: 32px;
                }
                @media (max-width: 767px) {
                  font-size: 24px;
                  color: $brand;
                }
              }
              p {
                font-size: 18px;
                line-height: 150%;
                margin-bottom: 30px;
                @media (max-width: 991px) {
                  font-size: 16px;
                }
                @media (max-width: 767px) {
                  font-size: 14px;
                  color: $text;
                }
              }
              h3 {
                font-size: 18px;
                line-height: 120%;
                @media (max-width: 767px) {
                  color: $brand;
                }
              }
              a {
                color: white;
                text-decoration: none;
                &:hover .icon {
                  background: white;
                }
                &:hover svg path {
                  fill: $brand;
                  stroke: $brand;
                }
                .icon {
                  width: 42px;
                  height: 42px;
                  border: 1px solid rgba(255, 255, 255, 0.2);
                  border-radius: 50%;
                  margin-right: 15px;
                  transition: 0.3s;
                  svg path {
                    transition: 0.3s;
                  }
                  @media (max-width: 767px) {
                    border: 1px solid rgba(32, 79, 156, 0.2);
                    svg path {
                      fill: $brand;
                      stroke: $brand;
                    }
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

export default BottomPick
