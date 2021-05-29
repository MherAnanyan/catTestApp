import { CAT_CATEGORIES, CAT_CATEGORIES_ID } from './types'
import axios from 'axios';
import { API_URL } from '../../constant'


export const getCategoriesData = () => {
    const config = {
        method: "GET",

    }
    return {
        type: CAT_CATEGORIES,
        meta: {
            config,
            url: `${API_URL}/categories`,
        },
    }
}

export const getCategoriesID = (id, count) => {
    const config = {
        method: "GET",
    }
    return {
        type: CAT_CATEGORIES_ID,
        meta: {
            config,
            url: `${API_URL}/images/search?limit=${count}&category_ids=${id} `,
        },
    }
}

export const toHomeLocal = () => {

    return {
        params: {
            disableAPICall: true,
        },
        type: CAT_CATEGORIES_ID,
        payload: null
    }
}