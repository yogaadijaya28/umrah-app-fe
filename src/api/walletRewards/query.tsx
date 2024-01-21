import {  useQuery } from '@tanstack/react-query';
import {  getPointCheck, getPointHistory } from './index'



export const UsegetWalletPointRewards = () => {
    const controller = useQuery({ queryKey: ['getPointRewards'], queryFn: () => getPointCheck() });

    return controller;
};

export const UsegetWalletPointHistory = () => {
    const controller = useQuery({ queryKey: ['getPointHistory'], queryFn: () => getPointHistory() });

    return controller;
};


