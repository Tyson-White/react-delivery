import React, { useContext, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages
import Manepage from "./pages/Manepage";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
// pages

function App() {
  const [cartItems, setCartItems] = React.useState([]);

  const addToCart = (item, index) => {
    setCartItems([...cartItems, item]);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <Manepage onClickAdd={(item, index) => addToCart(item, index)} />
            }
          ></Route>
          <Route path="/cart" element={<Cart cartItems={cartItems} />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
