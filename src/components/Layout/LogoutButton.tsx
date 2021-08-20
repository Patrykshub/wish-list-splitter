import classes from "./HeaderButton.module.css";

const LogoutButton: React.FC = (props) => {
  return (
    <button className={classes.button}>
      <span>Logout</span>
    </button>
  );
};
export default LogoutButton;