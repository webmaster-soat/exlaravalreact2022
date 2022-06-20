import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import store from "./redux/store";

import App from "./App";

// As of React 18
// const root = ReactDOM.(document.getElementById("root"));
// root.render(
//     <Provider store={store}>
//         <App />
//     </Provider>
// );

if (document.getElementById("root")) {
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById("root")
    );
}
