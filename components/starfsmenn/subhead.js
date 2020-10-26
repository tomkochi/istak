import Link from "next/link";

const Subhead = ({ data }) => {
  return (
    <>
      <div className="subhead container">
        <div
          className="nav-back wow fadeInUp"
          data-wow-delay="500ms"
          data-wow-duration="300ms"
        ></div>
        {/* .nav-back */}
        <h2 className="f-gtam-bold wow fadeInUp" data-wow-duration="300ms">
          {data.Heading}
        </h2>
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

        .subhead {
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
          h2 {
            font-size: 48px;
            line-height: 120%;
            max-width: 551px;
            margin-bottom: 60px;
            color: $brand;
            @media (max-width: 991px) {
              font-size: 36px;
              max-width: 545px;
              margin-bottom: 40px;
            }
            @media (max-width: 767px) {
              max-width: 100%;
              font-size: 24px;
              margin-bottom: 30px;
            }
          }
        }
      `}</style>
    </>
  );
};

export default Subhead;
