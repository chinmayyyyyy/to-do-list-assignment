// index.js
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux"; // Import Provider
import store from "./redux/store"; // Import your Redux store
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
