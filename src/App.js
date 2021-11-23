import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Clock from "./Components/Clock";
import Container from "./Components/Container";
import Header from "./Components/Header";
import Water from "./Components/Water";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          {/* <Route path="/" component={Header} exact />
          <Route path="/Container" component={Container} exact /> */}
        </Switch>
        <Clock />
        {/* <Water /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
