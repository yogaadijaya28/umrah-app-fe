import { useQuery } from '@tanstack/react-query';
import { useEffect } from "react";
import { PrivacyPolicyParams } from './types'
import { getPagePP } from './index'

export const useGetPP = (params: PrivacyPolicyParams) => {
    const controller = useQuery({ queryKey: ['getContactUsDatas', params], queryFn: () => getPagePP(params) });

    useEffect(() => {
        if (controller.isError) {
            console.log(` Privacy Policy gagal ditampilkan`);
        }
    }, [controller.isError]);

    return controller;
};
