import { ButtonHTMLAttributes, FunctionComponent } from 'react';
import styles from './Button.module.css';
import classNames from 'classnames';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FunctionComponent<ButtonProps> = ({ children, ...props }) => {
    return (
        <button className={classNames(styles.button, props.className)}>{children}</button>
    );
};

export default Button;