import Header from '../components/header'
import Layout from '../components/Layout'

const NotFound = ({ data }) => {
  return (
    <Layout hideheader hidefooter>
      <div className="not-found">
        <Header reverse />
        <div className="container">
          <div className="wrapper">
            <h1>404</h1>
            <p>
              Úps, ekkert hér! Smelltu á hnappinn til að komast aftur á
              forsíðuna.
            </p>
            <div className="nav-back">
              <div className="icon">
                <svg
                  width="11"
                  height="10"
                  viewBox="0 0 11 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 5H9M9 5L4.84615 1M9 5L4.84615 9"
                    stroke="white"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
              Aftur á forsíðu
            </div>
            {/* .nav-back */}
          </div>
          {/* .wrapper */}
        </div>
        {/* .container */}
      </div>
      {/* .not-found */}
      <style jsx>{`
        .not-found {
          background: #204f9c;
          width: 100%;
          height: 100vh;
          .wrapper {
            display: flex;
            flex-direction: column;
            justify-content: center;
            height: calc(100vh - 130px);
            padding-bottom: 130px;
            @media (max-width: 767px) {
              padding-bottom: 60px;
            }
          }
          h1 {
            font-family: 'GT America Bold';
            font-size: 96px;
            line-height: 100%;
            letter-spacing: -0.02em;
            color: #ffffff;
            margin-bottom: 30px;
            @media (max-width: 767px) {
              font-size: 48px;
            }
          }
          p {
            font-family: 'GT America Regular';
            font-size: 18px;
            line-height: 140%;
            letter-spacing: -0.02em;
            color: #ffffff;
            opacity: 0.9;
            margin-bottom: 30px;
            @media (max-width: 767px) {
              font-size: 16px;
            }
          }
          .nav-back {
            font-family: 'GT America Bold';
            font-size: 17px;
            line-height: 120%;
            display: flex;
            align-items: flex-end;
            letter-spacing: -0.01em;
            color: #ffffff;
            display: flex;
            align-items: center;
            .icon {
              width: 36px;
              height: 36px;
              border-radius: 50%;
              border: 1px solid rgba(25, 255, 255, 0.2);
              display: flex;
              align-items: center;
              justify-content: center;
              margin-right: 11px;
            }
          }
        }
      `}</style>
    </Layout>
  )
}

export default NotFound
