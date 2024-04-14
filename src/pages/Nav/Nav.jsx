import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css";

function Nav() {
  return (
    <>
      <header>
        <h1 className={styles.title}>Astra Properties</h1>
        <nav className={styles.navigation}>
          <NavLink to="/">
            <button>Home</button>
          </NavLink>
          <NavLink to="/properties">
            <button>Properties</button>
          </NavLink>
          <NavLink to="/about">
            <button>About</button>
          </NavLink>
        </nav>
      </header>
    </>
  );
}

export default Nav;
