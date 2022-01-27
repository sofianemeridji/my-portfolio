import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Page from '../src/layouts/page'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

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
          <p className={styles.description}>I am a full-stack developer passionate about the development world, I have experience on the WEB and Mobile, I work on the different sides (FRONTEND/BAqCKEND)</p>
        </ul>   
        <div style={{width: '100%'}}>
          <ul className={styles.ul}>
            <li><a href="#"><span></span><span></span><span></span><span></span></a><FontAwesomeIcon style={{width:'20px'}} icon={faFacebookF} /> </li>
            <li><a href="#"><span></span><span></span><span></span><span></span><FontAwesomeIcon style={{width:'20px'}} icon={faTwitter} /></a></li>
            <li><a href="#"><span></span><span></span><span></span><span></span><FontAwesomeIcon style={{width:'20px'}} icon={faGithub} /></a></li>
            <li><a href="#"><span></span><span></span><span></span><span></span></a></li>
            <li><a href="#"><span></span><span></span><span></span><span></span></a></li>
          </ul>
        </div>
      </div>
    </Page>
  )
}
