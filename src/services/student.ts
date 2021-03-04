import { User, UserProfile } from '../models/user';
import { post, get } from '../libs/serviceHandler';

export const getStudentsList = async () => {
    const response = await get<User[]>(`${process.env.REACT_APP_BACKEND}/api/user/profiles`, {});
    if (response.status === 200) {
        return response.parsedBody
    }
}