import { IPFS_HTTP_URL } from 'src/constants'

export function getFirstOrUndefined (maybeArr?: any[]) {
  return maybeArr ? maybeArr[0] : undefined
}

export const getRequest = async <T>(url: string): Promise<T> => {
  return fetch(url, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  })
  .then(res => res.ok ? res.json() : undefined)
  .catch(err => console.log(err))
}

export const resolveIpfsImg = (cid?: string) => `${IPFS_HTTP_URL}/ipfs/${cid}`