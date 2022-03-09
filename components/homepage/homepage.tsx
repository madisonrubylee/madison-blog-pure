import React from 'react';
import Contents from '../contents/contents';
import Profile from '../profile/profile';
import styles from './homepage.module.css'

const Homepage = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.border}>
                    <div className={styles.home}>
                        <Profile />
                        <Contents />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Homepage;