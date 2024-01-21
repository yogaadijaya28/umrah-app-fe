import { useQuery, useMutation } from '@tanstack/react-query';
import { getCartList, postAddUpdatetoCart, deleteCart, checkCart, uncheckCart, shippingCost, insuranceCost } from './index'
import { addtoCartParams, listCartParams, DeleteCartParams, CheckCartParams, ShippingCostParams, InsuranceCostParams } from './types'

export const UseGetCartList = (params: listCartParams, isEnabled: boolean) => {
    const controller = useQuery({ queryKey: ['getCartList', params], queryFn: () => getCartList(params), enabled: isEnabled });

    return controller;
};

export const PostAddUpdatetoCart = () => {
    const controller = useMutation({
        mutationFn: (params: addtoCartParams) => postAddUpdatetoCart(params),
    });

    return controller;
};

export const DeleteDataCart = () => {
    const controller = useMutation({
        mutationFn: (params: DeleteCartParams) => deleteCart(params),
    });

    return controller;
};

export const CheckDataCart = () => {
    const controller = useMutation({
        mutationFn: (params: CheckCartParams) => checkCart(params),
    });

    return controller;
};

export const UnCheckDataCart = () => {
    const controller = useMutation({
        mutationFn: (params: CheckCartParams) => uncheckCart(params),
    });

    return controller;
};

export const GetShippingCost = () => {
    const controller = useMutation({
        mutationFn: (params: ShippingCostParams) => shippingCost(params),
    });

    return controller;
};

export const GetInsuranveCost = () => {
    const controller = useMutation({
        mutationFn: (params: InsuranceCostParams) => insuranceCost(params),
    });

    return controller;
};

