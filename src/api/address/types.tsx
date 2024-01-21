export interface ListAddressReponses {
    id?: number
    label?: string
    name?: string
    detail?: string
    full_address?: string
    area?: null
    district?: any
    city?: any
    lat?: null
    lng?: null
    province?: any
    postalcode?: any
    phone?: string
    is_main?: boolean
}

export interface MainAddressReponses {
    id?: number
    customer_id?: number
    is_main?: boolean
    name?: string
    phone?: string
    updated_by?: null
    created_at?: string
    updated_at?: string
    deleted_at?: null
    detail?: string
    m_province_id?: string
    m_city_id?: string
    m_district_id?: string
    label?: string
    m_postalcode_id?: string
    lat?: null
    lng?: null
    m_area_id?: null
    province?: any
    city?: any
    postalcode?: any
    district?: any
    area?: null
}

export interface AddAddressParams {
    label: string
    name: string
    detail?: string
    m_province_id: string
    m_city_id: string
    m_district_id: string
    m_postalcode_id: string
    phone: string
    is_main?: string
}

export interface UpdateAddressParams {
    id: number | string
    label: string
    name: string
    detail?: string
    m_province_id: string
    m_city_id: string
    m_district_id: string
    m_postalcode_id: string
    phone: string
    is_main?: string
}