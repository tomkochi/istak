const ServiceDepartments = ({ departments, image }) => {
  return (
    <>
      <div className="service-dept">
        <div className="d-flex align-items-center">
          <div className="image">
            <img src={image} alt="" />
          </div>
          {/* .image */}
          <div className="text">
            <div className="wrapper">
              <h3 className="f-gtam-medium">Þjónustudeildir</h3>
              {departments.map((d, i) => {
                return <h2 className="f-gtam-bold">{d}</h2>;
              })}
            </div>
            {/* .wrapper */}
          </div>
          {/* .text */}
        </div>
        {/* d-flex */}
      </div>
      <style jsx>{`
        $brand: #204f9c;
        $text: #202020;

        .service-dept {
          position: relative;
          padding: 90px 0;
          margin: 90px 0;
          &:before {
            content: "";
            position: absolute;
            top: 0;
            width: calc(50% + 155px);
            height: 100%;
            background: #fbfbfb;
            z-index: -1;
            right: 0;
          }
          .image {
            width: 50%;
            height: 600px;
            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }
          .text {
            padding-left: 155px;
            width: 50%;
            .wrapper {
              max-width: 360px;
              h3 {
                font-size: 16px;
                color: $text;
                padding-bottom: 20px;
                border-bottom: 1px solid #f0f0f0;
                margin-bottom: 40px;
              }
              h2 {
                font-size: 36px;
                color: $brand;
                line-height: 120%;
                margin-bottom: 23px;
              }
            }
          }
        }
      `}</style>
    </>
  );
};

export default ServiceDepartments;
