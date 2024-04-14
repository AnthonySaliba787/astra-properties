import styles from "./About.module.css";
import { FaAngleDown } from "react-icons/fa";
import { useRef } from "react";

function About() {
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
            <h1>About Us</h1>
            <FaAngleDown className={styles.icon} onClick={scrollToElement} />
          </div>
        </div>
      </main>
      <div className={styles.container2} ref={targetRef}>
        <div className={styles["about-container"]}>
          <h3>Our Mission</h3>
          <p>
            At Astra Properties, we believe in offering our customers the best
            service with the best value adapted to their budget. We know the
            difficulties people go through when looking for real estate that
            fits their criterias, and we try to help overcome them.
          </p>
          <p>
            Contact us at support@astraproperties.com, or dial the number +01
            00-000-000-000.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
