export interface CommonStrapiResponse<T = any> {
    data: T
    meta: T
}
export interface CommonStrapiArrayResponse<T = any> {
    data?: Array<T>
    meta?: CommonStrapiMeta
}

export interface CommonStrapiMeta {
    pagination?: CommonStrapiPagination
}

export interface CommonStrapiPagination {
    page?: number
    pageSize?: number
    pageCount?: number
    total?: number
}
