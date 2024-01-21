import { Method } from 'axios'
import { AxiosRequestConfig } from 'axios'

export interface CallOptions {
    method: Method
    subUrl?: string
    data?: Record<string, any>
    options?: AxiosRequestConfig
    overrideBaseUrl?: string
    useStrapi: boolean
    headerPost?: Record<string, any>
}