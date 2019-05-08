import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { AppContainer } from "react-hot-loader";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import lyricsReduser from "./reducers/lyrics-reducer";

const render = Component => {
  let store = createStore(lyricsReduser);
  let unsubscribe = store.subscribe(() => console.log(store.getState()));
  console.log(store.getState());
  ReactDOM.render(
    <HashRouter>
      <Provider store={store}>
        <Component />
      </Provider>
    </HashRouter>,
    document.getElementById("react-app-root")
  );
};

render(App);

/*eslint-disable */
if (module.hot) {
  module.hot.accept("./components/App", () => {
    render(App);
  });
}
