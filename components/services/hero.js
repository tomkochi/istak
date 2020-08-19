import Link from "next/link";

const Hero = ({ data }) => {
  return (
    <>
      <div className="hero container">
        <h1 className="f-gtam-bold wow fadeIn" data-wow-duration="300ms">
          {data.title}
        </h1>
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
  );
};

export default Hero;
