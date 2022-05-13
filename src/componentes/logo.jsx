import React from 'react';
import '../stylesheet/logo.css';
function Logo() {
  return (
    <div className="logo-bq">
      <img
        className="img-logo"
        src={require("../img/logo-BQ.png")}
        alt="Logo de Burger Queen"
      />
    </div>
  );
}

export default Logo;
