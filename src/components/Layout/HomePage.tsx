import { useContext } from "react";

import LoginButton from "./LoginButton";
import classes from "./HomePage.module.css";
import RegisterButton from "./RegisterButton";
import ProfileButton from "./ProfileButton";
import AuthContext from "../../store/store";
import LogoutButton from "./LogoutButton";

const HomePage: React.FC<{
  onShowHandler: () => void;
  onShowRegister: () => void;
}> = (props) => {
  const authCtx = useContext(AuthContext);

  const isLoggedIn = authCtx.isLoggedIn;

  return (
    <header className={classes.header}>
      <h1>Wish List Splitter</h1>
      <div className={classes.buttons}>
        {isLoggedIn && <ProfileButton />}
        {isLoggedIn && <LogoutButton />}
        {!isLoggedIn && <LoginButton onShowHandler={props.onShowHandler} />}
        {!isLoggedIn && <RegisterButton onShowRegister={props.onShowRegister} /> }
      </div>
    </header>
  );
};
export default HomePage;