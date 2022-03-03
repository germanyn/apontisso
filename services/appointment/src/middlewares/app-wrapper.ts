import 'source-map-support/register'
import 'dotenv/config'
import '@common/shared/src/database'
import { middyfy } from '@common/shared'

export const appWrapper: typeof middyfy = (handler) => middyfy(handler)
