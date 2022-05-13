
//import Breakfast from "./breakfast";
import { Link } from "react-router-dom";

const MenuOption = (prop) => {
  
  return (
    <div>
      <form className="content-menu-option">
        <h3>Menu</h3>

        <section className="section__option">
          <Link to="/breakfast">
            <button className="btn-warning btn-large">Breakfast</button>
          </Link>
          <Link to="/lunch">
            <button className="btn-warning btn-large">Lunch</button>
          </Link>
        </section>
      </form>
    </div>
  );
};

export { MenuOption };
