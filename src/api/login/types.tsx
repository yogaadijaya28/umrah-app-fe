export interface LoginParams {
    email: string
    password: string
}

export interface RegisterParams {
    name: string;
    password: string;
    sex: string;
    birth_date: string;
    referral_code?: string | null;
    province_id: string;
    city_id: string;
    religion?: string;
    address: string;
    title: string;
    get_offer?: string | null;
    email?: string | null;
    mobile_number?: string | null;
    otp_email?: string | null;
    otp_mobile_number?: string | null;
}

export interface LoginReponses {
    token?: string
    user?: UserReponses
}

export interface RegisterReponses {
    is_membership?: boolean
    token?: string
    user?: UserReponses
}

export interface UserReponses {
    id?: number
    name?: string
    email?: string
    email_verified_at?: string
    mobile_verified_at?: string
    mobile_number?: string
    birth_date?: string
    sex?: number
    fb_uid?: string
    google_uid?: string
    created_at?: string
    updated_at?: string
    membership_id?: number
    old_id?: string
    old_username?: string
    cust_id?: string
    apple_uid?: string
    kdmember?: string
    title?: string
    address?: string
    religion?: string
    job?: string
    interest?: string
    city_id?: number
    is_completed?: boolean
    password_updated_at?: string
    get_offer?: boolean
    channel?: boolean
    province?: ProvinceReponses
    is_register_icapos?: boolean
    use_password_confirmation?: boolean
    city?: CityReponses
}

export interface ProvinceReponses {
    id?: number
    name?: string
    inisial?: string
    capital?: string
    shipper_id?: number
    shipper_code?: string
    is_use_area?: boolean
    icapos_code?: string
}

export interface CityReponses {
    id?: number
    m_province_id?: number
    name?: number
    shipper_id?: number
    shipper_code?: string
    jnt_code?: string
    jnt_send_site_code?: string
    icapos_code?: string
    m_province?: ProvinceReponses
}

export interface ReqPhoneNumberParams {
    value: string
}

export interface ValidPhoneNumberParams {
    value: string
    credential: string
}