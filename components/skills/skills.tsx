import React, {useState}from 'react';
import styles from './skills.module.css'

const Skills = () => {
    const [isChecked, setIsChecked] = useState(true) 

    const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(isChecked) {
            setIsChecked(false)  
        } else {
            setIsChecked(true)
        }
    }

    return (
        <>
            <div className={styles.type}>
                <p className={styles.typefont}>Front-end</p>
                    <label className={styles.switch}>
                        <input type='checkbox' defaultChecked={isChecked || true} onClick={(e) => handleToggle(e)}/>
                        <span className={styles.slider}></span>
                    </label>
                <div className={styles.wrapper}> 
                    <ul className={styles.line}>
                        <li className={`${styles.dot} ${styles.first}`}>2019
                            <div className={styles.skill}>JavaScript, jQuery, HTML, CSS</div>
                        </li>
                        <li className={styles.dot}>2020</li>
                        <li className={styles.dot}>2021</li>
                        <li className={`${styles.dot} ${styles.active}`}>2022</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Skills;