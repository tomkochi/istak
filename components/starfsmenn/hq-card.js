import Link from 'next/link'
import LinkTo from '../link-to'

const HqCard = ({ data }) => {
  return (
    <>
      <div className="hq-card">
        <div className="container d-flex">
          <div className="dummy w-50 d-none d-md-flex"></div>
          <div className="d-md-flex">
            <div className="image order-2">
              <div className="wrapper">
                <img src={data.image} alt="" />
              </div>
              {/* .wrapper */}
            </div>
            {/* .image */}
            <div className="text order-1">
              <div className="wrapper d-flex flex-column justify-content-center">
                <div className="content">
                  <h2
                    className="f-gtam-bold wow fadeInUp"
                    data-wow-duration="300ms"
                  >
                    {data.title}
                  </h2>
                  <p
                    className="f-gtam-thin wow fadeInUp"
                    data-wow-delay="500ms"
                    data-wow-duration="300ms"
                  >
                    {data.description}
                  </p>
                  <div className="contact">
                    <div className="address">{data.address1}</div>
                    <div className="address">{data.address2}</div>
                    <div className="tel">{data.tel}</div>
                    <div className="email">{data.email}</div>
                  </div>
                  {/* .contact */}
                </div>
                {/* .content */}
              </div>
              {/* .wrapper */}
            </div>
            {/* .text */}
          </div>
          {/* .d-flex */}
        </div>
        {/* .container */}
      </div>
      {/* .big-card */}

      <style jsx>{`
        $brand: #204f9c;
        $text: #202020;

        .hq-card {
          position: relative;
          padding: 80px 0;
          margin: 90px 0;
          @media (max-width: 991px) {
            padding: 60px 0;
          }
          @media (max-width: 767px) {
            padding: 0;
            margin: 60px 0;
          }
          &:before {
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            width: calc(50% + 155px);
            height: 100%;
            background: #fbfbfb;
            z-index: -1;
            @media (max-width: 991px) {
              width: calc(50% + 300px);
            }
            @media (max-width: 767px) {
              display: none;
            }
          }
          &:hover {
            .image {
              transform: scale(1.02);
              img {
                transform: scale(1.03);
              }
            }
          }
          .container {
            @media (max-width: 991px) {
              width: 100vw;
            }
          }
          .image {
            width: 50vw;
            height: 600px;
            position: absolute;
            left: 0;
            overflow: hidden;
            transition: all 0.5s;
            @media (max-width: 991px) {
              height: 388px;
            }
            @media (max-width: 767px) {
              position: static;
              width: 100vw;
              height: 220px;
            }
            img {
              width: 50vw;
              height: 600px;
              object-fit: cover;
              transition: all 0.5s;
              @media (max-width: 991px) {
                height: 388px;
              }
              @media (max-width: 767px) {
                width: 100vw;
                height: 220px;
              }
            }
          }
          .text {
            padding-left: 160px;
            @media (max-width: 991px) {
              padding-left: 80px;
            }
            @media (max-width: 767px) {
              padding-left: 0;
            }
            .wrapper {
              max-width: 440px;
              height: 600px;
              @media (max-width: 991px) {
                height: 388px;
              }
              @media (max-width: 767px) {
                padding: 20px;
                padding-bottom: 0;
                max-width: 100%;
                height: auto;
              }
              h2 {
                font-size: 42px;
                line-height: 110%;
                letter-spacing: -0.02em;
                color: #204f9c;
                margin-bottom: 20px;
                @media (max-width: 991px) {
                  font-size: 32px;
                }
                @media (max-width: 767px) {
                  font-size: 24px;
                }
              }
              p {
                font-size: 17px;
                color: $text;
                line-height: 150%;
                margin-bottom: 40px;
                @media (max-width: 991px) {
                  font-size: 16px;
                }
              }
              .contact {
                font-family: 'GT America Regular';
                font-size: 15px;
                line-height: 150%;
                letter-spacing: -0.01em;
                color: #2e2e2e;
                opacity: 0.8;
                .tel {
                  margin-top: 15px;
                }
              }
            }
          }
        }
      `}</style>
    </>
  )
}

export default HqCard
