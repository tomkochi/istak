import { useEffect } from "react";
import Scrollspy from "react-scrollspy";

import Layout from "../components/Layout";
import Hero from "../components/story/hero";
import Video from "../components/story/video";

const Story = ({ data }) => {
  const heroData = {
<<<<<<< HEAD
    title: "Við höfum verið í 50 ár starfandi",
    description:
      "Ístak er verktakafyrirtæki sem annast margskonar verkefni. Byggingaframkvæmdir, virkjanir, stóriðjuframkvæmdir, jarðvinnuverk, mannvirkjagerð, hafnarframkvæmdir auk vega- og brúagerðar. Ístak hefur verið leiðandi á íslenskum verktakaiðnaði í 50 ár og hefur haft mikil áhrif á þróun bygginga og annarra mannvirkja á Íslandi sem og á erlendri grundu.",
  };
=======
    title: '',
    description:
      '',
  }
>>>>>>> aa6fb0db7bd8262eddadabad13c8548467cb8233
  const sections = [
    "Kynning",
    "Verkefnin",
    "Samvinna með Aarsleff",
    "Keflavíkurflugvöllur",
    "Stækkunin í Ísal",
    "Deildir",
    "Aðsetur",
  ];
  const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  const handleScroll = (event) => {
    // make the side-navigation sticky

    // get position of .story.body
    const bodyPosition = document
      .querySelector(".story.body")
      .getBoundingClientRect();
    // set .side-navigation's top to .story.body's top
    const newSideNavTop = bodyPosition.top + 100;
    const sideNav = document.querySelector(".side-navigation");
    if (newSideNavTop >= 100) {
      sideNav.style.top = bodyPosition.top + 100 + "px";
    } else {
      sideNav.style.top = "100px";
    }
  };
  const showSection = (section) => {
    const storyTop = document.querySelector(".story.body").offsetTop - 60;
    window.scrollTo({
      top: document.querySelector(`${section}`).offsetTop + storyTop,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Layout>
      <Hero data={data.SaganHero} />
      <Video />
      <div className="story body">
        {/*
         * If there is only one image in a .images section, it doesn't need to have
           any other classes, eg: <div class="images">...</div>
         * For two images an extra .images-2 class is needed,
           eg: <div class="images images-2">...</div>
         * For three or more images it should be .images-multiple,
           eg: <div class="images images-multiple">...</div>
         */}
        <Scrollspy
          className="side-navigation nav-list list-unstyled"
          items={[
            "section-1",
            "section-2",
            "section-3",
            "section-4",
            "section-5",
            "section-6",
            "section-7",
          ]}
          currentClassName="current"
          offset={-600}
        >
          {sections.map((s, i) => {
            return (
              <li key={i} onClick={() => showSection(`#section-${i + 1}`)}>
                <span className="line-number">{i + 1}.</span>
                {s}
              </li>
            );
          })}
        </Scrollspy>
        {/* .side-navigation */}
        <div className="container">
          <div className="section" id="section-1">
            <div className="text">
              <h3>{data.SaganContent.title}</h3>
              <p>{data.SaganContent.text1}</p>
              <p>{data.SaganContent.text2}</p>
              <p>{data.SaganContent.text3}</p>
            </div>
            {/* .text */}
            <div className="images images-2">
              <div className="image">
                <img src={`${process.env.NEXT_PUBLIC_HOST}${data.SaganContent.image1.url}`} alt="" />
                <h5>{data.SaganContent.image1_caption}</h5>
              </div>
              {/* .image */}
              <div className="image">
              <img src={`${process.env.NEXT_PUBLIC_HOST}${data.SaganContent.image2.url}`} alt="" />
                <h5>{data.SaganContent.image2_caption}</h5>
              </div>
              {/* .image */}
            </div>
            {/* .images */}
            <div className="text">
              <p>{data.SaganContent.text4}</p>
            </div>
            {/* .text */}
            <div className="images images-2">
              <div className="image">
              <img src={`${process.env.NEXT_PUBLIC_HOST}${data.SaganContent.image3.url}`} alt="" />
                <h5>{data.SaganContent.image3_caption}</h5>
              </div>
              {/* .image */}
              <div className="image">
              <img src={`${process.env.NEXT_PUBLIC_HOST}${data.SaganContent.image4.url}`} alt="" />
                <h5>{data.SaganContent.image4_caption}</h5>
              </div>
              {/* .image */}
            </div>
            {/* .images */}
          </div>
          {/* .section */}
          <div className="section" id="section-2">
            <div className="text">
              <p>{data.SaganContent.text5}</p>
              <p>{data.SaganContent.text6}</p>
              <p>{data.SaganContent.text7}</p>
            </div>
            {/* .text */}
            <div className="images images-multiple">
              <div className="image">
              <img src={`${process.env.NEXT_PUBLIC_HOST}${data.SaganContent.image5.url}`} alt="" />
                <h5>{data.SaganContent.image5_caption}</h5>
              </div>
              {/* .image */}
              <div className="image">
              <img src={`${process.env.NEXT_PUBLIC_HOST}${data.SaganContent.image6.url}`} alt="" />
                <h5>{data.SaganContent.image6_caption}</h5>
              </div>
              {/* .image */}
              <div className="image">
              <img src={`${process.env.NEXT_PUBLIC_HOST}${data.SaganContent.image7.url}`} alt="" />
              <h5>{data.SaganContent.image7_caption}</h5>
              </div>
              {/* .image */}
              <div className="image">
              <img src={`${process.env.NEXT_PUBLIC_HOST}${data.SaganContent.image8.url}`} alt="" />
              <h5>{data.SaganContent.image8_caption}</h5>
              </div>
              {/* .image */}
              <div className="image">
              <img src={`${process.env.NEXT_PUBLIC_HOST}${data.SaganContent.image9.url}`} alt="" />
              <h5>{data.SaganContent.image9_caption}</h5>
              </div>
              {/* .image */}
            </div>
            {/* .images */}
            <div className="text">
<<<<<<< HEAD
              <p>
                Á Íslandi voru framkvæmdir á ábyrgð Ístaks meðal annars
                byggingar eins og Háskólann í Reykjavík, Klettaskóli,
                Náttúrufræðihús Urriðaholti, endurgerð á Sundhöll Reykjavíkur,
                Helgafellsskóli, Uppsteypa á hóteli og íbúðum við Hörpu,
                Fiskvinnsla Grun í Grundafirði, Stúdentagarðar við Sæmundargötu
                og Hús íslenskunnar við Arngrímsgötu.{" "}
              </p>
=======
            <p>{data.SaganContent.text8}</p>
>>>>>>> aa6fb0db7bd8262eddadabad13c8548467cb8233
            </div>
            {/* .text */}
            <div className="images images-multiple">
            <div className="image">
              <img src={`${process.env.NEXT_PUBLIC_HOST}${data.SaganContent.image10.url}`} alt="" />
              <h5>{data.SaganContent.image10_caption}</h5>
              </div>
              {/* .image */}
              <div className="image">
              <img src={`${process.env.NEXT_PUBLIC_HOST}${data.SaganContent.image11.url}`} alt="" />
              <h5>{data.SaganContent.image11_caption}</h5>
              </div>
              {/* .image */}
              <div className="image">
              <img src={`${process.env.NEXT_PUBLIC_HOST}${data.SaganContent.image12.url}`} alt="" />
              <h5>{data.SaganContent.image12_caption}</h5>
              </div>
            </div>
            {/* .images */}
            <div className="text">
            <p>{data.SaganContent.text9}</p>
            <p>{data.SaganContent.text10}</p>
            <p>{data.SaganContent.text11}</p>
            <p>{data.SaganContent.text12}</p>
            </div>
            {/* .text */}
          </div>
          {/* .section */}
          <div className="section" id="section-3">
            <div className="text">
              <h3>{data.SaganContent.title3}</h3>
              <p>{data.SaganContent.text13}</p>
              <p>{data.SaganContent.text14}</p>
              <p>{data.SaganContent.text15}</p>
              <p>{data.SaganContent.text16}</p>
            </div>
            {/* .text */}
            <div className="images images-2">
            <div className="image">
              <img src={`${process.env.NEXT_PUBLIC_HOST}${data.SaganContent.image13.url}`} alt="" />
              <h5>{data.SaganContent.image13_caption}</h5>
              </div>
              {/* .image */}
              <div className="image">
              <img src={`${process.env.NEXT_PUBLIC_HOST}${data.SaganContent.image14.url}`} alt="" />
              <h5>{data.SaganContent.image14_caption}</h5>
              </div>
              {/* .image */}
            </div>
            {/* .images */}
          </div>
          {/* .section*/}
          <div className="section" id="section-4">
            <div className="text">
<<<<<<< HEAD
              <h3>Verkefni Ístaks á Keflavíkurflugvelli</h3>
              <p>
                Umsvif Ístaks á Keflavíkurflugvelli hafa verið mikil á 50 ára
                sögu Ístaks. Afskipti Ístaks hófust á Keflavíkurflugvelli með
                uppsteypu og utanhúss frágangi fyrsta áfanga
                flugstöðvarinnar(Norðurbygging) sem reist var á árunum
                1985-1987. Síðar var flugstöðin stækkuð og svokölluð
                Suðurbygging reist við enda landgangsins sem tengir saman
                Suðurbyggingu og Norðurbyggingu og vann Ístak það verk í
                samstarfi við Højgaard & Shultz árunum 2000-2001.
              </p>
              <p>
                Á árunum 2004-2005 vann Ístak að stækkun norðurbyggingarinnar,
                en þá voru móttöku- og komusalir stækkaðir auk þess sem þaki var
                lyft og gerð voru skrifstofurými á 3. hæð. Árin 2014 – 2016 sá
                Ístak um innanhússfrágang á stækkun á Suðurbyggingu til vestur
                og einnig um stækkun farangursflokkunarstöðvar sem er viðbygging
                við Norðurbyggingu. Ístak sá um stækkun Suðurbyggingar til
                norðurs ásamt 1. hluta á breikkun landgangsins. Loks vann Ístak
                við stækkun á steyptum flughlöðum austan flugstöðvar á árunum
                2016 – 2018.
              </p>
              <h6>Stækkunin í Ísal</h6>
              <p>
                Rio Tinto Alcan eigandi ISAL ákvað að ráðast í uppfærslu á
                álverinu í Straumsvík árin 2010-2015 sem kallað var IPU
                verkefnið. Verkefnið var fjölþætt og gekk meðal annars út á að
                auka framleiðslugetu á áli um 20% en á sama tíma bæta
                áreiðanleika verksmiðjunnar. Einnig voru gerðar miklar
                breytingar á steypuskála en nú eru verðmætari ál boltar
                framleiddir í stað barra. Aðkoma Ístaks að verkefninu byrjaði
                haustið 2010 þegar við vorum lægst bjóðendur í viðbyggingu
                steypuskálans. Um var að ræða 10.000 m2 stálgrindarhús undir
                breytta framleiðslu í steypuskála. Næstu árin tók Ístak einnig
                að sér fjölda annarra verkefna á svæðinu. Stærsta verkefnið var
                uppsetning á nýjum reykhreinsivirkjum fyrir kerskála 1 og 2. Auk
                þess sáum við um uppsetningu á nýjum bolta steypuvélum í
                steypuskála ásamt tilheyrandi vélbúnaði. Ístak byggði einnig
                nýja spennistöð á milli kerskála, nýja loftþjöppustöð,
                baðefnageymslu, stækkuðum hliðhúsið og fleira. Ístak sá einnig
                um fjölþætta langa og jarðvinnu á svæðinu, háspennustrengir,
                vatnsrör og fráveita var grafið niður á milli bygginga.{" "}
              </p>
              <p>
                Verkefnið var mjög krefjandi, öll vinnan var inná svokölluðu
                „Brown field“ þar sem unnið er við hlið verksmiðju í rekstri og
                því þurfti mikla samræmingu til þess að tryggja að áhrif á
                framleiðslu væru lágmörkuð. Einnig voru kröfur í öryggis og
                gæðamálum með því strangasta sem sést hefur á Íslandi en með
                réttu hugarfari tókst starfsmönnum Ístaks að ná mjög góðum
                árangri í þessu umhverfi. Þeir starfsmenn Ístaks sem tóku þátt í
                verkefninu eru mjög stoltir af sínu framlagi og lærðu mikið af
                þessu stóra alþjóðlegaverkefni fyrir kröfuharðan verkkaupa.
              </p>
=======
              <h3>{data.SaganContent.title4}</h3>
              <p>{data.SaganContent.text17}</p>
              <p>{data.SaganContent.text18}</p>
              <h6>{data.SaganContent.subtitle}</h6>
              <p>{data.SaganContent.text19}</p>
              <p>{data.SaganContent.text20}</p>
>>>>>>> aa6fb0db7bd8262eddadabad13c8548467cb8233
            </div>
            {/* .text */}
            <div className="images">
              <div className="image">
              <img src={`${process.env.NEXT_PUBLIC_HOST}${data.SaganContent.image15.url}`} alt="" />
              <h5>{data.SaganContent.image15_caption}</h5>
              </div>
            </div>
            {/* .images */}
          </div>
          {/* .section */}
          <div className="section" id="section-5">
            <div className="text">
<<<<<<< HEAD
              <h3>Stækkunin í Ísal</h3>
              <p>
                Rio Tinto Alcan eigandi ISAL ákvað að ráðast í uppfærslu á
                álverinu í Straumsvík árin 2010-2015 sem kallað var IPU
                verkefnið. Verkefnið var fjölþætt og gekk meðal annars út á að
                auka framleiðslugetu á áli um 20% en á sama tíma bæta
                áreiðanleika verksmiðjunnar. Einnig voru gerðar miklar
                breytingar á steypuskála en nú eru verðmætari ál boltar
                framleiddir í stað barra.
              </p>
              <p>
                Aðkoma Ístaks að verkefninu byrjaði haustið 2010 þegar við vorum
                lægst bjóðendur í viðbyggingu steypuskálans. Um var að ræða
                10.000 m2 stálgrindarhús undir breytta framleiðslu í
                steypuskála. Næstu árin tók Ístak einnig að sér fjölda annarra
                verkefna á svæðinu. Stærsta verkefnið var uppsetning á nýjum
                reykhreinsivirkjum fyrir kerskála 1 og 2. Auk þess sáum við um
                uppsetningu á nýjum bolta steypuvélum í steypuskála ásamt
                tilheyrandi vélbúnaði. Ístak byggði einnig nýja spennistöð á
                milli kerskála, nýja loftþjöppustöð, baðefnageymslu, stækkuðum
                hliðhúsið og fleira. Ístak sá einnig um fjölþætta langa og
                jarðvinnu á svæðinu, háspennustrengir, vatnsrör og fráveita var
                grafið niður á milli bygginga.
              </p>
              <p>
                Verkefnið var mjög krefjandi, öll vinnan var inná svokölluðu
                „Brown field“ þar sem unnið er við hlið verksmiðju í rekstri og
                því þurfti mikla samræmingu til þess að tryggja að áhrif á
                framleiðslu væru lágmörkuð. Einnig voru kröfur í öryggis og
                gæðamálum með því strangasta sem sést hefur á Íslandi en með
                réttu hugarfari tókst starfsmönnum Ístaks að ná mjög góðum
                árangri í þessu umhverfi. Þeir starfsmenn Ístaks sem tóku þátt í
                verkefninu eru mjög stoltir af sínu framlagi og lærðu mikið af
                þessu stóra alþjóðlegaverkefni fyrir kröfuharðan verkkaupa.{" "}
              </p>
=======
              <h3>{data.SaganContent.title5}</h3>
              <p>{data.SaganContent.text21}</p>
              <p>{data.SaganContent.text22}</p>
              <p>{data.SaganContent.text23}</p>
>>>>>>> aa6fb0db7bd8262eddadabad13c8548467cb8233
            </div>
            {/* .text */}
          </div>
          {/* .section */}
          <div className="section">
            <div className="text">
<<<<<<< HEAD
              <h3>Viðhaldsþjónusta</h3>
              <p>
                Árið 2018 setti Ístak á laggirnar sér deild viðhaldsþjónustu sem
                sinnir viðhaldi og endurbótum fasteigna fyrir fagaðila á
                fasteignamarkaði, stærri fyrirtæki, fasteignafélög, ríki og
                sveitarfélög. Hvort sem um er að ræða stór, skipulögð
                viðhaldsverkefni eða tilfallandi verk þá er Ístak traustur
                samstarfsaðili á sviði viðhalds.
              </p>
              <p>
                Með þessari deild byrjaði Ístak að bjóða viðskiptavinum upp á
                viðhaldsþjónustusamninga sem tryggja greiðan aðgang að færum
                iðnaðarmönnum ásamt verkefnastýringu og umsjón framkvæmda, allt
                eftir þörfum viðskiptavinarins.
              </p>
              <p>
                Með viðhaldsþjónustusamningi geta viðskiptavinir fengið alla
                viðhaldsvinnu á einum stað, hvort sem um er að ræða trésmiði,
                málara, múrara, rafvirkja, pípara eða aðra sérhæfða iðnaðarmenn.{" "}
              </p>
=======
              <h3>{data.SaganContent.title6}</h3>
              <p>{data.SaganContent.text24}</p>
              <p>{data.SaganContent.text25}</p>
              <p>{data.SaganContent.text26}</p>
>>>>>>> aa6fb0db7bd8262eddadabad13c8548467cb8233
            </div>
            {/* .text */}
          </div>
          {/* .section */}
          <div className="section">
            <div className="text">
              <h3>{data.SaganContent.title7}</h3>
              <p>{data.SaganContent.text27}</p>
            </div>
            {/* .text */}
          </div>
          {/* .section */}
          <div className="section" id="section-6">
            <div className="text">
              <h3>{data.SaganContent.title8}</h3>
              <p>{data.SaganContent.text28}</p>
              <p>{data.SaganContent.text29}</p>
            </div>
          </div>
          {/* .section */}
          <div className="section">
            <div className="text">
              <h3>{data.SaganContent.title9}</h3>
              <p>{data.SaganContent.text30}</p>
            </div>
            {/* .text */}
          </div>
          {/* .section */}
          <div className="section">
            <div className="text">
              <h3>{data.SaganContent.title10}</h3>
              <p>{data.SaganContent.text31}</p>
            </div>
          </div>
          {/* .section */}
          <div className="section" id="section-7">
            <div className="text">
<<<<<<< HEAD
              <h3>Aðsetur</h3>
              <p>
                Frá árinu 2012 hefur yfirstjórn og skrifstofa Ístaks verið til
                húsa að Bugðufljóti 19, 270 Mosfellsbæ.{" "}
              </p>
=======
              <h3>{data.SaganContent.title11}</h3>
              <p>{data.SaganContent.text32}</p>
>>>>>>> aa6fb0db7bd8262eddadabad13c8548467cb8233
            </div>
            {/* .text */}
            <div className="images">
              <div className="image">
              <img src={`${process.env.NEXT_PUBLIC_HOST}${data.SaganContent.image16.url}`} alt="" />
              <h5>{data.SaganContent.image16_caption}</h5>
              </div>
              {/* .image */}
            </div>
            {/* .images */}
          </div>
          {/* .section */}
          <div className="section">
            <div className="text">
<<<<<<< HEAD
              <h3>Mannauður og starfsmannafjöldi</h3>
              <p>
                Í ársbyrjun 2020 voru starfsmenn Ístaks rúmlega 300. Starfsfólk
                Ístaks skiptist upp í fjóra hópa eftir starfssviði. Sérfræðingar
                og stjórnendur eru oftast tæknimenntaðir með annaðhvort
                prófgráður í verk-eða tæknifræði. Verkstjórar Ístaks hafa
                fjölbreyttan menntunarbakgrunn en allir hafa þeir mikla reynslu
                í því að stýra framkvæmdum á vinnusvæðum. Iðnaðarmenn hjá Ístaki
                eru oftast menntaðir í trésmíði, en einnig í málmiðn, véliðn og
                rafiðn. Ófaglærðir starfsmenn Ístaks vinna aðalega á
                byggingasvæðum eða við jarðvegsframkvæmdir og sem
                tækjastjórnendur & bílstjórar.{" "}
              </p>
=======
            <h3>{data.SaganContent.title12}</h3>
            <p>{data.SaganContent.text33}</p>
>>>>>>> aa6fb0db7bd8262eddadabad13c8548467cb8233
            </div>
            {/* .text */}
            <div className="images images-2">
              <div className="image">
                <img src={`${process.env.NEXT_PUBLIC_HOST}${data.SaganContent.image17.url}`} alt="" />
                <h5></h5>
              </div>
              {/* .image */}
              <div className="image">
              <img src={`${process.env.NEXT_PUBLIC_HOST}${data.SaganContent.image18.url}`} alt="" />
                <h5></h5>
              </div>
              {/* .image */}
            </div>
            {/* .images */}
            <div className="text">
              <p>{data.SaganContent.text34}</p>
            </div>
            {/* .text */}
          </div>
          {/* .section */}
        </div>
        {/* .container */}
      </div>
      {/* .body */}
      <div className="go-up" onClick={() => scrollToTop()}>
        <div className="icon">
          <svg
            width="11"
            height="11"
            viewBox="0 0 11 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.5 10.5L5.5 1.5M5.5 1.5L9.5 5.65385M5.5 1.5L1.5 5.65385"
              stroke="#204F9C"
              strokeWidth="1.5"
            />
          </svg>
        </div>
        Aftur upp
      </div>
      <style jsx global>{`
        .story.body .side-navigation {
          position: fixed;
          left: 60px;
          top: 100px;
          transition: opacity 0.3s;
          @media (max-width: 1530px) {
            display: none;
          }
          li {
            font-family: "GT America Regular";
            font-size: 16px;
            line-height: 110%;
            letter-spacing: -0.02em;
            color: #202020;
            margin-bottom: 14px;
            opacity: 0.5;
            cursor: pointer;
            transition: 0.2s;
            &:hover,
            &.current {
              opacity: 1;
            }
            span {
              display: inline-block;
              width: 15px;
              margin-right: 21px;
            }
          }
          &.fixed {
            position: fixed;
            top: 60px;
          }
          &.hidden {
            opacity: 0;
          }
        }
      `}</style>
      <style jsx>{`
        .body {
          padding: 40px 0;
          position: relative;
          @media (max-width: 991px) {
            padding: 20px 0;
          }
          .container {
            @media (max-width: 767px) {
              margin: 0;
              width: 100%;
              padding: 0 20px;
            }
          }
          .section {
            .text {
              max-width: 760px;
              margin: 0 auto;
              h3 {
                font-family: "GT America Medium";
                font-size: 24px;
                font-style: normal;
                font-weight: 500;
                line-height: 25px;
                letter-spacing: -0.02em;
                text-align: left;
                margin-bottom: 20px;
                margin-top: 60px;
                @media (max-width: 767px) {
                  margin-top: 40px;
                }
              }
              h6 {
                font-family: "GT America Medium";
                font-size: 20px;
                font-style: normal;
                font-weight: 500;
                line-height: 25px;
                letter-spacing: -0.02em;
                text-align: left;
                margin-bottom: 20px;
                margin-top: 60px;
              }
              p {
                font-family: "GT America Regular";
                font-style: normal;
                font-weight: normal;
                font-size: 18px;
                line-height: 160%;
                letter-spacing: -0.02em;
                color: #202020;
                opacity: 0.86;
                margin-bottom: 20px;
              }
            }
            .images {
              max-width: 970px;
              margin: 90px auto;
              @media (max-width: 767px) {
                margin: 40px auto 0;
                width: 100vw;
                margin-left: -20px;
              }
              &.images-2 {
                display: flex;
                align-items: center;
                justify-content: space-between;
                @media (max-width: 767px) {
                  display: block;
                }
                .image {
                  width: calc(50% - 25px);
                  @media (max-width: 767px) {
                    width: 100%;
                    margin-bottom: 40px;
                  }
                }
              }
              &.images-multiple {
                column-count: 2;
                column-gap: 50px;
                @media (max-width: 767px) {
                  column-count: 1;
                }
                .image {
                  width: 100%;
                  margin-bottom: 60px;
                  @media (max-width: 767px) {
                    margin-bottom: 40px;
                  }
                }
              }
              .image {
                -webkit-column-break-inside: avoid;
                page-break-inside: avoid;
                break-inside: avoid;
                img {
                  margin-bottom: 22px;
                  width: 100%;
                }
                h5 {
                  font-family: "GT America Regular";
                  font-style: normal;
                  font-weight: normal;
                  font-size: 15px;
                  line-height: 105%;
                  text-align: center;
                  letter-spacing: -0.03em;
                  color: #202020;
                  opacity: 0.8;
                  height: 30px;
                  overflow: hidden;
                  @media (max-width: 767px) {
                    height: auto;
                    padding: 0 20px;
                  }
                }
              }
            }
          }
        }
        .go-up {
          font-family: "GT America Medium";
          font-size: 15px;
          line-height: 120%;
          color: #204f9c;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 80px 0;
          .icon {
            width: 30px;
            height: 30px;
            border-radius: 50%;
            border: 1px solid #204f9c;
            margin-right: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: transparent;
            transition: 0.2s;
            svg * {
              transition: 0.2s;
            }
          }
          &:hover {
            .icon {
              background: #204f9c;
              svg path {
                stroke: #ffffff;
              }
            }
          }
        }
      `}</style>
    </Layout>
  );
};

<<<<<<< HEAD
export default Story;
=======
//data fetching
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`${process.env.HOST}/sagan`);
  const data = await res.json();
  // Pass data to the page via props
  return { props: { data } };
}

export default Story
>>>>>>> aa6fb0db7bd8262eddadabad13c8548467cb8233
