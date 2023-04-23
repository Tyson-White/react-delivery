import React from "react";
import Styles from "./Pagination.module.scss";
import { setSelectedPage } from "../../redux/slices/filterSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Pagination({ pageCount, selectedPage }) {
  const createLi = () => {
    const list = [];

    for (var i = 1; i < pageCount; i++) {
      list.push(i);
    }

    return list;
  };

  const page = useSelector((state) => state.filter.selectedPage);

  const dispatch = useDispatch();

  return (
    <div className={Styles.root}>
      <button
        onClick={() => dispatch(setSelectedPage(page - 1))}
        className={Styles.arrow_left}
      >{`<`}</button>
      <ul className={Styles.pages}>
        {createLi().map((item, i) => (
          <li
            key={i}
            onClick={() => dispatch(setSelectedPage(i))}
            className={selectedPage === i ? Styles.selected : undefined}
          >
            {item}
          </li>
        ))}
      </ul>
      <button
        onClick={() => dispatch(setSelectedPage(page + 1))}
        className={Styles.arrow_right}
      >{`>`}</button>
    </div>
  );
}
