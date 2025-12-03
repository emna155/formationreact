import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Cart from "./views/Cart"
import { CartProvider} from "views/CartContext";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";
import Checkout from "views/Checkout";
// layouts
import Admin from "layouts/Admin.js";
import Auth from "layouts/Auth.js";

// views without layouts

import Landing from "views/Landing.js";
import Profile from "views/Profile.js";
import Index from "views/Index.js";
import Catalogue from "views/Catalogue.js";

ReactDOM.render(
  <BrowserRouter>
    <CartProvider>
    <Switch>
      {/* add routes with layouts */}
      <Route path="/admin" component={Admin} />
      <Route path="/auth" component={Auth} />
      {/* add routes without layouts */}
      
      <Route path="/landing" exact component={Landing} />
      <Route path="/profile" exact component={Profile} />
      <Route path="/catalogue" exact component={Catalogue} />
<Route path="/checkout" component={Checkout} />

      <Route path="/" exact component={Index} />
      <Route path="/cart" exact component={Cart} />


      {/* add redirect for first page */}
      <Redirect from="*" to="/" />
    </Switch>
       </CartProvider>   

  </BrowserRouter>,
  document.getElementById("root")
);
