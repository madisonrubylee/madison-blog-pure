import React from 'react';
import styles from './timeline.module.css'

const Timeline = () =>{ 
    return (
        <div>
            <div className={styles.mountain}>
                <div className={styles.top}>
                <div className={styles.one}></div>
                <div className={styles.two}></div>
                <div className={styles.three}></div>
                </div>
            </div>
            <div className={styles.secondMountain}>
                <div className={styles.top}>
                <div className={styles.one}></div>
                <div className={styles.two}></div>
                <div className={styles.three}></div>
                </div>
            </div>
            <div className={styles.thirdMountain}>
                <div className={styles.top}>
                <div className={styles.one}></div>
                <div className={styles.two}></div>
                <div className={styles.three}></div>
                </div>
            </div>
        <div className={styles.cloud}></div>
        </div>
    )
}


export default Timeline;