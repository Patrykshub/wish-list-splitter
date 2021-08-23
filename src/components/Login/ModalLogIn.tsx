import React, { Fragment, useContext } from "react";
import Modal from "./Modal";
import useInput from "../hooks/use-input";

import classes from "./Modal.module.css";
import AuthContext from "../../store/store";

const ModalLogIn: React.FC<{
  onHideModal: () => void;
  onShowModal: () => void;
}> = (props) => {
  const authCtx = useContext(AuthContext);

  const Backdrop: React.FC<{ onHideModal: () => void }> = (props) => {
    return (
      <div className={classes.backdrop_login} onClick={props.onHideModal} />
    );
  };

  const {
    isValid: enteredPasswordIsValid,
    value: enteredPassword,
    hasError: enteredPasswordError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordInputBlur,
    reset: lastNameReset,
  } = useInput((value: string) => value.trim() !== "");

  const {
    isValid: enteredEmailIsValid,
    value: enteredEmail,
    hasError: enteredEmailError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailInputBlur,
    reset: emailReset,
  } = useInput((value: string) =>
    value.match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
  );

  let formIsValid = false;
  if (enteredPasswordIsValid && enteredEmailIsValid) {
    formIsValid = true;
    console.log(formIsValid);
  }

  const logInHandler = () => {
    console.log('================================');

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBVVPHKxp6tMP6Dtvd-l9KciCQaa9-FsXA",
      {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          res.json().then((data) => {
            let errorMessage = "Authentication failed!";
            if (data && data.error && data.error.message) {
              errorMessage = data.error.message;
              // throw new Error(errorMessage);
              alert(errorMessage);
            }
          });
        }
        // try catch await
      
      })
      .then((data) => {
        console.log('================================');
          console.log(data)
          authCtx.login(data.idToken); 
        })
      .catch((err) => {
        alert(err.message);
      });
  };

  const formSubmissionHandler = (FormEvent: any) => {
    FormEvent.preventDefault();

    if (!enteredPassword) {
      return;
    }
    if (!enteredEmailIsValid) {
      return;
    }

    logInHandler();
    // console.log(enteredEmail, enteredPassword + " You are logged in!");
    lastNameReset();
    emailReset();
    props.onHideModal();
  };

  return (
    <Fragment>
      {<Backdrop onHideModal={props.onHideModal} />}
      <Modal onShowModal={props.onShowModal}>
        <div className={classes.login_div}>
          <p>Login</p>
        </div>
        <form className={classes.form_control} onSubmit={formSubmissionHandler}>
          <div>
            <label htmlFor="email">E-Mail</label>
            <div
              className={`${classes["form_input"]} ${
                !enteredEmailIsValid && enteredEmailError && classes.invalid
              }`}
            >
              <input
                id="email"
                type="text"
                value={enteredEmail}
                onChange={emailChangeHandler}
                onBlur={emailInputBlur}
                placeholder="Enter your E-mail-Adress"
              ></input>
            </div>
            {enteredEmailError && (
              <p className={classes.error_text}>Check your email.</p>
            )}
            <label htmlFor="password">Password</label>
            <div
              className={`${classes["form_input"]} ${
                !enteredPasswordIsValid &&
                enteredPasswordError &&
                classes.invalid
              }`}
            >
              <input
                id="password"
                type="password"
                value={enteredPassword}
                onChange={passwordChangeHandler}
                onBlur={passwordInputBlur}
                placeholder="Enter your password"
              ></input>
            </div>
            {enteredPasswordError && (
              <p className={classes.error_text}>Check your password.</p>
            )}
            <div className={classes.buttons_validInput}>
              <button disabled={!formIsValid} className={classes.button}>
                Log in
              </button>

              <button className={classes.button} onClick={props.onHideModal}>
                Close
              </button>
            </div>
          </div>
        </form>
      </Modal>
    </Fragment>
  );
};

export default ModalLogIn;
