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
  return (
    <>
      <Header />
      <DashboardMain
        authUser={authUser}
        setdemanderPopup={setdemanderPopup}
        setrechargerPopup={setrechargerPopup}
        settransferePopup={settransferePopup}
      />
      {transferePopup && <TransfererPopup setAuthUser={setAuthUser} />}
      {rechargerPopup && <RechargerPopup setAuthUser={setAuthUser} />}
      {demanderPopup && <DemanderPopup setAuthUser={setAuthUser} />}
      <Footer />
    </>
  );
}
