import DemanderPopup from "../components/dashboard/demander-popup";
import DashboardMain from "../components/dashboard/main-dashboard";
import RechargerPopup from "../components/dashboard/recharger-popup";
import TransfererPopup from "../components/dashboard/transfer-popup";
import Header from "../components/header";
import Footer from "../components/footer";
import { useState } from "react";

export default function Dashboard({ authUser, setAuthUser }) {
  const [transferePopup, settransferePopup] = useState(false);
  const [demanderPopup, setdemanderPopup] = useState(false);
  const [rechargerPopup, setrechargerPopup] = useState(false);
  console.log(transferePopup);
  return (
    <>
      <Header />
      <DashboardMain
        authUser={authUser}
        setdemanderPopup={setdemanderPopup}
        setrechargerPopup={setrechargerPopup}
        settransferePopup={settransferePopup}
      />
      {transferePopup && (
        <TransfererPopup
          setAuthUser={setAuthUser}
          authUser={authUser}
          settransferePopup={settransferePopup}
        />
      )}
      {rechargerPopup && (
        <RechargerPopup
          setAuthUser={setAuthUser}
          authUser={authUser}
          setrechargerPopup={setrechargerPopup}
        />
      )}
      {demanderPopup && (
        <DemanderPopup
          setAuthUser={setAuthUser}
          authUser={authUser}
          setdemanderPopup={setdemanderPopup}
        />
      )}
      <Footer />
    </>
  );
}
