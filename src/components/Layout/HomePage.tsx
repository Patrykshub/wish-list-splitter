import { useContext } from "react";

import LoginButton from "../Buttons/LoginButton";
import classes from "./HomePage.module.css";
import RegisterButton from "../Buttons/RegisterButton";
import ProfileButton from "../Buttons/ProfileButton";
import AuthContext from "../../store/store";
import LogoutButton from "../Buttons/LogoutButton";
import Profile from "../Profile/Profile";

const HomePage: React.FC<{
  onShowHandler: () => void;
  onShowRegister: () => void;
  onLogoutHandler: () => void;
}> = (props) => {
  const authCtx = useContext(AuthContext);

  const isLoggedIn = authCtx.isLoggedIn;


  return (
    <div>
    <header className={classes.header}>
      <h1>Wish List Splitter</h1>
      <div className={classes.buttons} >
        {isLoggedIn && <ProfileButton />}
        {isLoggedIn && <LogoutButton onLogoutHandler={props.onLogoutHandler} />}
        {!isLoggedIn && <LoginButton onShowHandler={props.onShowHandler} />}
        {!isLoggedIn && <RegisterButton onShowRegister={props.onShowRegister} /> }
      </div>
    </header>
    <body>
      <Profile />
    </body>
    </div>
  );
};
export default HomePage;