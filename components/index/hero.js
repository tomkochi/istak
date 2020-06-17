import Header from "../home-header";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="header">
          <Header />
        </div>
        <div className="carousel slide" data-pause="false" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="/img/home-hero-image.jpg" alt="" />
              <div className="container">
                <div className="carousel-caption d-flex justify-content-between">
                  <div className="blue-box">
                    <h2 className="f-gtam-bold">
                      Brautriðjandi á Íslandi í 50 ár
                    </h2>
                    <p className="f-gtam-thin">
                      Við erum orðin 50 ára! Við fögnum því með nýjum og
                      glæsilegum vef. Kynntu þér stærstu áfanga okkar síðustu
                      áratuga.
                    </p>
                    <div className="link  d-flex align-items-center">
                      <div className="icon  d-flex align-items-center justify-content-center">
                        <svg
                          width="13"
                          height="12"
                          viewBox="0 0 13 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0 6H11M11 6L5.92308 1M11 6L5.92308 11"
                            stroke="white"
                            stroke-width="1.75"
                          />
                        </svg>
                      </div>
                      <h3 className="f-gtam-regular">Sjáðu söguna</h3>
                    </div>
                  </div>
                  {/* .blue-box */}
                  <div className="links text-right align-self-end">
                    <div className="name f-gtam-medium">
                      Búrfell – Valdi, Þorvaldur K, Helgi Laxdal
                    </div>
                    <div className="year f-gtam-medium">1971</div>
                    <div className="controls">
                      <a href=".carousel" role="button" data-slide="prev">
                        <div className="icon d-flex align-items-center justify-content-center">
                          <svg
                            width="10"
                            height="10"
                            viewBox="0 0 10 10"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1.93846 5L6 1M1.93846 5L6 9M1.93846 5H10"
                              stroke="white"
                              stroke-width="1.5"
                            />
                          </svg>
                        </div>
                      </a>
                      <a href=".carousel" role="button" data-slide="next">
                        <div className="icon d-flex align-items-center justify-content-center">
                          <svg
                            width="10"
                            height="10"
                            viewBox="0 0 10 10"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.06154 5L4 1M8.06154 5L4 9M8.06154 5H0"
                              stroke="white"
                              stroke-width="1.5"
                            />
                          </svg>
                        </div>
                      </a>
                    </div>
                  </div>
                  {/* .links */}
                </div>
                {/* .carousel-caption */}
              </div>
              {/* .container */}
            </div>
          </div>
        </div>
      </div>
      {/* .hero */}
      <style jsx>{`
        $brand: #204f9c;

        .hero {
          width: 100%;
          height: 100vh;
          background: red;
          overflow: hidden;
          position: relative;
          &:after {
            content: "";
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            background: linear-gradient(
                90.1deg,
                rgba(32, 79, 156, 0.3) 0.16%,
                rgba(32, 79, 156, 0) 99.82%
              ),
              linear-gradient(
                90.38deg,
                rgba(32, 79, 156, 0.7) 0.16%,
                rgba(32, 79, 156, 0.3) 31.3%,
                rgba(22, 98, 178, 0.2) 62.45%,
                rgba(32, 79, 156, 0.4) 83.21%,
                rgba(32, 79, 156, 0.5) 99.82%
              ),
              linear-gradient(
                rgba(32, 79, 156, 0.8) 0%,
                rgba(22, 98, 178, 0) 20%
              );
            z-index: 200;
          }
          .header {
            position: absolute;
            left: 0;
            top: 0;
            right: 0;
            z-index: 5000;
          }
          .carousel-item {
            background: blue;
            height: 100vh;
            position: relative;
            img {
              width: 100%;
              height: 100vh;
              object-fit: cover;
            }
            .carousel-caption {
              text-align: left;
              bottom: 20%;
              transition: all 0.3s;
              z-index: 12000;
              .blue-box {
                background: $brand;
                max-width: 465px;
                padding: 50px;
                box-shadow: 0px 34px 94px rgba(0, 0, 0, 0.3);

                h2 {
                  font-size: 48px;
                  line-height: 120%;
                  margin-bottom: 22px;
                }
                p {
                  font-size: 17px;
                  line-height: 150%;
                  margin-bottom: 30px;
                }
                .link {
                  .icon {
                    width: 42px;
                    height: 42px;
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    border-radius: 50%;
                    margin-right: 15px;
                  }
                  h3 {
                    font-size: 18px;
                    line-height: 120%;
                  }
                }
              }
              .links {
                .name {
                  font-size: 18px;
                  margin-bottom: 7px;
                }
                .year {
                  font-size: 18px;
                  opacity: 0.5;
                  margin-bottom: 20px;
                }
                .controls {
                  a {
                    display: inline-block;
                    margin-left: 8px;
                    .icon {
                      width: 34px;
                      height: 34px;
                      border: 1px solid rgba(255, 255, 255, 0.2);
                      border-radius: 50%;
                      transition: all 0.3s;
                      &:hover {
                        border-color: white;
                      }
                    }
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

export default Hero;
