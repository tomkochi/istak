import Dropdown from "react-dropdown";

const Filter = (props) => {
  return (
    <>
      <div className="filter">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="left d-flex">
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
              placeholder="Leita að verkefni"
            />
          </div>
          {/* .left */}
          <div className="right f-gtam-medium">
            <div className="sort">
              <Dropdown
                options={["Raða eftir", "Nýtt fyrst", "Gamalt fyrst"]}
                value={"Raða eftir"}
                className="sort-dropdown f-cap-b"
                menuClassName="sortby"
              />
            </div>
            {/* .sort */}
          </div>
          {/* .right */}
        </div>
        {/* .container */}
      </div>
      {/* .filter */}

      <style jsx>{`
        $brand: #204f9c;

        .filter {
          margin-bottom: 80px;
          .left {
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
          .right {
            font-size: 18px;
            line-height: 120%;
            color: $brand;
            .sort {
            }
          }
        }
      `}</style>

      <style jsx global>{`
        $brand: #204f9c;

        .sort-dropdown {
          color: $brand;
          border: none;
          background: transparent;
          padding: 0;
          cursor: pointer;
          .Dropdown-control {
            position: relative;
            transform: translate(-54px);
            &:after {
              content: "";
              position: absolute;
              right: -60px;
              top: -10px;
              width: 42px;
              height: 42px;
              display: block;
              background: url("/img/caret-down-blue.svg") no-repeat center;
              -webkit-transform: rotate(0deg);
              -moz-transform: rotate(0deg);
              -ms-transform: rotate(0deg);
              -o-transform: rotate(0deg);
              transform: rotate(0deg);
              -webkit-transition: all 0.5s;
              -moz-transition: all 0.5s;
              -ms-transition: all 0.5s;
              -o-transition: all 0.5s;
              transition: all 0.5s;
            }
          }
          .sortby {
            position: absolute;
            transform: translate(-60px, 20px);
            padding: 12px 0;
            overflow: hidden;
            text-align: left;
            background: white;
            color: $brand;
            min-width: 180px;
            z-index: 4000;
            box-shadow: 0px 17px 50px rgba(0, 0, 0, 0.05);
            .Dropdown-option {
              font-family: "GT America Bold";
              padding: 12px;
              color: $brand;
              background: white;
              &:hover {
                background: #d1d1d1;
              }
            }
          }
          &.is-open {
            .Dropdown-control:after {
              -webkit-transform: rotate(180deg);
              -moz-transform: rotate(180deg);
              -ms-transform: rotate(180deg);
              -o-transform: rotate(180deg);
              transform: rotate(180deg);
            }
          }
        }
      `}</style>
    </>
  );
};

export default Filter;
