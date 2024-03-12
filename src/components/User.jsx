import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../contexts/FakeAuthContext";
import Button from "./Button";
import styles from "./User.module.css";

function User() {
  const { user, logout } = useAuthContext();
  const navigate = useNavigate();

  function handleClick() {
    logout();
    navigate("/");
  }

  return (
    <div className={styles.user}>
      <img src={user.avatar} alt={user.name} />
      <span>Welcome, {user.name}</span>
      <Button type="primary" onClick={handleClick}>
        Logout
      </Button>
    </div>
  );
}

export default User;
