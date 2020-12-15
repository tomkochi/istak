import { useState } from 'react'
import ResponsivePlayer from '../responsivePlayer'

const Video = ({ data }) => {
  const [showVideo, setShowVideo] = useState(false)
  return (
    <>
      <div className="video">
        <div className="image">
          <img src="/img/video-image.png" alt="" />
          <div className="overlay" onClick={(e) => setShowVideo(true)}>
            <div className="play">
              <svg
                width="7"
                height="10"
                viewBox="0 0 7 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0L7 5L0 10V0Z" fill="#204F9C" />
              </svg>
            </div>
            {/* .play */}
            <h5>Spila myndband</h5>
          </div>
          {/* .overlay */}
        </div>
        {/* .image */}
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
                        stroke-width="1.5"
                      />
                      <path
                        d="M0.968995 8.99902L8.96899 0.999023"
                        stroke="white"
                        stroke-width="1.5"
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
      {/* .video */}
      <style jsx>{`
        $brand: #204f9c;
        $black: #202020;
        $text: #222222;
        .video {
          height: 736px;
          @media (max-width: 991px) {
            height: 529px;
          }
          @media (max-width: 767px) {
            height: 308px;
          }
          .image {
            height: 100%;
            position: relative;
            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
            .overlay {
              position: absolute;
              left: 0;
              top: 0;
              width: 100%;
              height: 100%;
              background: rgba(32, 79, 156, 0.5);
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              transition: 0.2s;
              cursor: pointer;
              &:hover {
                background: rgba(11, 26, 51, 0.8);
              }
              .play {
                width: 40px;
                height: 40px;
                background: #ffffff;
                border-radius: 20px;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-bottom: 15px;
              }
              h5 {
                font-family: 'GT America Regular';
                font-size: 18px;
                font-style: normal;
                font-weight: 500;
                line-height: 18px;
                letter-spacing: 0em;
                text-align: center;
                color: #ffffff;
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

export default Video
