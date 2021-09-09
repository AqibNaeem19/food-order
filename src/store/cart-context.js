import React from "react";

 const CartContext = React.createContext({
  items: [],
  totalamount: 0,
  addItem: (item) => {},
  removeItem: (item) => {},
});

export default CartContext;
