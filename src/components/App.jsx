import React from "react";
import { CssBaseline } from "@mui/material";
import { Route, Switch } from "react-router-dom";

const App = () =>{
  return(
    <div>
    <CssBaseline/>
      <Switch >
        <h1>Hello Netflix</h1>
      </Switch>
    </div>
  )
}


export default App;