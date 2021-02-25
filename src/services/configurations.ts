export const setLanguage = (language: string, reload?: boolean) => {
    localStorage.setItem('language', language)
    if (reload)
        window.location.reload();
}

export const getLanguage = (): string => {
    const language = localStorage.getItem('language')
    if (language)
        return language
    return 'en'
}