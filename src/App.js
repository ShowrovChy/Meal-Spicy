import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Shared/Header/Header";
import Home from "./components/Home/Home/Home";
import Breakfast from "./components/Home/Breakfast/Breakfast";
import NotFound from "./components/NotFound/NotFound";
import Lunch from "./components/Home/Lunch/Lunch";
import Dinner from "./components/Home/Dinner/Dinner";
import Services from "./components/Services/Services";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>

          <Route path="/services">
            <Services></Services>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>

          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;