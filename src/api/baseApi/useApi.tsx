/* eslint-disable no-unused-vars */
import { useRouter } from 'next/router'
import React from 'react'

export default function useApi(
    funcApi: (p: any) => Promise<any>,
    params?: any,
    strict: boolean = true,
) {
    const [data, setData] = React.useState<any>({})
    const router = useRouter()

    React.useEffect(() => {
        if (!Object.values(params).includes(undefined)) {
            funcApi(params)
                .then((results) => setData(results.data))
                .catch((e) => {
                    const newRes = e?.response?.data
                    //   message
                    //     .error(newRes?.data?.message || newRes?.message || 'Something went wrong')
                    //     .then(() => router.push('/not-found-404'))
                })
        }
    }, [router.query])

    return data
}
