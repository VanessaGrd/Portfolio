import logo from "../assets/logoportfolio2.png";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <>
      <header className={styles.header}>

      <ul className={styles.navbar}>
      <img className={styles.logo} src={logo} alt="logo" />
<div className={styles.navbarLinks}>
<li>
          <a href="#presentation">Presentation</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          {" "}
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li></div>

      </ul>
      </header>
    </>
  );
}

export default Navbar;
