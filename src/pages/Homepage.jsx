import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import styles from "./Homepage.module.css";

export default function Homepage() {
  return (
    <main className={styles.homepage}>
      <PageNav />

      <section>
        <h1>
          Easy travel tracking with
          <br />
          map-project
        </h1>
        <h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          sunt odio, fugit doloribus, in quasi quas voluptate nihil laboriosam
          dolor optio recusandae eveniet quo. Possimus harum quidem sequi minus
          facere?
        </h2>
        <Link to="/login" className="cta">
          Start tracking now
        </Link>
      </section>
    </main>
  );
}
