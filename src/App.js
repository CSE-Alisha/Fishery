import logo from "./assets/logo.png";

import classes from "./App.module.css";
import ActionButtons from "./components/action-buttons";
import OurClients from "./components/clients/our-clients";
import Footer from "./components/footer/footer";
import OurGallery from "./components/gallery/our-gallery";
import Header from "./components/header/header";
import StartingBanner from "./components/starting-banner/starting-banner";
import TypesOfFishing from "./components/types/types-of-fishing";
import Welcome from "./components/welcome/welcome";
import { BrowserRouter } from "react-router-dom";
import Divider from "./components/UI/divider";

function App() {
  return (
    <BrowserRouter>
      <div className={classes.app} id="home">
        <img className={classes.logo} src={logo} alt="" />
        <Header />
        <StartingBanner />
        <ActionButtons />
        <Welcome />
        <TypesOfFishing />
        <OurGallery />
        <OurClients />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
