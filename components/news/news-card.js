import Link from "next/link";

const NewsCard = ({ image, title, link }) => {
  return (
    <>
      <div className="article-card container">
        <div className="wrapper d-flex align-items-center">
          <div className="image">
            <img src={image} alt="" />
          </div>
          {/* .image */}
          <div className="text">
            <h2 className="f-gtam-bold">{title}</h2>
            <Link href={link} passHref>
              <a className="link d-flex align-items-center">
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

        .article-card {
          margin-bottom: 80px;
          &:hover {
            .icon {
              background: $brand;
              svg path {
                stroke: white;
              }
            }
          }
          .wrapper {
            .image {
              width: 50%;
              max-width: 650px;
              img {
                width: 100%;
                height: 440px;
                object-fit: cover;
              }
            }
            .text {
              margin-left: 60px;
              max-width: 360px;
              h2 {
                font-size: 36px;
                color: $brand;
                margin-bottom: 30px;
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
  );
};

export default NewsCard;
