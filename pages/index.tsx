import { Typography } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import SpacePreview from '../components/SpacePreview'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>DeSpace of Oleh Mell</title>
        <meta name="description" content="Decentralized Oleh Mell's space. Info about crypto, developing, managment and interesting stories from labs of Subsocial." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <SpacePreview />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://subsocial.network"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Typography variant='body1' alignItems='center'>
            Powered by{' '}
            <Image src="/subsocial.svg" alt="Subsocial Logo" width='144' height='32' />
          </Typography>
        </a>
      </footer>
    </div>
  )
}

export default Home
