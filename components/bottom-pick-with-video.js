//import ReactPlayer from "react-player";
import ResponsivePlayer from '../components/responsivePlayer'
import { useState, useEffect } from 'react'

const BottomPick = ({ data, image, title, para, video }) => {
  const [showVideo, setShowVideo] = useState(false)
  const trackEscape = (e) => {
    if (e.keyCode === 27) {
      setShowVideo(false)
    }
  }
  useEffect(() => {
    if (showVideo) {
      document.addEventListener('keydown', trackEscape, false)
    } else {
      document.removeEventListener('keydown', trackEscape, false)
    }
    return () => {
      document.removeEventListener('keydown', trackEscape, false)
    }
  }, [showVideo])
  return (
    <>
      <div
        className="bottom-pick d-md-flex align-items-center wow fadeIn"
        data-wow-duration="1s"
      >
        <img
          src={`${process.env.NEXT_PUBLIC_HOST}${data.background.url}`}
          alt=""
        />
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
            <div
              onClick={(e) => setShowVideo(true)}
              className="play-video d-flex align-items-center wow fadeInUp"
              data-wow-delay="750ms"
              data-wow-duration="300ms"
            >
              <div className="icon d-flex align-items-center justify-content-center">
                <svg
                  width="8"
                  height="10"
                  viewBox="0 0 8 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0L8 5L0 10V0Z" fill="white" />
                </svg>
              </div>
              <h3 className="f-gtam-medium">Spila myndband</h3>
            </div>
            {/* .play-video */}
          </div>
          {/* .content */}
        </div>
        {/* .container */}

        {showVideo && (
          <div className={`video-overlay`}>
            <div className="v-wrapper">
              <div className="d-inline-block">
                <div
                  onClick={(e) => setShowVideo(false)}
                  className="close-videopopup d-flex justify-content-center align-items-center"
                >
                  <div className="icon d-flex justify-content-center align-items-center">
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.968995 1L8.96899 9"
                        stroke="white"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M0.968995 8.99902L8.96899 0.999023"
                        stroke="white"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </div>
                  {/* .icon */}
                  <h3 className="f-gtam-bold">Loka myndbandi</h3>
                </div>
              </div>
              <div className="video">
                <ResponsivePlayer data="https://youtu.be/SUh-r5JRLSo" />
              </div>
              {/* .video */}
            </div>
            {/* .wrapper */}
          </div>
        )}
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
              width: 437px;
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
                margin: 0;
                @media (max-width: 767px) {
                  color: $brand;
                }
              }
              .play-video {
                cursor: pointer;
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
          .video-overlay {
            position: fixed;
            left: 0;
            top: 0;
            width: 100%;
            height: 100vh;
            padding: 50px;
            background: rgba(0, 0, 0, 0.9);
            z-index: 1000;
            .v-wrapper {
              position: relative;
              top: 50%;
              transform: translateY(-50%);
              text-align: center;
              .close-videopopup {
                width: 100%;
                cursor: pointer;
                margin-bottom: 50px;
                &:hover {
                  svg path {
                    fill: white;
                    stroke: $text;
                  }
                  .icon {
                    background: white;
                  }
                  h3 {
                    opacity: 0.6;
                  }
                }
                .icon {
                  width: 34px;
                  height: 34px;
                  border: 1px solid rgba(255, 255, 255, 0.2);
                  border-radius: 50%;
                  margin-right: 15px;
                  transition: 0.3s;
                  svg path {
                    transition: 0.3s;
                  }
                }
                h3 {
                  font-size: 16px;
                  color: white;
                  transition: 0.3s;
                }
              }
              .video {
                text-align: center;
                position: relative;
                width: 100%;
                max-width: 80vw;
                margin: 0 auto;
              }
            }
          }
        }
      `}</style>
    </>
  )
}

export default BottomPick
