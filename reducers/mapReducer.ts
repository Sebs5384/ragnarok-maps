import { IMapsData } from "@/reducers/interfaces/index";

interface IMapState {
    loading: boolean;
    map: IMapsData;
    error: any;
}

const initialMapState = {
    loading: false,
    map: {} as IMapState,
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
        default:
            return state;
    };
};