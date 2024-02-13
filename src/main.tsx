import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { store } from "./State/index.ts";
import { Provider } from "react-redux";
import { ConfigProvider } from "antd";
import { theme } from "./Theme/Antd";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ConfigProvider {...theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ConfigProvider>
  </React.StrictMode>
);
