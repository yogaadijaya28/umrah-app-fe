import React, { createContext, useState } from 'react'
import { MenuReponses } from '@/api/headerFooter/types'


type MenuContextValueProps = {
    setMenuData: (menuData: Array<MenuReponses>) => void
    menuData: Array<MenuReponses>
    setFooterData: (footerData: Array<MenuReponses>) => void
    footerData: Array<MenuReponses>
}

type MenuContextProviderProps = {
    children: React.ReactNode
}

export const MenuContext = createContext<MenuContextValueProps>({
    menuData: [],
    footerData: [],
    setMenuData: (footerData: Array<MenuReponses>) => false,
    setFooterData: (footerData: Array<MenuReponses>) => false,
})

export default function LanguageContextProvider(props: MenuContextProviderProps) {
    const [menuData, setMenuData] = useState<Array<MenuReponses>>([])
    const [footerData, setFooterData] = useState<Array<MenuReponses>>([])

    return (
        <MenuContext.Provider
            value={{
                menuData,
                setMenuData,
                footerData,
                setFooterData,
            }}
        >
            {props.children}
        </MenuContext.Provider>
    )
}
