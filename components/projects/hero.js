const Hero = (props) => {
  return (
    <>
      <div className="hero wow fadeIn">
        <div className="container">
          <h1 className="f-gtam-bold">
            Við önnumst verkefni af öllum stærðum og gerðum
          </h1>
        </div>
        {/* .container */}
      </div>
      {/* .hero */}
      <style jsx>{`
        $brand: #204f9c;

        .hero {
          padding: 200px 0 60px 0;
          @media (max-width: 991px) {
            padding: 100px 0 40px 0;
          }
          @media (max-width: 767px) {
            padding: 80px 0 40px 0;
          }
          .container {
            @media (max-width: 767px) {
              width: 100vw;
              padding: 0;
            }
          }
          h1 {
            font-size: 64px;
            max-width: 680px;
            color: $brand;
            @media (max-width: 991px) {
              font-size: 48px;
              max-width: 512px;
            }
            @media (max-width: 767px) {
              font-size: 36px;
              padding: 0 20px;
            }
          }
        }
      `}</style>
    </>
  )
}

export default Hero
