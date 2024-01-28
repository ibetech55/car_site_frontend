// import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import SignIn from "../Pages/SignIn";
import Options from "../Pages/Options";
import RegisterDealership from "../Components/Site/RegisterDealership";
import RegisterUser from "../Components/Site/RegisterUser";

function AppRoutes() {
  // const [auth, setAuth] = useState(false);

  return (
    <div>
      {/* <BrowserRouter>
        <Routes>
          {auth ? (
            <Route>
            </Route>
          ) : (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
            </>
          )}
        </Routes>
      </BrowserRouter> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/options" element={<Options />} />
          <Route path="/register_dealership" element={<RegisterDealership />} />
          <Route path="/register_user" element={<RegisterUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default AppRoutes;
