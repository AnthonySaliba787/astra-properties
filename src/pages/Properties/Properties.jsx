import styles from "./Properties.module.css";
import { FaAngleDown } from "react-icons/fa";
import { useRef } from "react";

function Properties() {
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
            <h1>Find Properties</h1>
            <FaAngleDown className={styles.icon} onClick={scrollToElement} />
          </div>
        </div>
      </main>
      <div className={styles.container2} ref={targetRef}>
        <div className={styles["property-box"]}>
          <img
            src="/src/assets/house1.webp"
            alt="Modern home"
            className={styles.image}
          />
          <h3>Modern Home</h3>
          <h4>Price: 400,000$</h4>
          <p>Ultra modern home with a heavy emphasis on minimalist design.</p>
        </div>
        <div className={styles["property-box"]}>
          <img
            src="/src/assets/house2.webp"
            alt="Modern home"
            className={styles.image}
          />
          <h3>Modern Home</h3>
          <h4>Price: 320,000$</h4>
          <p>
            A hybrid of traditional and modern, surrounded by a beautiful
            environment.
          </p>
        </div>
        <div className={styles["property-box"]}>
          <img
            src="/src/assets/house3.webp"
            alt="Modern home"
            className={styles.image}
          />
          <h3>Modern Home</h3>
          <h4>Price: 530,000$</h4>
          <p>
            A traditionally-designed home with a spacious front porch, perfect
            for people who want something tried and tested.
          </p>
        </div>
      </div>
    </>
  );
}

export default Properties;
