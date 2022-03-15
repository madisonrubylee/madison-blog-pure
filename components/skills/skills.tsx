import React from 'react';
import styles from './skills.module.css'

const Skills = () => {
    return (
        <>
            <div className={styles.type}>
                <p className={styles.typefont}>Front-end</p>
                <div className={styles.wrapper}> 
                    <ul className={styles.line}>
                        <li className={`${styles.dot} ${styles.first}`}>2019</li>
                        <li className={styles.dot}>2020</li>
                        <li className={styles.dot}>2021</li>
                        <li className={`${styles.dot} ${styles.active}`}>2022</li>
                    </ul>
                    <div className={styles.skill}>JavaScript, HTML, CSS</div>
                </div>
            </div>
        </>
    )
}

export default Skills;