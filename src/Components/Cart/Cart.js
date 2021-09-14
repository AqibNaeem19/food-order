import React, { useContext } from 'react';
import Modal from "../UI/Modal";
import CartItem from './CartItem';
import CardContext from '../../store/cart-context';
import classes from "./Cart.module.css";

const Cart = (props) => {
 const cartCTX =  useContext(CardContext);
  
 const hasItems = cartCTX.items.length > 0;
 const totalAmount = `$ ${cartCTX.totalAmount.toFixed(2)}`;

 const cartItemRemovehandler = id => {

 }

 const cartItemAddhandler = item => {

 }

  const cartItemsRender = cartCTX.items.map((cartItem) => {
    return <CartItem key={cartItem.id} name={cartItem.name} amount={cartItem.amount} price={cartItem.price} onRemove={cartItemRemovehandler.bind(null, cartItem.id)} onAdd={cartItemAddhandler.bind(null, cartItem)} />
  });

  return (
    <Modal onClose={props.onCloseCart}>
      <ul className={classes['cart-items']}>{cartItemsRender}</ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{ totalAmount }</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onCloseCart}>Close</button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
