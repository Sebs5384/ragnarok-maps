import { IAction, IMapsState } from "./interfaces/index";

const initialMapsState = {
    loading: false,
    maps: [],
    error: null
};

function mapsReducer(state: IMapsState = initialMapsState, action: IAction): IMapsState {
    const { type, payload } = action;

    switch(type) {
        case "FETCH_REQUEST":
            return {
                ...state,
                loading: true,
                maps: payload,
                error: null
            };
        case "FETCH_SUCCESS":
            return {
                ...state,
                loading: false,
                maps: payload,
                error: null
            } as IMapsState;
        case "FETCH_FAILURE":
            return {
                ...state,
                loading: false,
                maps: [],
                error: payload
            };
        default:
            return state;
    };
};

export {
    mapsReducer,
    initialMapsState,
};