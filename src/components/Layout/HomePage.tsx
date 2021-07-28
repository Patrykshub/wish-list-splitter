import LoginButton from "./LoginButton";
import classes from "./HomePage.module.css";
import RegisterButton from "./RegisterButton";

function HomePage() {
  return (
    <header className={classes.header}>
      <h1>Home Page</h1>
      <div className={classes.buttons}>
        <LoginButton />
        <RegisterButton />
      </div>
    </header>
  );
}
export default HomePage;
