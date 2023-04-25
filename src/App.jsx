import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";


// pages
import Manepage from "./pages/Manepage";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import CartEmpty from "./pages/CartEmpty";
// pages

function App() {
  const cartItems = useSelector(state => state.products.cartList)

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <Manepage />
            }
          ></Route>
          <Route path="/cart" element={cartItems.length > 0 ? <Cart cartItems={cartItems} /> : <CartEmpty/>} ></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
