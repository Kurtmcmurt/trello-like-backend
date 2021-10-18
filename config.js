import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

let config = {}

export const baseUrl = config.__basedir = __dirname