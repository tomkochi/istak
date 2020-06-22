const Hero = (props) => {
  return (
    <>
      <div className="hero wow fadeIn" data-wow-duration="2s">
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
          h1 {
            font-size: 64px;
            max-width: 680px;
            color: $brand;
          }
        }
      `}</style>
    </>
  );
};

export default Hero;
