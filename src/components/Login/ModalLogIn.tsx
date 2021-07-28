import React, { Fragment } from "react";
import { useState } from "react";

import classes from "./Modal.module.css";

const ModalLogIn: React.FC<{
  onHideModal: () => void;
  onShowModal: () => void;
}> = (props) => {
  const Backdrop: React.FC<{ onHideModal: () => void }> = (props) => {
    return <div className={classes.backdrop} onClick={props.onHideModal} />;
  };

  const Modal: React.FC<{ onShowModal: () => void }> = (props) => {
    return (
      <div>
        <div className={classes.modal}>{props.children}</div>
      </div>
    );
  };

  return (
    <Fragment>
      {<Backdrop onHideModal={props.onHideModal} />}
      <Modal onShowModal={props.onShowModal}>
        <form className={classes.input}>
          <label htmlFor="email">E-Mail</label>
          <input
            id="email"
            type="text"
           // value=
           // onChange=
          ></input>

          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={""}
            // onChange={}
          ></input>

          <div className={classes.buttons_input}>
            <button className={classes.button}>
              Log in
            </button>
            <button className={classes.button} onClick={props.onHideModal}>
              Close
            </button>
          </div>
        </form>
      </Modal>
    </Fragment>
  );
};

export default ModalLogIn;
