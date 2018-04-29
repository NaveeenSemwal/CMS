import { User } from "./user.model";



export interface IUser {

    Register(model: User, isValid: boolean);
}
