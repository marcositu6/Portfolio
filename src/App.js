import "./App.scss";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/Header/Header";

function App() {
  return (
    <div className="container">
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </div>
  );
}

export default App;
