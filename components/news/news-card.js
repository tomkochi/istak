import Link from 'next/link'

const NewsCard = (props, { image, title, link }) => {
  console.log(props)
  return (
    <>
      <div className="article-card container">
        <div className="wrapper d-md-flex align-items-center">
          <div className="image">
            <img src={image} alt="" />
          </div>
          {/* .image */}
          <div className="text">
            <h2 className="f-gtam-bold wow faeInUp">{title}</h2>
            <Link href={link} passHref>
              <a
                className="link d-flex align-items-center wow fadeInUp"
                data-wow-delay="250ms"
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
                <h5>Lesa grein</h5>
              </a>
            </Link>
          </div>
          {/* .text */}
        </div>
        {/* .wrapper */}
      </div>
      {/* .article-card */}

      <style jsx>{`
        $brand: #204f9c;

        .container {
          @media (max-width: 991px) {
            width: 100vw;
            padding-right: 40px;
          }
        }
        .article-card {
          margin-bottom: 80px;
          @media (max-width: 767px) {
            margin-bottom: 40px;
          }
          &:hover {
            .icon {
              background: $brand;
              svg path {
                stroke: white;
              }
            }
            .image {
              transform: scale(1.05);
              img {
                transform: scale(1.1);
              }
            }
          }
          .wrapper {
            .image {
              width: 650px;
              overflow: hidden;
              transition: all 0.5s;
              @media (max-width: 991px) {
                width: 387px;
                max-width: 387px;
              }
              @media (max-width: 767px) {
                width: 100vw;
                margin-bottom: 30px;
              }
              img {
                width: 650px;
                height: 440px;
                object-fit: cover;
                transition: all 0.5s;
                @media (max-width: 991px) {
                  width: 387px;
                  max-width: 387px;
                }
                @media (max-width: 767px) {
                  width: 100vw;
                  height: 241px;
                }
              }
            }
            .text {
              margin-left: 60px;
              width: 360px;
              @media (max-width: 767px) {
                margin-left: 0;
                width: 100vw;
                padding: 0 20px;
              }
              h2 {
                font-size: 36px;
                color: $brand;
                margin-bottom: 30px;
                @media (max-width: 991px) {
                  font-size: 48px;
                }
                @media (max-width: 767px) {
                  font-size: 36px;
                }
              }
              .link {
                .icon {
                  width: 42px;
                  height: 42px;
                  border: 1px solid rgba(32, 79, 156, 0.2);
                  border-radius: 50%;
                  margin-right: 15px;
                  transition: all 0.3s;
                  svg path {
                    transition: all 0.3s;
                  }
                }
                h5 {
                  font-size: 18px;
                  line-height: 120%;
                  color: $brand;
                }
              }
            }
          }
        }
      `}</style>
    </>
  )
}

export default NewsCard
