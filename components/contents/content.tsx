import React from 'react';
import styles from './content.module.css'

const Content = () => {
    return (
        <>  
            <div className={styles.container}>
                    
            </div>
            <div className={styles.tabs}>
                <ul className={styles.tabList}>
                    <li className={styles.tabMenu}>
                        <button className={styles.btn}>home</button>
                    </li>
                    <li className={styles.tabMenu}>
                        <button className={styles.btn}>skills</button>
                    </li>
                    <li className={styles.tabMenu}>
                        <button className={styles.btn}>experience</button>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Content;