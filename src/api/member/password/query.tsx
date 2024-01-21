import { useMutation } from '@tanstack/react-query';
import { updatePasswordParams } from './types'
import { updatePassword} from './index'

export const useUpdatePassword = () => {
    const controller = useMutation({
        mutationFn: (params: updatePasswordParams) => updatePassword(params),
    });

    return controller;
};


