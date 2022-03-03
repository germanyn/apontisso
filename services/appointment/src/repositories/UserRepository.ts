import { model, Schema } from "dynamoose";
import { User } from '../entities/User'
import { Document } from 'dynamoose/dist/Document';

model.defaults

const userSchema = new Schema({
    id: {
        type: String,
        required: true,
    },
    name: String,
})

export interface UserDocument extends Document, User {}

export const Users = model<UserDocument>('User', userSchema)
