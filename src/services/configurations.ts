import { Redirect} from 'react-router-dom';

export const setLanguage = (language: string, reload?: boolean) => {
    localStorage.setItem('language', language)
    if (reload)
        window.location.href = '/';
}

export const getLanguage = (): string => {
    const language = localStorage.getItem('language')
    if (language)
        return language
    return 'en'
}