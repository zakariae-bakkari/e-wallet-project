import { useEffect } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import HeroLogin from "../components/hero-login";

export default function LoginPage({ setisLoggedIn, setAuthUser }) {
  // Change le titre de l'onglet du navigateur quand on arrive sur la page de connexion
  useEffect(() => {
    document.title = "Connexion | E-Wallet";
    console.log("login page is mounted");
  }, []);
  return (
    <>
      <Header />
      <main>
        <HeroLogin setisLoggedIn={setisLoggedIn} setAuthUser={setAuthUser} />
      </main>
      <Footer />
    </>
  );
}
