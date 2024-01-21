import { Products } from "@/api/products/types"

export interface addtoCartParams {
    update?: boolean
    cart_id?: number
    cart_token?: string
    quantity?: number
    product_id?: number
}

export interface listCartParams {
    cart_token?: string
    lang?: string
}

export interface DeleteCartParams {
    idCart?: Array<any>
    lang?: string
}

export interface CheckCartParams {
    idCart?: Array<number | undefined>
    cart_token?: string
    lang?: string
}

export interface ShippingCostParams {
    product_ids?: Array<number | undefined>
    product_id?: number
    outlet_id?: string | null
    customer_address_id?: number
    district_id?: number
}

export interface InsuranceCostParams {
    product_ids?: Array<number | undefined>
    check_insurance?: boolean
    customer_address_id?: number
    is_preview?: boolean
    logistic_estimation?: string
    logistic_name?: string
    logistic_rate?: number
    logistic_service_id?: number
    logistic_service_name?: string
    original_shipping_cost?: number
    outlet_id?: string | null
    use_insurance?: boolean
}



export interface addtoCartResponse {
    is_checked?: boolean
    voucher_lens?: string | null
    status_product_tag?: string | null
    outlet_product_stock_id?: string | null
    is_free_product?: boolean
    product_variant_sku_id?: string | null
    product_id?: string | null
    customer_id?: string | null
    cart_token?: string
    quantity?: string | null
    updated_at?: string | null
    created_at?: string | null
    id?: number | null
    can_choose_lens?: boolean | null
    product?: Products
}

export interface getListCartResponse {
    cart_token?: string | null
    children?: Array<any>
    created_at?: string
    customer_id?: number
    device_type?: string
    id?: number
    is_checked?: boolean
    is_free_product?: boolean
    lens?: null
    outlet?: {
        id?: number | null
        code?: number | null
        name?: number | null
    }
    outlet_product_stock_id?: string | null
    pairings?: string | null
    parent_ids?: number | null
    positions?: number | null
    price?: number | null
    product?: Products
    product_id?: number
    product_type_id?: number
    product_variant_sku_id?: number | null
    quantity: number
    status_product_tag?: string | null
    stock?: number
    updated_at?: string
    voucher_lens?: string | null
}


export interface ShippingCostResponse {
    id?: number
    cost?: number
    estimation?: string
    estimation_type?: string
    image?: string
    is_free_shipping?: boolean
    is_insurance_available?: boolean
    is_use_area?: boolean
    is_use_coordinate?: boolean
    logistic?: string
    max_raw_estimation?: number
    min_raw_estimation?: number
    note?: string
    origin_district_id?: number
    original_cost?: number
    rate?: {
        name?: string
        cost?: number
        productType?: number
        vendor?: string
    }
    service?: string
    service_code?: string
    service_id?: number
    service_type?: string
}


export interface InsuranceCostResponse {
    insurance_value?: number
}