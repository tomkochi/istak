import Link from 'next/link'

const Footer = (props) => {
  return (
    <>
      <div className="footer">
        <div className="large-screen d-none d-md-block">
          <div className="container d-flex">
            <div className="left">
              <img src="/img/logo-white.svg" alt="" />
              <h4 className="f-gtam-regular">Kt. 430214 1520</h4>
              <a href="#" className="terms f-gtam-medium">
                Skilmálar
              </a>
            </div>
            {/* .left */}
            <div className="right d-flex">
              <div className="navigation">
                <h4>Valmynd</h4>
                <ul className="list-unstyled">
                  <li>
                    <Link href="/starfsmenn" passHref>
                      <a>Um Ístak</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/thjonusta" passHref>
                      <a>Þjónustur</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://jobs.50skills.com/istak/is/" passHref>
                      <a>Störf</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/verkefni" passHref>
                      <a>Verkefni</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/frettir" passHref>
                      <a>Fréttir</a>
                    </Link>
                  </li>
                </ul>
              </div>
              {/* .navigation */}
              <div className="address">
                <h4>Hafa samband</h4>
                <h5>530 2700</h5>
                <h5>istak@istak.is</h5>
                <h5>lager@istak.is</h5>
                <h5>Bugðufljót 19, 270</h5>
                <h5>Senda ábendingu</h5>
              </div>
              {/* .address */}
              <div className="timing">
                <h5>Mánudaga - Fimmtudaga</h5>
                <h4>08:15 - 16:00</h4>
                <h5>Föstudag</h5>
                <h4>8:15 - 15:00</h4>
              </div>
              {/* .timing */}
            </div>
            {/* .right */}
          </div>
          {/* .container */}
          <div className="container d-flex">
            <div className="bottom w-100 d-flex align-items-center justify-content-between">
              <div className="social d-flex">
                <a href="https://www.facebook.com" className="icon facebook">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M39.5 19.9973C39.5 30.7653 30.7696 39.4946 20 39.4946C9.23038 39.4946 0.5 30.7653 0.5 19.9973C0.5 9.22931 9.23038 0.5 20 0.5C30.7696 0.5 39.5 9.22931 39.5 19.9973Z"
                      stroke="white"
                      strokeOpacity="0.12"
                    />
                    <path
                      d="M30 20.0594C30 14.5032 25.5234 10 20 10C14.4766 10 10 14.5032 10 20.0594C10 25.0813 13.6562 29.2426 18.4375 29.9971V22.9672H15.8984V20.0594H18.4375V17.8432C18.4375 15.3225 19.9297 13.9295 22.2148 13.9295C23.3086 13.9295 24.4531 14.1259 24.4531 14.1259V16.6015H23.1914C21.9492 16.6015 21.5625 17.3776 21.5625 18.1733V20.0594H24.3359L23.8926 22.9672H21.5625V29.9971C26.3438 29.2426 30 25.0813 30 20.0594Z"
                      fill="white"
                    />
                  </svg>
                </a>
                <a href="https://www.loinkedin.com" className="icon linkedin">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.28 16.9777H16.811V26.9971H13.28V16.9777ZM15.0465 11.9971C15.451 11.9972 15.8465 12.1032 16.1828 12.3018C16.5191 12.5003 16.7811 12.7824 16.9358 13.1124C17.0905 13.4424 17.1309 13.8055 17.0519 14.1557C16.9729 14.506 16.7779 14.8277 16.4918 15.0802C16.2057 15.3327 15.8412 15.5046 15.4444 15.5742C15.0475 15.6438 14.6363 15.608 14.2625 15.4712C13.8888 15.3345 13.5694 15.103 13.3446 14.806C13.1199 14.5091 13 14.1599 13 13.8028C13.0001 13.5656 13.053 13.3308 13.1559 13.1116C13.2588 12.8925 13.4095 12.6934 13.5996 12.5258C13.7896 12.3581 14.0152 12.2251 14.2635 12.1344C14.5117 12.0437 14.7778 11.997 15.0465 11.9971"
                      fill="white"
                    />
                    <path
                      d="M18.4531 16.354H21.3879V17.8093H21.4299C21.8381 16.9724 22.8371 16.0898 24.3267 16.0898C27.4266 16.0898 27.9995 18.294 27.9995 21.1609V26.999H24.9381V21.8223C24.9381 20.5879 24.9185 18.9998 23.3473 18.9998C21.7542 18.9998 21.5111 20.3453 21.5111 21.734V26.999H18.4531V16.354Z"
                      fill="white"
                    />
                    <path
                      d="M39.5 19.9973C39.5 30.7653 30.7696 39.4946 20 39.4946C9.23038 39.4946 0.5 30.7653 0.5 19.9973C0.5 9.22931 9.23038 0.5 20 0.5C30.7696 0.5 39.5 9.22931 39.5 19.9973Z"
                      stroke="white"
                      strokeOpacity="0.12"
                    />
                  </svg>
                </a>
              </div>
              <div className="copyright f-tgam-regular">
                &copy; Ístak ehf. 2020
              </div>
            </div>
            {/* .bottom */}
          </div>
          {/* .container */}
        </div>
        {/* .large-scren */}

        <div className="small-screen d-md-none">
          <img src="/img/logo-white.svg" alt="" />
          <div className="d-flex">
            <div className="navigation w-50">
              <h4>Valmynd</h4>
              <ul className="list-unstyled">
                <li>
                  <Link href="/" passHref>
                    <a href="#">Um Ístak</a>
                  </Link>
                </li>
                <li>
                  <Link href="/" passHref>
                    <a href="#">Þjónustur</a>
                  </Link>
                </li>
                <li>
                  <Link href="/" passHref>
                    <a href="#">Störf</a>
                  </Link>
                </li>
                <li>
                  <Link href="/projects" passHref>
                    <a href="#">Verkefni</a>
                  </Link>
                </li>
                <li>
                  <Link href="/news" passHref>
                    <a href="#">Fréttir</a>
                  </Link>
                </li>
              </ul>
            </div>
            {/* .navigation */}
            <div className="address w-50">
              <h4>Hafa samband</h4>
              <h5>530 2700</h5>
              <h5>istak@istak.is</h5>
              <h5>lager@istak.is</h5>
              <h5>Bugðufljót 19, 270</h5>
              <h5>Senda ábendingu</h5>
            </div>
            {/* .address */}
          </div>
          <div className="timing">
            <h5>Mánudaga - Fimmtudaga</h5>
            <h4>08:15 - 16:00</h4>
            <h5>Föstudag</h5>
            <h4>8:15 - 15:00</h4>
          </div>
          {/* .timing */}
          <div className="bottom w-100 d-flex align-items-center justify-content-between">
            <div>
              <h4 className="f-gtam-regular">Kt. 430214 1520</h4>
              <a href="#" className="terms f-gtam-medium">
                Skilmálar
              </a>
            </div>
            <div className="social d-flex">
              <a href="http://www.facebook.com" className="icon">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M39.5 19.9973C39.5 30.7653 30.7696 39.4946 20 39.4946C9.23038 39.4946 0.5 30.7653 0.5 19.9973C0.5 9.22931 9.23038 0.5 20 0.5C30.7696 0.5 39.5 9.22931 39.5 19.9973Z"
                    stroke="white"
                    strokeOpacity="0.12"
                  />
                  <path
                    d="M30 20.0594C30 14.5032 25.5234 10 20 10C14.4766 10 10 14.5032 10 20.0594C10 25.0813 13.6562 29.2426 18.4375 29.9971V22.9672H15.8984V20.0594H18.4375V17.8432C18.4375 15.3225 19.9297 13.9295 22.2148 13.9295C23.3086 13.9295 24.4531 14.1259 24.4531 14.1259V16.6015H23.1914C21.9492 16.6015 21.5625 17.3776 21.5625 18.1733V20.0594H24.3359L23.8926 22.9672H21.5625V29.9971C26.3438 29.2426 30 25.0813 30 20.0594Z"
                    fill="white"
                  />
                </svg>
              </a>
              <a href="http://www.linkedin.com" className="icon">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.28 16.9777H16.811V26.9971H13.28V16.9777ZM15.0465 11.9971C15.451 11.9972 15.8465 12.1032 16.1828 12.3018C16.5191 12.5003 16.7811 12.7824 16.9358 13.1124C17.0905 13.4424 17.1309 13.8055 17.0519 14.1557C16.9729 14.506 16.7779 14.8277 16.4918 15.0802C16.2057 15.3327 15.8412 15.5046 15.4444 15.5742C15.0475 15.6438 14.6363 15.608 14.2625 15.4712C13.8888 15.3345 13.5694 15.103 13.3446 14.806C13.1199 14.5091 13 14.1599 13 13.8028C13.0001 13.5656 13.053 13.3308 13.1559 13.1116C13.2588 12.8925 13.4095 12.6934 13.5996 12.5258C13.7896 12.3581 14.0152 12.2251 14.2635 12.1344C14.5117 12.0437 14.7778 11.997 15.0465 11.9971"
                    fill="white"
                  />
                  <path
                    d="M18.4531 16.354H21.3879V17.8093H21.4299C21.8381 16.9724 22.8371 16.0898 24.3267 16.0898C27.4266 16.0898 27.9995 18.294 27.9995 21.1609V26.999H24.9381V21.8223C24.9381 20.5879 24.9185 18.9998 23.3473 18.9998C21.7542 18.9998 21.5111 20.3453 21.5111 21.734V26.999H18.4531V16.354Z"
                    fill="white"
                  />
                  <path
                    d="M39.5 19.9973C39.5 30.7653 30.7696 39.4946 20 39.4946C9.23038 39.4946 0.5 30.7653 0.5 19.9973C0.5 9.22931 9.23038 0.5 20 0.5C30.7696 0.5 39.5 9.22931 39.5 19.9973Z"
                    stroke="white"
                    strokeOpacity="0.12"
                  />
                </svg>
              </a>
            </div>
          </div>
          {/* .bottom */}
        </div>
        {/* .small-screen */}
      </div>

      <style jsx>{`
        $brand: #204f9c;

        .footer {
          background: $brand;
          * {
            font-size: 14px;
            color: white;
          }

          .large-screen {
            padding: 73px 0;
            .left {
              width: 40%;
            }
            .right {
              width: 60%;
            }
            .left {
              img {
                margin-bottom: 30px;
              }
              h4 {
                margin-bottom: 10px;
              }
              a {
                text-decoration: underline;
              }
            }
            .right {
              .navigation,
              .address,
              .timing {
                width: calc(100% / 3);
              }
              .navigation {
                @media (max-width: 991px) {
                  width: calc(100% / 4);
                }
              }
              .address,
              .timimg {
                @media (max-width: 991px) {
                  width: calc(100% / 2);
                }
              }
              .navigation {
                h4 {
                  font-family: 'GT America Medium';
                  margin-bottom: 22px;
                }
                ul li {
                  margin-bottom: 18px;
                  a {
                    font-family: 'GT America Regular';
                    text-decoration: none;
                  }
                }
              }
              .address {
                h4 {
                  font-family: 'GT America Medium';
                  margin-bottom: 22px;
                }
                h5 {
                  font-family: 'GT America Regular';
                  margin-bottom: 18px;
                }
              }
              .timing {
                h5 {
                  font-family: 'GT America Medium';
                  margin-bottom: 12px;
                }
                h4 {
                  font-family: 'GT America Regular';
                  margin-bottom: 29px;
                }
              }
            }
            .bottom {
              margin-top: 67px;
              .social {
                a {
                  margin-right: 12px;
                  svg {
                    transition: 0.3s;
                  }
                  &:hover svg {
                    transform: scale(1.3);
                  }
                }
              }
              .copyright {
                font-family: 'GT America Medium';
                font-size: 14px;
              }
            }
          }

          .small-screen {
            padding: 20px;
            img {
              margin-bottom: 40px;
            }
            .navigation {
              margin-bottom: 50px;
              h4 {
                font-family: 'GT America Medium';
                margin-bottom: 22px;
                font-size: 14px;
              }
              li {
                margin-bottom: 9px;
              }
              a {
                font-size: 14px;
                margin: 0;
              }
            }
            .address {
              margin-bottom: 50px;
              h4 {
                font-family: 'GT America Medium';
                margin-bottom: 22px;
                font-size: 14px;
              }
              h5 {
                font-size: 14px;
                margin-bottom: 14px;
              }
            }
            .timing {
              h5 {
                font-size: 14px;
                margin-bottom: 12px;
              }
              h4 {
                font-size: 14px;
                margin-bottom: 28px;
              }
            }
            .bottom {
              margin-top: 60px;
              h4 {
                font-size: 14px;
                margin-bottom: 10px;
              }
              a {
                font-size: 14px;
                text-decoration: underline;
              }
              .social {
                .icon {
                  margin-left: 12px;
                }
              }
            }
          }
        }
      `}</style>
    </>
  )
}

export default Footer