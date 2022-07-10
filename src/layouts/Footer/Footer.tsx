import { Typography } from '@mui/material'
import React from 'react'
import styles from './Footer.module.sass'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a
        href='https://subsocial.network'
        target='_blank'
        rel='noopener noreferrer'>
        <Typography variant='body1' alignItems='center'>
          Powered by{' '}
          <Image
            src='/subsocial.svg'
            alt='Subsocial Logo'
            width='144'
            height='32'
          />
        </Typography>
      </a>
    </footer>
  )
}

export default Footer