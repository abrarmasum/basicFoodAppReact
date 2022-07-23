import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const [btnHighlighted, setBtnHighlighted] = useState(false);

  const cartContext = useContext(CartContext);
  const numberofCartItems = cartContext.items.reduce((currNumber, item) => {
    return currNumber + item.amount;
  }, 0);

  const btnclasses = `${classes.button} ${btnHighlighted ? classes.bump : ""}`;

  const { items } = cartContext;

  useEffect(() => {
    if (items.length === 0) return;
    setBtnHighlighted(true);
    const timer = setTimeout(() => {
      setBtnHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
    console.log("HeaderCartButton: useEffect");
  }, [items]);

  return (
    <button className={btnclasses} onClick={props.onClick}>
      <span>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberofCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
