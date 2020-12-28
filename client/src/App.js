import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import setAuthToken from "./utils/setAuthToken";
import "./App.css";

//COMPONENTS
import Alert from "./components/layout/Alert";
// import Header from "./components/layout/Header";
import Landing from "./components/layout/Landing";
import About from "./components/layout/About";
import Charities from "./components/layout/Charities";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import PurchaseTickets from "./components/auth/PurchaseTickets";
import Cars from "./components/cars/Cars";
import CarDetails from "./components/cars/CarDetails";
import UserDashboard from "./components/dashboard/UserDashboard";
import Password from "./components/edits/Password";
import Drawing from "./components/cars/Drawing";
import Admin from "./components/auth/Admin"
//import PrivateRoute from "./components/routing/PrivateRoute";

//ACTIONS
import { loadUser } from "./actions/auth";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        {/* <Header /> */}
        <Alert />
        <Route exact path='/' component={Landing} />
        <Switch>
          <Route exact path='/register' component={Register} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/purchaseTickets' component={PurchaseTickets} />
          <Route exact path='/admin-priv' component={Admin} />
          <Route exact path='/about' component={About} />
          <Route exact path='/cars' component={Cars} />
          <Route exact path='/carDetails/:id' component={CarDetails} />
          <Route exact path='/charities' component={Charities} />
          <Route exact path='/account' component={UserDashboard} />
          <Route exact path='/cars/results/:id' component={Drawing} />
          <Route exact path='/changePassword' component={Password} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
