const Nav = () => {
  const contactUs = () => {
    window.scrollTo({ top: 2070, left: 0, behavior: "smooth" });
  };

  const services = () => {
    window.scrollTo({ top: 1200, left: 0, behavior: "smooth" });
  };

  return (
    <div className="nav">
      <button className="nav-btn" onClick={contactUs}>
        Contact Us
      </button>
      <button className="nav-btn" onClick={services}>
        Services
      </button>
    </div>
  );
};

export default Nav;
