import { appWrapper } from '@/middlewares/app-wrapper';
import { Users } from '@/repositories/UserRepository';
import { formatJSONResponse } from '@common/shared';
import { CreatedUserEvent } from '@common/shared/src/events/user/CreatedUserEvent';

const createdUserHandler = async (event) => {
  const input = event.Records[0].body.Message as CreatedUserEvent
  console.log('evento recebido', event.Records[0].body)
  const user = await Users.create({
    id: input.id,
    name: input.name
  })
  return formatJSONResponse(user);
};

export const main = appWrapper(createdUserHandler);
