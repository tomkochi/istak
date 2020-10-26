import { useState, useEffect, useRef } from "react";

const Filter = (props) => {
  const [searchText, setSearchText] = useState("");

  return (
    <>
      <div className="filter wow fadeIn" data-wow-duration="2s">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="left d-flex">
            <input
              type="text"
              className="f-gtam-medium"
              placeholder="Leita"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              onKeyDown={(e) =>
                e.key === "Enter" ? props.onSearchChange(searchText) : null
              }
            />
            <div className="icon d-flex align-items-center justify-content-center">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="6" cy="6" r="5" stroke="#204F9C" strokeWidth="2" />
                <path d="M10 10L13.5 13.5" stroke="#204F9C" strokeWidth="2" />
              </svg>
            </div>
            {/* .icon */}
          </div>
          {/* .left */}
        </div>
        {/* .container */}
      </div>
      {/* .filter */}

      <style jsx>{`
        $brand: #204f9c;

        .filter {
          margin-bottom: 80px;
          @media (max-width: 991px) {
            margin-bottom: 66px;
          }
          .container {
            @media (max-width: 767px) {
              width: 100vw;
              padding: 0 20px;
            }
          }
          .left {
            position: relative;
            input {
              border: none;
              font-size: 18px;
              line-height: 120%;
              padding: 0;
              margin-left: 57px;
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
              &:focus + .icon,
              &:hover + .icon {
                background: $brand;
                svg * {
                  stroke: #ffffff;
                }
              }
            }
            .icon {
              position: absolute;
              top: -8px;
              width: 42px;
              height: 42px;
              border: 1px solid rgba(32, 79, 156, 0.2);
              border-radius: 50%;
              transition: 0.3s;
              svg path,
              svg circle {
                transition: 0.3s;
              }
            }
          }
        }
      `}</style>
    </>
  );
};

export default Filter;
