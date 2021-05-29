import {CAT_CATEGORIES, CAT_CATEGORIES_ID} from '../actions/types'


const initialState = {
    categories:null,
    catImgId:null,
    categoriID:''
}

export default function (state = initialState, { type, payload }) {
    switch (type) {
        case CAT_CATEGORIES:
            return {
                ...state,
                categories:payload
            };
            case CAT_CATEGORIES_ID:
            return {
                ...state,
                catImgId:payload,
                categoriID:payload&&payload[0]
            };
        
        default:
            return state;
    }
}