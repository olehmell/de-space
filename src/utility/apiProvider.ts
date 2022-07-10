import { getRequest } from './utils'
import { PostData } from '@subsocial/types/dto'
import subsocialApi from './subsocialApi'
import { SPACE_ID } from '../constants/config'

class ApiProvired {
  async getPosts () {
    const postIds = await subsocialApi.subsocial.substrate.postIdsBySpaceId(SPACE_ID as any)
    return subsocialApi.findPublicPosts(postIds)
  }
}

export default new ApiProvired()