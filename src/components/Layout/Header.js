import { Fragment } from "react";
import foodImage from "../../assets/meals.jpeg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1> ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart}> </HeaderCartButton>
      </header>

      <div className="header-logo">
        <img src={foodImage} alt="A table of foods" />
      </div>
    </Fragment>
  );
};
export default Header;
