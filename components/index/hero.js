import Header from '../../components/header'

import Link from 'next/link'
import { useState, useEffect } from 'react'

const delay = 8

const Hero = ({ data }) => {
  const slides = data.hero_slider
  const count = slides.length

  const [slide, setSlide] = useState(1)
  const [loaded, setLoaded] = useState(false)
  const [counter, setCounter] = useState(0)

  const previousSlide = () => {
    setSlide(slide === 1 ? count : slide - 1)
    setCounter(0)
  }

  const nextSlide = () => {
    setSlide(slide === count ? 1 : slide + 1)
    setCounter(0)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((c) => c + 0.1)
    }, 100)
    setTimeout(() => {
      setLoaded(true)
    }, 1000)
  }, [])

  useEffect(() => {
    if (counter >= delay) {
      nextSlide()
    }
  }, [counter])

  return (
    <>
      <div className="carousel">
        <div className="header">
          <Header reverse />
        </div>
        <div className="slides">
          {slides.map((s, i) => {
            return (
              <div className="slide" key={i}>
                <div className={`image ${slide === i + 1 ? 'active' : ''}`}>
                  <img src={`${process.env.HOST}${s.image.url}`} alt="" />
                </div>
                <div
                  className={`overlay d-flex align-items-center ${
                    loaded ? 'loaded' : ''
                  }`}
                >
                  <div className="container d-flex justify-content-between">
                    <div className="blue-box active">
                      <h2 className="f-gtam-bold active">{data.title}</h2>
                      <p className="f-gtam-thin active">{data.description}</p>
                      <div className="link active">
                        <Link href={data.url} passHref>
                          <a className="f-gtam-regular d-flex align-items-center">
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
                                  stroke="white"
                                  strokeWidth="1.75"
                                />
                              </svg>
                            </div>
                            {data.button_text}
                          </a>
                        </Link>
                      </div>
                    </div>
                    {/* .blue-box */}
                    <div className="navigation d-none d-lg-block align-self-end">
                      <h3
                        className={`f-gtam-regular name ${
                          slide === i + 1 ? 'active' : ''
                        }`}
                      >
                        {s.name}
                      </h3>
                      <h3
                        className={`f-gtam-regular year ${
                          slide === i + 1 ? 'active' : ''
                        }`}
                      >
                        {s.year}
                      </h3>
                      <div className="controls d-flex justify-content-end">
                        <div
                          className="icon d-flex align-items-center justify-content-center"
                          onClick={(e) => previousSlide()}
                        >
                          <svg
                            width="10"
                            height="10"
                            viewBox="0 0 10 10"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1.93846 5L6 1M1.93846 5L6 9M1.93846 5H10"
                              stroke="white"
                              strokeWidth="1.5"
                            />
                          </svg>
                        </div>
                        <div
                          className="icon d-flex align-items-center justify-content-center"
                          onClick={(e) => nextSlide()}
                        >
                          <svg
                            width="13"
                            height="12"
                            viewBox="0 0 13 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M0 6H11M11 6L5.92308 1M11 6L5.92308 11"
                              stroke="white"
                              strokeWidth="1.75"
                            />
                          </svg>
                        </div>
                      </div>
                      {/* .icons */}
                    </div>
                    {/* .navigation */}
                  </div>
                  {/* .container */}
                </div>
                {/* .overlay */}
              </div>
            )
          })}
        </div>
        {/* .slides */}
      </div>
      {/* .carousel */}
      <style jsx>{`
        $brand: #204f9c;

        .carousel,
        .carousel .slide,
        .carousel .slide .image,
        .carousel .slide .image img {
          width: 100vw;
          height: 100vh;
          @media (max-width: 991px) {
            height: 615px;
          }
        }
        .carousel {
          @media (max-width: 767px) {
            height: 640px;
          }
          .slide {
            @media (max-width: 767px) {
              height: 326px;
            }
            .image {
              @media (max-width: 767px) {
                height: 326px;
              }
              img {
                @media (max-width: 767px) {
                  height: 326px;
                }
              }
            }
          }
        }
        .carousel {
          position: relative;
          background: $brand;
          @media (max-width: 767px) {
            height: 640px;
          }
          .header {
            position: absolute;
            left: 0;
            top: 0;
            right: 0;
            z-index: 2000;
          }
          .slides {
            position: relative;
            .slide {
              position: absolute;
              left: 0;
              top: 0;
              @media (max-width: 767px) {
                height: 326px;
              }
              &:after {
                content: '';
                position: absolute;
                left: 0;
                top: 0;
                right: 0;
                bottom: 0;
                opacity: 0.8;
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
              }
              .image {
                opacity: 0;
                transition: all 1.5s;
                @media (max-width: 767px) {
                  height: 326px;
                }
                &.active {
                  opacity: 1;
                }
                img {
                  object-fit: cover;
                  @media (max-width: 767px) {
                    height: 326px;
                  }
                }
              }
              .overlay {
                position: absolute;
                left: 0;
                right: 0;
                bottom: 25%;
                z-index: 1000;
                opacity: 0;
                transition: all 1s;
                @media (max-width: 991px) {
                  bottom: 10%;
                }
                @media (max-width: 767px) {
                  position: static;
                }
                &.loaded {
                  opacity: 1;
                }
                .container {
                  @media (max-width: 767px) {
                    width: 100vw;
                  }
                }
                .blue-box {
                  background: $brand;
                  max-width: 465px;
                  padding: 50px;
                  box-shadow: 0px 34px 94px rgba(0, 0, 0, 0.3);
                  opacity: 0;
                  transition: all 1s;
                  @media (max-width: 991px) {
                    max-width: 415px;
                  }
                  @media (max-width: 767px) {
                    padding: 30px 20px;
                    height: 314px;
                    overflow: hidden;
                    box-shadow: none;
                  }
                  &.active {
                    opacity: 1;
                    //transform: translateX(0);
                  }
                  h2 {
                    font-size: 48px;
                    line-height: 120%;
                    margin-bottom: 22px;
                    color: white;
                    opacity: 0;
                    transform: translateY(-60px);
                    transition: all 1s;
                    transition-delay: 1s;
                    @media (max-width: 991px) {
                      font-size: 32px;
                    }
                    &.active {
                      opacity: 1;
                      transform: translateY(0);
                    }
                  }
                  p {
                    font-size: 17px;
                    line-height: 150%;
                    margin-bottom: 30px;
                    color: white;
                    opacity: 0;
                    transform: translateY(-60px);
                    transition: all 1s;
                    transition-delay: 1.5s;
                    @media (max-width: 991px) {
                      font-size: 16px;
                    }
                    &.active {
                      opacity: 1;
                      transform: translateY(0);
                    }
                  }
                  .link {
                    opacity: 0;
                    transform: translateY(-60px);
                    transition: all 1s;
                    transition-delay: 2s;
                    &.active {
                      transform: translateY(0);
                      opacity: 1;
                    }
                    a {
                      font-size: 18px;
                      line-height: 120%;
                      color: white;
                      .icon {
                        width: 42px;
                        height: 42px;
                        border: 1px solid rgba(255, 255, 255, 0.2);
                        border-radius: 50%;
                        margin-right: 15px;
                      }
                    }
                  }
                }
                .navigation {
                  .name {
                    font-size: 18px;
                    color: white;
                    text-align: right;
                    margin-bottom: 7px;
                    opacity: 0;
                    transition: all 0.5s;
                    &.active {
                      opacity: 1;
                    }
                  }
                  .year {
                    font-size: 18px;
                    color: white;
                    text-align: right;
                    opacity: 0.5;
                    margin-bottom: 20px;
                    opacity: 0;
                    transition: all 0.5s;
                    &.active {
                      opacity: 0.5;
                    }
                  }
                  .controls {
                    .icon {
                      width: 34px;
                      height: 34px;
                      margin-left: 8px;
                      border: 1px solid rgba(255, 255, 255, 0.2);
                      border-radius: 50%;
                      transition: all 0.3s;
                      cursor: pointer;
                      &:hover {
                        border-color: white;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      `}</style>
    </>
  )
}

export default Hero
