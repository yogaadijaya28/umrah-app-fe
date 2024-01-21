import { createContext, useState, useEffect, useContext } from 'react'
import { hasCookie, getCookie } from 'cookies-next'
import { UserReponses } from '@/api/login/types'
import { UseGetCartList } from '@/api/cart/query'
import { getListCartResponse } from '@/api/cart/types'
type AuthContextValueProps = {
    setToken: (token: string) => void
    setCartToken: (token: string) => void
    setUserData: (userData: UserReponses) => void
    setRunGetCart: (runGetCart: boolean) => void
    setShowCart: (showCart: boolean) => void
    setLanguageChart: (languageChart: string) => void
    token: string
    cartToken: string
    userData: UserReponses
    cartData: Array<getListCartResponse>
    runGetCart: boolean
    showCart: boolean

    languageChart: string
}

type AuthContextProviderProps = {
    children: React.ReactNode
}

export const AuthContext = createContext<AuthContextValueProps>({
    setToken: (token: string) => false,
    setCartToken: (token: string) => false,
    setUserData: (userData: UserReponses) => false,
    setRunGetCart: (runGetCart: boolean) => false,
    setShowCart: (showCart: boolean) => false,
    setLanguageChart: (languageChart: string) => false,
    token: '',
    cartToken: '',
    userData: {},
    cartData: [],
    runGetCart: false,
    showCart: false,

    languageChart: '',
})

export default function AuthContextProvider(props: AuthContextProviderProps) {
    const [token, setToken] = useState<string>('')
    const [cartToken, setCartToken] = useState<string>('')
    const [userData, setUserData] = useState<UserReponses>({})
    const [runGetCart, setRunGetCart] = useState<boolean>(true)
    const [showCart, setShowCart] = useState<boolean>(false)
    const [languageChart, setLanguageChart] = useState<string>('id')

    const [cartData, setCartData] = useState<Array<getListCartResponse>>([])
   

    useEffect(() => {
        if (hasCookie('token_code')) {
            if (getCookie('token_code') != '') {
                setToken(getCookie('token_code') || '')
            } else {
                setToken('')
            }
        } else {
            setToken('')
        }
    }, [token])


    return (
        <AuthContext.Provider
            value={{
                setToken,
                setCartToken,
                setUserData,
                setRunGetCart,
                setShowCart,
                setLanguageChart,
                token,
                cartToken,
                userData,
                cartData,
                runGetCart,
                showCart,
                languageChart,
            }}
        >
            {props.children}
        </AuthContext.Provider>
    )
}
