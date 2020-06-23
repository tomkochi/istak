import Hero from "../components/services/hero";
import Layout from "../components/Layout";
import BigCardImageAtRight from "../components/big-card-image-at-right";
import BigCardImageAtLeft from "../components/big-card-image-at-left";
import Contact from "../components/services/contact";
import BottomPick from "../components/bottom-pick";

const Services = (props) => {
  return (
    <>
      <Layout>
        <Hero />
        <BigCardImageAtRight
          image="/img/workers-constructing.jpg"
          heading="Meðhöndlun gagna"
          para="Meðhöndlun og umsýsla stafrænna gagna í fyrirtækinu með áherslu á að styðja við, þróa og betrumbæta meðhöndlun stafrænna gagna, miðla þekkingu og reynslu í verkin og með það að leiðarljósi að auka virðissköpun, nýsköpun og samvinnu við innri og ytri aðila."
        />
        <BigCardImageAtLeft
          image="/img/building-unfinished.jpg"
          heading="BIM líkön"
          para="Gerð BIM líkana fyrir hönnun, framleiðslu og magntöku, þ.m.t stafræn járnabinding. Árekstrargreiningar og samræming. Notkun sýndarveruleika. Umsýsla með verkefnavefslausnum."
        />
        <Contact />
        <BottomPick
          image="/img/bottom-pick.jpg"
          title="Saga stofnun Ístaks"
          para="Myndband um stofnendur og uppruna Ístaks árið 1970."
          video="my-video-url"
        />
      </Layout>
    </>
  );
};

export default Services;
