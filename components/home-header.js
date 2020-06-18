import Link from "next/link";

const Header = (props) => {
  return (
    <>
      <div className="header">
        <nav class="navbar navbar-expand-lg navbar-dark bg-transparent">
          <Link href="/" passHref>
            <a class="navbar-brand" href="#">
              <svg
                width="105"
                height="50"
                viewBox="0 0 105 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M15.3879 5.28017L14.7543 0C11.2241 3.00423 6.24569 5.09809 2.44397 6.09951L5.43103 9.28581C9.14224 8.37544 11.9483 7.46507 15.3879 5.28017ZM7.96552 39.055L10.9526 12.6542H4.25431L1.26724 39.055H7.96552ZM78.1164 39.055L70.6034 12.6542H64.8103L51.8664 39.055H58.1121L60.556 33.7749H70.2414L71.6897 39.055H78.1164ZM31.7715 31.0438C32.2241 26.9471 29.4181 24.0339 25.1638 22.6683C22.0862 21.6669 21.181 20.8476 21.3621 19.6641C21.5431 18.3896 22.7198 17.3881 25.0733 17.3881C27.2457 17.3881 28.3319 17.5702 30.7759 18.1164L31.8621 12.9273C29.2371 12.29 27.4267 12.199 25.1638 12.199C19.1897 12.199 15.2974 15.7495 14.8448 20.1193C14.3922 23.6697 16.5647 26.5829 21.181 28.2216C24.4397 29.4051 25.2543 30.1334 25.0733 31.681C24.8922 33.2286 23.444 34.8673 21 34.8673C18.0129 34.8673 15.931 34.4121 13.4871 32.6824L12.6724 37.9626C14.3017 39.055 17.2888 39.6013 20.6379 39.6013C27.3362 39.6013 31.1379 36.1418 31.7715 31.0438ZM57.0259 17.9344L57.6595 12.6542H35.5733L34.9397 17.9344H42.5431L40.0991 39.055H46.7974L49.2414 17.9344H57.0259ZM102.556 39.055L94.2284 24.398L105 12.6542H97.7586L88.6164 22.4862L89.7931 12.5632H83.0948L80.1078 38.964H86.806L88.2543 26.9471L95.0431 38.964H102.556V39.055ZM101.651 49.6154L102.284 44.4263H0.633621L0 49.6154H101.651ZM68.8836 28.4037H63.181C63.181 28.4037 66.5302 21.4848 66.8017 20.4834L68.8836 28.4037Z"
                  fill="white"
                />
              </svg>
            </a>
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Um okkur
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Þjónustudeildir
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Störf
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Verkefni
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Fréttir
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <style jsx>{`
        .header {
          position: relative;
        }
      `}</style>
      <style jsx global>{`
        nav {
          padding: 40px 55px !important;
        }
        nav .navbar-nav li a {
          font-family: "GT America Medium";
          color: white !important;
          margin-left: 55px;
          position: relative;
          &:after {
            content: "";
            position: absolute;
            left: 0;
            bottom: -15px;
            width: 100%;
            height: 2px;
            background: transparent;
            transition: all 0.5s;
          }
          &:hover :after {
            background: white;
          }
        }
      `}</style>
    </>
  );
};

export default Header;
