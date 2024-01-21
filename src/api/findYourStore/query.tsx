import { useQuery } from '@tanstack/react-query';
import { useEffect } from "react";
import { OutletParams } from './types'
import { getHeaderOutlet } from './index'

export const useGetOutlet = (params: OutletParams) => {
    const controller = useQuery({ queryKey: ['getOutletData', params], queryFn: () => getHeaderOutlet(params)});

    useEffect(() => {
        if (controller.isError) {
            console.log(`Outlet gagal ditampilkan`);
        }
    }, [controller.isError]);

    return controller;
};


