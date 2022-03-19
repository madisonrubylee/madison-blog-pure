import React, {useState}from 'react';
import styles from './skills.module.css'

const Skills = () => {
    const [isChecked, setIsChecked] = useState(true) 
    const [skill, setSkill] = useState('FE')

    const handleToggle = (e: React.MouseEvent<HTMLInputElement>) => {
        if(isChecked) {
            setIsChecked(false)  
            setSkill('BE')
        } else {
            setIsChecked(true)
            setSkill('FE')
        }
    }

    const skillDesc = skill === 'FE' ? 'Front-end' : 'Back-end'
    return (
        <>
            <div className={`${styles.type} ${skill === 'BE' && styles.be} `}>
                <div className={styles.skillToggle} > 
                    <p className={styles.typefont}>{skillDesc}</p>
                    <label className={styles.switch}>
                        <input type='checkbox' defaultChecked={isChecked || true} onClick={(e) => handleToggle(e)}/>
                        <span className={styles.slider}></span>
                    </label>
                </div>
            </div>
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
        </>
    )
}

export default Skills;