import React from 'react';
import '../stylesheet/logoSmall.css';

function LogoSmall() {
  return (
    <div className="logo-bq-small">
      <img
        className="img-logo-small"
        src={require("../img/logo-BQ.png")}
        alt="Logo de Burger Queen"
      />
    </div>
  );
}

export default LogoSmall;