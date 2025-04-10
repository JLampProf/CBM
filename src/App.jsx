import Contact from "./Components/Contact";
import InfoSection from "./Components/InfoSection";
import Services from "./Components/Services";
import TitleSection from "./Components/TitleSection";
import Footer from "./Components/Footer";
import Nav from "./Components/Nav";
import "./SCSS/App.css";
import GoogleMaps from "./Components/GoogleMaps";
import { MdHeight } from "react-icons/md";

const App = () => {
  return (
    <div>
      {/* <Nav /> */}
      <div className="sections">
        <TitleSection />
        <hr />
        <InfoSection />
        <hr />
        <Services />
        <hr />
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default App;
