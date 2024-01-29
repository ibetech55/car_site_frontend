import { ConfigProvider } from "antd";
import AppRoutes from "./Routes";
import { theme } from "./Theme/Antd";
import './App.scss';
import { RootState } from "./State";
import { useSelector } from "react-redux";

function App() {
  const authData = useSelector((state: RootState) => state);
console.log(authData)
  return (
    <div>
      <ConfigProvider {...theme}>
        <AppRoutes />
      </ConfigProvider>
    </div>
  );
}

export default App;
