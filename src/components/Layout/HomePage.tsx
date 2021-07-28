import LoginButton from "./LoginButton";
import classes from "./HomePage.module.css";
import RegisterButton from "./RegisterButton";

const HomePage: React.FC<{
  onShowHandler: () => void;
  onShowRegister: () => void;
}> = (props) => {
  return (
    <header className={classes.header}>
      <h1>Home Page</h1>
      <div className={classes.buttons}>
        <LoginButton onShowHandler={props.onShowHandler} />
        <RegisterButton onShowRegister={props.onShowRegister} />
      </div>
    </header>
  );
};
export default HomePage;
