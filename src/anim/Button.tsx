import React, { ReactNode } from 'react';
import styles from './Button.module.css';

const Button = ({ children }: { children: ReactNode; }) => {
    return (
        <button className={styles.button}>{children}</button>
    );
};

export default Button;