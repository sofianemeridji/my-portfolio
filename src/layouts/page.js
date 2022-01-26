import Head from 'next/head'
import styles from '../../styles/Page.module.css'

export default function Page(props) {
  return (
    <div  className={styles.container}>
      <Head>
        <title>MERIDJI Sofiane PORTFOLIO - {props.name}</title>
        <meta name="description" content="MERIDJI Sofiane PORTFOLIO" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
          {props.children}
      </main>
    </div>
  )
}
