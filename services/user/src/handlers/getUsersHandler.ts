import { appWrapper } from '@/middlewares/app-wrapper';
import { formatJSONResponse } from '@common/shared';
import { Users } from '@/repositories/UserRepository';

const getUsersHandler = async () => {
  const users = await Users.scan().all().exec()
  return formatJSONResponse(users);
};

export const main = appWrapper(getUsersHandler);
