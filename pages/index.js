import Layout from "../components/Layout";
import BottomPick from "../components/bottom-pick";
//slice
import Slice from "../components/slice";

const Index = ({ data }) => {
  const { content } = data;
  return (
    <Layout>
      {content.map((item) => (
        <Slice data={item} />
      ))}
      <BottomPick
        image="/img/bottom-pick.jpg"
        title="Saga stofnun Ístaks"
        para="Myndband um stofnendur og uppruna Ístaks árið 1970."
        video="my-video-url"
      />
    </Layout>
  );
};

//data fetching
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`${process.env.HOST}/home`);
  const data = await res.json();
  // Pass data to the page via props
  return { props: { data } };
}

export default Index;
