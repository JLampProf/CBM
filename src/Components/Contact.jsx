import GoogleMaps from "./GoogleMaps";
import { LuMapPin } from "react-icons/lu";
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { useEffect } from "react";

const Contact = () => {
  return (
    <section className="contact">
      <h1>Location</h1>
      <div className="contact-container">
        <div className="map"></div>
        {/* <GoogleMaps /> */}
        <div className="contact-container-address">
          <LuMapPin className="icons" />
          <div className="contact-container-address-pgroup">
            <p className="align-icons">14 Constantia 23B</p>
            <p>Mnandi</p>
            <p>Centurion</p>
            <p>0149</p>
          </div>
        </div>
      </div>
      <div className="contact-info">
        <h1>Contact</h1>
        <p className="align-icons">
          <FiPhone className="icons" /> +27 64 589 8119
        </p>
        <p className="align-icons">
          <MdOutlineEmail style={{ marginTop: "6px" }} className="icons" />
          sales@circuitboard.co.za
        </p>
      </div>
    </section>
  );
};

export default Contact;
