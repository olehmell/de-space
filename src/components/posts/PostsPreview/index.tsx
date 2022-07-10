import { List, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import { PostData } from 'src/models/subsocialDto'
import PostPreview from '../PostPreview'
import ListItem from '@mui/material/ListItem'

type PostsPreviewProps = {
  posts: PostData[]
}

export const PostsPreview = ({ posts }: PostsPreviewProps) => {
  return (
    <Container maxWidth='sm'>
      <List sx={{ width: '100%' }}>
        {posts.map((post) => (
          <ListItem key={post.id} alignItems='center'>
            <PostPreview postData={post} />
          </ListItem>
        ))}
      </List>
    </Container>
  )
}

export default PostsPreview
