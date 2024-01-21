import { useQuery } from '@tanstack/react-query';
import { useEffect } from "react";
import {  TermOfUseParams } from './types'
import { getPageTOF } from './index'

export const useGetTOF = (params: TermOfUseParams) => {
    const controller = useQuery({ queryKey: ['getTermOfUseDatas', params], queryFn: () => getPageTOF(params) });

    useEffect(() => {
        if (controller.isError) {
            console.log(` Term Of Use gagal ditampilkan`);
        }
    }, [controller.isError]);

    return controller;
};
