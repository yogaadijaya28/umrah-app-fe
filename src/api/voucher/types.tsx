export interface getListVoucherParams {
    page: number,
    limit: number,
    idProduct: string,
}

export interface GetListVoucherResponseData {
    current_page: number
    data: Array<GetListVoucherResponse>
    first_page_url: string
    from: number
    last_page: string
    last_page_url: string
    next_page_url: string | null
    path: string | null
    per_page: number
    to: number
    total: number
}

export interface GetListVoucherResponse {
    id: number
    name: string
    code: string
    type: string
    value: number
    start: string
    end: string
    image: string
    description: string
    quota_daily: number
    quota_max: number
    max_discount: number
    quota_per_user: number
    min_cost: number
    is_all_user: boolean
    is_all_productsection: boolean
    is_specific_product: boolean
    is_additional_attr: boolean
    is_all_payment: boolean
    is_all_outlet: boolean
    status: boolean
    publish_scope: string
    updated_by: number
    created_at: string
    updated_at: string
    deleted_at: any
    target_type: string
    is_specific_time: boolean
    is_specific_brand: boolean
    is_specific_bank: boolean
    is_specific_bin: boolean
    is_generated: boolean
    is_specific_tag: boolean
    is_mobile_only: boolean
    can_multiple: boolean
    daily_per_user: number
    validity: number
    has_child: boolean
    is_need_code: boolean
    min_qty: number
    has_free_product: boolean
    max_free_product: any
    sprint_code: any
    need_gift_code: boolean
    random_free_product: boolean
    is_package_allowed: boolean
    is_exclude_brand: boolean
    membership_code: any
    use_original_price: boolean
    is_just_claim_only: boolean
    max_qty: any
    products: any[]
    product_sections: ProductSection[]
    outlets: any[]
    brands: any[]
    times: any[]
    tags: Tag[]
    children: any[]
}

export interface ProductSection {
    id: number
    name: string
    update_by: number
    status_active: number
    file: string
    filename?: string
    filetype?: string
    sort: number
    slug: string
    code: string
    is_active: boolean
    pivot: Pivot
}

export interface Pivot {
    voucher_id: number
    product_section_id: number
    created_at: string
    updated_at: string
}

export interface Tag {
    id: number
    name: string
    code: string
    description: any
    created_at: string
    updated_at: string
    tag_group_id: any
    slug: string
    is_bogof: boolean
    product_section_id: any
    color?: string
    pivot: Pivot2
}

export interface Pivot2 {
    voucher_id: number
    tag_id: number
    created_at: string
    updated_at: string
}


