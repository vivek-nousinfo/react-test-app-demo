import * as type from '../types';

const initialState = {
    users: [],
    loading: false,
    error: null,
}

export default function users(state = initialState, action: any) {
    switch (action.type) {
        case type.GET_WORKSPACES:
            return {
                ...state,
                loading: true,
            }
        case type.GET_WORKSPACES_SUCCESS:
            return {
                ...state,
                loading: false,
                users: action.data
            }
        case type.GET_WORKSPACES_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error,
            }
        default:
            return state
    }
}