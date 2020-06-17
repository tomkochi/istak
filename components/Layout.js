import Footer from "../components/footer";
import Header from "../components/header";
import { useRouter } from "next/router";
import "../public/css/global.css";

const Layout = (props) => {
  const router = useRouter();

  return (
    <div className="layout">
      {router.pathname !== "/" && <Header />}
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
