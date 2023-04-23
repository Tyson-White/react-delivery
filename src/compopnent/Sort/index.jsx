import React from "react";
import Styles from "./Sort.module.scss";
import { useSelector } from "react-redux";

export const sortList = [
  { name: "популярности", sort: "rating" },
  { name: "цене", sort: "productPrice" },
  { name: "алфавиту", sort: "productName" },
];

export default function Index({ value, onClickFilter }) {
  const [activeSelSort, setActiveSelSort] = React.useState(false);
  const activeSort = useSelector((state) => state.filter.sortType);
  const sortRef = React.useRef();
  React.useEffect(() => {
    document.addEventListener("click", (e) => {
      e.preventDefault();
      if (e.composedPath().includes(sortRef.current) === false) {
        setActiveSelSort(false);
      }
    });
  }, []);

  return (
    <>
      <div ref={sortRef} className={Styles.sort_wrapper}>
        <div className={Styles.sort_selected}>
          Сортировка по:{" "}
          <span onClick={() => setActiveSelSort(!activeSelSort)}>
            {activeSort.name}
          </span>
        </div>

        <div
          className={
            activeSelSort ? `${Styles.popup} ${Styles.showPopup}` : Styles.popup
          }
        >
          <ul className={Styles.popup_list}>
            {sortList.map((item, i) => (
              <li
                key={i + item.name}
                className={
                  value.name === item.name ? Styles.activeSort : undefined
                }
                onClick={() => {
                  onClickFilter(item);
                  setActiveSelSort(false);
                }}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
