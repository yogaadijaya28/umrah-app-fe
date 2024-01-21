import { call } from '@/api/baseApi/index'
import { METHODS } from '@/api/baseApi/index'
import { CommonSingleResponse } from '@/api/baseApi/types'
import {  StoreBrandResponses,OutletListResponses, OutletListParams, OutletDetailParams, BrandsByOutletParams, ProductsByOutletParams, ProductsByOutletResponses, BrandsParams } from './types'

const overrideBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL

// export const getStoreBrand = async (): Promise<StoreBrandResponses> => {
//     try {
//         const response = await call({
//             method: METHODS.GET,
//             overrideBaseUrl,
//             subUrl: `/api/v1/brands?page=1&limit=18`,
//             useStrapi: false,
//         })
//         return response;
//      }
//       catch (error) {
//         console.error('Error searching location:', error);
//         throw error;
//       }
// }


export const getStoreBrand = async (
  params: BrandsParams,
): Promise<CommonSingleResponse<ProductsByOutletResponses>> => {
  try {
    const response = await call({
      method: METHODS.GET,
      overrideBaseUrl,
      subUrl: `/api/v1/brands?page=${params.page}&limit=${params.limit}&q=${params.q}`,
      useStrapi: false,
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching brand :', error);
    throw error;
  }
};


export const getOutletListByQuery = async (
  params: OutletListParams,
): Promise<CommonSingleResponse<OutletListResponses>> => {
  try {
    const response = await call({
      method: METHODS.GET,
      overrideBaseUrl,
      subUrl: `/api/v2/outlets?page=${params.page}&limit=${params.limit}&search=${params.query}`,
      useStrapi: false,
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching outlets by location:', error);
    throw error;
  }
};

export const getOutletById = async (
  params: OutletDetailParams,
): Promise<CommonSingleResponse<OutletListResponses>> => {
  try {
    const { outletId } = params;
    const response = await call({
      method: METHODS.GET,
      overrideBaseUrl,
      subUrl: `/api/v2/outlets/${outletId}`,
      useStrapi: false,
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching outlet:', error);
    throw error;
  }
};


export const getStoreBrandByOutlet = async (
  params: BrandsByOutletParams,
): Promise<CommonSingleResponse<StoreBrandResponses>> => {
  try {
    const response = await call({
      method: METHODS.GET,
      overrideBaseUrl,
      subUrl: `/api/v1/brands?page=${params.page}&limit=${params.limit}&outlet_id=${params.outlet_id}`,
      useStrapi: false,
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching brands by outlets :', error);
    throw error;
  }
};

export const getStoreProductsByOutlet = async (
  params: ProductsByOutletParams,
): Promise<CommonSingleResponse<ProductsByOutletResponses>> => {
  try {
    const response = await call({
      method: METHODS.GET,
      overrideBaseUrl,
      subUrl: `/api/v2/products?page=${params.page}&limit=${params.limit}&outlet_id=${params.outlet_id}`,
      useStrapi: false,
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching products by outlets :', error);
    throw error;
  }
};

