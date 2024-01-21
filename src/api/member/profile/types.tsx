export interface changeProfileParams {
    email?: string
    mobile_number?: string
    name?: string
    title?: string
    sex?: string
    birth_date?: string
    job?: string
    interest?: string
    address: string
    province_id: string
    city_id: string
    religion?: string
}


export interface ChangeMailReqParams {
    oldvalue?: string
}

export interface ChangeMailValidParams {
    oldvalue?: string
    newvalue: string
    credential?: string
}

export interface ChangeMailSubmitParams {
    newvalue?: string
    credential?: string
}


export interface ChangeMailResponses {
    otp?: number
    expired_at?: string
    expired_unix_at?: number
}
