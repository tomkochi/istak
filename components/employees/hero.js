import Link from 'next/link'

const Hero = (props) => {
  return (
    <>
      <div className="hero container">
        <div
          className="nav-back wow fadeInUp"
          data-wow-delay="500ms"
          data-wow-duration="300ms"
        >
          <Link href="/" passHref>
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
                    stroke-width="1.75"
                  />
                </svg>
              </div>
              <h3 className="f-gtam-medium">Verkefni</h3>
            </a>
          </Link>
        </div>
        {/* .nav-back */}
        <h1 className="f-gtam-bold wow fadeInUp" data-wow-duration="300ms">
          Hjá Ístaki starfa að jafnaði um 350 manns við margvísleg störf
        </h1>
        <div
          className="search d-flex wow fadeInUp"
          data-wow-delay="1s"
          data-wow-duration="300ms"
        >
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
          <input
            type="text"
            className="f-gtam-medium"
            placeholder="Leita að grein"
          />
        </div>
        {/* .search */}
      </div>
      {/* .hero */}

      <style jsx>{`
        $brand: #204f9c;

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

        .hero {
          margin-top: 150px;
          @media (max-width: 991px) {
            margin-top: 90px;
          }
          @media (max-width: 767px) {
            margin-top: 60px;
          }
          .nav-back {
            margin-bottom: 40px;
            @media (max-width: 767px) {
              margin-bottom: 30px;
            }
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
          h1 {
            font-size: 64px;
            line-height: 120%;
            max-width: 750px;
            margin-bottom: 60px;
            color: $brand;
            @media (max-width: 991px) {
              font-size: 48px;
              max-width: 545px;
              margin-bottom: 40px;
            }
            @media (max-width: 767px) {
              font-size: 36px;
              margin-bottom: 30px;
            }
          }
          .search {
            margin-bottom: 177px;
            width: 100%;
            max-width: 400px;
            @media (max-width: 991px) {
              margin-bottom: 116px;
            }
            @media (max-width: 767px) {
              margin-bottom: 60px;
            }
            .icon {
              width: 42px;
              height: 42px;
              border: 1px solid rgba(32, 79, 156, 0.2);
              border-radius: 50%;
              margin-right: 15px;
            }
            input {
              border: none;
              font-size: 18px;
              line-height: 120%;
              padding: 0;
              outline: none;
              box-shadow: none !important;
              color: $brand;
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
            }
          }
        }
      `}</style>
    </>
  )
}

export default Hero
