import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Page from '../src/layouts/page'

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
          <p className={styles.fullname}>MERIDJI Sofiane</p>
          <p className={styles.title}>Full-Stack Developer</p>
          <p className={styles.description}>I am a full-stack developer passionate about the development world, I have experience on the WEB and Mobile, I work on the different sides (front / back)</p>
        </ul>
        


  </div>

      
      
    </Page>
  )
}
