import { appWrapper } from '@/middlewares/app-wrapper';
import { formatJSONResponse } from '@common/shared';
import { Appointments } from '@/repositories/AppointmentRepository';

const handler = async () => {
  const appointments = await Appointments.scan().all().exec()
  const populated = await Promise.all(appointments.map(appointment => appointment.populate()))
  return formatJSONResponse(populated);
};

export const main = appWrapper(handler);
