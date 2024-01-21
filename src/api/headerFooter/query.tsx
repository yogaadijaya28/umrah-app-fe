import { useQuery } from '@tanstack/react-query';
import { useEffect } from "react";
import { MenuParams } from './types'
import { getMenu } from './index'

export const useGetMenu = (params: MenuParams, isEnabled: boolean) => {
    const controller = useQuery({ queryKey: ['getMenuData', params], queryFn: () => getMenu(params), enabled: isEnabled });

    useEffect(() => {
        if (controller.isError) {
            console.log(`Menu gagal ditampilkan`);
        }
    }, [controller.isError]);

    return controller;
};

