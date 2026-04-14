import "./App.css";
import LoginPage from "./pages/login";
import IndexPage from "./pages/index";
import DashboardPage from "./pages/dashboard";
import { useState } from "react";
function App() {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const [authUser, setAuthUser] = useState(null);
  return (
    <>
      {isLoggedIn ? (
        <DashboardPage authUser={authUser} setAuthUser={setAuthUser} />
      ) : (
        <LoginPage setisLoggedIn={setisLoggedIn} setAuthUser={setAuthUser} />
      )}
    </>
  );
}

export default App;
