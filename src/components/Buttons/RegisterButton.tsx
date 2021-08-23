import classes from "./HeaderButton.module.css";

const RegisterButton: React.FC <{onShowRegister: () => void}> = (props) => {
    return (
        <button className={classes.button} onClick={props.onShowRegister}>
            <span>Register</span>
        </button>
    );
};
export default RegisterButton;