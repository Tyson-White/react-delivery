import React from "react";
import Styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import logo from "../../assets/icons/logo.svg";

export default function Index({ searchValue, setSearchValue }) {
  const cartItems = useSelector((state) => state.products.cartList);

  const price = useSelector((state) => state.products.totalPrice);
  const productsCount = useSelector((state) => state.products.productsCount);

  const searchRef = React.useRef();

  const [value, setValue] = React.useState("");

  const clearSearchValue = () => {
    searchRef.current.focus();
    setSearchValue("");
    setValue("");
  };

  return (
    <>
      <div className={Styles.header}>
        <div className={Styles.header_content}>
          <Link to={"/"}>
            <div className={Styles.left_side}>
              <div className={Styles.logo}>
                <img src={logo} width={86} alt="delivery-logo" />
              </div>
              <div className={Styles.title_name}>
                <div className={Styles.name}>React Delivery</div>
                <div className={Styles.description}>
                  Лучший сервис по доставке еды
                </div>
              </div>
            </div>
          </Link>

          <div className={Styles.search}>
            <div className={Styles.icon}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.4 8.4C2.4 6.8087 3.03214 5.28258 4.15736 4.15736C5.28258 3.03214 6.8087 2.4 8.4 2.4C9.9913 2.4 11.5174 3.03214 12.6426 4.15736C13.7679 5.28258 14.4 6.8087 14.4 8.4C14.4 9.9913 13.7679 11.5174 12.6426 12.6426C11.5174 13.7679 9.9913 14.4 8.4 14.4C6.8087 14.4 5.28258 13.7679 4.15736 12.6426C3.03214 11.5174 2.4 9.9913 2.4 8.4ZM8.4 0C7.06901 0 5.75706 0.316287 4.57228 0.922796C3.38751 1.52931 2.36381 2.40867 1.58557 3.48843C0.80732 4.56819 0.296798 5.81743 0.0960721 7.13321C-0.104654 8.44898 0.0101636 9.79362 0.431062 11.0563C0.851959 12.319 1.56689 13.4636 2.51693 14.3958C3.46698 15.328 4.62494 16.0211 5.89539 16.4179C7.16585 16.8148 8.51242 16.9041 9.82415 16.6784C11.1359 16.4527 12.3752 15.9186 13.44 15.12C13.4741 15.1654 13.5114 15.2083 13.5516 15.2484L17.1516 18.8484C17.3779 19.067 17.681 19.1879 17.9957 19.1852C18.3103 19.1825 18.6113 19.0563 18.8338 18.8338C19.0563 18.6113 19.1825 18.3103 19.1852 17.9957C19.1879 17.681 19.067 17.3779 18.8484 17.1516L15.2484 13.5516C15.2083 13.5114 15.1654 13.4741 15.12 13.44C16.056 12.192 16.626 10.708 16.7661 9.15437C16.9062 7.60069 16.6108 6.03869 15.9132 4.64341C15.2155 3.24812 14.1431 2.07466 12.8161 1.25453C11.4891 0.434403 9.95998 0 8.4 0Z"
                  fill="#777777"
                />
              </svg>
            </div>
            <input
              ref={searchRef}
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
                setSearchValue(e.target.value);
              }}
              type="text"
              placeholder="Искать..."
              className={Styles.search_input}
            />
            {value && (
              <div className={Styles.close} onClick={clearSearchValue}></div>
            )}
          </div>
          <Link to="/cart">
            <div className={Styles.right_side}>
              <div className={Styles.cart}>
                <div className={Styles.cart_elems}>
                  <div className={Styles.total_price}>{price} р</div>

                  <div className={Styles.cart_delimiter}>
                    <svg
                      width="2"
                      height="39"
                      viewBox="0 0 2 39"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <line
                        x1="1"
                        x2="1"
                        y2="39"
                        stroke="white"
                        stroke-width="2"
                      />
                    </svg>
                  </div>

                  <div className={Styles.cart_img}>
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.3695 20.7656C16.6687 20.7656 16.1117 20.2086 16.1117 19.5078C16.1117 18.807 16.6687 18.25 17.3695 18.25C18.0703 18.25 18.6273 18.807 18.6273 19.5078C18.6273 20.2086 18.0523 20.7656 17.3695 20.7656ZM7.30703 20.7656C6.60625 20.7656 6.04922 20.2086 6.04922 19.5078C6.04922 18.807 6.60625 18.25 7.30703 18.25C8.00781 18.25 8.56484 18.807 8.56484 19.5078C8.56484 20.2086 7.98984 20.7656 7.30703 20.7656ZM7.10937 17.1719C6.15703 17.1719 5.33047 16.4172 5.22266 15.4648L4.00078 6.87578L3.3 2.86875C3.24609 2.4375 2.86875 2.07812 2.45547 2.07812H1.53906C1.23359 2.07812 1 1.84453 1 1.53906C1 1.23359 1.23359 1 1.53906 1H2.45547C3.40781 1 4.25234 1.75469 4.37812 2.70703L5.07891 6.71406L6.30078 15.3211C6.33672 15.7344 6.71406 16.0938 7.10937 16.0938H18.7891C19.0945 16.0938 19.3281 16.3273 19.3281 16.6328C19.3281 16.9383 19.0945 17.1719 18.7891 17.1719H7.10937ZM8.00781 14.2969C7.72031 14.2969 7.48672 14.0812 7.46875 13.7937C7.45078 13.65 7.50469 13.5063 7.59453 13.3984C7.68437 13.2906 7.82812 13.2188 7.95391 13.2188L17.7109 12.5C18.1422 12.5 18.5195 12.1586 18.5734 11.7453L19.7055 5.27656C19.7414 4.97109 19.6516 4.64766 19.4719 4.45C19.3461 4.30625 19.1844 4.23438 18.9867 4.23438H6.57031C6.26484 4.23438 6.03125 4.00078 6.03125 3.69531C6.03125 3.38984 6.26484 3.15625 6.57031 3.15625H19.0227C19.5258 3.15625 19.975 3.37188 20.3164 3.73125C20.6937 4.1625 20.8734 4.79141 20.8016 5.42031L19.6695 11.8891C19.5617 12.8234 18.7172 13.5602 17.7828 13.5602L8.07969 14.2789C8.04375 14.2969 8.02578 14.2969 8.00781 14.2969Z"
                        fill="white"
                        stroke="white"
                        stroke-width="0.78125"
                      />
                    </svg>
                  </div>

                  <div className={Styles.count}>{productsCount}</div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
