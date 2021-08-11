import React from 'react';

import classes from './Modal.module.css';

const Modal: React.FC<{
    onShowModal: () => void;
  }> = (props) => {
    return (
      <div>
        <div className={classes.modal}>{props.children}</div>
      </div>
    );
  };

  export default Modal;