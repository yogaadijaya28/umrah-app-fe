import { useQuery } from '@tanstack/react-query';
import { getListVoucher } from './index'
import { getListVoucherParams } from './types'

export const UseGetProductsVoucher = (params: getListVoucherParams) => {
    const controller = useQuery({ queryKey: ['getListVoucher', params], queryFn: () => getListVoucher(params), enabled: false });

    return controller;
};