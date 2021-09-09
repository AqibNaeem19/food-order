import React, { useState } from "react";
import Cart from './Components/Cart/Cart';
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import CartProvider from './store/CartProvider';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  
  // Enables shopping cart overlay.
  const showCartHandler = () => {
    setCartIsShown(true);
  }

  // Disables shopping cart overlay.
  const hideCartHandler = () => {
    setCartIsShown(false);
  }

  return (
    <CartProvider>
      {cartIsShown && <Cart onCloseCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
