import { SubsocialApi } from '@subsocial/api'
import { ApiPromise, HttpProvider } from '@polkadot/api'
import { types } from '@subsocial/definitions/interfaces/subsocial/definitions'
import { IPFS_HTTP_URL, OFFCHAIN_HTTP_URL, SUBSOCIAL_HTTP_URL } from '../constants'
import { FlatSubsocialApi } from '@subsocial/api/flat-subsocial'
let subsocial: SubsocialApi
let api: ApiPromise

type Api = SubsocialApi & {
  api: ApiPromise
}

export const resolveSubsocialApi = () => {
  // Connect to Subsocial's Substrate node:
  if (!subsocial) {
    api = new ApiPromise({ provider: new HttpProvider(SUBSOCIAL_HTTP_URL), typesBundle: { spec: { subsocial: { types } } } })
    
    subsocial = new SubsocialApi({
      substrateApi: api,
      ipfsNodeUrl: IPFS_HTTP_URL,
      offchainUrl: OFFCHAIN_HTTP_URL,
      useServer: {
        httpRequestMethod: 'get'
      }
    })

  }

  return new FlatSubsocialApi(subsocial)
}

export default resolveSubsocialApi()