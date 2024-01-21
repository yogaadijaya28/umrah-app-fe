import { useMutation, useQuery } from '@tanstack/react-query';
import { postAddtoWishlist, deleteFromWishlist, getWishlists } from './index'

export const UseAddtoWishlist = () => {
    const controller = useMutation({
        mutationFn: (productId: string | number) => postAddtoWishlist(productId),
    });

    return controller;
};

export const UseDeletefromWishlist = () => {
    const controller = useMutation({
        mutationFn: (productId: string | number) => deleteFromWishlist(productId),
    });

    return controller;
};


export const UseGetWishlist = () => {
    const controller = useQuery({ queryKey: ['getWishlists'], queryFn: () => getWishlists() });

    return controller;
};

