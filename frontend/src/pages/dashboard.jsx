import DemanderPopup from "../components/dashboard/demander-popup";
import DashboardMain from "../components/dashboard/main-dashboard";
import RechargerPopup from "../components/dashboard/recharger-popup";
import TransfererPopup from "../components/dashboard/transfer-popup";
import Header from "../components/header";
import Footer from "../components/footer";

export default function Dashboard() {
  return (
    <>
      <Header />
      <DashboardMain />
      <TransfererPopup />
      <RechargerPopup />
      <DemanderPopup />
      <Footer />
    </>
  );
}
