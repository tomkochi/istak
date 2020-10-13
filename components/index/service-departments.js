import Link from 'next/link'
import { useState, useEffect } from 'react'
import Axios from 'axios'

const ServiceDepartments = ({ data }) => {
  const [serviceDepts, setServiceDepts] = useState(null)
  const [dept, setDept] = useState(0)
  useEffect(() => {
<<<<<<< HEAD
    Axios.get(`https://istak.viska.io/services`)
=======
    Axios.get(`${process.env.NEXT_PUBLIC_HOST}/services`)
>>>>>>> tom8oct
      .then((services) => {
        setServiceDepts(services.data)
      })
      .catch((e) => {})
  }, [])
  return (
    <>
      <div className="service-dept">
        <div className="hov d-block d-md-flex align-items-center">
          <div className="image wow fadeInUp">
            <img
              src={`${process.env.NEXT_PUBLIC_HOST}${data.cover.url}`}
              alt=""
            />
          </div>
          {/* .image */}
          <div className="text-md d-none d-md-block wow fadeInRight">
            <div className="wrapper">
              <h3 className="f-gtam-medium wow fadeInUp">Þjónustudeildir</h3>
              <ul className="list-unstyled">
                {serviceDepts &&
                  serviceDepts.map((s, i) => {
                    return (
                      <li
                        className="f-gtam-bold wow fadeIn"
                        key={i}
                        data-wow-duration={`${i * 0.75}s`}
                      >
                        <h2>
                          <svg
                            width="13"
                            height="12"
                            viewBox="0 0 13 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M0 6H11M11 6L5.92308 1M11 6L5.92308 11"
                              stroke="#204F9C"
                              stroke-width="1.75"
                            />
                          </svg>
                          <Link href={`/thjonusta/${s.slug}`} passHref>
                            <a>{s.title}</a>
                          </Link>
                        </h2>
                      </li>
                    )
                  })}
              </ul>
            </div>
            {/* .wrapper */}
          </div>
          {/* .text */}
          <div className="text-sm d-md-none">
            <div className="wrapper">
              <ul className="list-unstyled d-flex">
                {serviceDepts &&
                  serviceDepts.map((s, i) => {
                    return (
                      <li
                        className="f-gtam-medium"
                        key={i}
                        data-wow-duration={`${i}s`}
                      >
                        <h2>
                          <a
                            className={i === dept ? 'active' : ''}
                            onClick={(e) => setDept(i)}
                          >
                            {s.title}
                          </a>
                        </h2>
                      </li>
                    )
                  })}
              </ul>
            </div>
            {/* .wrapper */}
            <div className="matter">
              <p className="f-gtam-thin">
                {serviceDepts ? serviceDepts[dept].description : ''}
              </p>
              <div className="link-to d-flex align-items-center">
                <div className="icon d-flex align-items-center justify-content-center">
                  <svg
                    width="13"
                    height="12"
                    viewBox="0 0 13 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 6H11M11 6L5.92308 1M11 6L5.92308 11"
                      stroke="#204F9C"
                      strokeWidth="1.75"
                    />
                  </svg>
                </div>
                <a className="f-gtam-medium">Sjá nánar</a>
              </div>
            </div>
            {/* .matter */}
          </div>
          {/* .text-sm */}
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
          @media (max-width: 991px) {
            padding: 60px 0;
          }
          @media (max-width: 767px) {
            padding: 0;
          }
          .image {
            transition: all 0.5s;
            img {
              transition: all 0.5s;
            }
          }
          &:hover {
            .image {
              transform: scale(1.02);
              img {
                transform: scale(1.03);
              }
            }
          }
          &:before {
            content: '';
            position: absolute;
            top: 0;
            width: calc(50% + 155px);
            height: 100%;
            background: #fbfbfb;
            z-index: -1;
            right: 0;
            @media (max-width: 991px) {
              width: calc(50% + 300px);
            }
            @media (max-width: 767px) {
              display: none;
            }
          }
          .image {
            width: 50%;
            height: 600px;
            overflow: hidden;
            @media (max-width: 991px) {
              height: 388px;
            }
            @media (max-width: 767px) {
              height: 220px;
              width: 100%;
            }
            img {
              width: 100%;
              height: 600px;
              object-fit: cover;
              @media (max-width: 991px) {
                height: 388px;
              }
              @media (max-width: 767px) {
                height: 220px;
              }
            }
          }
          .text-md {
            padding-left: 155px;
            width: 50%;
            @media (max-width: 991px) {
              padding-left: 80px;
            }
            .wrapper {
              max-width: 360px;
              h3 {
                font-size: 16px;
                color: $text;
                padding-bottom: 25px;
                border-bottom: 1px solid #f0f0f0;
                margin-bottom: 40px;
                @media (max-width: 991px) {
                  font-size: 14px;
                  margin-bottom: 20px;
                }
              }
              ul {
                li {
                  h2 {
                    font-size: 36px;
                    line-height: 120%;
                    margin-bottom: 23px;
                    position: relative;
                    @media (max-width: 991px) {
                      font-size: 20px;
                      margin-bottom: 18px;
                    }
                    svg {
                      position: absolute;
                      top: 18px;
                      left: 30px;
                      opacity: 0;
                      transition: 0.3s;
                      z-index: -1;
                    }
                    a {
                      color: $brand;
                      transition: 0.2s;
                    }
                    &:hover {
                      svg {
                        opacity: 1;
                        left: 0;
                      }
                      a {
                        padding-left: 30px;
                      }
                    }
                  }
                }
              }
            }
          }
          .text-sm {
            padding: 0 20px;
            width: auto;
            margin-top: 30px;
            .wrapper {
              overflow-x: auto;
              overflow-y: hidden;
              max-width: 360px;
              li {
                padding-right: 25px;
                h2 {
                  font-size: 16px;
                  a {
                    color: $text;
                    transition: all 0.2s;
                    position: relative;
                    &:after {
                      content: '';
                      position: absolute;
                      left: 0;
                      bottom: -16px;
                      width: 100%;
                      height: 2px;
                      background: transparent;
                      z-index: 60000;
                    }
                    &.active {
                      color: $brand;
                      &:after {
                        background: $brand;
                      }
                    }
                  }
                }
              }
            }
            .matter {
              padding: 30px 0;
              border-top: 1px solid #f0f0f0;
              border-bottom: 1px solid #f0f0f0;
              p {
                font-size: 16px;
                line-height: 150%;
                color: $text;
              }
              .link-to {
                margin-top: 30px;
                .icon {
                  width: 42px;
                  height: 42px;
                  border: 1px solid rgba(32, 79, 156, 0.2);
                  border-radius: 50%;
                  margin-right: 15px;
                }
                a {
                  font-size: 18px;
                  color: $brand;
                }
              }
            }
          }
        }
      `}</style>
    </>
  )
}

export default ServiceDepartments
