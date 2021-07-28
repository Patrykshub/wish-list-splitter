import classes from './HeaderButton.module.css';

function LoginButton() {
    return (
        <button className={classes.button}>
            <span>Login</span>
        </button>
    );
};
export default LoginButton;