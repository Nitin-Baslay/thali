import "./App.css";
import Header from "./components/Header";
import Menu from "./components/Menu";
import { Route, Switch } from "react-router-dom";
import Thali from "./components/Thali";
import Checkout from "./components/Checkout";
function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact>
          <Menu />
        </Route>
        <Route path="/Order-Details" exact>
          <Thali />
        </Route>
        <Route path="/Order-Details/Checkout">
          <Checkout />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
