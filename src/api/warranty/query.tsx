import {  useQuery } from '@tanstack/react-query';
import { getWarrantyOpticLenses, getWarrantyPABD } from '.';

export const UseGetWarrantyOpticLenseDatas = () => {
    const controller = useQuery({ queryKey: ['GetWarrantyOpticLenseDatas'], queryFn: () => getWarrantyOpticLenses() });
    return controller;
};


export const UseGetWarrantyPABDDatas = () => {
    const controller = useQuery({ queryKey: ['GetWarrantyPABDDatas'], queryFn: () => getWarrantyPABD()});
    return controller;
};
