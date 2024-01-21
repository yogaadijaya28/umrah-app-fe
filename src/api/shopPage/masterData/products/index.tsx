import { call } from '@/api/baseApi/index'
import { METHODS } from '@/api/baseApi/index'
import { CommonSingleResponse,  } from '@/api/baseApi/types'
import { BrandsParams, ProductsByOutletResponses } from '@/api/findYourStore/StoreBrand/types'


const overrideBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL



export const getAllProduct = async (
    params: BrandsParams,
  ): Promise<CommonSingleResponse<ProductsByOutletResponses>> => {
    try {
      const response = await call({
        method: METHODS.GET,
        overrideBaseUrl,
        // subUrl: `/api/v2/products?page=${params.page}&limit=${params.limit}&q=${params.q}`,
        subUrl: `/api/v2/products?is_new=true&sort_by=newest`,
        // subUrl: `/api/v2/products?product_type_slug=frame-lens-package`,       
        useStrapi: false,
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching products :', error);
      throw error;
    }
  };