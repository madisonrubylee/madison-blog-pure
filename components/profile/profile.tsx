import React , {useState} from 'react';
import styles from './profile.module.css'

const url = '/madison.jpeg'
const desc = 'telepopmujik@gmail.com '
// const desc =<p>요구사항을 분석해서 화면을 구상하고 클라이언트의 입장에서 한번 더 생각하면서 개발을 합니다. </p>

const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value
    if(value === '') return 
    const url = getUrl(value) 
    window.open(url, '_blank')
}

const getUrl = (value: String) => {
    switch(value) {
        case 'github':
            return 'https://github.com/madisonrubylee'
        case 'blog':
            return 'https://hoontinparis.tistory.com'
        case 'linkedin':
            return 'https://www.linkedin.com/in/hyunjoo-l-0a53011a3'
        default:
            throw new Error(`unkown theme: ${value}`)
    }
}

const Profile = () => {

   const [valueUrl, setValueUrl] = useState(null)
    return (
        <>
            <div className={styles.container}>
                <img className={styles.avatar} src={url}  alt= "profile"/>
                <div className={styles.border}>
                    <p className={styles.profieDesc}> {desc}</p>
                </div>
                <p className={styles.desc}>이현주</p>
                <select className={styles.select} id="link" name="link" onChange={onChange}>
                    <option value="">파도타기</option>
                    <option value="github">Github</option>
                    <option value="blog">Blog</option>
                    <option value="linkedin">Linkedin</option>
                </select>
            </div>
        </>
    )
}

export default Profile;