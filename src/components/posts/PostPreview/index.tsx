import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea, CardActions, Divider, Stack } from '@mui/material'
import { PostData } from 'src/models/subsocialDto'
import { resolveIpfsImg } from 'src/utility/utils'
import { pluralize, SubDate } from 'src/utility'

type PostPreviewProps = {
  postData: PostData
}

export default function PostPreview ({ postData }: PostPreviewProps) {
  const { struct, content } = postData

  const hasImage = !!content?.image

  return (
    <Card sx={{ width: '100%' }}>
      <CardActionArea>
        {hasImage && (
          <CardMedia
            component='img'
            image={resolveIpfsImg(content?.image)}
            alt='preview'
          />
        )}
        <CardContent>
          {content?.title && <Typography gutterBottom variant='h5' component='h5'>
            {content?.title}
          </Typography>}
          <Typography variant='body2' color='text.secondary'>
            {content?.summary}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Stack
          direction='row'
          divider={<Divider orientation='vertical' flexItem />}
          spacing={1}
          ml={1}
        >
          <Typography
            variant='overline'
            sx={{ fontWeight: 'md', color: 'text.secondary' }}>
            {pluralize({ count: struct.upvotesCount, singularText: 'like' })}
          </Typography>
          <Typography
            variant='overline'
            sx={{ fontWeight: 'md', color: 'text.secondary' }}>
            {pluralize({
              count: struct.repliesCount,
              singularText: 'reply',
              pluralText: 'replies',
            })}
          </Typography>
          <Typography
            variant='overline'
            sx={{ fontWeight: 'md', color: 'text.secondary' }}>
            {SubDate.formatDate(struct.createdAtTime)}
          </Typography>
        </Stack>
      </CardActions>
    </Card>
  )
}
