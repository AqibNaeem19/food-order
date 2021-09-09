import React, { useState } from "react";
import Cart from './Components/Cart/Cart';
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";

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
    <React.Fragment>
      {cartIsShown && <Cart onCloseCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </React.Fragment>
  );
}

export default App;
