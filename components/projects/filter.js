import { useState, useEffect, useRef } from 'react'

const Filter = (props) => {
  const options = ['Raða eftir', 'Nýtt fyrst', 'Gamalt fyrst']
  const [selection, setSelection] = useState(options[0])
  const [showDropdown, setShowDropdown] = useState(false)
  const dropdownRef = useRef()

  const handleOutsideClick = (e) => {
    console.log(dropdownRef)
    if (dropdownRef.current.contains(e.target)) return
    setShowDropdown(false)
  }

  useEffect(() => {
    if (showDropdown) {
      document.addEventListener('click', handleOutsideClick, false)
    } else {
      document.removeEventListener('click', handleOutsideClick, false)
    }
    return () => {
      document.removeEventListener('click', handleOutsideClick, false)
    }
  }, [showDropdown])

  return (
    <>
      <div className="filter wow fadeIn" data-wow-duration="2s">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="left d-flex">
            <input
              type="text"
              className="f-gtam-medium"
              placeholder="Leita að verkefni"
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
          <div className="right f-gtam-medium">
            <div className="sort" ref={dropdownRef}>
              <div
                className="d-none d-lg-flex align-items-center"
                onClick={() => setShowDropdown(!showDropdown)}
              >
                <h4 className="f-gtam-medium">{selection}</h4>
                <div className={`icon ${showDropdown ? 'showing' : ''}`}>
                  <svg
                    width="42"
                    height="42"
                    viewBox="0 0 42 42"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      opacity="0.2"
                      r="20.5"
                      transform="matrix(-1 0 0 1 21 21)"
                      stroke="#204F9C"
                    />
                    <path
                      d="M26 19L21 24L16 19"
                      stroke="#204F9C"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
              </div>
              <ul
                className={`sort-dropdown list-unstyled ${
                  showDropdown ? 'show' : ''
                }`}
              >
                {options.map((o, i) => {
                  return (
                    <li
                      className="sort-item f-gtam-bold"
                      key={i}
                      onClick={() => {
                        if (selection !== o) {
                          setSelection(o)
                          setShowDropdown(false)
                        }
                      }}
                    >
                      {o}
                    </li>
                  )
                })}
              </ul>
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
          .right {
            font-size: 18px;
            line-height: 120%;
            color: $brand;
            .sort {
              position: relative;
              cursor: pointer;
              h4 {
                font-size: 18px;
                line-height: 120%;
                color: $brand;
              }
              .icon {
                margin-left: 15px;
                transition: all 0.3s;
                &.showing {
                  transform: rotate(180deg);
                }
              }
              .sort-dropdown {
                position: absolute;
                right: 0;
                top: 60px;
                width: 223px;
                background: white;
                box-shadow: 0px 17px 50px rgba(0, 0, 0, 0.05);
                padding: 15px 0;
                transform: scaleY(0);
                transform-origin: 0 0;
                opacity: 0;
                z-index: 4000;
                transition: all 0.3s;
                &.show {
                  transform: scaleY(1);
                  opacity: 1;
                }
                .sort-item {
                  font-size: 18px;
                  background: white;
                  padding: 10px 25px;
                  &:hover {
                    background: rgb(205, 205, 205);
                  }
                }
              }
            }
          }
        }
      `}</style>
    </>
  )
}

export default Filter
