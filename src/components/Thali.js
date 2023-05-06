import { Link } from "react-router-dom";
import "./Thali.css";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
const Thali = () => {
  let [state, setState] = useState([]);
  let [count, setCount] = useState(1);
  const dispatch = useDispatch();
  let Data = useSelector((state) => state.image);
  useEffect(() => {
    setState(Data);
  }, []);
  const incrementHandler = (ids) => {
    console.log(window);
    let final = state.map((ele) => {
      if (ele.id == ids) {
        ele.totalCount += 1;
        setCount((preState) => preState + 1);
      }
    });
    return final;
  };
  const decrementHandler = (ids) => {
    let final = state.map((ele) => {
      if (ele.id == ids) {
        ele.totalCount -= 1;
        setCount((preState) => preState - 1);
      }
    });
    return final;
  };
  const removeHandler = (ids) => {
    setState((preData) => {
      let final = preData.filter((ele) => {
        return ele.id !== ids;
      });
      return final;
    });
  };

  dispatch({ type: "filter", data: state });

  return (
    <div className="thali_main">
      <Link to="/">
        <button className="backbtn">Home</button>
      </Link>
      {state.map((ele) => {
        return (
          <div className="finalMenu">
            <img src={ele.image} className="image" />
            <p className="foodName">{ele.name}</p>
            {/* <p>{count}</p> */}
            <div className="quantity">
              <button
                className="bttns1 bttns tops"
                onClick={() => {
                  incrementHandler(ele.id);
                }}
              >
                +
              </button>
              <p className="counts">{ele.totalCount}</p>
              <button
                className="bttns2 bttns tops"
                onClick={() => {
                  decrementHandler(ele.id);
                }}
              >
                -
              </button>
              <div>
                <button
                  className="bttns2 bttns del"
                  onClick={() => {
                    removeHandler(ele.id);
                  }}
                >
                  Remove Item
                </button>
              </div>
            </div>
          </div>
        );
      })}
      <div>
        <Link to="/Order-Details/Checkout">
          <button className="cart">Checkout</button>
        </Link>
      </div>
    </div>
  );
};
export default Thali;
