import { Link } from "react-router-dom";
import styles from "./Logo.module.css";

function Logo() {
  return (
    <Link to="/">
      <div className={styles.flex}>
        <img src="/logo.png" alt="map-project logo" className={styles.logo} />
        <h3 className={styles.text}>map-project</h3>
      </div>
    </Link>
  );
}

export default Logo;
