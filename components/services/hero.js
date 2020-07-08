import Link from 'next/link'

const Hero = (props) => {
  return (
    <>
      <div className="hero container">
        <div className="nav-back wow fadeIn" data-wow-delay="1s">
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
                    strokeWidth="1.75"
                  />
                </svg>
              </div>
              <h3 className="f-gtam-medium">Þjónustudeildir</h3>
            </a>
          </Link>
        </div>
        {/* .nav-back */}
        <h1 className="f-gtam-bold wow fadeInUp">BIM upplýsingatækni</h1>
      </div>
      {/* .hero */}
      <style jsx>{`
        $brand: #204f9c;
        $black: #202020;

        .hero {
          margin-top: 150px;
          @media (max-width: 991px) {
            width: 100vw;
            margin-top: 120px;
            padding: 0 30px;
          }
          @media (max-width: 767px) {
            margin-top: 80px;
            padding: 0 20px;
          }
          .nav-back {
            margin-bottom: 40px;
            @media (max-width: 767px) {
              margin-bottom: 20px;
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
            color: $brand;
            max-width: 460px;
            margin-bottom: 100px;
            @media (max-width: 991px) {
              font-size: 48px;
            }
            @media (max-width: 767px) {
              font-size: 36px;
              margin-bottom: 60px;
            }
          }
        }
      `}</style>
    </>
  )
}

export default Hero
