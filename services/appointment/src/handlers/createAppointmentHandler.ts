import { appWrapper } from '@/middlewares/app-wrapper';
import { formatJSONResponse } from '@common/shared';
import { Users } from '@/repositories/UserRepository';
import { Appointments } from '@/repositories/AppointmentRepository';

interface CreateAppointmentBody {
    project: string
    userId: string
}

const handler = async (event) => {
    const body = event.body as CreateAppointmentBody
    const user = await Users.get(body.userId)
    if (!user) throw new Error('User not found')
    const appointment = await Appointments.create({
        project: body.project,
        appointer: user,
    })
    return formatJSONResponse(appointment);
};

export const main = appWrapper(handler);
