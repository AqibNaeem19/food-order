import React from "react";
import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>Foodies</h1>
        <button>Cart</button>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="Table full of foods" />
      </div>
    </React.Fragment>
  );
};

export default Header;
