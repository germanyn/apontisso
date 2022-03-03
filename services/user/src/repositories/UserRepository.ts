import { model, Schema } from "dynamoose";
import { User } from '../entities/User'
import { Document } from 'dynamoose/dist/Document';
import { v4 } from 'uuid';

model.defaults

const userSchema = new Schema({
    id: {
        type: String,
        default: v4,
    },
    name: String,
})

class UserDocument extends Document implements User {
    id: string;
    name: string
}

export const Users = model<UserDocument>('User', userSchema)
