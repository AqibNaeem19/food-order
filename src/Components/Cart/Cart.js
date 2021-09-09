import Modal from "../UI/Modal";
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
    <Modal onClose={props.onCloseCart}>
      <ul className={classes['cart-items']}>{cartItemsRender}</ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span> 35,62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onCloseCart}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
