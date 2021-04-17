import { User, UserProfile } from '../models/user';
import { post, get } from '../libs/serviceHandler';

export const getStudentsList = async (): Promise<User[]> => {
    const response = await get<User[]>(`${process.env.REACT_APP_BACKEND}/api/user/profiles`);
    if (response.parsedBody)
        return response.parsedBody
    else
        return [] as User[]
}
export const getProfile = async (): Promise<UserProfile> => {
    const response = await get<User>(`${process.env.REACT_APP_BACKEND}/api/user/profile`);
    if (response.parsedBody)
        return response.parsedBody.userProfile
    else
        return {} as UserProfile
}
