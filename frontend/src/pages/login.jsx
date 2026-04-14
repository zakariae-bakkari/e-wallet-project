import Footer from "../components/footer";
import Header from "../components/header";
import HeroLogin from "../components/hero-login";

export default function LoginPage({ setisLoggedIn, setAuthUser }) {
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
