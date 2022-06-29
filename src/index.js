import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import Provider from './components/Provider'

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

function createStore() {
  var state = {
    name: "麦乐",
    age: 18,
  }

  let listeners = []

  function getState() {
    return {...state};
  }
  function subscribe(fun) {
    if(listeners.indexOf(fun) === -1) {
      listeners.push(fun)
    }
  }

  function dispatch(s) {
    state = {...s};
    listeners.forEach((fun) => {
      fun(state)
    })
  }

  return {
    getState,
    dispatch,
    subscribe
  }
}



window.store = createStore();

root.render(
  <StrictMode>
    <Provider store={window.store}>
      <App />
    </Provider>
  </StrictMode>
);
