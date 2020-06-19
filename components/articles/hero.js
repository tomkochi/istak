const Hero = (props) => {
  return (
    <>
      <div className="hero container">
        <h1 className="f-gtam-bold">Lestu nýjustu greinar og uppfærslur</h1>
        <div className="search d-flex">
          <div className="icon d-flex align-items-center justify-content-center">
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="6" cy="6" r="5" stroke="#204F9C" stroke-width="2" />
              <path d="M10 10L13.5 13.5" stroke="#204F9C" stroke-width="2" />
            </svg>
          </div>
          {/* .icon */}
          <input
            type="text"
            className="f-gtam-medium"
            placeholder="Leita að grein"
          />
        </div>
        {/* .search */}
      </div>
      {/* .hero */}

      <style jsx>{`
        $brand: #204f9c;

        .hero {
          margin-top: 150px;
          h1 {
            font-size: 64px;
            line-height: 120%;
            max-width: 650px;
            color: $brand;
            margin-bottom: 50px;
          }
          .search {
            margin-bottom: 117px;
            width: 100%;
            max-width: 400px;
            .icon {
              width: 42px;
              height: 42px;
              border: 1px solid rgba(32, 79, 156, 0.2);
              border-radius: 50%;
              margin-right: 15px;
            }
            input {
              border: none;
              font-size: 18px;
              line-height: 120%;
              padding: 0;
              outline: none;
              box-shadow: none !important;
              &::placeholder {
                /* Chrome, Firefox, Opera, Safari 10.1+ */
                color: #5d749a;
              }
              &:-ms-input-placeholder {
                /* Internet Explorer 10-11 */
                color: #5d749a;
              }
              &::-ms-input-placeholder {
                /* Microsoft Edge */
                color: #5d749a;
              }
            }
          }
        }
      `}</style>
    </>
  );
};

export default Hero;
