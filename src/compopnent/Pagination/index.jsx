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
      >
        <svg viewBox="0 0 24 24"  fill="#000000" transform="rotate(180)"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title></title> <g id="Complete"> <g id="F-Chevron"> <polyline fill="none" id="Right" points="8.5 5 15.5 12 8.5 19" stroke="#9ADB73" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polyline> </g> </g> </g></svg>
      </button>
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
      >
        <svg viewBox="0 0 24 24"  fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title></title> <g id="Complete"> <g id="F-Chevron"> <polyline fill="none" id="Right" points="8.5 5 15.5 12 8.5 19" stroke="#9ADB73" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polyline> </g> </g> </g></svg>
      </button>
    </div>
  );
}
