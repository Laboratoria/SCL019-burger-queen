import React from "react";
import { Link } from "react-router-dom";
import Logo from "../componentes/logo";
// import Footer from "../componentes/footer.jsx"
import "../stylesheet/home.css";
function Home() {
  return (
    <div className="container-home">
      <Logo />
      <div className="container-button-home">
        <button className="salon">
          <Link to="/Salon"> Salón</Link>{" "}
        </button>

        <button className="kitchen">
          <Link to="/Kitchen"> Cocina </Link>
        </button>
      </div>
      
        {/* <Footer /> */}
    </div>
  );
}

export default Home;
