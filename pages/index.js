import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Page from '../src/layouts/page'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faTwitterSquare, faGithubSquare, faGitlab } from '@fortawesome/free-brands-svg-icons'

export default function Home() {
  return (
    <Page name={'GO!'}>
      
      <div className={styles.area}>
        <ul className={styles.circles}>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <div className={styles.avatar}/>
          <p className={styles.fullname}>MERIDJI Sofiane </p>
          <p className={styles.title}>Full-Stack Developer</p>
          <p className={styles.description}>I am a full-stack developer passionate about the development world, I have experience on the WEB and Mobile, I work on the different sides (FRONTEND/BACKEND)</p>
        </ul>   
        <div style={{width: '100%'}}>
          <ul className={styles.ul}>
            <li>
              <a href="https://www.linkedin.com/in/sofiane-meridji/" target="_blank" rel="noreferrer">
                <span></span><span></span><span></span><span></span>
                <FontAwesomeIcon icon={faLinkedin}/>
              </a>
            </li>
            <li>
              <a href="https://github.com/sofianemeridji" target="_blank" rel="noreferrer">
                <span></span><span></span><span></span><span></span><FontAwesomeIcon icon={faGithubSquare}/>
              </a>
              </li>
            <li>
              <a href="https://gitlab.com/MERIDJI" target="_blank" rel="noreferrer">
                <span></span><span></span><span></span><span></span>
                <FontAwesomeIcon icon={faGitlab}/>
              </a>
            </li>
            <li>
              <a href = "https://twitter.com/meridjisofiane"target="_blank" rel="noreferrer">
                <span></span><span></span><span></span><span></span>
                <FontAwesomeIcon icon={faTwitterSquare}/>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Page>
  )
}
