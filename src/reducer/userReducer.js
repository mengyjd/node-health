import * as types from "../action/actionType";

const defaultState = {
    bannerList: []
}

const userReducer = (state = defaultState, action) => {
    switch(action.type) {
        case types.GET_BANNER: 
            return Object.assign({}, state, {
                bannerList: action.bannerList
            })
        default:
            return state;
    }
}

export default userReducer;