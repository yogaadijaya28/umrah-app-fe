import React, { createContext, useState, useEffect } from 'react'
import { hasCookie, setCookie, getCookie } from 'cookies-next'


type LanguageContextValueProps = {
    setLanguage: (language: string) => void
    language: string
}

type LanguageContextProviderProps = {
    children: React.ReactNode
}

export const LanguageContext = createContext<LanguageContextValueProps>({
    language: 'id-ID',
    setLanguage: (language: string) => false,
})

export default function LanguageContextProvider(props: LanguageContextProviderProps) {
    const [language, setLanguage] = useState<string>('id-ID')

    useEffect(() => {
        if (hasCookie('language') && getCookie('language') !== language) {
            setLanguage(getCookie('language') || 'id-ID')
        }
    }, [language])

    return (
        <LanguageContext.Provider
            value={{
                language,
                setLanguage,
            }}
        >
            {props.children}
        </LanguageContext.Provider>
    )
}
