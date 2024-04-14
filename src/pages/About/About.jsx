import styles from "./About.module.css";
import { FaAngleDown } from "react-icons/fa";

function About() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.container1}>
          <div className={styles.inner}>
            <h1>About Us</h1>
            <FaAngleDown className={styles.icon} />
          </div>
        </div>
      </main>
    </>
  );
}

export default About;
