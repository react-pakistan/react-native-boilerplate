/*
  Author: Taimoor Khan
  GitHub: https://github.com/Taimoormk
  Email: taimoor.m.k AT LIVE.COM 
*/

// ########## Import Dependencies Here ##########
import { AppRegistry } from "react-native";
import React, { Component } from "react";
import { Provider } from "react-redux";

// ########## Import Components Here ##########
import App from "./App";
import { name as appName } from "./app.json";
import configureStore from "./src/config/store";

// configuration to debug network requests in RN
XMLHttpRequest = GLOBAL.originalXMLHttpRequest ? GLOBAL.originalXMLHttpRequest : GLOBAL.XMLHttpRequest;

// get store and middleware configured
const store = configureStore();

class RN08 extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

AppRegistry.registerComponent(appName, () => RN08);
