const Hero = ({ data }) => {
  return (
    <>
      <div className="hero">
        <div className="container">
          <h1>{data.title}</h1>
        </div>
        {/* .container */}
        <div className="image">
          <img src={data.image} alt="" />
        </div>
        {/* .image */}
      </div>
      {/* .hero */}
      <style jsx>{`
        .hero {
          padding-top: 100px;
          @media (max-width: 991px) {
            padding-top: 80px;
          }
          @media (max-width: 767px) {
            padding-top: 50px;
          }
          .container {
            width: calc(100vw - 40px);
          }
          h1 {
            font-family: 'GT America Bold';
            font-size: 52px;
            line-height: 120%;
            letter-spacing: -0.02em;
            max-width: 868px;
            color: #204f9c;
            @media (max-width: 991px) {
              font-size: 32px;
              max-width: 470px;
            }
            @media (max-width: 767px) {
              font-size: 36px;
              max-width: 100%;
            }
          }
          .image {
            height: 660px;
            margin: 100px 0;
            @media (max-width: 991px) {
              height: 553px;
            }
            @media (max-width: 767px) {
              height: 264px;
              margin: 60px 0;
            }
            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }
        }
      `}</style>
    </>
  )
}

export default Hero
