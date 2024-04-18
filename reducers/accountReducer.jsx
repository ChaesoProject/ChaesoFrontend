import {
    SET_TOKEN,
    SET_CLIENT_ID,
} from "./actions";

const initialState = {
    token: '',
    refresh: '',
    clientId: null,
};

function userReducer(state = initialState, action) {
    switch (action.type) {
        case SET_TOKEN:
            return { ...state, token: action.payload };
        case SET_CLIENT_ID:
            return { ...state, clientId: action.payload };
        default:
            return state;
    }
}

export default userReducer;
