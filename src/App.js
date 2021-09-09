import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import UpperNav from "./components/UpperNav";
import Restaurants from "./components/Restaurants";
import Chat from "./components/Chat";
import makeStyles from "@material-ui/core/styles/makeStyles";
import ChatWindow from "./components/ChatWindow";
import "./App.css";

const useStyles = makeStyles({
  container: {
    display: "flex",
  },
});

function App() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Router>
        <Navbar />
        <div className="homeContent">
          <UpperNav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/restaurants" exact component={Restaurants} />
            <Route path="/Chat" exact component={Chat}></Route>
            <Route path="/ChatWindow" exact component={ChatWindow}></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
