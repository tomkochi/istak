const Video = ({ data }) => {
  return (
    <>
      <div className="video">
        <div className="image">
          <img src="/img/video-image.png" alt="" />
          <div className="overlay">
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
      </div>
      {/* .video */}
      <style jsx>{`
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
        }
      `}</style>
    </>
  )
}

export default Video
