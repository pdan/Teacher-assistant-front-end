export interface UserProfile {
    id: number
    firstname: string
    surname: string
    email: string
    birthdate: number
    sex: string
    jobTitle: string
    introducedBy: string
    address: string
    secondPhone: string
    education: string
    country: string
    city: string
}

export interface User {
    id?: string,
    phone: string,
    password: string,
    userProfile: UserProfile
}

export interface UserSettings {
    language: string
}