import { useQuery } from '@tanstack/react-query';
import { useEffect } from "react";
import {  ShipingInformationParams } from './types'
import { getPageSI } from './index'

export const useGetSI = (params: ShipingInformationParams) => {
    const controller = useQuery({ queryKey: ['getShipingInformationDatas', params], queryFn: () => getPageSI(params) });

    useEffect(() => {
        if (controller.isError) {
            console.log(` Shiping Information gagal ditampilkan`);
        }
    }, [controller.isError]);

    return controller;
};
