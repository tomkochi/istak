import Layout from "../../components/Layout";
import BottomPick from "../../components/bottom-pick";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Link from "next/link";

const Project = (props) => {
  const router = useRouter();
  const { slug } = router.query;
  const [slides, setSlides] = useState(0);
  const [slide, setSlide] = useState(1);

  const decCurrent = () => {
    setSlide(slide === 1 ? slides : slide - 1);
  };
  const incCurrent = () => {
    setSlide(slide === slides ? 1 : slide + 1);
  };

  useEffect(() => {
    const s = document.getElementsByClassName("carousel-item").length;
    setSlides(s);
  }, []);

  return (
    <Layout>
      <div className="project">
        <section className="hero container">
          <div className="nav-back">
            <Link href="/projects" passHref>
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
                      stroke-width="1.75"
                    />
                  </svg>
                </div>
                <h3 className="f-gtam-medium">Verkefni</h3>
              </a>
            </Link>
          </div>
          {/* .nav-back */}
          <h1 className="f-gtam-bold">Flugstöð Leyfs Eiríkssonar</h1>
        </section>
        {/* .hero */}

        <section className="image">
          <img src="/img/services.jpg" alt="" />
        </section>
        {/* .image */}

        <section className="main">
          <div className="container">
            <div className="project-details">
              <div className="head d-flex">
                <div className="text">
                  <h4>Verkkaupi</h4>
                  <h3>Isavia</h3>
                </div>
                {/* .text */}
                <div className="text">
                  <h4>Tímabil</h4>
                  <h3>01.11.14 – 01.12.15</h3>
                </div>
                {/* .text */}
                <div className="text">
                  <h4>Hlutverk</h4>
                  <h3>Aðalverktaki</h3>
                </div>
                {/* .text */}
              </div>
              {/* .head */}
            </div>
            {/* .project-details */}

            <div className="matter">
              <h2>Verklýsing</h2>
              <p>
                Verkið – Flugstöð Leifs Eiríkssonar – Norðurbygging – er áfangi
                í u.þ.b. 4300 fermetra stækkun norðurbyggingar Flugstöðvar Leifs
                Eiríkssonar og snýr annars vegar að viðbyggingu til suðvesturs
                fyrir starfsmannahlið, vörumótttöku og stækkun farangursflokkara
                brottfarar farþega og hinsvegar að viðbyggingu til suðausturs
                sem hýsir komufæribönd. Breyta þarf aðkomu brottfararumferðar að
                inngangi flugstöðvarinnar og rífa vegg sem skilur að núverandi
                þjónustuinngang og brottfararumferð.
              </p>
              <p>
                Húsið verður stálgrindarhús klætt með yleiningum
                (samlokueiningar). Innveggir verða byggðir úr blikkstoðum,
                eldvarnarspónaplötum og efni sem þolir mikinn ágang. Kerfisloft
                er í vopnaleitarrými, kaffistofum, salernum og skrifstofum.
                Byggingin mun verða fullloftræst, með góðri hljóðeinangrun og
                frágengin með slitsterkum efnum.
              </p>
              <p>
                Viðbygging til suðausturs verður á einni hæð með staðsteyptum
                undirstöðum, núverandi flughlað verður nýtt sem botnplata.
              </p>
            </div>
            {/* .matter */}

            <div className="key-figures">
              <h2>Helstu magntölur</h2>
              <div className="figure">
                <h4>Uppgröftur</h4>
                <h3>
                  13.300 km<sup>3</sup>
                </h3>
              </div>
              {/* .figure */}
              <div className="figure">
                <h4>Fyllingar</h4>
                <h3>
                  10.000 km<sup>2</sup>
                </h3>
              </div>
              {/* .figure */}
              <div className="figure">
                <h4>Mótafletir</h4>
                <h3>
                  2.510 m<sup>2</sup>
                </h3>
              </div>
              {/* .figure */}
              <div className="figure">
                <h4>Gifsveggir</h4>
                <h3>
                  2.560 m<sup>2</sup>
                </h3>
              </div>
              {/* .figure */}
              <div className="figure">
                <h4>Malbikað plan</h4>
                <h3>
                  3.900 m<sup>2</sup>
                </h3>
              </div>
              {/* .figure */}
              <div className="figure">
                <h4>Steypa</h4>
                <h3>
                  1.300 km<sup>3</sup>
                </h3>
              </div>
              {/* .figure */}
              <div className="figure">
                <h4>Stálvirki</h4>
                <h3>308 tonn</h3>
              </div>
              {/* .figure */}
              <div className="figure">
                <h4>Járnabending</h4>
                <h3>79 tonn</h3>
              </div>
              {/* .figure */}
              <div className="figure">
                <h4>Samlokueiningar</h4>
                <h3>
                  6.900 m<sup>2</sup>
                </h3>
              </div>
              {/* .figure */}
            </div>
            {/* .key-figures */}

            <div className="consultants">
              <h2>Ráðgjafar</h2>
              <div className="consultant-details d-flex flex-wrap">
                <div className="consultant">
                  <h4>Arkitekt</h4>
                  <h3>Steinar Sigurðsson</h3>
                </div>
                {/* .consultant */}
                <div className="consultant">
                  <h4>Arkitekt</h4>
                  <h3>Andersen Sigurðsson</h3>
                </div>
                {/* .consultant */}
                <div className="consultant">
                  <h4>Lagnahönnun</h4>
                  <h3>Verkís</h3>
                </div>
                {/* .consultant */}
                <div className="consultant">
                  <h4>Rafmagnshönnun</h4>
                  <h3>Mannvit</h3>
                </div>
                {/* .consultant */}
              </div>
              {/* .consultant-details */}
            </div>
            {/* .consultants */}
          </div>
          {/* .container */}
        </section>
        {/* section.main */}

        <section className="photos">
          <div className="container">
            <div className="slider">
              <div
                class="carousel slide"
                data-ride="carousel"
                data-interval="false"
              >
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img
                      src="/img/project-photo-1.jpg"
                      class="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      src="/img/project-photo-1.jpg"
                      class="d-block w-100"
                      alt="..."
                    />
                  </div>
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
                    stroke-width="1.75"
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
                    stroke-width="1.75"
                  />
                </svg>
              </a>
            </div>
            {/* .slide-nav */}
          </div>
          {/* .container */}
        </section>
        {/* section.photos */}
        <section className="bottom-para">
          <div className="container">
            <p className="f-gtam-thin">
              Karl Andreassen, framkvæmdastjóri Ístaks, Charlotte Ludvigsen,
              borgarstjóri sveitarfélagsins Sermersooq, sem Nuuk tilheyrir, og
              Hermann Sigurðsson yfirverkfræðingur Ístaks á verkstað.
            </p>
          </div>
          {/* .container */}
        </section>
        {/* .bottom-para */}
        <BottomPick
          image="/img/bottom-pick.jpg"
          title="Viltu sjá fleiri verkefni?"
        />
      </div>
      {/* .project */}

      <style jsx>{`
        $brand: #204f9c;
        $black: #202020;

        section.hero {
          margin-top: 150px;
          .nav-back {
            margin-bottom: 40px;
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
          h1 {
            font-size: 64px;
            line-height: 120%;
            color: $brand;
            max-width: 460px;
            margin-bottom: 100px;
          }
        }
        section.image {
          margin-bottom: 76px;
          img {
            width: 100%;
            height: 900px;
            object-fit: cover;
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
                  h4 {
                    font-family: "GT America Regular";
                    font-size: 18px;
                    color: $brand;
                    margin-bottom: 12px;
                  }
                  h3 {
                    font-family: "GT America Bold";
                    font-size: 20px;
                    color: $black;
                  }
                }
              }
            }
            h2 {
              font-family: "GT America Bold";
              font-size: 24px;
              line-height: 100%;
              color: $brand;
              margin-bottom: 40px;
            }
            .matter {
              margin-bottom: 80px;
              p {
                font-family: "GT America Regular";
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
                h4 {
                  font-family: "GT America Regular";
                  font-size: 18px;
                  color: $brand;
                  margin-bottom: 12px;
                }
                h3 {
                  font-family: "GT America Bold";
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
                h4 {
                  font-family: "GT America Regular";
                  font-size: 18px;
                  color: $brand;
                  margin-bottom: 12px;
                }
                h3 {
                  font-family: "GT America Bold";
                  font-size: 20px;
                  color: $black;
                }
              }
            }
          }
        }
        .slider {
          margin-bottom: 50px;
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
  );
};

export default Project;
