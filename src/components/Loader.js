import React from 'react';
import spinner from '../gif/spinner.gif';
import styles from './Loader.module.css'

const Loader = () => {
    return (
        <div className={styles.total}>
            <img src={spinner} alt="" />
            <h1>Loading...</h1>
        </div>
    );
};

export default Loader;