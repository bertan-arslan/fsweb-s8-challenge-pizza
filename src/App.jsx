import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import OrderPizza from "./components/OrderPizza";
import Success from "./components/Success";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/OrderPizza">
            <OrderPizza />
          </Route>
          <Route path="/success">
            <Success />
          </Route>
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
