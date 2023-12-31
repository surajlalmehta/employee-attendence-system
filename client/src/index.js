//import package
import React from "react";
import ReactDOM from "react-dom/client";
import { store } from "./redux-toolkit/store/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore} from 'redux-persist'
import reportWebVitals from './reportWebVitals';
//import custom

import "./index.css";
import App from "./App";

let persistor = persistStore(store);
//initail Appp

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
