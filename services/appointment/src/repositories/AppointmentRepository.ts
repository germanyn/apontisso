import { model, Schema } from "dynamoose";
import { Appointment } from '../entities/Appointment'
import { Document } from 'dynamoose/dist/Document';
import { v4 } from 'uuid';
import { Users } from "./UserRepository";

model.defaults

const schema = new Schema({
    id: {
        type: String,
        default: v4,
    },
    project: {
        type: String,
        required: true,
    },
    appointer: {
        type: Users,
        required: true,
    },
})

interface AppointmentDocument extends Document, Appointment {}

export const Appointments = model<AppointmentDocument>('Appointment', schema)
