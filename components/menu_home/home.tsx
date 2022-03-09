import React from 'react';
import styles from './home.module.css'

const Home = () => {
    return (
        <>
            <h2>Madison's Profile</h2>
            <hr className={styles.divide}></hr>
            <p>프론트엔드 기술 스택은 JavaScript, TypeScript, Vue.js 을 사용하며 React를 학습했습니다. <br/>
             요구사항을 분석해서 화면을 구상하고 클라이언트의 입장에서 한번 더 생각하면서 개발을 합니다. <br/>
            개발시에 기획자-디자이너-동료 개발자와 원활한 의사소통이 가능하며 일에 대한 책임감을 가지고 작업을 합니다.</p>

        </>
    )
}

export default Home;