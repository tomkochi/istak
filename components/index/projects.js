const Projects = ({ para, projects }) => {
  return (
    <>
      <div className="projects-component">
        <p className="f-gtam-bold">{para}</p>
        <div className="projects d-flex justify-content-center flex-wrap">
          {projects.map((p, i) => {
            return (
              <div className="project">
                <img src={p.image} alt="" />
                <div className="overlay">
                  <div className="year f-gtam-regular">{p.year}</div>
                  <div className="name f-gtam-bold">{p.name}</div>
                </div>
              </div>
            );
          })}
        </div>
        {/* .projects */}
        <div className="view-all-projects d-flex align-items-center justify-content-center">
          <div className="icon d-flex align-items-center justify-content-center">
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="0.5" y="0.5" width="3" height="3" fill="#204F9C" />
              <rect x="5.5" y="0.5" width="3" height="3" fill="#204F9C" />
              <rect x="10.5" y="0.5" width="3" height="3" fill="#204F9C" />
              <rect x="0.5" y="5.5" width="3" height="3" fill="#204F9C" />
              <rect x="5.5" y="5.5" width="3" height="3" fill="#204F9C" />
              <rect x="10.5" y="5.5" width="3" height="3" fill="#204F9C" />
              <rect x="0.5" y="10.5" width="3" height="3" fill="#204F9C" />
              <rect x="5.5" y="10.5" width="3" height="3" fill="#204F9C" />
              <rect x="10.5" y="10.5" width="3" height="3" fill="#204F9C" />
            </svg>
          </div>
          <h3 className="f-gtam-medium">Sjá öll verkefni</h3>
        </div>
      </div>
      <style jsx>{`
        $brand: #204f9c;

        .projects-component {
          margin: 140px 0 90px 0;
          p {
            font-size: 36px;
            line-height: 130%;
            color: $brand;
            text-align: center;
            max-width: 860px;
            margin: 0 auto 120px auto;
          }
          .projects {
            .project {
              position: relative;
              width: 400px;
              height: 600px;
              margin-bottom: 60px;
              cursor: pointer;
              &:not(:first-of-type) {
                margin-left: 90px;
              }
              &:before,
              &:after {
                content: "";
                position: absolute;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                opacity: 0.4;
                transition: all 0.3s;
              }
              &:before {
                background: linear-gradient(
                  90.13deg,
                  #204f9c 0.16%,
                  rgba(32, 79, 156, 0.4) 31.3%,
                  rgba(22, 98, 178, 0.2) 62.45%,
                  rgba(32, 79, 156, 0.2) 83.21%,
                  rgba(32, 79, 156, 0.8) 99.82%
                );
              }
              &:after {
                background: linear-gradient(
                  0deg,
                  #204f9c 0.16%,
                  rgba(32, 79, 156, 0.4) 31.3%,
                  rgba(22, 98, 178, 0.2) 62.45%,
                  rgba(32, 79, 156, 0.2) 83.21%,
                  rgba(32, 79, 156, 0.8) 99.82%
                );
              }
              &:hover {
                &:before,
                &:after {
                  opacity: 0;
                }
              }
              img {
                width: 100%;
                height: 100%;
                object-fit: cover;
              }
              .overlay {
                position: absolute;
                left: 40px;
                right: 40px;
                bottom: 50px;
                z-index: 600;
                .year {
                  font-size: 18px;
                  color: white;
                  opacity: 0.6;
                }
                .name {
                  font-size: 24px;
                  line-height: 120%;
                  color: white;
                }
              }
            }
          }
          .view-all-projects {
            margin: 0 auto;
            .icon {
              width: 42px;
              height: 42px;
              border: 1px solid rgba(32, 79, 156, 0.2);
              border-radius: 50%;
              margin-right: 15px;
            }
            h3 {
              font-size: 16px;
              color: $brand;
            }
          }
        }
      `}</style>
    </>
  );
};

export default Projects;
