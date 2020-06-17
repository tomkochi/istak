const BottomPick = (props) => {
  return (
    <>
      <div className="bottom-pick d-flex align-items-center">
        <img src="/img/bottom-pick.jpg" alt="" />
        <div className="container">
          <div className="content">
            <h2 className="f-gtam-bold">Saga stofnun Ístaks</h2>
            <p className="f-gtam-thin">
              Myndband um stofnendur og uppruna Ístaks árið 1970.
            </p>
            <div className="play-video d-flex align-items-center">
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
      </div>
      <style jsx>{`
        $brand: #204f9c;

        .bottom-pick {
          height: 100vh;
          position: relative;
          margin-top: 90px;
          &:before,
          &:after {
            content: "";
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
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
          }
          .content {
            position: relative;
            width: 440px;
            padding: 50px;
            background: $brand;
            color: white;
            box-shadow: 0px 34px 94px rgba(0, 0, 0, 0.3);
            z-index: 1000;
            h2 {
              font-size: 48px;
              line-height: 120%;
              margin-bottom: 20px;
            }
            p {
              font-size: 18px;
              line-height: 150%;
              margin-bottom: 30px;
            }
            h3 {
              font-size: 18px;
              line-height: 120%;
            }
            .icon {
              width: 42px;
              height: 42px;
              border: 1px solid rgba(255, 255, 255, 0.2);
              border-radius: 50%;
              margin-right: 15px;
            }
          }
        }
      `}</style>
    </>
  );
};

export default BottomPick;
