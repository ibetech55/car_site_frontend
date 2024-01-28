import { ConfigProvider } from "antd";
import AppRoutes from "./Routes";
import { theme } from "./Theme/Antd";
import './App.scss';

function App() {
  return (
    <div>
      <ConfigProvider {...theme}>
        <AppRoutes />
      </ConfigProvider>
    </div>
  );
}

export default App;
