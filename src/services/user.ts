import { User, UserProfile } from '../models/user';
import { get, post } from '../libs/serviceHandler';
export const isSignin = (): boolean => {
    const token = localStorage.getItem('token')
    if (token) {
        const expireDate = JSON.parse(atob(token.split('.')[1])).exp;
        if (expireDate * 1000 < Date.now()) {
            localStorage.removeItem('token');
            window.location.reload();
        }
        return true
    }
    return false
}

export const signin = async (user: User) => {
    const response = await post<{ token: string }>(`${process.env.REACT_APP_BACKEND}/auth/user/signin`, user);
    if (response.parsedBody && response.parsedBody.token) {
        localStorage.setItem('token', response.parsedBody.token)
        localStorage.setItem('role', JSON.parse(atob(response.parsedBody.token.split('.')[1])).role)
    }

}

export const signup = async (user: User, reload?: boolean) => {
    const response = await post<{ token: string }>(`${process.env.REACT_APP_BACKEND}/auth/user/signup`, user);
    if (response.parsedBody && response.parsedBody.token && response.status === 200) {
        signin(user)
        if (reload)
            window.location.reload();
    }
}

export const saveProfile = async (profile: UserProfile) => {
    const response = await post<UserProfile>(`${process.env.REACT_APP_BACKEND}/api/user/profile`, profile);
    if (response.status === 200) {
        return true
    }
}

export const getProfile = async (): Promise<UserProfile> => {
    const response = await get<User>(`${process.env.REACT_APP_BACKEND}/api/user/profile`);
    if (response.parsedBody)
        return response.parsedBody.userProfile
    else
        return {} as UserProfile
}
