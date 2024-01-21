import { useQuery } from '@tanstack/react-query';
import { useEffect } from "react";
import { getProvince, getCity, getDistrict, getPostalCode } from './index'

export const UseGetProvince = () => {
    const controller = useQuery({ queryKey: ['getInputProvince'], queryFn: () => getProvince() });

    useEffect(() => {
        if (controller.isError) {
            console.log(`Province Data gagal ditampilkan`);
        }
    }, [controller.isError]);

    return controller;
};

export const UseGetCity = (province_id: string, isEnabled: boolean) => {
    const controller = useQuery({ queryKey: ['getInputCity', province_id], queryFn: () => getCity(province_id), enabled: isEnabled });

    useEffect(() => {
        if (controller.isError) {
            console.log(`City Data gagal ditampilkan`);
        }
    }, [controller.isError]);

    return controller;
};

export const UseGetDistrict = (city_id: string, isEnabled: boolean) => {
    const controller = useQuery({ queryKey: ['getInputDistrict', city_id], queryFn: () => getDistrict(city_id), enabled: isEnabled });

    useEffect(() => {
        if (controller.isError) {
            console.log(`District Data gagal ditampilkan`);
        }
    }, [controller.isError]);

    return controller;
};

export const UseGetPostalCode = (district_id: string, isEnabled: boolean) => {
    const controller = useQuery({ queryKey: ['getInputPostalCode', district_id], queryFn: () => getPostalCode(district_id), enabled: isEnabled });

    useEffect(() => {
        if (controller.isError) {   
            console.log(`PostalCode Data gagal ditampilkan`);
        }
    }, [controller.isError]);

    return controller;
};