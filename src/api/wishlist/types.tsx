export interface AddToWishlistResponse {
    customer_id?: number
    id?: number
    product_id?: string
}

export interface DeleteWishlistResponse {
    customer_id?: number
    id?: number
    product_id?: string
}

export interface GetWishlistResponse {
    current_page ?: number
    data?: Array<dataWishlistArray>
    first_page_url ?: string
    from ?: number
    last_page ?: number
    last_page_url ?: string
    next_page_url ?: string
    path ?: string
    per_page ?: string
    prev_page_url ?: any
    to ?: number
    total ?: number
 
 }

export interface dataWishlistArray {
    id?: number
    customer_id?: number
    product_variant_sku: any
    product_id?: number
    product?:{
        id?: number
        product_section_id?: number
        brand_id?: number
        barcode?: string
        sku?: string
        name?: string
        description?: any
        additional_info?: any
        weight?: number
        price?: number
        price_discount?: any
        is_virtual_tryon?: number
        is_bookingtostore?: any
        product_parent?: any
        publised_status?: any
        published_scope?: any
        status_sells?: number
        is_top?: boolean
        slug?: string
        is_new?: boolean
        stock_package?: number
        product_type?: number
        quantity_group?: any
        product_type_id?: number
        is_bestseller?: boolean
        is_popular?: boolean
        width?: string
        height?: string
        length?: string
        is_sync_pos?: boolean
        outlet_stock?: number
        outlet_stock_grouping?: number
        is_publish?: boolean
        code?: string
        tag_badge?: any
        sku_trim?: string
        show_in_catalog?: boolean
        price_awal?: string
        max_qty?: any
        is_single_purchase?: boolean
        brand_display?: any
        outlet_stock_jabodetabek?: number
        outlet_stock_warehouse?: number
        status_tag?: string
        stock_melawai_raya?: number
        stock_jabodetabek_gudang?: number
        is_pre_order?: boolean
        last_sync_at?: any
        is_duplicate?: boolean
        ean?: string
        tag_badge_color?: any
        image?: {
            id?: number
            product_id?: number
            filename?: string
            type?: string
            file?: string
            image_type?: string
            innumber?: number
        }
        brand?: {
            id?: number
            is_parent?: string
            name?: string
            code?: string
            code_aliases?: any
            image?: string
            image_watermark?: any
            description?: string
            permalink?: string
            namespace?: string
            is_gender?: string
            parent_id?: any
            update_by?: any
            deleted_at?: any
            created_at?: string
            updated_at?: string
            is_top?: boolean
            status?: string
            group?: string
            is_marketplace?: boolean
            brand_display?: string
            shopee_brand_id?: any
        }
        section?: any
        variant_sku?: any
        sku_group?: any
        images?: any
        video?: any
        outlet_product_stock?: any
        tags?: any
    
    }
}
