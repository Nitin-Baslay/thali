import "./Checkout.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Checkout = () => {
  const views = useSelector((state) => state.filterImage);
  let finalviews = views[views.length - 1];
  let finalCount = 0;
  let finalSum = 0;
  const totalCount = () => {
    for (let i of finalviews) {
      finalCount += i.totalCount;
      finalSum += i.price * i.totalCount;
    }
  };
  totalCount();

  return (
    <div className="nums">
      <Link to="/Order-Details">
        <button className="backbtn">Cart</button>
      </Link>
      <h1>Final Checkout Summary</h1>
      {finalviews.map((ele) => {
        return (
          <div className="main_container">
            <div className="summary">
              <h4 className="itemname">{ele.name}</h4>
              <h4 className="itemquantity">{ele.totalCount}</h4>
              <h4 className="prices">{ele.price * ele.totalCount}</h4>
              {/* <h4>{ele.price}</h4> */}
            </div>
          </div>
        );
      })}

      <h1>Summary of Order</h1>
      <div>
        <h2>Total Quantity : </h2>
        <h2>{finalCount}</h2>
      </div>
      <div>
        <h2>Total Billing Amount</h2>
        <h2>₹{finalSum}</h2>
      </div>
    </div>
  );
};
export default Checkout;
