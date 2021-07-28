import React, { Fragment } from "react";

import classes from './Modal.module.css'

const ModalLogIn: React.FC <{onHideModal: () => void; onShowModal: () => void}> = (props) => {

  const Backdrop: React.FC <{onHideModal: () => void}> = (props) => {
    return <div className={classes.backdrop} onClick={props.onHideModal} />;
  };

  const Modal: React.FC <{onShowModal: () => void}> = (props) => {
    return (
      <div>
        <div className={classes.modal}>{props.children}</div>
      </div>
    );
  };

  const logInHandler = (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    <Fragment>
      {<Backdrop onHideModal={props.onHideModal} />}
      <Modal onShowModal={props.onShowModal}>
        <form className={classes.input} onSubmit={logInHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text"></input>
          <label htmlFor="password">Password</label>
          <input id="password" type="text"></input>
          <div className={classes.buttons_input}>
            <button className={classes.button} onSubmit={logInHandler}>Log in</button>
            <button className={classes.button} onClick={props.onHideModal}>Close</button>
          </div>
        </form>
      </Modal>
    </Fragment>
  );
};

export default ModalLogIn;
