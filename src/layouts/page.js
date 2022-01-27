import React, { useState } from 'react';
import Head from 'next/head'
import styles from '../../styles/Page.module.css'

export default function Page(props) {
  const [MousePosition, setMousePosition] = useState({
    left: 0,
    top: 0
  })

  function handleMouseMove(ev) { setMousePosition({left: ev.pageX, top: ev.pageY}); }

  return (
    <div  className={styles.container} onMouseMove={(ev)=> handleMouseMove(ev)}>
      <Head>
        <title>MERIDJI Sofiane PORTFOLIO - {props.name}</title>
        <meta name="description" content="MERIDJI Sofiane PORTFOLIO" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
          <div style={{left:MousePosition.left , top: MousePosition.top}} className={styles.customCursor}/>
          {props.children}
      </main>
    </div>
  )
}
