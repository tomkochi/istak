import Link from 'next/link'

const Hero = ({ data }) => {
  return (
    <>
      <div className="hero">
        <div className="container">
          <div className="nav-back d-none d-md-block" data-wow-delay="500ms">
            <Link href="/starfsmenn" passHref>
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
                <h3 className="f-gtam-medium">Um okkur</h3>
              </a>
            </Link>
          </div>
          {/* .nav-back */}
          <h1>{data.title}</h1>
          <p>{data.description}</p>
        </div>
        {/* .container */}
      </div>
      {/* .hero */}
      <style jsx>{`
        $brand: #204f9c;
        $black: #202020;

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
            width: 100%;
            padding: 0 30px;
          }
          @media (max-width: 767px) {
            margin-top: 70px;
            padding: 0;
          }
          .nav-back {
            margin-bottom: 40px;
            @media (max-width: 991px) {
              margin-bottom: 20px;
            }
            a:hover {
              .icon {
                background: $brand;
              }
              svg path {
                stroke: #ffffff;
              }
            }
            .icon {
              width: 42px;
              height: 42px;
              border: 1px solid rgba(32, 79, 156, 0.2);
              border-radius: 50%;
              margin-right: 15px;
              transition: 0.2s;
              svg path {
                transition: 0.2s;
              }
            }
            h3 {
              font-size: 18px;
              line-height: 120%;
              color: $brand;
            }
          }
          h1 {
            font-family: 'GT America Bold';
            font-size: 64px;
            line-height: 120%;
            color: $brand;
            max-width: 550px;
            margin-bottom: 40px;
            @media (max-width: 991px) {
              font-size: 48px;
              margin-bottom: 20px;
            }
            @media (max-width: 767px) {
              font-size: 36px;
            }
          }
          p {
            font-family: 'GT America Regular';
            font-size: 18px;
            line-height: 160%;
            letter-spacing: -0.02em;
            color: #202020;
            opacity: 0.9;
            max-width: 785px;
            margin-bottom: 90px;
            @media (max-width: 991px) {
              margin-bottom: 80px;
            }
            @media (max-width: 767px) {
              font-size: 16px;
              line-height: 150%;
              margin-bottom: 50px;
            }
          }
        }
      `}</style>
    </>
  )
}

export default Hero
