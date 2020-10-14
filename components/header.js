import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Axios from 'axios'

const Header = (props) => {
  const router = useRouter()
  const [serviceDeptDropdown, setServiceDeptDropdown] = useState(false)
  const [smMenu, setSmMenu] = useState(false)
  const { reverse } = props

  const [serviceDepts, setServiceDepts] = useState(null)
  useEffect(() => {
    Axios.get(`${process.env.NEXT_PUBLIC_HOST}/services`)
      .then((services) => {
        setServiceDepts(services.data)
      })
      .catch((e) => {})
  }, [])

  return (
    <>
      <div
        className={`${
          reverse ? 'reverse' : ''
        } header-nav d-flex align-items-center justify-content-between`}
      >
        <div className="left d-none d-lg-block">
          <Link href="/" passHref>
            <a>
              <svg
                width="105"
                height="50"
                viewBox="0 0 105 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15.3879 5.28017L14.7543 0C11.2241 3.00423 6.24569 5.09809 2.44397 6.09951L5.43103 9.28581C9.14224 8.37544 11.9483 7.46507 15.3879 5.28017ZM7.96552 39.055L10.9526 12.6542H4.25431L1.26724 39.055H7.96552ZM78.1164 39.055L70.6034 12.6542H64.8103L51.8664 39.055H58.1121L60.556 33.7749H70.2414L71.6897 39.055H78.1164ZM31.7715 31.0438C32.2241 26.9471 29.4181 24.0339 25.1638 22.6683C22.0862 21.6669 21.181 20.8476 21.3621 19.6641C21.5431 18.3896 22.7198 17.3881 25.0733 17.3881C27.2457 17.3881 28.3319 17.5702 30.7759 18.1164L31.8621 12.9273C29.2371 12.29 27.4267 12.199 25.1638 12.199C19.1897 12.199 15.2974 15.7495 14.8448 20.1193C14.3922 23.6697 16.5647 26.5829 21.181 28.2216C24.4397 29.4051 25.2543 30.1334 25.0733 31.681C24.8922 33.2286 23.444 34.8673 21 34.8673C18.0129 34.8673 15.931 34.4121 13.4871 32.6824L12.6724 37.9626C14.3017 39.055 17.2888 39.6013 20.6379 39.6013C27.3362 39.6013 31.1379 36.1418 31.7715 31.0438ZM57.0259 17.9344L57.6595 12.6542H35.5733L34.9397 17.9344H42.5431L40.0991 39.055H46.7974L49.2414 17.9344H57.0259ZM102.556 39.055L94.2284 24.398L105 12.6542H97.7586L88.6164 22.4862L89.7931 12.5632H83.0948L80.1078 38.964H86.806L88.2543 26.9471L95.0431 38.964H102.556V39.055ZM101.651 49.6154L102.284 44.4263H0.633621L0 49.6154H101.651ZM68.8836 28.4037H63.181C63.181 28.4037 66.5302 21.4848 66.8017 20.4834L68.8836 28.4037Z"
                  fill={reverse ? '#ffffff' : '#204F9C'}
                />
              </svg>
            </a>
          </Link>
        </div>
        {/* .left */}
        <div className="right lg d-none d-lg-block">
          <ul className="navigation list-unstyled d-none d-lg-flex">
            <li className="navigation-item">
              <Link href="/starfsmenn" passHref>
                <a>Um okkur</a>
              </Link>
            </li>
            <li
              className="navigation-item"
              onMouseEnter={(e) => setServiceDeptDropdown(true)}
              onMouseLeave={(e) => setServiceDeptDropdown(false)}
            >
              <a className="has-dropdown">Þjónustudeildir</a>
              <ul
                className={`nav-dropdown list-unstyled ${
                  serviceDeptDropdown ? 'show' : ''
                }`}
              >
                {serviceDepts &&
                  serviceDepts.map((s, i) => {
                    return (
                      <li key={i} className="nav-dropdown-item list-unstyled">
                        <Link href={`/thjonusta/${s.slug}`} passHref>
                          <a>{s.title}</a>
                        </Link>
                      </li>
                    )
                  })}
              </ul>
            </li>
            <li className="navigation-item">
              <a href="https://jobs.50skills.com/istak/is/" target="_blank">
                Störf
              </a>
            </li>
            <li className="navigation-item">
              <Link href="/verkefni" passHref>
                <a className={router.pathname === '/verkefni' ? 'active' : ''}>
                  Verkefni
                </a>
              </Link>
            </li>
            <li className="navigation-item">
              <Link href="/frettir" passHref>
                <a className={router.pathname === '/frettir' ? 'active' : ''}>
                  Fréttir
                </a>
              </Link>
            </li>
          </ul>
        </div>
        {/* .right */}
        <div className="sm-head w-100 d-flex d-lg-none justify-content-between align-items-center">
          <div className="left">
            <Link href="/" passHref>
              <a>
                <svg
                  className={smMenu ? 'open' : ''}
                  width="105"
                  height="50"
                  viewBox="0 0 105 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15.3879 5.28017L14.7543 0C11.2241 3.00423 6.24569 5.09809 2.44397 6.09951L5.43103 9.28581C9.14224 8.37544 11.9483 7.46507 15.3879 5.28017ZM7.96552 39.055L10.9526 12.6542H4.25431L1.26724 39.055H7.96552ZM78.1164 39.055L70.6034 12.6542H64.8103L51.8664 39.055H58.1121L60.556 33.7749H70.2414L71.6897 39.055H78.1164ZM31.7715 31.0438C32.2241 26.9471 29.4181 24.0339 25.1638 22.6683C22.0862 21.6669 21.181 20.8476 21.3621 19.6641C21.5431 18.3896 22.7198 17.3881 25.0733 17.3881C27.2457 17.3881 28.3319 17.5702 30.7759 18.1164L31.8621 12.9273C29.2371 12.29 27.4267 12.199 25.1638 12.199C19.1897 12.199 15.2974 15.7495 14.8448 20.1193C14.3922 23.6697 16.5647 26.5829 21.181 28.2216C24.4397 29.4051 25.2543 30.1334 25.0733 31.681C24.8922 33.2286 23.444 34.8673 21 34.8673C18.0129 34.8673 15.931 34.4121 13.4871 32.6824L12.6724 37.9626C14.3017 39.055 17.2888 39.6013 20.6379 39.6013C27.3362 39.6013 31.1379 36.1418 31.7715 31.0438ZM57.0259 17.9344L57.6595 12.6542H35.5733L34.9397 17.9344H42.5431L40.0991 39.055H46.7974L49.2414 17.9344H57.0259ZM102.556 39.055L94.2284 24.398L105 12.6542H97.7586L88.6164 22.4862L89.7931 12.5632H83.0948L80.1078 38.964H86.806L88.2543 26.9471L95.0431 38.964H102.556V39.055ZM101.651 49.6154L102.284 44.4263H0.633621L0 49.6154H101.651ZM68.8836 28.4037H63.181C63.181 28.4037 66.5302 21.4848 66.8017 20.4834L68.8836 28.4037Z"
                  />
                </svg>
              </a>
            </Link>
          </div>
          {/* .left */}
          <div className="right">
            <button className="sandwich d-flex d-lg-none align-items-center justify-content-center">
              <div
                onClick={(e) => {
                  setSmMenu((v) => !v)
                  setServiceDeptDropdown(false)
                }}
              >
                <div className={`anim-image ${smMenu ? 'open' : ''}`}>
                  <div className="line-1" />
                  <div className="line-2" />
                </div>
                {/* .anim-image */}
              </div>
            </button>
          </div>
          {/* .right */}
        </div>
        {/* .sm-head */}
        <div className={`sm-navigation d-lg-none ${smMenu ? 'show' : ''}`}>
          <ul className="list-unstyled">
            <li className="navigation-item">
              <Link href="/starfsmenn" passHref>
                <a>Um okkur</a>
              </Link>
            </li>
            <li className="navigation-item">
              <a
                className={`has-dropdown ${
                  serviceDeptDropdown ? 'show-dropdown' : ''
                }`}
                onClick={(e) => setServiceDeptDropdown(!serviceDeptDropdown)}
              >
                Þjónustudeildir
              </a>
              <ul
                className={`nav-dropdown list-unstyled ${
                  serviceDeptDropdown ? 'show' : ''
                }`}
              >
                {serviceDepts &&
                  serviceDepts.map((s, i) => {
                    return (
                      <li key={i} className="nav-dropdown-item list-unstyled">
                        <Link href={`/thjonusta/${s.slug}`} passHref>
                          <a>{s.title}</a>
                        </Link>
                      </li>
                    )
                  })}
              </ul>
            </li>
            <li className="navigation-item">
              <a href="https://jobs.50skills.com/istak/is/" target="_blank">
                Störf
              </a>
            </li>
            <li className="navigation-item">
              <Link href="/verkefni" passHref>
                <a>Verkefni</a>
              </Link>
            </li>
            <li className="navigation-item">
              <Link href="/frettir" passHref>
                <a>Fréttir</a>
              </Link>
            </li>
          </ul>
          <div className="company-info d-flex">
            <div className="left w-50">
              <ul className="list-unstyled">
                <li>530 2700</li>
                <li>istak@istak.is</li>
                <li>lager@istak.is</li>
                <li>Bugðufljót 19, 270</li>
                <li>Senda ábendingu</li>
              </ul>
            </div>
            {/* .left */}
            <div className="right w-50">
              <div className="one">
                <h5 className="f-gtam-bold">Mánudaga - Fimmtudaga</h5>
                <h6>08:15 - 16:00</h6>
              </div>
              {/* .top */}
              <div className="two">
                <h5 className="f-gtam-bold">Föstudag</h5>
                <h6>8:15 - 15:00</h6>
              </div>
              {/* .bottom */}
            </div>
            {/* .right */}
          </div>
          {/* .company-info */}
        </div>
        {/* .sm-navigation */}
      </div>
      {/* .header-nav */}
      <style jsx>{`
        $color: ${reverse ? '#ffffff' : '#202020'};
        $brand: #204f9c;

        .header-nav {
          padding: 40px 55px;
          @media (max-width: 992px) {
            padding: 0 20px;
            height: 80px;
            transition: all 0.3s;
          }
          .left {
            a {
              svg {
                width: 105px;
                path {
                  fill: '#000000';
                }
                @media (max-width: 992px) {
                  width: 80px;
                }
              }
            }
          }
          .right {
            &.lg {
              transform: translateY(12px);
            }
            .navigation {
              display: flex;
              .navigation-item {
                position: relative;
                &:after {
                  content: ' ';
                  display: block;
                  clear: both;
                }
                > a {
                  position: relative;
                  font-family: 'GT America Medium';
                  font-size: 17px;
                  color: $color;
                  margin-left: 55px;
                  padding-bottom: 10px;
                  cursor: pointer;
                  &:after {
                    content: '';
                    position: absolute;
                    left: 0;
                    top: 40px;
                    width: 100%;
                    height: 2px;
                    background: transparent;
                    transition: all 0.5s;
                    @media (max-width: 992px) {
                      display: none;
                    }
                  }
                  &:not(.has-dropdown):hover :after {
                    background: $color;
                  }
                  &.active:after {
                    background: $color;
                  }
                }
                .nav-dropdown {
                  position: absolute;
                  background: white;
                  padding: 35px 0;
                  left: 55px;
                  top: 30px;
                  width: 340px;
                  transform: scale(0);
                  overflow: hidden;
                  transition: all 0.3s;
                  transform-origin: 0 0;
                  box-shadow: 0px 17px 50px rgba(0, 0, 0, 0.05);
                  &.show {
                    transform: scale(1);
                    .nav-dropdown-item {
                      transform: translate(0, 0);
                      opacity: 1;
                      @for $i from 1 through 10 {
                        &:nth-child(#{$i}) {
                          transition-delay: #{100 + ($i * 50)}ms;
                        }
                      }
                    }
                  }
                  .nav-dropdown-item {
                    float: none;
                    transition: 0.3s ease;
                    transform: translate(-20px, -20px);
                    opacity: 0;
                    a {
                      color: $brand;
                      padding: 10px 43px;
                      display: block;
                      transition: all 0.2s;
                      &:hover {
                        color: white;
                        background: $brand;
                      }
                    }
                  }
                }
              }
            }
            .sandwich {
              cursor: pointer;
              width: 32px;
              height: 32px;
              background: none;
              border: none;
              outline: none;
            }
          }
          .sm-head {
            position: ${smMenu ? 'fixed' : 'bsolute'};
            left: 0;
            top: -1;
            padding: ${smMenu ? '20px' : 0};
            background: ${smMenu ? '#204f9c' : 'transparent'};
            z-index: 20001;
            transition: background 0.3s;
            transition-delay: 0.5s;
            .left {
              svg {
                path {
                  fill: ${reverse ? '#ffffff' : '#204f9c'};
                  transition: 0.4s ease-in-out;
                  transition-delay: 0.3s;
                }
                &.open {
                  path {
                    fill: #ffffff;
                  }
                }
              }
            }
            button {
              .anim-image {
                transition: 0.3s ease-in-out;
                width: 32px;
                height: 32px;
                position: relative;
                .line-1,
                .line-2 {
                  height: 2px;
                  width: 32px;
                  background: ${reverse ? '#ffffff' : '#204f9c'};
                  transition: 0.4s ease-in-out;
                  transition-delay: 0.3s;
                  position: absolute;
                  top: 15px;
                  left: 0;
                }
                .line-1 {
                  transform: translateY(-4px);
                }
                .line-2 {
                  transform: translateY(4px);
                }
                &.open {
                  transform: rotate(90deg);
                  .line-1,
                  .line-2 {
                    background: #ffffff;
                    transform: translateY(0);
                  }
                  .line-1 {
                    transform: rotate(45deg);
                  }
                  .line-2 {
                    transform: rotate(-45deg);
                  }
                }
              }
            }
          }
          .sm-navigation {
            position: fixed;
            padding-top: 80px;
            left: 0;
            top: 0;
            width: 100%;
            height: 100vh;
            background: $brand;
            transform: scaleY(0);
            transform-origin: 0 0;
            transition: 0.5s;
            transition-delay: 0.5s;
            overflow-y: auto;
            z-index: 20000;
            .top {
              padding: 20px;
              opacity: 0;
              transition: 0.3s ease;
              transition-delay: 300ms;
              .left {
                svg {
                  width: 80px;
                }
              }
            }
            &.show {
              transform: scaleY(1);
              .top {
                opacity: 1;
              }
              .navigation-item {
                transform: translate(0, 0);
                opacity: 1;
                transform-origin: 0 0;
                @for $i from 1 through 10 {
                  &:nth-child(#{$i}) {
                    transition-delay: #{800 + ($i * 80)}ms;
                  }
                }
              }
              .company-info {
                opacity: 1;
                transition-delay: 1.5s;
              }
            }
            .navigation-item {
              margin-top: 18px;
              transition: 0.3s ease;
              transform: translate(-20px, -20px);
              opacity: 0;
              a {
                position: relative;
                color: white;
                font-family: 'GT America Bold';
                font-size: 28px;
                line-height: 120%;
                padding: 0px 20px;
                display: block;
                &.has-dropdown {
                  &:after {
                    content: '';
                    position: absolute;
                    right: 20px;
                    top: 14px;
                    width: 7px;
                    height: 13px;
                    background: url('/img/caret-white-right.svg') center
                      no-repeat;
                    background-size: cover;
                    transition: all 0.3s;
                  }
                  &.show-dropdown:after {
                    transform: rotate(90deg);
                  }
                }
              }
              .nav-dropdown {
                height: 0;
                overflow: hidden;
                transition: all 0.3s;
                &.show {
                  height: 368px;
                }
                .nav-dropdown-item {
                  padding: 9px 0;
                  &:first-of-type {
                    padding-top: 25px;
                  }
                  &:last-of-type {
                    padding-bottom: 25px;
                  }
                  a {
                    font-size: 20px;
                    font-family: 'GT America Regular';
                  }
                }
              }
            }
            .company-info {
              padding: 40px 20px 0;
              margin-top: 40px;
              position: relative;
              transform: translateY(-30px);
              transition: 0.3s;
              transition-delay: 0.2s;
              opacity: 0;
              &:before {
                content: '';
                position: absolute;
                left: 20px;
                top: 0;
                width: calc(100% - 40px);
                height: 1px;
                background: rgba(255, 255, 255, 0.05);
              }
              .left {
                ul {
                  li {
                    font-family: 'GT America Regular';
                    font-size: 14px;
                    color: #ffffff;
                    margin-bottom: 18px;
                  }
                }
              }
              .right {
                h5 {
                  font-family: 'GT America Bold';
                  font-size: 14px;
                  color: #ffffff;
                  opacity: 0.8;
                  margin-bottom: 12px;
                }
                h6 {
                  font-family: 'GT America Regular';
                  font-size: 14px;
                  color: #ffffff;
                  margin-bottom: 29px;
                }
              }
            }
          }
        }
      `}</style>
    </>
  )
}

export default Header
