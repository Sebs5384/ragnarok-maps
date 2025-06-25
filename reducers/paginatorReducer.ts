import { IPaginatorState, IAction } from "./interfaces/index"; 

const initialPaginatorState = {
    totalPages: null,
    currentPage: 1,
    lastPage: null,
    mapsInPage: null
};

function paginatorReducer(state: IPaginatorState = initialPaginatorState, action: IAction ) {
    const { type, payload } = action;

    switch(type) {
        case "SET_TOTAL_PAGES":
            return {
                ...state,
                totalPages: payload
            };
        case "SET_LAST_PAGE":
            return {
                ...state,
                lastPage: payload
            };
        case "SET_CURRENT_PAGE":
            return {
                ...state,
                currentPage: payload
            };
        case "SET_MAPS_IN_PAGE":
            return {
                ...state,
                mapsInPage: payload
            };
        default:
            return state;
    };
};

export {
    paginatorReducer,
    initialPaginatorState
};