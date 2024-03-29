const initialState = {}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_USER':
            return state = action.payload;
        case 'LOGOUT_USER':
                return state = {};
        default:
            return state;
    }
}

export default userReducer;