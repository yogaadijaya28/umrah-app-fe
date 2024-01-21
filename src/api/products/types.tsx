export interface detailProductParams {
    slug?: string | any
}

export interface productAvaibleStoreParams {
    product_id?: string
}


export interface RecomendationProductResponse {
    current_page?: number
    data?: Products[]
    first_page_url?: string
    from?: number
    last_page?: number
    last_page_url?: string
    next_page_url?: string | null
    path?: string
    per_page?: number
    prev_page_url?: string | null
    to?: number
    total?: number
}

export interface DetailProductResponse {
    id?: number
    product_section_id?: number
    brand_id?: number
    barcode?: string
    sku?: string
    name?: string
    description?: string | null
    additional_info?: string | null
    weight?: number
    price?: number
    price_discount?: number | null
    is_virtual_tryon?: number | null
    is_bookingtostore?: boolean | null
    product_parent?: string | null
    publised_status?: string | null
    published_scope?: string | null
    status_sells?: number | null
    is_top?: boolean
    slug?: string
    is_new?: boolean
    stock_package?: number
    product_type?: {
        id?: number
        name?: string
        slug?: string
    }
    quantity_group?: null
    product_type_id?: number
    is_bestseller?: boolean
    is_popular?: boolean
    width?: number
    height?: number
    length?: number
    is_sync_pos?: boolean
    outlet_stock?: number
    outlet_stock_grouping?: number
    is_publish?: boolean
    code?: string
    tag_badge?: string | null
    sku_trim?: string
    show_in_catalog?: boolean
    price_awal?: string
    max_qty?: string | null
    is_single_purchase?: boolean
    brand_display?: string | null
    outlet_stock_jabodetabek?: number
    outlet_stock_warehouse?: number
    status_tag?: string
    stock_melawai_raya?: number
    stock_jabodetabek_gudang?: number
    is_pre_order?: boolean
    last_sync_at?: string | null
    is_duplicate?: boolean
    ean?: string
    tag_badge_color?: string | null
    price_discount_promo?: {
        name?: string
        value?: number
        max_discount?: number
        price?: number
        price_discount?: number
        type?: string
    }
    is_wishlist?: boolean
    section?: {
        id?: number
        name?: string
        update_by?: number
        status_active?: number
        file?: string
        filename?: string | boolean
        filetype?: string | boolean
        sort?: number
        slug?: string
        code?: string
        is_active?: boolean
    }
    image?: Image
    sku_group?: any
    brand?: {
        id?: number
        is_parent?: string
        name?: string
        code?: string
        code_aliases?: string | null
        image?: string | null
        image_watermark?: string | null
        description?: string
        permalink?: string
        namespace?: string
        is_gender?: string
        parent_id?: string | null
        update_by?: number
        deleted_at?: string | null
        created_at?: string | null
        updated_at?: string | null
        is_top?: string | null
        status?: string | null
        group?: string | null
        is_marketplace?: boolean
        brand_display?: string
        shopee_brand_id?: string | null
    }
    images?: Image[]
    video?: string | null
    details?: Array<Details>
    outlet_product_stocks?: Array<{
        id?: number
        product_id?: number
        outlet_id?: number
        stock?: number
        price_outlet?: number
        price_outlet_disc?: number | null
        status?: boolean
        variant_value_skus?: any
        outlet?: Outlets
    }>
    wishlist?: any
    packages?: any
}

export interface ProductAvaibleStoreResponse {
    id: number
    product_id?: number
    outlet_id?: number
    price_outlet?: number
    price_outlet_disc?: number | null
    stock?: number | null
    stock_outlet?: number | null
    images?: ImageProductAvaible[]
    product?: Products
    outlet: Outlets
}

export interface Details {
    id?: number
    value?: string
    name?: string
    code?: string
    unit?: string | null
}

export interface Outlets {
    id?: number
    code?: string
    name: string
    address?: string
    phone?: string
    outlet_image?: string
    is_active?: string
    longitude?: string
    latitude?: string
    city_code?: string | null
    city_id?: number
    province_id?: number
    postal_code?: string
    update_by?: string | null
    created_at?: string | null
    updated_at?: string | null
    deleted_at?: string | null
    outlet_type_id?: string | null
    outlet_image_thumb?: string | null
    kecamatan_id?: number | null
    warehouse_id?: number | null
    icapos_code?: string | null
    outlet_group?: string | null
    is_head_quarter?: boolean
    region?: string
    whatsapp_number?: string
    open_status?: string
    display_name?: string
    street1?: string
    street2?: string
    street3?: string
    street4?: string
    street5?: string
    display_address?: Array<string>
    outlet_image_url?: string
    maps_uri?: string | null
    city?: {
        id?: number
        name?: string
        province_id?: number
        created_at?: string | null
        updated_at?: string | null
        deleted_at?: string | null
        shipper_id?: number
        shipper_code?: string
        jnt_code?: string
        jnt_send_site_code?: string
    }
    outlet_gmb_profile?: {
        id?: number
        outlet_id?: number
        name?: string
        title?: string
        properties?: string
        created_at?: string
        updated_at?: string
    }
}

export interface Products {
    id?: number
    product_section_id?: number
    brand_id?: number
    sku?: string
    name?: string
    price: number
    price_discount?: number | null | any
    price_discount_promo?: {
        name?: string
        value?: number
        max_discount?: number
        price?: number
        price_discount?: number
        type?: string
    }
    price_awal?: string
    is_bookingtostore?: boolean | null | any
    is_top?: boolean
    barcode?: string
    slug?: string
    is_new?: boolean
    product_type_id?: number
    is_bestseller?: boolean
    tag_badge?: any
    is_popular?: boolean
    show_in_catalog?: boolean
    max_qty?: any
    is_single_purchase?: boolean
    is_pre_order?: boolean
    stock_melawai_raya?: number
    stock_jabodetabek_gudang?: number
    tag_badge_color?: string
    image?: Image
    brand?: Brand
    tags?: Tag[]
}

export interface Image {
    id?: number
    product_id?: number
    filename?: string
    type?: string
    file?: string
    image_type?: string
    innumber?: number
}

export interface Brand {
    id?: number
    name?: string
}

export interface Tag {
    id?: number
    name?: string
    code?: string
    description?: any
    created_at?: string
    updated_at?: string
    tag_group_id?: number
    slug?: string
    is_bogof?: boolean
    product_section_id?: any
    color?: string
    pivot?: Pivot
}

export interface Pivot {
    product_id?: number
    tag_id?: number
}

export interface ImageProductAvaible {
    filename?: string
    type?: string
}
