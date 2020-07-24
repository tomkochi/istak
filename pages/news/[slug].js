import Layout from "../../components/Layout";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import moment from "moment";
//

const Article = ({ data }) => {
  const d = data[0];
  const showDate = (source) => moment(source).format("MM.DD.YY");
  return (
    <Layout>
      <div className="article">
        <div className="hero container">
          <div className="nav-back wow fadeIn">
            <Link href="/articles" passHref>
              <a href="#" className="d-flex align-items-center">
                <div className="icon d-flex align-items-center justify-content-center">
                  <svg
                    width="13"
                    height="12"
                    viewBox="0 0 13 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13 6H2M2 6L7.07692 1M2 6L7.07692 11"
                      stroke="#204F9C"
                      strokeWidth="1.75"
                    />
                  </svg>
                </div>
                <h3 className="f-gtam-medium">Verkefni</h3>
              </a>
            </Link>
          </div>
          {/* .nav-back */}
          <div className="article-card wow fadeInUp">
            <div className="wrapper d-lg-flex align-items-center">
              <div className="image">
                <img src="/img/article-image-1.jpg" alt="" />
              </div>
              {/* .image */}
              <div className="text">
                <h6 className="f-gtam-regular">{showDate(d.createdAt)}</h6>
                <h2 className="f-gtam-bold">{d.title}</h2>
              </div>
              {/* .text */}
            </div>
            {/* .wrapper */}
          </div>
          {/* .article-card */}
        </div>
        {/* .hero */}
        <div className="social-sharing wow fadeInUp">
          <div className="container d-flex align-items-center">
            <h4 className="f-gtam-bold">Deila grein</h4>
            <div className="icons d-flex align-items-center">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="20"
                  cy="20"
                  r="19.5"
                  stroke="#204F9C"
                  strokeOpacity="0.2"
                />
                <path
                  d="M30 20.0609C30 14.5038 25.5234 10 20 10C14.4766 10 10 14.5038 10 20.0609C10 25.0835 13.6562 29.2454 18.4375 30V22.9691H15.8984V20.0609H18.4375V17.8444C18.4375 15.3232 19.9297 13.93 22.2148 13.93C23.3086 13.93 24.4531 14.1265 24.4531 14.1265V16.6025H23.1914C21.9492 16.6025 21.5625 17.3787 21.5625 18.1745V20.0609H24.3359L23.8926 22.9691H21.5625V30C26.3438 29.2454 30 25.0835 30 20.0609Z"
                  fill="#204F9C"
                />
              </svg>
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="20"
                  cy="20"
                  r="19.5"
                  stroke="#204F9C"
                  strokeOpacity="0.2"
                />
                <path
                  d="M17.0317 27C23.0694 27 26.3718 21.9981 26.3718 17.6604C26.3718 17.5184 26.3718 17.3769 26.3622 17.2361C27.0047 16.7715 27.5593 16.1961 28 15.5371C27.4009 15.8025 26.7653 15.9766 26.1146 16.0535C26.7998 15.6433 27.3127 14.9981 27.5578 14.2379C26.9134 14.6203 26.2084 14.8897 25.4733 15.0347C24.9783 14.5084 24.3237 14.16 23.6108 14.0432C22.8978 13.9264 22.1663 14.0479 21.5293 14.3888C20.8923 14.7296 20.3855 15.2709 20.0872 15.9289C19.7888 16.5868 19.7157 17.3247 19.879 18.0284C18.5739 17.963 17.2971 17.6239 16.1316 17.033C14.9661 16.4422 13.9378 15.6129 13.1136 14.5989C12.6938 15.3215 12.5652 16.1769 12.7541 16.991C12.9429 17.8051 13.4349 18.5166 14.1299 18.9807C13.6075 18.9652 13.0965 18.8243 12.64 18.5698C12.64 18.5833 12.64 18.5973 12.64 18.6114C12.6402 19.3693 12.9026 20.1037 13.3826 20.6902C13.8626 21.2767 14.5307 21.6791 15.2736 21.8291C14.7903 21.9609 14.2833 21.9802 13.7914 21.8854C14.0011 22.5377 14.4095 23.108 14.9594 23.5168C15.5093 23.9255 16.1732 24.1521 16.8582 24.165C15.6958 25.0785 14.2599 25.5744 12.7814 25.5729C12.5203 25.5724 12.2593 25.5566 12 25.5255C13.5012 26.4888 15.2479 26.9998 17.0317 26.9974"
                  fill="#204F9C"
                />
              </svg>
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.28 16.9802H16.811V27.0006H13.28V16.9802ZM15.0465 11.999C15.451 11.9992 15.8465 12.1052 16.1828 12.3038C16.5191 12.5023 16.7812 12.7844 16.9359 13.1145C17.0906 13.4445 17.1309 13.8076 17.0519 14.1579C16.9729 14.5082 16.778 14.8299 16.4918 15.0824C16.2057 15.3349 15.8412 15.5069 15.4444 15.5765C15.0476 15.6461 14.6363 15.6103 14.2625 15.4735C13.8888 15.3368 13.5694 15.1053 13.3446 14.8083C13.1199 14.5113 13 14.1621 13 13.8049C13.0001 13.5677 13.053 13.3328 13.1559 13.1137C13.2588 12.8946 13.4095 12.6955 13.5996 12.5278C13.7896 12.3601 14.0152 12.2271 14.2635 12.1363C14.5117 12.0456 14.7778 11.999 15.0465 11.999"
                  fill="#204F9C"
                />
                <path
                  d="M18.4531 16.355H21.388V17.8104H21.4299C21.8381 16.9734 22.8371 16.0908 24.3267 16.0908C27.4267 16.0908 27.9996 18.2952 27.9996 21.1624V27.001H24.9382V21.8239C24.9382 20.5893 24.9186 19.0011 23.3473 19.0011C21.7542 19.0011 21.5111 20.3466 21.5111 21.7355V27.001H18.4531V16.355Z"
                  fill="#204F9C"
                />
                <circle
                  cx="20"
                  cy="20"
                  r="19.5"
                  stroke="#204F9C"
                  strokeOpacity="0.2"
                />
              </svg>
            </div>
            {/* .icons */}
          </div>
          {/* .container */}
        </div>
        {/* .social-sharing */}

        <div className="contents">
          <div className="container">
            <div className="wow fadeInUp">
              <div className="marked">
                <ReactMarkdown source={d.content} />
              </div>
              {d.gallery.map((item) => {
                return (
                  <>
                    <img
                      src={`${process.env.HOST}${item.image[0].url}`}
                      alt={`${process.env.HOST}${item.image[0].alternativeText}`}
                    />
                    <div className="image-caption">{item.description}</div>
                  </>
                );
              })}
            </div>
            <div className="more-articles wow fadeInUp">
              <h2>Viltu sjá fleirri greinar?</h2>
              <Link href="/" passHref>
                <a className="link d-flex justify-content-center align-items-center">
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
                  {/* .icon */}
                  <h3>Sjá fleirri greinar</h3>
                </a>
                {/* .link */}
              </Link>
            </div>
            {/* .more-articles */}
            <div className="social-sharing wow fadeInUp">
              <h2>Deildu á samfélagsmiðlum</h2>
              <div className="icons d-flex align-items-center justify-content-center">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="20"
                    cy="20"
                    r="19.5"
                    stroke="#204F9C"
                    strokeOpacity="0.2"
                  />
                  <path
                    d="M30 20.0609C30 14.5038 25.5234 10 20 10C14.4766 10 10 14.5038 10 20.0609C10 25.0835 13.6562 29.2454 18.4375 30V22.9691H15.8984V20.0609H18.4375V17.8444C18.4375 15.3232 19.9297 13.93 22.2148 13.93C23.3086 13.93 24.4531 14.1265 24.4531 14.1265V16.6025H23.1914C21.9492 16.6025 21.5625 17.3787 21.5625 18.1745V20.0609H24.3359L23.8926 22.9691H21.5625V30C26.3438 29.2454 30 25.0835 30 20.0609Z"
                    fill="#204F9C"
                  />
                </svg>
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="20"
                    cy="20"
                    r="19.5"
                    stroke="#204F9C"
                    strokeOpacity="0.2"
                  />
                  <path
                    d="M17.0317 27C23.0694 27 26.3718 21.9981 26.3718 17.6604C26.3718 17.5184 26.3718 17.3769 26.3622 17.2361C27.0047 16.7715 27.5593 16.1961 28 15.5371C27.4009 15.8025 26.7653 15.9766 26.1146 16.0535C26.7998 15.6433 27.3127 14.9981 27.5578 14.2379C26.9134 14.6203 26.2084 14.8897 25.4733 15.0347C24.9783 14.5084 24.3237 14.16 23.6108 14.0432C22.8978 13.9264 22.1663 14.0479 21.5293 14.3888C20.8923 14.7296 20.3855 15.2709 20.0872 15.9289C19.7888 16.5868 19.7157 17.3247 19.879 18.0284C18.5739 17.963 17.2971 17.6239 16.1316 17.033C14.9661 16.4422 13.9378 15.6129 13.1136 14.5989C12.6938 15.3215 12.5652 16.1769 12.7541 16.991C12.9429 17.8051 13.4349 18.5166 14.1299 18.9807C13.6075 18.9652 13.0965 18.8243 12.64 18.5698C12.64 18.5833 12.64 18.5973 12.64 18.6114C12.6402 19.3693 12.9026 20.1037 13.3826 20.6902C13.8626 21.2767 14.5307 21.6791 15.2736 21.8291C14.7903 21.9609 14.2833 21.9802 13.7914 21.8854C14.0011 22.5377 14.4095 23.108 14.9594 23.5168C15.5093 23.9255 16.1732 24.1521 16.8582 24.165C15.6958 25.0785 14.2599 25.5744 12.7814 25.5729C12.5203 25.5724 12.2593 25.5566 12 25.5255C13.5012 26.4888 15.2479 26.9998 17.0317 26.9974"
                    fill="#204F9C"
                  />
                </svg>
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.28 16.9802H16.811V27.0006H13.28V16.9802ZM15.0465 11.999C15.451 11.9992 15.8465 12.1052 16.1828 12.3038C16.5191 12.5023 16.7812 12.7844 16.9359 13.1145C17.0906 13.4445 17.1309 13.8076 17.0519 14.1579C16.9729 14.5082 16.778 14.8299 16.4918 15.0824C16.2057 15.3349 15.8412 15.5069 15.4444 15.5765C15.0476 15.6461 14.6363 15.6103 14.2625 15.4735C13.8888 15.3368 13.5694 15.1053 13.3446 14.8083C13.1199 14.5113 13 14.1621 13 13.8049C13.0001 13.5677 13.053 13.3328 13.1559 13.1137C13.2588 12.8946 13.4095 12.6955 13.5996 12.5278C13.7896 12.3601 14.0152 12.2271 14.2635 12.1363C14.5117 12.0456 14.7778 11.999 15.0465 11.999"
                    fill="#204F9C"
                  />
                  <path
                    d="M18.4531 16.355H21.388V17.8104H21.4299C21.8381 16.9734 22.8371 16.0908 24.3267 16.0908C27.4267 16.0908 27.9996 18.2952 27.9996 21.1624V27.001H24.9382V21.8239C24.9382 20.5893 24.9186 19.0011 23.3473 19.0011C21.7542 19.0011 21.5111 20.3466 21.5111 21.7355V27.001H18.4531V16.355Z"
                    fill="#204F9C"
                  />
                  <circle
                    cx="20"
                    cy="20"
                    r="19.5"
                    stroke="#204F9C"
                    strokeOpacity="0.2"
                  />
                </svg>
              </div>
              {/* .icons */}
            </div>
            {/* .social-sharing */}
          </div>
          {/* .container */}
        </div>
        {/* .contents */}
      </div>
      {/* .article */}
      <style jsx>{`
        $brand: #204f9c;
        $black: #202020;

        .container {
          @media (max-width: 991px) {
            width: 100vw;
            padding: 0 30px;
          }
          @media (max-width: 767px) {
            width: calc(100vw - 40px);
            margin-left: 20px;
            padding: 0;
          }
        }

        .marked {
          padding: 0 50px;
          font-family: "GT America Thin";
          font-size: 20px;
          margin-bottom: 2em !important;
          color: $black;
          @media (max-width: 991px) {
            padding: 0;
            font-size: 18px;
          }
        }

        .hero {
          margin-top: 150px;
          @media (max-width: 991px) {
            margin-top: 60px;
          }
          @media (max-width: 767px) {
            margin-top: 50px;
          }
          .nav-back {
            margin-bottom: 40px;
            .icon {
              width: 42px;
              height: 42px;
              border: 1px solid rgba(32, 79, 156, 0.2);
              border-radius: 50%;
              margin-right: 15px;
            }
            h3 {
              font-size: 18px;
              line-height: 120%;
              color: $brand;
            }
          }
          .article-card {
            margin-bottom: 40px;
            .wrapper {
              .image {
                width: 50%;
                max-width: 650px;
                @media (max-width: 991px) {
                  width: calc(100vw - 60px);
                  max-width: auto;
                  margin-bottom: 40px;
                }
                @media (max-width: 767px) {
                  width: 100vw;
                  margin-left: -20px;
                }
                img {
                  width: 100%;
                  height: 440px;
                  object-fit: cover;
                  @media (max-width: 991px) {
                    width: calc(100vw - 60px);
                  }
                  @media (max-width: 767px) {
                    width: 100vw;
                    height: 214px;
                  }
                }
              }
              .text {
                margin-left: 60px;
                max-width: 360px;
                @media (max-width: 991px) {
                  width: 100%;
                  max-width: 530px;
                  margin: 0;
                }
                h6 {
                  font-size: 18px;
                  color: $black;
                  margin-bottom: 25px;
                }
                h2 {
                  font-size: 48px;
                  color: $brand;
                  margin-bottom: 30px;
                  @media (max-width: 767px) {
                    font-size: 36px;
                  }
                }
              }
            }
          }
        }
        .social-sharing .container {
          border-bottom: 1px solid #f0f0f0;
          margin-bottom: 80px;
          padding-bottom: 40px;
          @media (max-width: 991px) {
            margin-bottom: 30px;
          }
          h4 {
            font-size: 16px;
            color: black;
            line-height: 150%;
            margin-right: 8px;
          }
          .icons {
            svg {
              margin-left: 12px;
            }
          }
        }
        .contents {
          margin-bottom: 180px;
          @media (max-width: 991px) {
            margin-bottom: 130px;
          }
          .container {
            max-width: 960px;
            @media (max-width: 991px) {
              max-width: 100%;
            }
            p {
              padding: 0 50px;
              font-family: "GT America Thin";
              font-size: 20px;
              margin-bottom: 2em;
              color: $black;
              @media (max-width: 991px) {
                padding: 0;
                font-size: 18px;
              }
            }
            img {
              width: 100%;
              margin: 40px 0;
            }
            .image-caption {
              font-family: "GT America Regular";
              font-size: 16px;
              line-height: 150%;
              color: $black;
              max-width: 680px;
              margin: 0 auto;
              text-align: center;
              margin-bottom: 40px;
            }
          }
          .more-articles {
            margin: 180px 0 60px 0;
            @media (max-width: 991px) {
              margin: 130px 0 60px 0;
            }
            @media (max-width: 767px) {
              margin: 80px 0 40px 0;
            }
            h2 {
              font-family: "GT America Bold";
              font-size: 24px;
              color: $black;
              text-align: center;
              margin-bottom: 28px;
            }
            .link {
              .icon {
                width: 42px;
                height: 42px;
                border: 1px solid rgba(32, 79, 156, 0.2);
                border-radius: 50%;
                margin-right: 15px;
              }
              h3 {
                font-size: 18px;
                line-height: 120%;
                color: $brand;
              }
            }
          }
          .social-sharing {
            text-align: center;
            h2 {
              font-family: "GT America Bold";
              font-size: 24px;
              color: $black;
              text-align: center;
              margin-bottom: 28px;
            }
            svg {
              margin: 0 6px;
            }
          }
        }
      `}</style>
    </Layout>
  );
};

//data fetching
export async function getServerSideProps(context) {
  // Fetch data from external API
  const res = await fetch(
    `${process.env.HOST}/articles?slug=${context.params.slug}`
  );
  const data = await res.json();
  console.log(context.params);

  // Pass data to the page via props
  return { props: { data } };
}

export default Article;
