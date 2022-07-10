// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { SPACE_ID } from '../../constants/config'
import apiProvider from '../../utility/apiProvider'
import subsocialApi from '../../utility/subsocialApi'

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse<any>,
) {
  res.status(200).json(apiProvider.getPosts())
}
