import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import PaginaFeed from "./views/PaginaFeed";
import PaginaPostar from "./views/PaginaPostar";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={PaginaFeed} />
        <Route path='/postar' component={PaginaPostar} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
