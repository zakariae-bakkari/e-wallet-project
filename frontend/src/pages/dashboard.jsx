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

  const [transactions, setTransactions] = useState(
    authUser.wallet.transactions
  );

  return (
    <>
      <Header />
      <DashboardMain
        authUser={authUser}
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
