import Layout from '../../components/Layout'
import BottomPick from '../../components/bottom-pick-with-link'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import moment from 'moment'

const Project = ({ data }) => {
  const [slides, setSlides] = useState(0)
  const [slide, setSlide] = useState(1)

  const decCurrent = () => {
    setSlide(slide === 1 ? slides : slide - 1)
  }
  const incCurrent = () => {
    setSlide(slide === slides ? 1 : slide + 1)
  }

  const showDate = (source) => moment(source).format('MM.DD.YY')

  useEffect(() => {
    const s = document.getElementsByClassName('carousel-item').length
    setSlides(s)
  }, [])

  //
  const d = data[0]
  return (
    <Layout>
      <div className="project">
        <section className="hero container">
          <div className="nav-back wow fadeIn" data-wow-delay="500ms">
            <Link href="/verkefni" passHref>
              <a href="#" className="d-flex align-items-center">
                <div className="icon d-flex align-items-center justify-content-center">
                  <svg
                    width="13"
                    height="12"
                    viewBox="0 0 13 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13 6H2M2 6L7.07692 1M2 6L7.07692 11"
                      stroke="#204F9C"
                      strokeWidth="1.75"
                    />
                  </svg>
                </div>
                <h3 className="f-gtam-medium">Verkefni</h3>
              </a>
            </Link>
          </div>
          {/* .nav-back */}
          <h1 className="f-gtam-bold wow fadeIn">{d.title}</h1>
        </section>
        {/* .hero */}

        <section className="image wow fadeInUp">
          <img
            src={`${process.env.NEXT_PUBLIC_HOST}${d.image.url}`}
            alt={`${process.env.NEXT_PUBLIC_HOST}${d.image.name}`}
          />
        </section>
        {/* .image */}

        <section className="main">
          <div className="container">
            <div className="project-details wow fadeInUp">
              <div className="head d-flex">
                <div className="text">
                  <h4>Verkkaupi</h4>
                  <h3>{d.client}</h3>
                </div>
                {/* .text */}
                <div className="text">
                  <h4>Tímabil</h4>
                  <h3>
                    {showDate(d.period.from)} - {showDate(d.period.to)}
                  </h3>
                </div>
                {/* .text */}
                <div className="d-none d-md-block text">
                  <h4>Hlutverk</h4>
                  <h3>{d.role}</h3>
                </div>
                {/* .text */}
              </div>
              {/* .head */}
            </div>
            {/* .project-details */}

            <div className="matter">
              <h2 className="wow fadeInUp">Verklýsing</h2>
              <ReactMarkdown source={d.description} />
            </div>
            {/* .matter */}

            <div className="key-figures wow fadeInUp">
              <h2>Helstu magntölur</h2>
              {d.specifications.map((item, i) => {
                return (
                  <div className="figure" key={i}>
                    <h4>{item.key}</h4>
                    <h3>{item.value}</h3>
                  </div>
                )
              })}
            </div>
            {/* .key-figures */}

            <div className="consultants wow fadeInUp">
              <h2>Ráðgjafar</h2>
              <div className="consultant-details d-flex flex-wrap">
                {d.consultants.map((item, i) => {
                  return (
                    <div key={i} className="consultant">
                      <h4>{item.key}</h4>
                      <h3>{item.value}</h3>
                    </div>
                  )
                })}
              </div>
              {/* .consultant-details */}
            </div>
            {/* .consultants */}
          </div>
          {/* .container */}
        </section>
        {/* section.main */}

        <section className="d-none d-lg-flex photos wow fadeInUp">
          <div className="container">
            <div className="slider">
              <div
                className="carousel slide"
                data-ride="carousel"
                data-interval="false"
              >
                <div className="carousel-inner">
                  {d.gallery.map((item, i) => {
                    return (
                      <div
                        className={`carousel-item ${i === 0 ? 'active' : ''}`}
                        key={i}
                      >
                        <img
                          src={`${process.env.NEXT_PUBLIC_HOST}${item.image[0].url}`}
                          className="d-block w-100"
                          alt={`${process.env.NEXT_PUBLIC_HOST}${item.image[0].alternativeText}`}
                        />
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
            {/* .slider */}
            <div className="slide-nav d-flex justify-content-center align-items-center">
              <a
                href=".carousel"
                role="button"
                data-slide="prev"
                onClick={decCurrent}
              >
                <svg
                  width="13"
                  height="12"
                  viewBox="0 0 13 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13 6H2M2 6L7.07692 1M2 6L7.07692 11"
                    stroke="#204F9C"
                    strokeWidth="1.75"
                  />
                </svg>
              </a>
              <div className="counts f-gtam-bold">
                {slide} / {slides}
              </div>
              <a
                href=".carousel"
                role="button"
                data-slide="next"
                onClick={incCurrent}
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
                    stroke="#204F9C"
                    strokeWidth="1.75"
                  />
                </svg>
              </a>
            </div>
            {/* .slide-nav */}
          </div>
          {/* .container */}
        </section>
        {/* section.photos */}
        <section className="d-none d-lg-flex bottom-para">
          <div className="container">
            <p className="f-gtam-thin">{d.gallery[slide - 1].description}</p>
          </div>
          {/* .container */}
        </section>
        {/* .bottom-para */}
        <BottomPick
          data={{
            background: {
              url: 'https://istak.viska.io/uploads/project_thumb_5_fd02ff5e04.jpeg',
            },
            title: 'Stolt verk frá yfir 50 ár af vinnu',
          }}
        />
      </div>
      {/* .project */}

      <style jsx>{`
        $brand: #204f9c;
        $black: #202020;

        .container {
          @media (max-width: 767px) {
            width: 100vw;
            padding: 0 20px;
          }
        }

        section.hero {
          margin-top: 150px;
          @media (max-width: 991px) {
            margin-top: 90px;
            width: 100vw;
            padding: 0 30px;
          }
          @media (max-width: 991px) {
            margin-top: 70px;
            padding: 0 20px;
          }
          .nav-back {
            margin-bottom: 40px;
            @media (max-width: 991px) {
              margin-bottom: 20px;
            }
            a:hover {
              .icon {
                background: $brand;
              }
              svg path {
                stroke: #ffffff;
              }
            }
            .icon {
              width: 42px;
              height: 42px;
              border: 1px solid rgba(32, 79, 156, 0.2);
              border-radius: 50%;
              margin-right: 15px;
              transition: 0.2s;
              svg path {
                transition: 0.2s;
              }
            }
            h3 {
              font-size: 18px;
              line-height: 120%;
              color: $brand;
            }
          }
          h1 {
            font-size: 64px;
            line-height: 120%;
            color: $brand;
            max-width: 460px;
            margin-bottom: 100px;
            @media (max-width: 991px) {
              font-size: 48px;
              margin-bottom: 60px;
            }
            @media (max-width: 767px) {
              font-size: 36px;
              margin-bottom: 40px;
            }
          }
        }
        section.image {
          margin-bottom: 76px;
          @media (max-width: 767px) {
            margin-bottom: 50px;
          }
          img {
            width: 100%;
            height: 900px;
            object-fit: cover;
            @media (max-width: 991px) {
              height: 483px;
            }
            @media (max-width: 767px) {
              height: 362px;
            }
          }
        }
        section.main {
          margin: 0 auto;
          .container {
            max-width: 661px;
            .project-details {
              .head {
                margin-bottom: 60px;
                .text {
                  margin-right: 60px;
                  @media (max-width: 767px) {
                    margin-right: 0;
                    &:first-of-type {
                      margin-right: 60px;
                    }
                  }
                  h4 {
                    font-family: 'GT America Regular';
                    font-size: 18px;
                    color: $brand;
                    margin-bottom: 12px;
                  }
                  h3 {
                    font-family: 'GT America Bold';
                    font-size: 20px;
                    color: $black;
                  }
                }
              }
            }
            h2 {
              font-family: 'GT America Bold';
              font-size: 24px;
              line-height: 100%;
              color: $brand;
              margin-bottom: 40px;
              @media (max-width: 767px) {
                margin-bottom: 30px;
              }
            }
            .matter {
              margin-bottom: 80px;
              p {
                font-family: 'GT America Regular';
                font-size: 18px;
                color: $black;
                line-height: 160%;
                margin-bottom: 24px;
              }
            }
            .key-figures {
              margin-bottom: 30px;
              .figure {
                width: calc(100% / 3);
                margin-bottom: 50px;
                @media (max-width: 767px) {
                  width: 50%;
                  margin-bottom: 30px;
                }
                h4 {
                  font-family: 'GT America Regular';
                  font-size: 18px;
                  color: $brand;
                  margin-bottom: 12px;
                }
                h3 {
                  font-family: 'GT America Bold';
                  font-size: 20px;
                  color: $black;
                }
              }
            }
            .consultants {
              margin-bottom: 30px;
              .consultant {
                width: 50%;
                margin-bottom: 50px;
                @media (max-width: 767px) {
                  width: 100%;
                  margin-bottom: 30px;
                }
                h4 {
                  font-family: 'GT America Regular';
                  font-size: 18px;
                  color: $brand;
                  margin-bottom: 12px;
                }
                h3 {
                  font-family: 'GT America Bold';
                  font-size: 20px;
                  color: $black;
                }
              }
            }
          }
        }
        .slider {
          margin-bottom: 50px;
          height: 730px;
          .slide,
          carousel-inner,
          .carousel-item,
          img {
            height: 730px;
            object-fit: cover;
          }
        }
        .slide-nav {
          text-align: center;
          margin-bottom: 24px;
          .counts {
            font-size: 20px;
            color: $brand;
            width: 150px;
          }
        }
        section.bottom-para {
          p {
            font-size: 18px;
            color: $black;
            max-width: 550px;
            margin: 0 auto;
            text-align: center;
            margin-bottom: 140px;
          }
        }
      `}</style>
    </Layout>
  )
}

//data fetching
export async function getServerSideProps(context) {
  // Fetch data from external API
  const res = await fetch(
    `${process.env.HOST}/projects?slug=${context.params.slug}`,
  )
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}

export default Project
