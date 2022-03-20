import React from 'react';
import styles from './experience.module.css'

const Experience = (props :any) => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.resume}>
                    {/* <div className={styles.duration}>
                        <h5 className={styles.date}>2021-05 ~ 재직중</h5>
                    </div> */}
                     <div className={styles.card}>
                            <h4 className={styles.company}>위메프
                                 <h5 className={styles.date}>2021-05 ~ 재직중</h5>
                            </h4> 
                            <h5 className={styles.position}> 프론트엔드 개발 </h5>
                            <ul className={styles.skills}>
                                <li className={styles.skill}>Vue.js</li> 
                                <li className={styles.skill}>TypeScript</li>
                            </ul>
                            <ul className={styles.contribution}>
                             <li className={styles.contriuteCard}>
                                <h5 className={styles.projectName}>파트너 어드민</h5>
                                <h6 className={styles.projectDuration}>2021-09</h6>
                                <div>
                                    위메프 파트너사가 사용하는 어드민 개발<br/>
                                    : Vue.js, TypeScript 사용<br/>
                                    : 파트너 특가 참여신청 기능 개발<br/>
                                    : 고객문의 beta 파일 첨부 기능 개편 개발<br/>
                                </div>
                            </li>
                            <li className={styles.contriuteCard}>
                                <h5 className={styles.projectName}>판매자톡</h5>
                                <h6 className={styles.projectDuration}>2021-09</h6>
                                <div>
                                    위메프 서비스와 어드민에서 사용하는 판매자톡 개발 <br/>
                                    : Nuxt.js, TypeScript 사용<br/>
                                    : 판매자톡 파일 첨부 기능 개편 개발<br/>
                                    : 판매자톡 사용자 이슈 대응<br/>
                                </div>
                            </li>
                            <li className={styles.contriuteCard}>
                                <h5 className={styles.projectName}>위메프 여행레저</h5>
                                <h6 className={styles.projectDuration}>2021-06</h6>
                                <div>
                                    W여행레저 PC / 단독앱 / 웹뷰 개발<br/>
                                    : Vue.js, TypeScript 사용<br/>
                                    : 모바일 메인 개편 개발 (2021/06 - 2021/07)<br/>
                                    : 카카오페이 결제 연동 (2021/12)<br/>
                                    : scrollbehavior 간헐적으로 느리게 동작하는 이슈 개선<br/>
                                    : 디바이스 별 이슈 대응<br/>
                                    : 앱 심사 관련 대응<br/>
                                </div>
                            </li>
                            </ul>
                            
                        </div>
                      
                </div>
                <div className={styles.resume}>
                    <div className={styles.card}>
                    <h4 className={styles.company}>디케이테크인
                                 <h5 className={styles.date}>2020-07 ~ 2021-04</h5>
                    </h4> 
                    <h5 className={styles.position}> 프론트엔드 & 백엔드 개발 </h5> 
                    <ul className={styles.skills}>
                        <li className={styles.skill}>Vue.js</li> 
                        <li className={styles.skill}>JavaScript</li>
                        <li className={styles.skillBe}>RxJava</li>
                        <li className={styles.skillBe}>Spring Boot</li>
                        <li className={styles.skillBe}>JPA</li>
                        <li className={styles.skillBe}>MySql</li>
                    </ul>

                    <ul className={styles.contribution}>
                             <li className={styles.contriuteCard}>
                                <h5 className={styles.projectName}>구매자산관리</h5>
                                <h6 className={styles.projectDuration}>2020-08 ~ 2020-09</h6>
                                <div>
                                    : JavaScript, Vue.js 를 이용한 프론트엔드 개발<br />
                                    : 모바일 웹 개발 경험<br />
                                    : 메뉴별 엑셀 다운로드 기능 구현<br />
                                    : 견적서 기능 개발<br />
                                    : vue-meta 를 이용한 브랜드사이트 SEO 적용<br />
                                </div>
                            </li>
                            <li className={styles.contriuteCard}>
                                <h5 className={styles.projectName}>전자입찰시스템</h5>
                                <h6 className={styles.projectDuration}>2020-07 ~ 2021-02</h6>
                                <div>
                                : JavaScript, Vue.js 를 이용한 프론트엔드 개발 / Java, Spring Framework 기반 API 개발<br/>
                                : 기획자 디자이너와의 원활한 협업으로 협업 역량 향상<br/>
                                : 카카오 공동체별 기능 커스터마이징<br/>
                                <br/>
                                1-1) 카카오 전자입찰 시스템 2차 (2020.07-2020.09)<br/>
                                    <div className={styles.projectDetail}>
                                        외부 전자서명 API / SDK 연동으로 편리하게 계약과 발주를 사용하고 관리할 수 있도록 개발<br/>
                                        계약 체결 후 파트너사 수행도 평가 기능 개발<br/>
                                        파트너사에 대량으로 메일을 발송할 수 있는 메뉴 개발<br/><br/>
                                    </div>

                                1-2) 카카오 전자입찰 시스템 2.5차 (2020.10-2020.12) <br/>
                                  <div className={styles.projectDetail}>
                                    공고 입찰 시 상태, 권한, 점수 등에 따른 화면 숨김 처리, 입찰 선정 등 구현<br/>
                                    계약/발주의 금액 변경을 요청하고 최종승인권자의 승인 여부에 따른 금액 적용 API 구현<br/>
                                    금액변경 로직에 따른 이메일 발송 기능 구현<br/><br/>
                                  </div>
                                1-3) 카카오 엔터프라이즈 전자입찰 고도화 (2020.12-2021.04)<br/>
                                  <div className={styles.projectDetail}>
                                    복잡한 비즈니스 로직과 전자결재 흐름을 이해하여 정산서 화면을 개발<br/>
                                    JDE와 연동된 API를 호출하여 정산서 전표 화면 기능 개발<br/>
                                    구매요청 API 개발하여 전자결재 API 와 연동<br/>
                                    구매요청서 작성 시 사내 인트라넷 API를 호출하여 인트라 채널에 글이 작성되도록 개발
                                   </div>
                                </div>
                            </li>
                            </ul>
                    </div>
                </div>
                <div className={styles.resume}>
                    <div className={styles.card}>
                    <h4 className={styles.company}>이씨오
                                 <h5 className={styles.date}>2019-01~ 2020-06</h5>
                    </h4> 
                    <h5 className={styles.position}> 프론트엔드 & 백엔드 개발 </h5> 
                    <ul className={styles.skills}>
                        <li className={styles.skill}>JavaScript</li> 
                        <li className={styles.skill}>JSP</li>
                        <li className={styles.skill}>JQuery</li>
                        <li className={styles.skill}>CSS</li>
                        <li className={styles.skillBe}>Java</li>
                        <li className={styles.skillBe}>Oracle</li>

                    </ul>
                    <ul className={styles.contribution}>
                            <li className={styles.contriuteCard}>
                                <h5 className={styles.projectName}>웹 기반 자료관리 시스템 개발</h5>
                                <h6 className={styles.projectDuration}>2019-02 ~ 2020-06</h6>
                                <div>
                                 웹 기반 자료관리 시스템 개발<br/>
                                : JavaScript, JQuery, 를 이용한 프론트엔드 개발 / Java기반 백엔드 서비스 개발<br/>
                                : 기획자와 디자이너가 없는 상황에서 요구사항을 분석하고 화면을 설계하는 역량 향상<br/><br/>

                                1-1) 강남 구립 도서관 사업 (2019.03-2020.06)<br/>
                                <div className={styles.projectDetail}>
                                RFID 바코드 연동으로 도서관 책 배송 업무 관리 메뉴 개발<br/>
                                사용하던 로딩 라이브러리가 특정 브라우저에서는 동작을 안 하는 크로스 브라우징 이슈 해결<br/><br/>
                                </div>
                                1-2) 미추홀 구 도서관 사업 (2019.09-2020.11)<br/>
                                <div className={styles.projectDetail}>
                                도서를 일괄적으로 반납처리 시킬 수 있는 메뉴 개발<br/>
                                사용자 SMS 발송 기능 개발<br/><br/>
                                </div>
                                1-3) 안양시 도서관 사업 (2020.02-2020.06)<br/>
                                <div className={styles.projectDetail}>
                                주메뉴인 대출/반납 메뉴에서 사용자마다 디자인,색상 등 UI에 대한 요구사항이 상이해서<br/>
                                 사용자가 직접 UI 커스터마이징을 하고 관리할 수 있도록 개발하여 사용자 불편함 개선<br/>
                                도서 구입 관리 메뉴 개발<br/>
                                </div>
                                </div>
                            </li>
                            </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Experience;