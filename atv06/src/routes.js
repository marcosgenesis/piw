import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import PaginaFeed from "./views/PaginaFeed";
import PaginaPostar from "./views/PaginaPostar";
import PaginaCadastro from "./views/paginaCadastro";
import PaginaLogin from "./views/PaginaLogin";

function Router() {
  
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={PaginaFeed} />
        <Route path='/postar' component={PaginaPostar} />
        <Route path='/cadastro' component={PaginaCadastro} />
        <Route path='/login' component={PaginaLogin} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
