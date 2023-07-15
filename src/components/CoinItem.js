import React from 'react';
import styles from './CoinItem.module.css'
const CoinItem = ({image,name,symbol,current_price,price_change_percentage_24h,market_cap_change_24h}) => {
    return (
        <div className={styles.total}>
            <div className={styles.row}>
                <div className={styles.col}>
                    <div style={{padding:'10px'}}>
                    <img src={image} alt="" />
                    </div>
                </div>
                <div className={styles.col}>{name}</div>
                <div className={styles.col}>{symbol.toUpperCase()}</div>
                <div className={styles.col}>$ {current_price.toLocaleString()}</div>
                <div className={price_change_percentage_24h > 0 ? styles.gree : styles.re}>{price_change_percentage_24h.toFixed(2)}%</div>
                <div className={styles.col}>$ {market_cap_change_24h.toLocaleString()}</div>

            </div>
        </div>
    );
};

export default CoinItem;