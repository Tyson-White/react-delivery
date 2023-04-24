import React from "react";
import Styles from "./Popup.module.scss";
export default function index(props) {
  return (
    <>
      <div
        className={
          props.active ? `${Styles.popUp} ${Styles.active}` : Styles.popUp
        }
      >
        <div className={Styles.popUp_content}>Товар был убран из корзины!</div>
      </div>
    </>
  );
}
