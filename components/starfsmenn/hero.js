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
          h1 {
            font-family: 'GT America Bold';
            font-size: 52px;
            line-height: 120%;
            letter-spacing: -0.02em;
            max-width: 868px;
            color: #204f9c;
          }
          .image {
            height: 660px;
            margin: 100px 0;
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
