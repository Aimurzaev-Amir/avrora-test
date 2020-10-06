import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "./Redux/Store";
import "./App.css";
import AvroraContainer from "./Components/AvroraContainer";

function AvroraHoldingApp() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AvroraContainer />
      </Provider>
    </BrowserRouter>
  );
}

export default AvroraHoldingApp;
