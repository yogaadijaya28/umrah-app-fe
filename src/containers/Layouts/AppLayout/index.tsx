import { ToastContainer } from "react-toastify";
import { useRouter } from 'next/router'
import { useEffect, ReactNode } from 'react'
import { hasCookie } from 'cookies-next'
import { useQueryClient } from '@tanstack/react-query';
import Menu from 'component/menu'
import FooterComponent from 'component/footer'

type Props = {
    children?: ReactNode;
};


export default function AppLayout({ children }: Props) {
    const router = useRouter()
  
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
