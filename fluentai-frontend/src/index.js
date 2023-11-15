import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persister } from "./AppRedux/store/store";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { googleAuthKey } from "./config";

const container = document.getElementById("root");

// Create a root.
const root = createRoot(container);

// Initial render
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persister}>
        <GoogleOAuthProvider clientId={googleAuthKey}>
          <App />
        </GoogleOAuthProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
