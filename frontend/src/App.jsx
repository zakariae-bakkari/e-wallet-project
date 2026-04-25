import "./App.css";
import LoginPage from "./pages/login";
import IndexPage from "./pages/index";
import DashboardPage from "./pages/dashboard";
import { useEffect, useState } from "react";
import EffectJsx from "./effecttest";
function App() {
  const [isLoggedIn, setisLoggedIn] = useState(() => {
    const saved = localStorage.getItem("isLoggedIn");
    return saved ? JSON.parse(saved) : false;
  });

  const [authUser, setAuthUser] = useState(() => {
    const saved = localStorage.getItem("authUser");
    return saved ? JSON.parse(saved) : {
      wallet: {
        transactions: [{}],
      },
    };
  });

  useEffect(() => {
    console.log("app is mounted");
  }, []);

  useEffect(() => {
    localStorage.setItem("isLoggedIn", JSON.stringify(isLoggedIn));
    localStorage.setItem("authUser", JSON.stringify(authUser));
  }, [isLoggedIn, authUser]);

  return (
    <>
      {isLoggedIn ? (
        <DashboardPage authUser={authUser} setAuthUser={setAuthUser} setisLoggedIn={setisLoggedIn} />
      ) : (
        <LoginPage setisLoggedIn={setisLoggedIn} setAuthUser={setAuthUser} />
      )}
      {/* <EffectJsx /> */}
    </>
  );
}

export default App;
