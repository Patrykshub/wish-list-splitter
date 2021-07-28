import classes from "./HeaderButton.module.css";

const LoginButton: React.FC<{ onShowHandler: () => void }> = (props) => {
  return (
    <button onClick={props.onShowHandler} className={classes.button}>
      <span>Login</span>
    </button>
  );
};
export default LoginButton;
