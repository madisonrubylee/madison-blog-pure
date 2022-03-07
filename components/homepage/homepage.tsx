import React from 'react';
import Content from '../contents/content';
import Profile from '../profile/profile';
import styles from './homepage.module.css'

const Homepage = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.border}>
                    <div className={styles.home}>
                        <Profile />
                        <Content />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Homepage;