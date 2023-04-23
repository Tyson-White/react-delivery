import React, { useContext } from "react";
import Styles from "./product.module.scss";
import { useSelector } from "react-redux";

export default function Index(props) {
  const [size, setSize] = React.useState("small");

  const changeSize = (size) => {
    setSize(size);
  };

  const addToCart = () => {
    props.onClickAdd(props);
  };

  const goToProduct = (id) => {};

  return (
    <>
      <div className={Styles.product}>
        <div
          onClick={goToProduct(props.productID)}
          className={Styles.product_img}
        >
          <img src={props.productImgURL} alt={props.productName} />
        </div>
        <div className={Styles.product_name}>{props.productName}</div>
        <div className={Styles.product_info}>
          <div className={Styles.select_size}>
            <div className={Styles.select_content}>
              <div
                className={
                  size === "small"
                    ? `${Styles.size} ${Styles.selected}`
                    : Styles.size
                }
                onClick={() => {
                  changeSize("small");
                }}
              >
                маленький
              </div>

              <div
                className={
                  size === "big"
                    ? `${Styles.size} ${Styles.selected}`
                    : Styles.size
                }
                onClick={() => {
                  changeSize("big");
                }}
              >
                большой
              </div>
            </div>
          </div>
        </div>
        <div className={Styles.price_and_add}>
          <div className={Styles.price}>
            {size === "big" ? props.bigPrice : props.productPrice} руб.
          </div>
          <button
            className={Styles.add}
            onClick={() => {
              addToCart();
            }}
          >
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
          </button>
        </div>
      </div>
    </>
  );
}
