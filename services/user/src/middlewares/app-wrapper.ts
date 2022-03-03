import 'source-map-support/register'
import 'dotenv/config'
import '@common/shared'
import { middyfy } from '@common/shared'
import '@common/shared/src/database'

export const appWrapper: typeof middyfy = (handler) => middyfy(handler)
