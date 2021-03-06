import { getData, postData } from "../common/fetch";
import * as url from "../config/url";
import * as action from "../action/userAction";

export const login = (params, successBK, errorBK) => {
    return (dispatch, getState) => {
        return postData(url.SERVER_ADMIN + url.LOGIN, params).then(res => {
            if(res.retCode == 0) {
                successBK && successBK(res);
            }
            else {
                errorBK && errorBK(res);
            }
        }, e => console.log(e))
        .catch(e => console.log(e))
    }
}

export const logout = (successBK, errorBK) => {
    return (dispatch, getState) => {
        return postData(url.SERVER_ADMIN + url.LOGOUT).then(res => {
            if(res.retCode == 0) {
                successBK && successBK();
            }
            else {
                errorBK && errorBK(res);
            }
        }, e => console.log(e))
        .catch(e => console.log(e))
    }
}

export const addFood = (params, successBK, errorBK) => {
    return (dispatch, getState) => {
        return postData(url.SERVER_ADMIN + url.ADD_FOOD, params).then(res => {
            if(res.retCode == 0) {
                successBK && successBK();
            }
            else {
                errorBK && errorBK(res);
            }
        }, e => console.log(e))
        .catch(e => console.log(e))
    }
}

export const editFood = (params, successBK, errorBK) => {
    return (dispatch, getState) => {
        return postData(url.SERVER_ADMIN + url.EDIT_FOOD, params).then(res => {
            if(res.retCode == 0) {
                successBK && successBK();
            }
            else {
                errorBK && errorBK(res);
            }
        }, e => console.log(e))
        .catch(e => console.log(e))
    }
}

export const deleteFood = (foodId, successBK, errorBK) => {
    return (dispatch, getState) => {
        return postData(url.SERVER_ADMIN + url.DELETE_FOOD, {foodId}).then(res => {
            if(res.retCode == 0) {
                successBK && successBK();
            }
            else {
                errorBK && errorBK(res);
            }
        }, e => console.log(e))
        .catch(e => console.log(e))
    }
}

export const getCategory = (successBK, errorBK) => {
    return (dispatch, getState) => {
        return getData(url.SERVER_ADMIN + url.GET_CATEGORY).then(res => {
            if(res.retCode == 0) {
                dispatch(action.getCategory(res.retInfo));
                successBK && successBK(res.retInfo);
            }
            else {
                errorBK && errorBK(res);
            }
        }, e => console.log(e))
        .catch(e => console.log(e))
    }
}

export const searchFoods = (params, successBK, errorBK) => {
    return (dispatch, getState) => {
        return postData(url.SERVER_ADMIN + url.SEARCH_FOODS, params).then(res => {
            if(res.retCode == 0) {
                dispatch(action.searchFoods(res.retInfo));
                successBK && successBK(res.retInfo);
            }
            else {
                errorBK && errorBK(res)
            }
        }, e => console.log(e))
        .catch(e => console.log(e))
    }
}