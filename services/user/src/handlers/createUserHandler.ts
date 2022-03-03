import { appWrapper } from '@/middlewares/app-wrapper';
import { formatJSONResponse } from '@common/shared';
import { Users } from '@/repositories/UserRepository';
import { SNS } from 'aws-sdk';

interface CreateUserBody {
  name: string;
}

const createUserHandler = async (event) => {
  const body = event.body as CreateUserBody
  const user = await Users.create({
    name: body.name
  })
  const sns = new SNS({ endpoint: 'http://localhost:4566' })
  const publication = await sns.publish({
    Message: JSON.stringify({ default: user }),
    MessageStructure: "json",
    TopicArn: process.env.USER_CREATED_TOPIC_ARN,
  }).promise()
  console.log(publication)
  return formatJSONResponse(user);
};

export const main = appWrapper(createUserHandler);
