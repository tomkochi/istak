const Hero = (props) => {
  return (
    <>
      <div className="hero container">
        <h1 className="f-gtam-bold wow fadeIn">
          Lestu nýjustu greinar og uppfærslur
        </h1>
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
        }
      `}</style>
    </>
  );
};

export default Hero;
