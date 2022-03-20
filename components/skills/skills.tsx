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
            <div className={styles.typeWrapper}>
                <div className={`${styles.type} ${skill === 'BE' && styles.be} `}>
                    <div className={styles.skillToggle} > 
                        <p className={styles.typefont}>{skillDesc}</p>
                    </div>
                </div>
                <label className={styles.switch}>
                            <input type='checkbox' defaultChecked={isChecked || true} onClick={(e) => handleToggle(e)}/>
                            <span className={styles.slider}></span>
                </label>
            </div>
           { skill === 'FE' && <div className={styles.wrapper}> 
                    <ul className={styles.line}>
                        <li className={`${styles.dot} ${styles.first}`}>2019
                            <div className={styles.skill}>JavaScript, jQuery, JSP</div>
                        </li>
                        <li className={`${styles.dot} ${styles.second}`}>2020
                            <div className={styles.skill}>Vue.js</div>
                        </li>
                        <li className={`${styles.dot} ${styles.third}`}>2021
                            <div className={styles.skill}>TypeScript, React.js</div>
                        </li>
                        <li className={`${styles.dot} ${styles.active}`}>2022</li>
                    </ul>
            </div>}
            { skill === 'BE' && <div className={`${styles.wrapper} ${styles.backend}`}> 
                    <ul className={styles.line}>
                        <li className={`${styles.dot} ${styles.first}`}>2019
                            <div className={styles.skill}>Java, Mybatis, Oracle</div>
                        </li>
                        <li className={`${styles.dot} ${styles.second}`}>2020
                            <div className={styles.skill}>rxJava, Spring Boot, JPA, MySql </div>
                        </li>
                    </ul>
            </div>}

        </>
    )
}

export default Skills;