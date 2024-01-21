import { useQuery, useMutation } from '@tanstack/react-query';
import { useEffect } from "react";
import { getAuthData, postLoginUser, reqNumberOtp, validNumberOtp, reqMailOtp, validMailOtp, postRegisterUser } from './index'
import { LoginParams, ReqPhoneNumberParams, ValidPhoneNumberParams, RegisterParams } from './types'

export const useRegister = () => {
    const controller = useMutation({
        mutationFn: (params: RegisterParams) => postRegisterUser(params),
    });

    return controller;
};

export const useLogin = () => {
    const controller = useMutation({
        mutationFn: (params: LoginParams) => postLoginUser(params),
    });

    useEffect(() => {
        if (controller.isError) {
            console.log(`Auth error "${controller.error}"`);
        }
    }, [controller.isError]);

    return controller;
};

export const UsetGetAuthData = (isEnabled: boolean) => {
    const controller = useQuery({ queryKey: ['getAuthData'], queryFn: () => getAuthData(), enabled: isEnabled });

    useEffect(() => {
        if (controller.isError) {
            console.log(`Auth Data gagal ditampilkan`);
        }
    }, [controller.isError]);

    return controller;
};

export const useReqNumberOTP = () => {
    const controller = useMutation({
        mutationFn: (params: ReqPhoneNumberParams) => reqNumberOtp(params),
    });

    return controller;
};

export const useValidNumberOTP = () => {
    const controller = useMutation({
        mutationFn: (params: ValidPhoneNumberParams) => validNumberOtp(params),
    });

    return controller;
};

export const useReqMailOTP = () => {
    const controller = useMutation({
        mutationFn: (params: ReqPhoneNumberParams) => reqMailOtp(params),
    });

    return controller;
};

export const useValidMailOTP = () => {
    const controller = useMutation({
        mutationFn: (params: ValidPhoneNumberParams) => validMailOtp(params),
    });

    return controller;
};

