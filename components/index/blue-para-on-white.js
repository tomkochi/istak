const BlueParaOnWhite = ({ para }) => {
  return (
    <>
      <div className="blue-para">
        <p className="f-gtam-bold">{para}</p>
      </div>
      <style jsx>{`
        $brand: #204f9c;

        .blue-para {
          background: white;
          margin: 180px 0;
          p {
            max-width: 840px;
            font-size: 36px;
            line-height: 130%;
            color: $brand;
            text-align: center;
            margin: auto;
          }
        }
      `}</style>
    </>
  );
};

export default BlueParaOnWhite;
