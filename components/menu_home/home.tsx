import React from 'react';
import Timeline from '../timeline/timeline';
import styles from './home.module.css'

const Home = () => {
    return (
        <>
            {/* <h2 className={styles.motto}>인생은 산넘어 산</h2> */}
            {/* <hr className={styles.divide}></hr> */}
            <div className={styles.container}>
                {/* <div>타임라인</div> */}
                <Timeline />
            </div>
        </>
    )
}

export default Home;