import { useMutation, useQuery } from '@tanstack/react-query';
import { useEffect } from "react";
import { delAddressById, getListAddressData, getMainAddressData, patchAddress, postAddress, putMainAddress } from './index'
import { AddAddressParams, UpdateAddressParams } from './types';

export const UsetGetListAddressData = (enabled: boolean) => {
    const controller = useQuery({ queryKey: ['getListAddressData'], queryFn: () => getListAddressData(), enabled: enabled });

    useEffect(() => {
        if (controller.isError) {
            console.log(`List Address Data gagal ditampilkan`);
        }
    }, [controller.isError]);

    return controller;
};

export const UseGetCustMainAddress = () => {
    const controller = useQuery({ queryKey: ['getMainAddressData'], queryFn: () => getMainAddressData() });

    useEffect(() => {
        if (controller.isError) {
            console.log(`Main Address Data gagal ditampilkan`);
        }
    }, [controller.isError]);

    return controller;
};


export const UsePostAddress = () => {
    const controller = useMutation({
        mutationFn: (params: AddAddressParams) => postAddress(params),
    });

    return controller;
};

export const UsePatchAddress = () => {
    const controller = useMutation({
        mutationFn: (params: UpdateAddressParams) => patchAddress(params),
    });

    return controller;
};

export const UseDeleteAddress = () => {
    const controller = useMutation({
        mutationFn: (id: number) => delAddressById(id)
    });

    return controller;
};

export const UsePutMainAddress = () => {
    const controller = useMutation({
        mutationFn: (id: number) => putMainAddress(id)
    });

    return controller;
};