import { useEffect } from 'react'
import Scrollspy from 'react-scrollspy'

import Layout from '../components/Layout'
import Hero from '../components/story/hero'
import Video from '../components/story/video'

const Story = ({ data }) => {
  const heroData = {
    title: 'Við höfum verið í 50 ár starfandi',
    description:
      'Ístak er verktakafyrirtæki sem annast margskonar verkefni. Byggingaframkvæmdir, virkjanir, stóriðjuframkvæmdir, jarðvinnuverk, mannvirkjagerð, hafnarframkvæmdir auk vega- og brúagerðar. Ístak hefur verið leiðandi á íslenskum verktakaiðnaði í 50 ár og hefur haft mikil áhrif á þróun bygginga og annarra mannvirkja á Íslandi sem og á erlendri grundu.',
  }
  const sections = [
    'Kynning',
    'Verkefnin',
    'Samvinna með Aarsleff',
    'Keflavíkurflugvöllur',
    'Stækkunin í Ísal',
    'Deildir',
    'Aðsetur',
  ]
  const scrollToTop = () => {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  }
  const handleScroll = (event) => {
    // make the side-navigation sticky

    // get position of .story.body
    const bodyPosition = document.querySelector('.story.body').getBoundingClientRect()
    // set .side-navigation's top to .story.body's top
    const newSideNavTop = bodyPosition.top + 100
    const sideNav = document.querySelector('.side-navigation')
    if (newSideNavTop >= 100) {
      sideNav.style.top = bodyPosition.top + 100 + 'px'
    } else {
      sideNav.style.top = '100px'
    }
    
  }
  const showSection = (section) => {
    const storyTop = document.querySelector('.story.body').offsetTop - 60
    window.scrollTo({
      top: document.querySelector(`${section}`).offsetTop + storyTop,
      behavior: 'smooth',
    })
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <Layout>
      <Hero data={heroData} />
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
            'section-1',
            'section-2',
            'section-3',
            'section-4',
            'section-5',
            'section-6',
            'section-7',
          ]}
          currentClassName="current"
          offset={-300}
        >
          {sections.map((s, i) => {
            return (
              <li key={i} onClick={() => showSection(`#section-${i + 1}`)}>
                <span className="line-number">{i + 1}.</span>
                {s}
              </li>
            )
          })}
        </Scrollspy>
        {/* .side-navigation */}
        <div className="container">
          <div className="section" id="section-1">
            <div className="text">
              <h3>Sagan, stofnendur, eigendur og stjórnendur</h3>
              <p>
                Ístak var stofnað árið 1970 og er því 50 ára á þessum tímamótum.
                Feðgarnir Kay og Sören Langvad stofnuðu Ístak ásamt Gunnari
                Möller, Einari Sigurðssyni, Páli Sigurjónssyni og Jónasi
                Frímannsyni í framhaldi af því að Alþingi samþykkti ný lög um að
                opinberar framkvæmdir skyldu boðnar út. Þessi lög voru grunnur
                að starfsemi öflugra og sjálfstæðra verktakafyrirtækja á
                Íslandi.
              </p>
              <p>
                Fyrir og eftir seinni heimstyrjöldina sáu danskir aðilar um
                viðamiklar framkvæmdir á Íslandi. Þær voru flestar unnar á vegum
                opinberra aðila. Þannig kom danska fyrirtækið Höjgaard & Schultz
                að lagningu hitaveitu í Reykjavík og fyrstu vatnsaflsvirkjuninni
                við Sog. Þar vann verkfræðingurinn Kay Langvad en hann var
                kvæntur íslenskri konu, Selmu Gudjohnsen. Sonur þeirra, Sören
                Langvad lauk stúdentsprófi og fyrri hlut verkfræðináms við
                Háskóla Íslands.
              </p>
              <p>
                Kay gerðist sjálfstæður athafnamaður í Danmörku og keypti hlut í
                múverksfyrirtækinu E.Phil & Sön árið 1947. Fyrirtæki haslaði sér
                völl við ýmiss konar verklegar framkvæmdir meðal annars við
                hafnargerð þar í landi og gerð vatnsaflsvirkjana á Íslandi.
                Starfsemin óx og dafnaði næstu tvo áratugi en þar varð Sören
                brátt atkvæðamikill.
              </p>
            </div>
            {/* .text */}
            <div className="images images-2">
              <div className="image">
                <img src="/img/story-images/1-1.png" alt="" />
                <h5>Framkvæmdir við búrfellsvirkjun árið 1970.</h5>
              </div>
              {/* .image */}
              <div className="image">
                <img src="/img/story-images/2-1.png" alt="" />
                <h5>Kai Langvad</h5>
              </div>
              {/* .image */}
            </div>
            {/* .images */}
            <div className="text">
              <p>
                Búrfellsvirkjun var fyrsta stóra vatnsaflsvirkjun Íslendinga og
                sáu E. Phil & Søn um framkvæmdir á henni ásamt sænska
                fyrirtækinu SENTAB og Almenna byggingarfélaginu en því verki
                lauk að mestu árið 1970, það var í framhaldi af því verkefni sem
                Ístak var stofnað. Þann 18. nóvember 1970 var fyrirtækinu breytt
                í hlutafélag og gefið heitið Ístak.
              </p>
            </div>
            {/* .text */}
            <div className="images images-2">
              <div className="image">
                <img src="/img/story-images/1-2.png" alt="" />
                <h5>
                  Verksamningur undirritaður um Búrfellsvirkjun á Hótel Sögu.
                </h5>
              </div>
              {/* .image */}
              <div className="image">
                <img src="/img/story-images/1-2.png" alt="" />
                <h5>
                  Steypustöð sem var reist á framkvæmdasvæðinu og vinnubúðir
                  Ístaks. Júní 1967
                </h5>
              </div>
              {/* .image */}
            </div>
            {/* .images */}
          </div>
          {/* .section */}
          <div className="section" id="section-2">
            <div className="text">
              <h3>Verkefnin</h3>
              <p>
                Fyrstu verkefni Ístaks voru miðlunarframkvæmdir við Þórisvatn,
                Vatnsfellsveita og stækkun Búrfellsvirkjunar. Á þessum 50 árum
                hafa fjölmörg og fjölbreytt verkefni hafa verið unnin á Íslandi
                og víða um heim.
              </p>
              <p>
                Á síðustu tíu til fimmtán árum má nefna verkefni Ístaks í
                Noregi, þar sem Ístak gerði meðal annars tíu jarðgöng, tvær
                vatnsaflsvirkjanir og fjölmarga vegi og önnur mannvirki. Á
                árunum 2009 – 2011 sá Ístak um hönnun og byggingar 17 húsa á
                Jamaica.
              </p>
              <p>
                Unnið var í Grænlandi á árunum xxx – xxxx og þar Ístak byggði
                virkjanir, höfn og skóla. Þar ber helst að nefna virkjun í
                Illusat sem kláraðist árið 2014. Það var stærsti einstæði
                samningur í sögu Ístaks. Árið 2020 byrjaði Ístak aftur að vinna
                í Grænlandi við stórt verkefni sem er að byggja leik- og
                grunnskólabyggingar í Nuuk.
              </p>
            </div>
            {/* .text */}
            <div className="images images-multiple">
              <div className="image">
                <img src="/img/story-images/1-3.png" alt="" />
                <h5>Oddskarðsgöng, 1971</h5>
              </div>
              {/* .image */}
              <div className="image">
                <img src="/img/story-images/2-3.png" alt="" />
                <h5>Hraunhreinsun í Vestmannaeyjum, 1974</h5>
              </div>
              {/* .image */}
              <div className="image">
                <img src="/img/story-images/3-3.png" alt="" />
                <h5>Oddskarðsgöng, 1971</h5>
              </div>
              {/* .image */}
              <div className="image">
                <img src="/img/story-images/4-3.png" alt="" />
                <h5>Oddskarðsgöng, 1971</h5>
              </div>
              {/* .image */}
              <div className="image">
                <img src="/img/story-images/5-3.png" alt="" />
                <h5>Hraunhreinsun í Vestmannaeyjum, 1974</h5>
              </div>
              {/* .image */}
            </div>
            {/* .images */}
            <div className="text">
              <p>
                Á Íslandi voru framkvæmdir á ábyrgð Ístaks meðal annars
                byggingar eins og Háskólann í Reykjavík, Klettaskóli,
                Náttúrufræðihús Urriðaholti, endurgerð á Sundhöll Reykjavíkur,
                Helgafellsskóli, Uppsteypa á hóteli og íbúðum við Hörpu,
                Fiskvinnsla Grun í Grundafirði, Stúdentagarðar við Sæmundargötu
                og Hús íslenskunnar við Arngrímsgötu.{' '}
              </p>
            </div>
            {/* .text */}
            <div className="images images-multiple">
              <div className="image">
                <img src="/img/story-images/1-3.png" alt="" />
                <h5>Oddskarðsgöng, 1971</h5>
              </div>
              {/* .image */}
              <div className="image">
                <img src="/img/story-images/2-3.png" alt="" />
                <h5>Hraunhreinsun í Vestmannaeyjum, 1974</h5>
              </div>
              {/* .image */}
              <div className="image">
                <img src="/img/story-images/4-3.png" alt="" />
                <h5>Oddskarðsgöng, 1971</h5>
              </div>
            </div>
            {/* .images */}
            <div className="text">
              <p>
                Þær virkjanir sem hafa verið framkvæmdar af Ístaki á þessu 10-15
                ára tímabili eru Búðarhálsvirkjun sem var gerð á árunum
                2010-2013 og Brúarvirkjun frá 2018-2020.
              </p>
              <p>
                Fyrirtækið hefur að mestu verið í eigu danskra aðila frá
                upphafi. Núverandi eigandi Ístaks er danska verktakasamsteypan
                Per Aarsleff Holding A/S sem keypti Ístak árið 2015.
              </p>
              <p>
                Stjórn Ístaks skipa Lars M. Carlsen stjórnarformaður, sem er
                aðstoðarforstjóri Per Aarsleff og Mogens V. Hsetbæk
                fjármálastjóri Per Aarsleff og Guðríði Láru Þrastardóttir
                lögfræðingur.
              </p>
              <p>
                Í yfirstjórn Ístaks eru Karl Andreasen framkvæmdastjóri og Elfa
                Björg Aradóttir fjármálastjóri. Í framkvæmdaráði Ístaks sitja
                framkvæmdastjóri, fjáramálstjóri, deildarstjórar,
                mannauðsstjóri, gæða- og öryggisstjóri og yfirverkfræðingar
                félagsins.
              </p>
            </div>
            {/* .text */}
          </div>
          {/* .section */}
          <div className="section" id="section-3">
            <div className="text">
              <h3>Samvinna með Aarsleff</h3>
              <p>
                Ístak hefur alla tíð unnið bæði á Íslandi og erlendis. Í
                verkefnum erlendis hefur Ístak leitt verkefni, verið í samvinnu
                með eigendum Ístaks og síðan hafa starfsmenn Ístaks farið út með
                þekkingu og reynslu í verkefni hjá móðurfélaginu um allan heim.
                Árið xxxx unnu Ístak og Aarsleff saman að stækkun á höfninni í
                Nuuk í Grænlandi þar sem bryggjupláss var tvöfaldað og búin til
                ný gámahöfn.
              </p>
              <p>
                Árið xxx voru settir niður 265 staurar við Keilugranda í
                Reykjavík, sem þjónuðu því hlutverki að mynda undirstöður fyrir
                sökkla íbúðarblokka. Stauranir voru 9-12 metra langir og byggðar
                voru 78 íbúðir á þessum undirstöðum. Aðferðin er ekki algeng á
                Íslandi en Ístak vann verkefnið í samstarfi við systurfyrirtæki
                sín sem eru í eigu Aarsleff samstæðunnar.
              </p>
              <p>
                Notaður var fullkominn búnaður frá Aarsleff og gekk það mun
                betur en menn höfðu gert ráð fyrir. Hægt er að nota þessa aðferð
                viðar þar sem erfitt er að efnisskipta, t.d. við strandlengju
                eða á svæðum sem umferð mikil umferð er fyrir á stofnæðum.
              </p>
              <p>
                Nýr hafnarbakki fyrir framan frystihús HB-Granda 2017-2018 og
                síðan niðurrekstur á stálþili á Kleppsbakka fyrir Faxaflóahafnir
                eru önnur verkefni sem unnin hafa verið í samstarfi við
                Aarsleff.
              </p>
            </div>
            {/* .text */}
            <div className="images images-2">
              <div className="image">
                <img src="/img/story-images/1-3.png" alt="" />
                <h5>Oddskarðsgöng, 1971</h5>
              </div>
              {/* .image */}
              <div className="image">
                <img src="/img/story-images/2-3.png" alt="" />
                <h5>Hraunhreinsun í Vestmannaeyjum, 1974</h5>
              </div>
              {/* .image */}
            </div>
            {/* .images */}
          </div>
          {/* .section*/}
          <div className="section" id="section-4">
            <div className="text">
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
                vatnsrör og fráveita var grafið niður á milli bygginga.{' '}
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
            </div>
            {/* .text */}
            <div className="images">
              <div className="image">
                <img src="/img/story-images/1-4.png" alt="" />
                <h5>Keflavíkurflugvöllur, 2004</h5>
              </div>
            </div>
            {/* .images */}
          </div>
          {/* .section */}
          <div className="section" id="section-5">
            <div className="text">
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
                þessu stóra alþjóðlegaverkefni fyrir kröfuharðan verkkaupa.{' '}
              </p>
            </div>
            {/* .text */}
          </div>
          {/* .section */}
          <div className="section">
            <div className="text">
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
                málara, múrara, rafvirkja, pípara eða aðra sérhæfða iðnaðarmenn.{' '}
              </p>
            </div>
            {/* .text */}
          </div>
          {/* .section */}
          <div className="section">
            <div className="text">
              <h3>Innkaupadeild</h3>
              <p>
                Hjá Ístaki hefur verið starfrækt innkaupadeild síðan xxx,
                deildin sér um innkaup á byggingavörum, efni, varahlutum, tækjum
                frá innlendum og erlendu birgjum, öflun tilboða og samningagerð.
                Deildin starfar náið með starfsfólki lagers hvað varðar
                birgðahald og hefur umsjón með flutningum fyrirtækisins
                erlendis. Deildin sér einnig um samninga við fyrirtæki sem bjóða
                upp á leigu á vinnuvélum og tækjabúnaði, sölu á vinnuvélum,
                bílum, sjóförum, tækjum og búnaði tengdum véladeild og lager.
              </p>
            </div>
            {/* .text */}
          </div>
          {/* .section */}
          <div className="section" id="section-6">
            <div className="text">
              <h3>Stafræn þróun í byggingariðnaði</h3>
              <p>
                BIM deild Ístaks var stofnuð árið 2017 og hefur það hlutverk að
                stuðla að stafrænni þróun í fyrirtækinu. Í dag eru stór hluti
                verkefna að nýta sér tækni BIM og annarra stafrænna verkfæra og
                má segja að möguleikarnir séu óþrjótandi fyrir vinnustað eins og
                Ístak.
              </p>
              <p>
                Verkefnin sem unnin eru hjá Ístak eru framleiðsluteikningar og
                stafrænir klippi-og beygjulistar á steypustyrktarjárnum,
                BIMstudd magntaka, notkun BIM líkana á verkstað, samræming og
                árekstrargreining, 4D verkáætlun og rafrænar úttektir. Þessi
                tækniþróun gerir það að verkum framkvæmdir verða árangursríkari,
                með lægri kostnaði og styttri tíma, samhliða því að ferlar
                bætast og verða gagnsærri.
              </p>
            </div>
          </div>
          {/* .section */}
          <div className="section">
            <div className="text">
              <h3>Skipulag og sérstaða</h3>
              <p>
                Ístak nær yfir stórt og fjölbreytt svið og bíður upp á víðtæka
                þjónustu. Stefna Ístaks er og hefur verið að vera leiðandi
                verktakafyrirtæki sem mætir þörfum markaðarins með fyrirmyndar
                verkskipulagi og góðu starfsfólki. Fyrirtækið vinnur eftir
                gæðastefnu sem miðar meðal annars að því að vera með reynt og
                hæft starfsfólk og afhenda verk á réttum tíma með umsömdum
                gæðum.
              </p>
            </div>
            {/* .text */}
          </div>
          {/* .section */}
          <div className="section">
            <div className="text">
              <h3>Framtíðarsýn</h3>
              <p>
                Einkunnarorð ÍSTAKS eru framkvæmdagleði í fyrirrúmi og fela þau
                í sér yfirgripsmikla þekkingu á þeirri tækni og vinnuaðferðum
                sem þarf til að sinna fjölþættri verktakastarfsemi. Markmið
                ÍSTAKS er að mæta þörfum íslensks, sem og erlends, markaðar
                fyrir byggingar, önnur mannvirki og aðrar verklegar framkvæmdir
                og veita viðskiptavinum góða þjónustu.
              </p>
            </div>
          </div>
          {/* .section */}
          <div className="section" id="section-7">
            <div className="text">
              <h3>Aðsetur</h3>
              <p>
                Frá árinu 2012 hefur yfirstjórn og skrifstofa Ístaks verið til
                húsa að Bugðufljóti 19, 270 Mosfellsbæ.{' '}
              </p>
            </div>
            {/* .text */}
            <div className="images">
              <div className="image">
                <img src="/img/story-images/1-4.png" alt="" />
                <h5>
                  Frá árinu 2012 hefur yfirstjórn og skrifstofa Ístaks verið til
                  húsa að Bugðufljóti 19, 270 Mosfellsbæ.
                </h5>
              </div>
              {/* .image */}
            </div>
            {/* .images */}
          </div>
          {/* .section */}
          <div className="section">
            <div className="text">
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
                tækjastjórnendur & bílstjórar.{' '}
              </p>
            </div>
            {/* .text */}
            <div className="images images-2">
              <div className="image">
                <img src="/img/story-images/1-5.png" alt="" />
                <h5></h5>
              </div>
              {/* .image */}
              <div className="image">
                <img src="/img/story-images/2-5.png" alt="" />
                <h5></h5>
              </div>
              {/* .image */}
            </div>
            {/* .images */}
            <div className="text">
              <p>
                Á tímabilinu 2010 – 2020 kom Ístak að mörgum mismunandi
                framkvæmdum sem settu kröfur til starfsmanna og fyrirtækisins um
                að læra nýja hluti eða vinna í nýjum aðstæðum. Starfsmenn Ístaks
                og stjórnendur öðluðust á þessum tíma reynslu í verkefnum sem
                unnin voru á láði og á legi, á Íslandi og erlendis, við strönd
                eða hátt uppi til fjalla. Fjöldi þjóðerna hjá Ístaki jókst líka
                á þessu tímabili og voru starfsmenn frá meira en 13 þjóðernum
                við störf hjá Ístaki á þessu tímabili. Hlutfall erlendra
                starfsmanna var líka nálægt helmingi starfsmanna og var Ístak
                með nema frá skólum á Íslandi, Grænlandi og Danmörku á þessu
                tímabili.
              </p>
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
            font-family: 'GT America Regular';
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
                font-family: 'GT America Medium';
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
                font-family: 'GT America Medium';
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
                font-family: 'GT America Regular';
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
                  font-family: 'GT America Regular';
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
          font-family: 'GT America Medium';
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
  )
}

export default Story
