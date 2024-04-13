import styles from "./Home.module.css";
import { FaAngleDown } from "react-icons/fa";

function Home() {
  return (
    <>
      <main>
        <div className={styles.container1}>
          <div className={styles.inner}>
            <h1>Modern & Affordable</h1>
            <FaAngleDown className={styles.icon} />
          </div>
        </div>
      </main>
      <div className={styles.container2}></div>
    </>
  );
}

export default Home;
