import { useQuery } from '@tanstack/react-query';
import { useEffect } from "react";
import { CompanyProfileParams } from './types'
import { getPageCompanyProfile } from './index'

export const useGetCompanyProfile = (params: CompanyProfileParams) => {
    const controller = useQuery({ queryKey: ['GetCompanyProfileDatas', params], queryFn: () => getPageCompanyProfile(params) });

    useEffect(() => {
        if (controller.isError) {
            console.log(`Company Profile gagal ditampilkan`);
        }
    }, [controller.isError]);

    return controller;
};
