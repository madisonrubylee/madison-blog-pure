import React, {useState}  from 'react';
import Content from '../content/content';
import Home from '../menu_home/home';
import styles from './content.module.css'

const Contents = (props :any) => {
    const [activeTab, setActiveTab] = useState(0)
    
    const clickTab = (id: number) => {
        setActiveTab(id)
    }
    return (
        <>  
            <div className={styles.container}>
            {activeTab === 0 &&
                <Home />
            }
            {activeTab === 1 &&
                1
            }
            {activeTab === 2 &&
                2
            }
            {/* {props.data.map((content :any, idx: number) => (
                <Content  
                    index={idx} 
                    activeTab={activeTab}
                />
            ))} */}
            </div>
            <div className={styles.tabs}>
                <ul className={styles.tabList}>
                    <li className={styles.tabMenu} key={0}>
                        <button className={styles.btn} onClick={() => clickTab(0)}>home</button>
                    </li>
                    <li className={styles.tabMenu} key={1}>
                        <button className={styles.btn} onClick={() => clickTab(1)} >skills</button>
                    </li>
                    <li className={styles.tabMenu} key={2}>
                        <button className={styles.btn} onClick={() => clickTab(2)} >experience</button>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Contents;