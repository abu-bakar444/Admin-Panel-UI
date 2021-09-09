import React from "react";
import Drawer from "@material-ui/core/Drawer";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
//Icons
import HomeIcon from "@material-ui/icons/Home";
import RestaurantMenuIcon from "@material-ui/icons/RestaurantMenu";
import ChatIcon from "@material-ui/icons/Chat";
import RestaurantIcon from "@material-ui/icons/Restaurant";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
//styles
import makeStyles from "@material-ui/core/styles/makeStyles";
//React Router
import { withRouter } from "react-router-dom";

const useStyles = makeStyles({
  navbar: {},
  navbarPaper: {
    width: "190",
    backgroundColor: "#233044",
    color: "white",
  },
});

function Navbar(props) {
  const { history } = props;
  const classes = useStyles();
  const itemsList = [
    {
      text: "Home",
      icon: <HomeIcon style={{ color: "#eeeeee" }} />,
      onClick: () => history.push("/"),
    },
    {
      text: "Restaurants",
      icon: <RestaurantMenuIcon style={{ color: "#eeeeee" }} />,
      onClick: () => history.push("/restaurants"),
    },
    {
      text: "Chat",
      icon: <ChatIcon style={{ color: "#eeeeee" }} />,
      onClick: () => history.push("/chat"),
    },
    {
      text: "Dishes",
      icon: <RestaurantIcon style={{ color: "#eeeeee" }} />,
      onClick: () => history.push("/dishes"),
    },
    {
      text: "Orders",
      icon: <ShoppingCartIcon style={{ color: "#eeeeee" }} />,
      onClick: () => history.push("/orders"),
    },
    {
      text: "Pricing",
      icon: <AttachMoneyIcon style={{ color: "#eeeeee" }} />,
      onClick: () => history.push("/pricing"),
    },
    {
      text: "Profile",
      icon: <AccountCircleIcon style={{ color: "#eeeeee" }} />,
      onClick: () => history.push("/profile"),
    },
  ];
  return (
    <Drawer
      variant="permanent"
      className={classes.navbar}
      classes={{
        paper: classes.navbarPaper,
      }}
    >
      <List>
        {itemsList.map((item, index) => {
          const { text, icon, onClick } = item;
          return (
            <ListItem button key={text} onClick={onClick}>
              {icon && <ListItemIcon>{icon}</ListItemIcon>}
              <ListItemText primary={text} />
            </ListItem>
          );
        })}
      </List>
    </Drawer>
  );
}

export default withRouter(Navbar);
