import styles from "./Home.module.css";
import {
  FaAngleDown,
  FaBed,
  FaCheck,
  FaChild,
  FaRoad,
  FaTree,
} from "react-icons/fa";
import { useRef } from "react";
import { FaMoneyBill } from "react-icons/fa6";

function Home() {
  const targetRef = useRef(null);
  const scrollToElement = () => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <main className={styles.main}>
        <div className={styles.container1}>
          <div className={styles.inner}>
            <h1>Why Astra Properties</h1>
            <FaAngleDown className={styles.icon} onClick={scrollToElement} />
          </div>
        </div>
      </main>
      <div className={styles.container2} ref={targetRef}>
        <div className={styles.card}>
          <FaRoad className={styles["card-icon"]} />
          <h3>Urban Life</h3>
          <p>
            With Astra Properties, you will always find the most suitable
            locations in urban regions. That way you will be close to all
            essential landmarks for making life comfortable!
          </p>
        </div>
        <div className={styles.card}>
          <FaCheck className={styles["card-icon"]} />
          <h3>Fully Prepared</h3>
          <p>
            We spend months working on our properties to ensure they are more
            than ready for customers to move in, with all the essential home
            features and utilities configured and setup.
          </p>
        </div>
        <div className={styles.card}>
          <FaChild className={styles["card-icon"]} />
          <h3>Family Sized</h3>
          <p>
            All our properties are guaranteed to house at least a family of four
            comfortably, making them perfect for new couples who want to start a
            new life, or for existing families who want something new!
          </p>
        </div>
      </div>
      <div className={styles.container3}>
        <div className={styles.tallcard}>
          <FaMoneyBill className={styles.icon2} />
          <h3>Affordable</h3>
          <p>All of our options can be financed for cheap.</p>
        </div>
        <div className={styles.tallcard}>
          <FaBed className={styles.icon2} />
          <h3>Comfortable</h3>
          <p>Furnished with the most comfortable furniture we can find.</p>
        </div>
        <div className={styles.tallcard}>
          <FaTree className={styles.icon2} />
          <h3>Natural</h3>
          <p>Always surrounded by the beauty of nature with fresh air.</p>
        </div>
      </div>
    </>
  );
}

export default Home;
