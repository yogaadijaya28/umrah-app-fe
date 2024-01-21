import { ToastContainer } from "react-toastify";
import { useRouter } from 'next/router'
import { useContext, useEffect, useState, ReactNode } from 'react'
import { hasCookie, getCookie } from 'cookies-next'
import { useQueryClient } from '@tanstack/react-query';
import Menu from 'component/menu'
import FooterComponent from 'component/footer'
import LoadingComponent from 'component/loadingComponent'
import { LanguageContext } from '@/context/LanguageContext'
import { AuthContext } from '@/context/AuthContext'
import { MenuContext } from '@/context/MenuContext'
import { UsetGetAuthData } from '@/api/login/query'


type Props = {
    children?: ReactNode;
};


export default function AppLayout({ children }: Props) {
    const router = useRouter()
    const queryClient = useQueryClient();
    const [runAuth, setRunAuth] = useState(false);

    const { language } = useContext(LanguageContext);
    const { setUserData, userData, setRunGetCart, setLanguageChart } = useContext(AuthContext);
    const { menuData, setMenuData, setFooterData } = useContext(MenuContext);

    const AuthController = UsetGetAuthData(runAuth);


    const CheckRunAuth = () => {
        if (hasCookie('token_code')) {
            if (getCookie('token_code') != '' && Object.keys(userData).length === 0) {
                return true
            } else {
                return false
            }
        } else {
            return false
        }
    }

    useEffect(() => {
        queryClient.refetchQueries({ stale: true })
        if (language == 'id-ID') {
            setLanguageChart('id')
        } else {
            setLanguageChart('en')
        }
    }, [language]);

    useEffect(() => {
        setRunAuth(CheckRunAuth)
        setRunGetCart(true)
    }, [])

  

    useEffect(() => {
        if (router.pathname.includes('member')) {
            if (!hasCookie('token_code')) {
                router.push('/')
            }
        }
    }, [router.asPath])

    return (
        <>
            <Menu />
            {/* {AuthController.isFetching || MenuController.isFetching ? <LoadingComponent /> : ''} */}
            <>{children}</>
            <ToastContainer />
            <FooterComponent />
        </>
    )
}
