import React from "react";
import Menu from "./menu";

const MenuOption = (prop) => {
  return (
    <form className="content-menu-option">
      <h3>Menu</h3>

      <section className="section__option">
        <button
          className="secondary-button"
          onClick={(e) => {
            e.preventDefault();
            /*  setTypeFood("Breakfast") */
          }}
        >
          Breakfast
        </button>
          <Menu/>
        <button
          className="secondary-button"
          onClick={(e) => {
            e.preventDefault();
            /*   setTypeFood("Lunch"); */
          }}
        >
          Lunch
        </button>
      </section>
    </form>
  );
};

export { MenuOption };
