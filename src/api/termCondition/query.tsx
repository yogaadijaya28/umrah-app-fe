import { useQuery } from '@tanstack/react-query';
import { useEffect } from "react";
import {  TermConditionParams } from './types'
import { getPageTC } from './index'

export const useGetTC = (params: TermConditionParams) => {
    const controller = useQuery({ queryKey: ['getTermConditionDatas', params], queryFn: () => getPageTC(params) });

    useEffect(() => {
        if (controller.isError) {
            console.log(` Term Condition gagal ditampilkan`);
        }
    }, [controller.isError]);

    return controller;
};
