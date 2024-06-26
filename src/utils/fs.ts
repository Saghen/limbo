import { cacheDir } from './env'

export const exists = (path: string) =>
  Utils.readFileAsync(path)
    .then(() => true)
    .catch(() => false)
export const existsSync = (path: string) => {
  try {
    return Boolean(Utils.readFile(path))
  } catch {
    return false
  }
}

export const dirname = (path: string) => path.split('/').slice(0, -1).join('/')

export const testCache = (path: string) => exists(cacheDir + path)
export const testCacheSync = (path: string) => existsSync(cacheDir + path)
