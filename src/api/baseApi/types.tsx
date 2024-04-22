export interface CommonStrapiResponse<T = any> {
    data: T
    meta: T
    error: CommonStrapiError
}
export interface CommonStrapiArrayResponse<T = any> {
    data?: Array<T>
    meta?: CommonStrapiMeta
    error: CommonStrapiError
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
export interface CommonArrayResponse<T = any> {
    status?:number
    message?: string
    result?: Array<T>
}

export interface CommonStrapiError {
    status: number
    name: string
    message: string
    details: any
}
