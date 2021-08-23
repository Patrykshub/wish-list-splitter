import classes from "./HeaderButton.module.css";

const LogoutButton: React.FC<{ onLogoutHandler: () => void }> = (props) => {
  return (
    <button className={classes.button} onClick={props.onLogoutHandler}>
      <span>Logout</span>
    </button>
  );
};
export default LogoutButton;
