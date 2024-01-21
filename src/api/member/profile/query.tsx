import { useMutation } from '@tanstack/react-query';
import { ChangeMailReqParams, ChangeMailValidParams, ChangeMailSubmitParams, changeProfileParams } from './types'
import {
    postReqChangeMail, postValidChangeMail, postSubmitChangeMail,
    postReqChangeNumber, postValidChangeNumber, postSubmitChangeNumber,
    changeProfile
} from './index'

export const useChangeProfile = () => {
    const controller = useMutation({
        mutationFn: (params: changeProfileParams) => changeProfile(params),
    });

    return controller;
};


export const useReqChangeMail = () => {
    const controller = useMutation({
        mutationFn: (params: ChangeMailReqParams) => postReqChangeMail(params),
    });

    return controller;
};

export const useValidChangeMail = () => {
    const controller = useMutation({
        mutationFn: (params: ChangeMailValidParams) => postValidChangeMail(params),
    });

    return controller;
};

export const useSubmitChangeMail = () => {
    const controller = useMutation({
        mutationFn: (params: ChangeMailSubmitParams) => postSubmitChangeMail(params),
    });

    return controller;
};

export const useReqChangeNumber = () => {
    const controller = useMutation({
        mutationFn: (params: ChangeMailReqParams) => postReqChangeNumber(params),
    });

    return controller;
};

export const useValidChangeNumber = () => {
    const controller = useMutation({
        mutationFn: (params: ChangeMailValidParams) => postValidChangeNumber(params),
    });

    return controller;
};

export const useSubmitChangeNumber = () => {
    const controller = useMutation({
        mutationFn: (params: ChangeMailSubmitParams) => postSubmitChangeNumber(params),
    });

    return controller;
};

