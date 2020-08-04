const Hero = (props) => {
  return (
    <>
      <div className="hero container">
        <h1 className="f-gtam-bold wow fadeIn">
          Lestu nýjustu greinar og uppfærslur
        </h1>
        <div className="search d-flex wow fadeIn" data-wow-delay="500ms">
          <input
            type="text"
            className="f-gtam-medium"
            placeholder="Leita að grein"
          />
          <div className="icon d-flex align-items-center justify-content-center">
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="6" cy="6" r="5" stroke="#204F9C" stroke-width="2" />
              <path d="M10 10L13.5 13.5" stroke="#204F9C" strokeWidth="2" />
            </svg>
          </div>
          {/* .icon */}
        </div>
        {/* .search */}
      </div>
      {/* .hero */}

      <style jsx>{`
        $brand: #204f9c;

        .container {
          @media (max-width: 767px) {
            width: 100vw;
            padding: 0 20px;
          }
        }
        .hero {
          margin-top: 150px;
          @media (max-width: 991px) {
            margin-top: 90px;
          }
          @media (max-width: 767px) {
            margin-top: 70px;
          }
          h1 {
            font-size: 64px;
            line-height: 120%;
            max-width: 650px;
            color: $brand;
            margin-bottom: 50px;
            @media (max-width: 991px) {
              font-size: 48px;
              margin-bottom: 40px;
            }
            @media (max-width: 767px) {
              font-size: 36px;
            }
          }
          .search {
            margin-bottom: 117px;
            width: 100%;
            max-width: 400px;
            position: relative;
            @media (max-width: 767px) {
              margin-bottom: 80px;
            }
            input {
              border: none;
              font-size: 18px;
              line-height: 120%;
              padding: 0;
              margin-left: 57px;
              outline: none;
              box-shadow: none !important;
              &::placeholder {
                /* Chrome, Firefox, Opera, Safari 10.1+ */
                color: #5d749a;
              }
              &:-ms-input-placeholder {
                /* Internet Explorer 10-11 */
                color: #5d749a;
              }
              &::-ms-input-placeholder {
                /* Microsoft Edge */
                color: #5d749a;
              }
              &:focus + .icon {
                background: $brand;
                svg * {
                  stroke: #ffffff;
                }
              }
            }
            .icon {
              position: absolute;
              top: -8px;
              width: 42px;
              height: 42px;
              border: 1px solid rgba(32, 79, 156, 0.2);
              border-radius: 50%;
              transition: 0.3s;
              svg path,
              svg circle {
                transition: 0.3s;
              }
            }
          }
        }
      `}</style>
    </>
  )
}

export default Hero
