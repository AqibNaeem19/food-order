import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartItems = [
    { id: "c1", name: "Sushi", amount: 2, price: 12.99 },
    { id: "c2", name: "Pizza", amount: 1, price: 22.0 },
  ];

  const cartItemsRender = cartItems.map((cartItem) => {
    return <li>{cartItem.name}</li>;
  });

  return (
    <div>
      <ul>{cartItemsRender}</ul>

      <div classname={classes.total}>
        <span>Total Amount</span>
        <span> 35,62</span>
      </div>
      <div classname={classes.actions}>
        <button className={classes["button--alt"]}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </div>
  );
};

export default Cart;
