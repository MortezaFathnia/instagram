import React from "react";
import { Switch } from "react-router-dom";
import PrivateRoutes from "./components/authRoutes/PrivateRoutes";
import PublicRoutes from "./components/authRoutes/PublicRoutes";
import SignIn from "./components/signin";


const Routes = (props) => {
  return (
      <Switch>
        <PublicRoutes exact restricted={true} path="/" component={SignIn} />
      </Switch>
  )
}

export default Routes;
