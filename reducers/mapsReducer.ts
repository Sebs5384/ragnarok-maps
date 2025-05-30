interface MapsState {
    loading: boolean;
    maps: string[];
    error: any;
};

interface Action {
    type: string;
    payload: any;
};

const initialMapsState = {
    loading: false,
    maps: [],
    error: null
};

function mapsReducer(state: MapsState = initialMapsState, action: Action): MapsState {
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
            } as MapsState;
        default:
            return state;
    };
};

export {
    mapsReducer,
    initialMapsState,
};

export type { MapsState };