import { Stack, Box } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import { PostData } from 'src/models/subsocialDto'
import PostsPreview from '../components/posts/PostsPreview'
import SpacePreview from '../components/SpacePreview'
import styles from '../styles/Home.module.css'
import apiProvider from '../utility/apiProvider'

type HomeProps = {
  posts: PostData[]
}

const Home: NextPage<HomeProps> = ({ posts }) => {
  return (
    <Box sx={{ width: '100%' }}>
      <Head>
        <title>DeSpace of Oleh Mell</title>
        <meta
          name='description'
          content="Decentralized Oleh Mell's space. Info about crypto, developing, managment and interesting stories from labs of Subsocial."
        />
        <link rel='icon' href='/favicon.png' />
      </Head>

      <Stack>
        <SpacePreview />
        <PostsPreview posts={posts} />
      </Stack>

    </Box>
  )
}

export async function getServerSideProps () {
  const posts = await apiProvider.getPosts()

  return {
    props: {
      posts
    }, // will be passed to the page component as props
  }
}


export default Home
