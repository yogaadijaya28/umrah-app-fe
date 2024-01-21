export interface WalletPointRewardResponses {
    status?: boolean
    message?: string
    company_code?: string
    member_code?: string
    last_point?: number
}

export interface WalletPointHistoryResponses {
    company_code ?: string
    member_code ?: string
    point ?: number
    issued_date ?: string
    expired_date ?: string
}

