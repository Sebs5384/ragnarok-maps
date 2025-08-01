import { IMapState, IAction } from "@/reducers/interfaces/index";

const initialMapState = {
    loading: false,
    map: null,
    error: null  
};

function mapReducer(state: IMapState = initialMapState, action: IAction): IMapState {
    const { type, payload } = action;

    switch(type) {
        case "FETCH_REQUEST":
            return {
                ...state,
                loading: true,
                map: payload,
                error: null
            };
        case "FETCH_SUCCESS":
            return {
                ...state,
                loading: false,
                map: payload,
                error: null
            } as IMapState;
        case "FETCH_FAILURE":
            return {
                ...state,
                loading: false,
                map: null,
                error: payload
            }
        default:
            return state;
    };
};

export {
    mapReducer,
    initialMapState
};