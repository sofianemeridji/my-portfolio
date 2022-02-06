import styles from '../styles/Home.module.css'
import Page from '../src/layouts/page'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faTwitterSquare, faGithubSquare, faGitlab } from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'

export default function Home() {

  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  return (
    <Page name={'GO!'}>
      <div id="mySidenav" className={styles.sidenav}>
        <a href="javascript:void(0)" className={styles.closebtn} onClick={() => closeNav()} >&times;</a>
        <a href="#">About me</a>
        <a href="#">Experience</a>
        <a href="#">Work</a>
        <a href="#">Contact</a>
        <a href="#">Resume</a>
      </div>

      <span onClick={() => openNav()} className={styles.drawerIcon}>&#9776;</span>
      
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
        <div className={styles.buttons_containers}>
          <div className={styles.buttons_container}>
            <Link href="/about" passHref>
              <button className={styles.btn}><span>About me</span></button>
            </Link>
            <button className={styles.btn}><span>Experience</span></button>
            <button className={styles.btn}><span>Work</span></button>
          </div>
          <div className={styles.buttons_container}>
            <button className={styles.btn}><span>Contact</span></button>
            <button className={styles.btn}><span>Resume</span></button>
          </div>
        </div>
        
        <div style={{width: '100%', marginTop: 20}}>
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

    </Page>
  )
}
