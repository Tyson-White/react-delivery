import React from "react";
import axios from "axios";
import debounce from "lodash.debounce";
import { useSelector, useDispatch } from "react-redux";
import { setActiveCategory, setSortType } from "../../redux/slices/filterSlice";

// components
import Header from "../../compopnent/Header";
import Filter from "../../compopnent/Filter";
import Product from "../../compopnent/Product";
import Sort from "../../compopnent/Sort";
import Skeleton from "../../compopnent/Skeleton";
import Pagination from "../../compopnent/Pagination";
// components

export default function Index({ onClickAdd }) {
  const [items, setItems] = React.useState();
  const [isLoading, setIsLoading] = React.useState(true);
  const [searchValue, setSearchValue] = React.useState("");

  const selectedPage = useSelector((state) => state.pagination.selectedPage);
  const sortType = useSelector((state) => state.filter.sortType);
  const activeFilter = useSelector((state) => state.filter.activeCategory);

  const dispatch = useDispatch();

  const search = searchValue ? `&search=${searchValue}` : "";
  const filterCheck = activeFilter > 0 ? `category=${activeFilter}` : "";
  const totalRef = `https://6428422a46fd35eb7c4efbb3.mockapi.io/items?&page=${
    selectedPage + 1
  }&limit=8&${`${filterCheck}&sortBy=${sortType.sort}&order=desc${search}`}`;

  const setValue = React.useCallback(
    debounce((value) => {
      setSearchValue(value);
    }, 250),
    []
  );

  React.useEffect(() => {
    setIsLoading(true);

    axios.get(totalRef).then((res) => {
      setIsLoading(false);
      setItems(res.data);
    });
  }, [activeFilter, sortType, searchValue, selectedPage]);

  const productRender =
    items &&
    items.map((obj, i) => (
      <Product key={obj.productID + obj.productName} {...obj} />
    ));
  const skeleton = [...new Array(8)].map((obj, i) => <Skeleton key={i} />);

  return (
    <>
      <div className="wrapper">
        <Header
          searchValue={searchValue}
          setSearchValue={(value) => setValue(value)}
        />
        <div className="subHeader">
          <Filter
            value={activeFilter}
            onClickFilter={(item) => dispatch(setActiveCategory(item))}
          />
          <Sort
            value={sortType}
            onClickFilter={(item) => dispatch(setSortType(item))}
          />
        </div>
        <div className="container">
          <div className="main">{isLoading ? skeleton : productRender}</div>
          <div className="pagination">
            <Pagination selectedPage={selectedPage} pageCount={3} />
          </div>
        </div>
      </div>
    </>
  );
}
