import styles from "./Properties.module.css";
import { FaAngleDown } from "react-icons/fa";

function Properties() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.container1}>
          <div className={styles.inner}>
            <h1>Check Properties</h1>
            <FaAngleDown className={styles.icon} />
          </div>
        </div>
      </main>
    </>
  );
}

export default Properties;
