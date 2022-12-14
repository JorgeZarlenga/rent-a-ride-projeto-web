import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./components";
import Routes from "./routes";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
    </BrowserRouter>
  );
};

export default App;
