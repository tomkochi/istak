const Project = ({ image, year, name, index }) => {
  return (
    <>
      <div className="project wow fadeInUp">
        <img src={image} alt="" />
        <div className="overlay">
          <div className="year f-gtam-regular">{year}</div>
          <div className="name f-gtam-bold">{name}</div>
        </div>
      </div>
      <style jsx>{`
        $text: #202020;
        $brand: #204f9c;

        .project {
          width: 50%;
          height: 600px;
          position: relative;
          @media (max-width: 991px) {
            height: 500px;
          }
          @media (max-width: 767px) {
            width: calc(50% - 15px);
            margin-left: 10px;
            margin-bottom: 32px;
            height: auto;
          }
          &:hover:before {
            opacity: 0;
          }
          &:before {
            transition: all 0.3s;
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(
                90.1deg,
                rgba(32, 79, 156, 0.3) 0.16%,
                rgba(32, 79, 156, 0) 99.82%
              ),
              linear-gradient(
                90.38deg,
                rgba(32, 79, 156, 0.7) 0.16%,
                rgba(32, 79, 156, 0.3) 31.3%,
                rgba(22, 98, 178, 0.2) 62.45%,
                rgba(32, 79, 156, 0.4) 83.21%,
                rgba(32, 79, 156, 0.5) 99.82%
              ),
              linear-gradient(
                rgba(32, 79, 156, 0.8) 0%,
                rgba(22, 98, 178, 0) 20%
              );
            z-index: 2000;
            @media (max-width: 767px) {
              bottom: auto;
              height: 190px;
            }
          }
          img {
            width: 100%;
            height: 600px;
            object-fit: cover;
            @media (max-width: 991px) {
              height: 500px;
            }
            @media (max-width: 767px) {
              height: 190px;
            }
          }
          .overlay {
            position: absolute;
            left: 60px;
            bottom: 60px;
            width: auto;
            z-index: 3000;
            @media (max-width: 991px) {
              left: 40px;
              bottom: 50px;
            }
            @media (max-width: 767px) {
              position: static;
            }
            .year {
              font-size: 18px;
              color: white;
              opacity: 0.6;
              line-height: 120%;
              text-shadow: 0px 14px 19px rgba(0, 0, 0, 0.25);
              margin-bottom: 14px;
              @media (max-width: 767px) {
                font-size: 14px;
                text-shadow: none;
                color: $text;
                margin-top: 14px;
              }
            }
            .name {
              font-size: 24px;
              line-height: 120%;
              color: white;
              text-shadow: 0px 14px 19px rgba(0, 0, 0, 0.25);
              @media (max-width: 767px) {
                font-size: 16px;
                text-shadow: none;
                color: $brand;
              }
            }
          }
        }
      `}</style>
    </>
  )
}

export default Project
