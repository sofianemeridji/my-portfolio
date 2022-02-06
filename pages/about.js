import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/About.module.css'
import Page from '../src/layouts/page'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faTwitterSquare, faGithubSquare, faGitlab } from '@fortawesome/free-brands-svg-icons'

export default function About() {

  return (
    <Page name={'ABOUT ME!'}>
      <div className={styles.root}>
        <div className={styles.area}>
          <p className={styles.title}>Who is me ?</p>
          <p className={styles.description}>
            Hi, my name is MERIDJI Sofiane, I'm a full stack developer passionate about programming, I have 6 years of experience, and I'm always looking for new challenges. in my professional career I have developed with different languages, I started my career as a .NET MVC developer in a company in Algeria, and I had the chance to build several beautiful projects with this language. Then I decided to be a freelancer so I worked with all that JAVASCRIPT (REACT, REACT NATIVE, NODE JS).
            I worked with several startups, and I made several applications (WEB / MOBILE).
          </p>
        </div>
        <div className={styles.areaTriangle}>
        </div>
        <div className={styles.areaPicture}>
        <div className={styles.areaPictureTrans}>
        </div>
        </div>
      </div>
      
    </Page>
  )
}
