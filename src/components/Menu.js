import "./Menu.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
const Menu = () => {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  const rotiHandler = (event) => {
    setCount((preValue) => {
      return preValue + 1;
    });
    dispatch({
      type: "Butter Roti",
      count: 1,
      image:
        "https://www.cookwithmanali.com/wp-content/uploads/2021/07/Tandoori-Roti-500x500.jpg",
    });
    event.target.disabled = true;
  };
  const pickleHandler = (event) => {
    setCount((preValue) => {
      return preValue + 1;
    });
    dispatch({
      type: "Pickle",
      count: 1,
      image:
        "https://cdn.shopify.com/s/files/1/1797/4963/products/Mix-Pickle-5_1200x1200.jpg?v=1505996529",
    });
    event.target.disabled = true;
  };
  const curdHandler = (event) => {
    setCount((preValue) => {
      return preValue + 1;
    });
    dispatch({
      type: "Curd",
      count: 1,
      image:
        "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/03/hung-curd-recipe.jpg",
    });
    event.target.disabled = true;
  };
  const daalHandler = (event) => {
    setCount((preValue) => {
      return preValue + 1;
    });
    dispatch({
      type: "Daal Makhni",
      count: 1,
      image:
        "https://www.awesomecuisine.com/wp-content/uploads/2014/06/dal-makhani.jpg",
    });
    event.target.disabled = true;
  };
  const paneerHandler = (event) => {
    setCount((preValue) => {
      return preValue + 1;
    });
    dispatch({
      type: "Paneer Lababdar",
      count: 1,
      image:
        "https://www.awesomecuisine.com/wp-content/uploads/2022/07/Paneer-Lababdar.jpg",
    });
    event.target.disabled = true;
  };
  const gulabHandler = (event) => {
    setCount((preValue) => {
      return preValue + 1;
    });
    dispatch({
      type: "Gulab Jamun",
      count: 1,
      image:
        "https://www.spiceupthecurry.com/wp-content/uploads/2020/08/gulab-jamun-recipe-2-500x500.jpg",
    });
    event.target.disabled = true;
  };
  return (
    <div>
      <div className="top">
        <p className="select">Menu Card</p>
        <p className="select">Please Make Your Selection</p>
      </div>
      <div className="menu">
        <img
          src="https://www.cookwithmanali.com/wp-content/uploads/2021/07/Tandoori-Roti-500x500.jpg"
          alt="butter roti"
          className="image"
        />
        <h1 className="amount">₹15/- per pcs.</h1>
        <button className="bttn" onClick={rotiHandler}>
          Butter Roti
        </button>
      </div>
      <div className="menu">
        <img
          src="https://cdn.shopify.com/s/files/1/1797/4963/products/Mix-Pickle-5_1200x1200.jpg?v=1505996529"
          alt="pickle"
          className="image"
        />
        <h1 className="amount">₹10/- per serving</h1>
        <button className="bttn" onClick={pickleHandler}>
          Pickle
        </button>
      </div>
      <div className="menu">
        <img
          src="https://www.indianhealthyrecipes.com/wp-content/uploads/2022/03/hung-curd-recipe.jpg"
          alt="curd"
          className="image"
        />
        <h1 className="amount">₹30/- per bowl</h1>
        <button className="bttn" onClick={curdHandler}>
          Curd
        </button>
      </div>
      <div className="menu">
        <img
          src="https://www.awesomecuisine.com/wp-content/uploads/2014/06/dal-makhani.jpg"
          alt="daal makhni"
          className="image"
        />
        <h1 className="amount">₹180/- per handi</h1>
        <button className="bttn" onClick={daalHandler}>
          Daal Makhni
        </button>
      </div>
      <div className="menu">
        <img
          src="https://www.awesomecuisine.com/wp-content/uploads/2022/07/Paneer-Lababdar.jpg"
          alt="paneer lababdar"
          className="image"
        />
        <h1 className="amount">₹220/- per handi</h1>
        <button className="bttn" onClick={paneerHandler}>
          Paneer Lababdar
        </button>
      </div>
      <div className="menu">
        <img
          src="https://www.spiceupthecurry.com/wp-content/uploads/2020/08/gulab-jamun-recipe-2-500x500.jpg"
          alt="gulab jamun"
          className="image"
        />
        <h1 className="amount">₹40/- per pcs.</h1>
        <button className="bttn" onClick={gulabHandler}>
          Gulab Jamun
        </button>
      </div>
      <div>
        {count >= 2 ? (
          ""
        ) : (
          <p className="info warn">
            Dear User, Please Add atleast Two Items from Menu to enable Checkout
          </p>
        )}

        <p className="info">
          Dear User, You can increase the Quantity of Items or Remove Items on
          Next Page
        </p>
      </div>
      <div>
        {count >= 2 ? (
          <Link to="/Order-Details">
            <button className="cart">Add to Cart</button>
          </Link>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
export default Menu;
