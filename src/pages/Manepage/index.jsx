import React from "react";
import axios from "axios";
import debounce from "lodash.debounce";
import { useSelector, useDispatch } from "react-redux";
import { setProductsList } from "../../redux/slices/productsSlice";
import {
  setActiveCategory,
  setSortType,
  setFilters,
} from "../../redux/slices/filterSlice";
import { useNavigate } from "react-router-dom";
import qs from "qs";

// components
import Header from "../../compopnent/Header";
import Filter from "../../compopnent/Filter";
import Product from "../../compopnent/Product";
import Sort, { sortList } from "../../compopnent/Sort";
import Skeleton from "../../compopnent/Skeleton";
import Pagination from "../../compopnent/Pagination";
// components

export default function Index({ onClickAdd }) {
  const navigate = useNavigate();
  const items = useSelector((state) => state.products.productsList);
  const [isLoading, setIsLoading] = React.useState(true);
  const [searchValue, setSearchValue] = React.useState("");

  const selectedPage = useSelector((state) => state.filter.selectedPage);
  const sortType = useSelector((state) => state.filter.sortType);
  const activeFilter = useSelector((state) => state.filter.activeCategory);

  const dispatch = useDispatch();

  const setValue = React.useCallback(
    debounce((value) => {
      setSearchValue(value);
    }, 250),
    []
  );

  React.useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));

      const sortBy = sortList.find((obj) => obj.sort === params.sortBy);

      dispatch(setFilters({ ...params, sortBy }));
    }

    window.scrollTo(0, 0);
  }, []);

  React.useEffect(() => {
    const search = searchValue ? `&search=${searchValue}` : "";
    const filterCheck = activeFilter > 0 ? `&category=${activeFilter}` : "";
    const totalRef = `https://6428422a46fd35eb7c4efbb3.mockapi.io/items?&page=${
      selectedPage + 1
    }&limit=8${`${filterCheck}&sortBy=${sortType.sort}&order=desc${search}`}`;

    setIsLoading(true);

    axios.get(totalRef).then((res) => {
      setIsLoading(false);
      dispatch(setProductsList(res.data));
    });
  }, [activeFilter, sortType, searchValue, selectedPage]);

  React.useEffect(() => {
    const queryString = qs.stringify({
      sortBy: sortType.sort,
      activeFilter,
      selectedPage,
    });
    navigate(`?${queryString}`);
  }, [activeFilter, sortType, selectedPage]);

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
