import middy from "@middy/core"
import httpJsonBodyParser from "@middy/http-json-body-parser"
// import sqsJsonBodyParser from '@middy/sqs-json-body-parser'
import eventNormalizer from '@middy/event-normalizer'

export const middyfy = (handler: Parameters<typeof middy>[0]) => {
  return middy(handler).use(eventNormalizer()).use(httpJsonBodyParser())
}
