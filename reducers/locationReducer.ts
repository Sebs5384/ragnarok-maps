import { ILocationState, IAction } from "@/reducers/interfaces/index";

const initialLocationState = {
    loadingLocation: false,
    locationUrl: null,
    errorLocation: null,
    handleGetLocation: () => {}
};

function locationReducer(state: ILocationState = initialLocationState, action: IAction): ILocationState {
    const { type, payload } = action;

    switch(type) {
        case "FETCH_REQUEST":
            return {
                ...state,
                loadingLocation: true,
                locationUrl: payload,
                errorLocation: null
            };
            case "FETCH_SUCCESS":
                return {
                    ...state,
                    loadingLocation: false,
                    locationUrl: payload,
                    errorLocation: null
                } as ILocationState;
            case "FETCH_FAILURE":
                return {
                    ...state,
                    loadingLocation: false,
                    locationUrl: null,
                    errorLocation: payload
                };
            default:
                return state;
    };
};

export { 
    locationReducer,
    initialLocationState
};