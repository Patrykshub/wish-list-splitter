import React, { Fragment } from "react";
import Modal from "./Modal";
import useInput from "../hooks/use-input";

import classes from "./Modal.module.css";

const ModalLogIn: React.FC<{
  onHideModal: () => void;
  onShowModal: () => void;
}> = (props) => {
  
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

  const formSubmissionHandler = (FormEvent: any) => {
    FormEvent.preventDefault();
    const logInHandler = (userData: string | number) => {
      fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=[API_KEY]", {
        method: "POST",
        body: JSON.stringify({
          login: {enteredEmail},
          password: {enteredPassword}
        }),
      });
    };

    if (!enteredPassword) {
      return;
    }
    if (!enteredEmailIsValid) {
      return;
    }
    console.log(enteredPassword, enteredEmail);
    lastNameReset();
    emailReset();
    logInHandler(enteredPassword && enteredEmail);
    props.onHideModal();
  };

  return (
    <Fragment>
      {<Backdrop onHideModal={props.onHideModal} />}
      <Modal onShowModal={props.onShowModal}>
        <form className={classes.form_control}
          onSubmit={formSubmissionHandler}
        >
          <div >
            <label htmlFor="email">E-Mail</label>
            <div className={`${classes['form_input']} ${!enteredEmailIsValid && enteredEmailError && classes.invalid}`}>
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
            <div className={`${classes['form_input']} ${!enteredPasswordIsValid && enteredPasswordError && classes.invalid}`}>
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
              <button
                disabled={!formIsValid}
                className={classes.button}
              >
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
