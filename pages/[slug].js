import Layout from '../components/Layout'


const Policy = ({ data }) => {
  return (
    <Layout>
      <div className="policy">
        <div className="container">

        {data[0].SkilmalarBody.map((item, i) => {
                return (
                  <>
                  {item.type == 'heading' ? (
                  <h1>{item.text}</h1>
                  ) : (
                  <p>{item.text}</p>
                  )}
                  </>
                )
              })}
        </div>
        {/* .container */}
      </div>
      {/* .policy */}
      <style jsx>{`
        .policy {
          padding: 235px 0 110px;
          @media (max-width: 991px) {
            padding: 109px 0 80px;
          }
          @media (max-width: 991px) {
            padding: 90px 0 80px;
          }
          .container {
            max-width: 860px;
          }
          h1 {
            font-family: 'GT America Bold';
            font-size: 64px;
            letter-spacing: 0em;
            text-align: left;
            margin-bottom: 70px;
            color: #204f9c;
            @media (max-width: 991px) {
              font-size: 48px;
              margin-bottom: 40px;
            }
            @media (max-width: 767px) {
              font-size: 36px;
              margin-bottom: 30px;
            }
          }
          p {
            font-family: 'GT America Regular';
            font-size: 20px;
            font-style: normal;
            font-weight: 300;
            line-height: 32px;
            letter-spacing: 0em;
            text-align: left;
            color: #202020;
            margin-bottom: 2em;
            @media (max-width: 991px) {
              font-size: 18px;
              line-height: 22px;
            }
            @media (max-width: 767px) {
              font-size: 16px;
              line-height: 18px;
            }
          }
        }
      `}</style>
    </Layout>
  )
}

//data fetching
export async function getServerSideProps(context) {
  // Fetch data from external API
  const res = await fetch(`${process.env.HOST}/skilmalars?slug=${context.params.slug}`,)
  const data = await res.json();
  // Pass data to the page via props
  return { props: { data } };
}

export default Policy
