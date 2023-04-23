import React from "react";

import Styles from "./Cart.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

// img
import del from "../../assets/icons/delete-1-svgrepo-com.svg";
// img

// components
import Header from "../../compopnent/Header";
import { clearCart } from "../../redux/slices/productsSlice";
// components

export default function Index(props) {
  const cartItems = useSelector((state) => state.products.cartList);
  const dispatch = useDispatch();

  const price = useSelector((state) => state.products.totalPrice);
  console.log(price);

  return (
    <>
      <div className="wrapper">
        <Header />

        <div className={Styles.cart_content}>
          <div className={Styles.cart_content__header}>
            <div className={Styles.title}>Корзина</div>
            <div
              onClick={() => dispatch(clearCart())}
              className={Styles.clear_cart}
            >
              Очистить корзину
            </div>
          </div>

          <div className={Styles.added_products}>
            {cartItems &&
              cartItems.map((item) => (
                <div className={Styles.added_product}>
                  <div className={Styles.product_info}>
                    <div className={Styles.product_img}>
                      <img src={item.productImgURL} width={100} alt="" />
                    </div>
                    <div className={Styles.product_name}>
                      {item.productName}
                    </div>
                  </div>

                  <div className={Styles.product_price}>
                    {item.productPrice} руб.
                  </div>

                  <div className={Styles.product_actions}>
                    <div className={Styles.add_product}>
                      <button className={Styles.minus}>-</button>
                      <div className={Styles.current}>2</div>
                      <button className={Styles.plus}>+</button>
                    </div>
                    <div className={Styles.delete_product}>
                      <svg
                        width="25px"
                        height="25px"
                        viewBox="0 -0.5 21 21"
                        version="1.1"
                        fill="#000000"
                      >
                        <g id="SVGRepo_bgCarrier" stroke-width="0" />

                        <g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />

                        <g id="SVGRepo_iconCarrier">
                          {" "}
                          <title>delete [#589529]</title>{" "}
                          <desc>Created with Sketch.</desc> <defs> </defs>{" "}
                          <g
                            id="Page-1"
                            stroke="none"
                            stroke-width="1"
                            fill="none"
                            fill-rule="evenodd"
                          >
                            {" "}
                            <g
                              id="Dribbble-Light-Preview"
                              transform="translate(-179.000000, -360.000000)"
                              fill="#589529"
                            >
                              {" "}
                              <g
                                id="icons"
                                transform="translate(56.000000, 160.000000)"
                              >
                                {" "}
                                <path
                                  d="M130.35,216 L132.45,216 L132.45,208 L130.35,208 L130.35,216 Z M134.55,216 L136.65,216 L136.65,208 L134.55,208 L134.55,216 Z M128.25,218 L138.75,218 L138.75,206 L128.25,206 L128.25,218 Z M130.35,204 L136.65,204 L136.65,202 L130.35,202 L130.35,204 Z M138.75,204 L138.75,200 L128.25,200 L128.25,204 L123,204 L123,206 L126.15,206 L126.15,220 L140.85,220 L140.85,206 L144,206 L144,204 L138.75,204 Z"
                                  id="delete-[#589529]"
                                >
                                  {" "}
                                </path>{" "}
                              </g>{" "}
                            </g>{" "}
                          </g>{" "}
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          <div className={Styles.cart_footer}>
            <div className={Styles.cart_info}>
              <div className={Styles.count_products}>
                Всего товаров: <span>{cartItems.length}</span>
              </div>
              <div className={Styles.total_price}>
                Сумма заказа: <span>{price} руб</span>
              </div>
            </div>
            <div className={Styles.buttons}>
              <Link to={"/"}>
                <button className={Styles.backToHome}>Вернуться</button>
              </Link>
              {cartItems.length > 0 && <button>Оплатить</button>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
