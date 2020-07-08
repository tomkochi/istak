const BlueParaOnWhite = ({ para }) => {
  return (
    <>
      <div className="blue-para wow fadeInUp" data-wow-duration="2s">
        <p className="f-gtam-bold">{para}</p>
      </div>
      <style jsx>{`
        $brand: #204f9c;

        .blue-para {
          background: white;
          margin: 180px 0;
          @media (max-width: 991px) {
            margin: 100px 0;
          }
          @media (max-width: 767px) {
            margin: 60px 0;
            padding: 0 20px;
          }
          p {
            max-width: 840px;
            font-size: 36px;
            line-height: 130%;
            color: $brand;
            text-align: center;
            margin: auto;
            @media (max-width: 991px) {
              font-size: 24px;
              max-width: 526px;
            }
            @media (max-width: 767px) {
              text-align: left;
              font-size: 22px;
            }
          }
        }
      `}</style>
    </>
  )
}

export default BlueParaOnWhite
