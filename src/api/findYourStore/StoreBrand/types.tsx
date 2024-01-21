export interface ProductsByOutletParams {
   page?: number;
   limit?: number;
   outlet_id?: string;
}
export interface ProductsByOutletResponses {
   current_page ?: number
   data?: Array<dataProductsByOutletArray>
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
export interface dataProductsByOutletArray {
   id?: number
   product_section_id?: number
   brand_id?: number
   sku?: string
   name?: string
   price?: number
   price_discount?: any
   price_awal?: string
   is_bookingtostore?: any
   is_top?: boolean
   slug?: string
   is_new?: boolean
   product_type_id?: number
   is_bestseller?: boolean
   tag_badge?: any
   is_popular?: boolean
   show_in_catalog?: boolean
   is_publish?: boolean
   max_qty?: any
   is_single_purchase?: boolean
   is_pre_order?: boolean
   stock_melawai_raya?: number
   stock_jabodetabek_gudang?: number
   tag_badge_color?: any
   sec_tag_badge?: any
   sec_tag_badge_color?: any
   image?: imageAttributes
   brand?: brandAttributes
   product_type?: product_typeAttributes
   price_discount_promo?: price_discount_promoAttributes
   outlet_product_stock ?: any
   tags?:any
}

export interface price_discount_promoAttributes {
   name?: string
   value?: number
   max_discount?: number
   price?: number
   price_discount?: number
   type?: string
}

export interface product_typeAttributes {
   id?: number
   name?: string
   slug?: string
}
export interface brandAttributes {
   id?: number
   name?: string
}
export interface imageAttributes {
   filename?: string
   type?: string
   file?: string
   image_type?: string
}

export interface StoreBrandResponses {
   data?: Array<dataStoreBrandArray>
}

export interface dataStoreBrandArray {
   id?: number
   permalink?: string
   slug?: string
   brand_name?: string
   image?: string
   code?: string
   description?: string
   gender?: string
}


export interface BrandsByOutletParams {
   page?: number;
   limit?: number;
   outlet_id?: string;
}

export interface OutletDetailParams {
   outletId?: string
}

export interface OutletListParams {
   page?: number;
   limit?: number;
   query?: string;
}
export interface BrandsParams {
   page?: number;
   limit?: number;
   q?: string;
}
export interface OutletListResponses {
   data?: Array<dataOutletListArray>
}

export interface dataOutletListArray {
   id?: number
   code?: string
   name?: string
   address?: string
   phone?: string
   outlet_image?: string
   is_active?: string
   longitude?: string
   latitude?: string
   city_code?: any
   city_id?: number
   province_id?: number
   postal_code?: string
   update_by?: any
   created_at?: string
   updated_at?: string
   deleted_at?: any
   outlet_type_id?: any
   outlet_image_thumb?: any
   kecamatan_id?: any
   warehouse_id?: any
   icapos_code?: string
   outlet_group?: string
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
   display_address?: any
   outlet_image_url?: string
   city?: any
   province?: any
   outlet_hours?: Array<dataOutletHours>
}

export interface dataOutletHours {
   id?: number
   outlet_id?: number
   day?: string
   start?: string
   end?: string
   update_by?: number
   created_at?: string
   updated_at?: string
   deleted_at?: any
   is_operational?: boolean
   timezone?: string
   description?: string
   today?: boolean
   is_open?: boolean
}