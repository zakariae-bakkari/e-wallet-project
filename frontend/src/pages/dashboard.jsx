import DemanderPopup from "../components/dashboard/demander-popup";
import DashboardMain from "../components/dashboard/main-dashboard";
import RechargerPopup from "../components/dashboard/recharger-popup";
import TransfererPopup from "../components/dashboard/transfer-popup";
import Header from "../components/header";
import Footer from "../components/footer";
import { useEffect, useState } from "react";

export default function Dashboard({ authUser, setAuthUser, setisLoggedIn }) {
  const [transferePopup, settransferePopup] = useState(false);
  const [demanderPopup, setdemanderPopup] = useState(false);
  const [rechargerPopup, setrechargerPopup] = useState(false);

  const [transactions, setTransactions] = useState(
    authUser.wallet.transactions,
  );

  useEffect(() => {
    console.log("dashboard is mounted")
    document.title = "Tableau de bord | E-Wallet";
  }, []);
  return (
    <>
      <Header />
      <DashboardMain
        authUser={authUser}
        setisLoggedIn={setisLoggedIn}
        setdemanderPopup={setdemanderPopup}
        setrechargerPopup={setrechargerPopup}
        settransferePopup={settransferePopup}
        transactions={transactions}
      />
      {transferePopup && (
        <TransfererPopup
          setAuthUser={setAuthUser}
          authUser={authUser}
          settransferePopup={settransferePopup}
          setTransactions={setTransactions}
          transactions={transactions}
        />
      )}
      {rechargerPopup && (
        <RechargerPopup
          setAuthUser={setAuthUser}
          authUser={authUser}
          setrechargerPopup={setrechargerPopup}
          setTransactions={setTransactions}
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
