import Link from 'next/link'

const ServiceCard = ({ data }) => {
  return (
    <>
      <div className="service-card">
        <div className="container d-md-flex align-items-center">
          <div className="image">
            <img src="/img/article-image-1.jpg" alt="" />
          </div>
          {/* .image */}
          <div className="text">
            <h3 className="f-gtam-bold">{data.title}</h3>
            <p className="f-gtam-thin">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              nisi impedit, iusto vero doloribus pariatur a, cumque, nihil
              nesciunt obcaecati autem nostrum et suscipit blanditiis quibusdam
              vitae optio fugiat ad.
            </p>
            <Link href={`/services/${data.slug}`} passHref>
              <a className="f-gtam-medium d-flex align-items-center">
                <span className="icon d-flex align-items-center justify-content-center">
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
                </span>
                Sjá nánar
              </a>
            </Link>
          </div>
          {/* .text */}
        </div>
        {/* .container */}
      </div>
      {/* .service-card */}
      <style jsx>{`
        $brand: #204f9c;
        $text: #202020;

        .service-card {
          position: relative;
          padding: 60px 0;
          margin-bottom: 80px;
          @media (max-width: 991px) {
            margin-bottom: 60px;
          }
          @media (max-width: 767px) {
            padding: 0;
            margin-bottom: 50px;
          }
          &:before {
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            height: 100%;
            width: calc(50% + 160px);
            background: #fbfbfb;
            z-index: -1;
            @media (max-width: 991px) {
              width: calc(50% + 260px);
            }
            @media (max-width: 767px) {
              display: none;
            }
          }
          .container {
            @media (max-width: 991px) {
              margin: 0;
            }
            .text {
              width: 50%;
              padding-left: 120px;
              @media (max-width: 991px) {
                padding-left: 75px;
              }
              @media (max-width: 767px) {
                padding: 30px 20px 0;
                width: 100vw;
              }
              h3 {
                font-size: 48px;
                line-height: 120%;
                letter-spacing: -0.01em;
                color: $brand;
                max-width: 400px;
                margin-bottom: 27px;
                @media (max-width: 991px) {
                  font-size: 32px;
                }
                @media (max-width: 767px) {
                  max-width: 100%;
                }
              }
              p {
                font-size: 17px;
                line-height: 150%;
                color: $text;
                max-width: 300px;
                margin-bottom: 30px;
                @media (max-width: 991px) {
                  font-size: 16px;
                }
              }
              a {
                font-size: 18px;
                line-height: 120%;
                color: $brand;
                .icon {
                  width: 42px;
                  height: 42px;
                  border: 1px solid rgba(32, 79, 156, 0.2);
                  border-radius: 50%;
                  margin-right: 18px;
                }
              }
            }
            .image {
              width: 50%;
              @media (max-width: 991px) {
                width: 50vw;
              }
              img {
                width: 100%;
                height: 500px;
                object-fit: cover;
                @media (max-width: 991px) {
                  height: 360px;
                  width: 50vw;
                }
                @media (max-width: 767px) {
                  width: 100vw;
                  height: 220px;
                }
              }
            }
          }
        }
      `}</style>
    </>
  )
}

export default ServiceCard
