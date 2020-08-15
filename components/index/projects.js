import Link from 'next/link'

const Projects = ({ para }) => {
  const projects = [
    {
      image: '/img/project-thumb-1.jpg',
      year: '1980',
      name: 'Flugstöð Leifs Eiríkssonar',
    },
    {
      image: '/img/project-thumb-2.jpg',
      year: '2014',
      name: 'Háskólinn í Reykjavík',
    },
    {
      image: '/img/project-thumb-3.jpg',
      year: '2020',
      name: 'Smáralind',
    },
  ]
  return (
    <>
      <div className="projects-component">
        <p className="f-gtam-bold wow fadeInUp" data-wow-duration="300ms">
          {para}
        </p>

        <div className="projects">
          {projects.map((p, i) => {
            return (
              <div className="wrapper" key={i}>
                <div
                  className="project wow fadeInUp"
                  data-wow-delay={`${i / 4}s`}
                >
                  <div className="image">
                    <img src={p.image} alt="" />
                  </div>
                  <div className="overlay">
                    <div className="year f-gtam-regular">{p.year}</div>
                    <div className="name f-gtam-bold">{p.name}</div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        {/* .projects */}
        <Link href="/verkefni" passHref>
          <a
            className="view-all-projects wow fadeIn d-flex align-items-center justify-content-center"
            data-wow-delay="500ms"
          >
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
          </a>
        </Link>
      </div>
      <style jsx>{`
        $brand: #204f9c;
        $text: #000000;

        .projects-component {
          margin: 140px 0 90px 0;
          @media (max-width: 991px) {
            margin: 100px 0;
          }
          @media (max-width: 767px) {
            margin: 60px 0;
          }
          p {
            font-size: 36px;
            line-height: 130%;
            color: $brand;
            text-align: center;
            max-width: 860px;
            margin: 0 auto 120px auto;
            @media (max-width: 991px) {
              font-size: 24px;
              max-width: 526px;
            }
            @media (max-width: 767px) {
              font-size: 22px;
              padding: 0 20px;
              margin: 0 auto 60px auto;
            }
          }
          .projects {
            overflow-x: auto;
            display: flex;
            justify-content: center;
            padding-bottom: 30px;
            @media (max-width: 1410px) {
              justify-content: initial;
            }
            @media (max-width: 767px) {
              margin: 0 10px;
            }
            .project {
              position: relative;
              width: 400px;
              height: 600px;
              cursor: pointer;
              transition: all 0.5s;
              margin: 0 35px;
              @media (max-width: 767px) {
                width: 270px;
                height: auto;
                margin: 0 10px;
              }
              &:before,
              &:after {
                content: '';
                position: absolute;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                opacity: 0.4;
                transition: all 0.3s;
                @media (max-width: 767px) {
                  bottom: auto;
                  height: 353px;
                }
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
              .image {
                transition: all 0.5s;
                img {
                  width: 400px;
                  height: 600px;
                  object-fit: cover;
                  @media (max-width: 767px) {
                    width: 270px;
                    height: 353px;
                  }
                }
              }
              .overlay {
                position: absolute;
                left: 40px;
                right: 40px;
                bottom: 50px;
                z-index: 600;
                @media (max-width: 767px) {
                  position: static;
                  margin-top: 30px;
                }
                .year {
                  font-size: 18px;
                  color: white;
                  opacity: 0.6;
                  text-shadow: 0px 14px 19px rgba(0, 0, 0, 0.25);
                  @media (max-width: 767px) {
                    font-size: 14px;
                    color: $text;
                    text-shadow: none;
                  }
                }
                .name {
                  font-size: 24px;
                  line-height: 120%;
                  color: white;
                  text-shadow: 0px 14px 19px rgba(0, 0, 0, 0.25);
                  @media (max-width: 767px) {
                    font-size: 20px;
                    color: $brand;
                    text-shadow: none;
                  }
                }
              }
            }
          }
          .view-all-projects {
            margin: 0 auto;
            margin-top: 30px;
            .icon {
              width: 42px;
              height: 42px;
              border: 1px solid rgba(32, 79, 156, 0.2);
              border-radius: 50%;
              margin-right: 15px;
              transition: 0.2s ease-in-out;
              svg rect {
                transition: 0.2s ease-in-out;
              }
            }
            h3 {
              font-size: 16px;
              color: $brand;
              margin: 0;
            }
            &:hover {
              .icon {
                background: $brand;
                svg rect {
                  fill: #ffffff;
                }
              }
            }
          }
        }
      `}</style>
    </>
  )
}

export default Projects
