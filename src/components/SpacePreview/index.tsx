import { Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'

export const SpacePreview = () => {
  return (
    <Container maxWidth='sm'>
      <Typography variant='subtitle1' mt='2'>
        A personal decentralized space.
      </Typography>
      <Typography variant='h1'>
        <span>OLEH </span>
        <span>MELL</span>
      </Typography>
      <Typography variant='h3'>
        I am core dev at Subsocial & blockchain researcher.
      </Typography>
    </Container>
  )
}

export default SpacePreview
