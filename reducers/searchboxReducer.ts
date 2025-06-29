import { IAction, ISearchboxState } from "./interfaces/index";

const initialSearchboxState = {
    search: "",
    setSearch: () => {}
};

function searchboxReducer(state: ISearchboxState = initialSearchboxState, action: IAction): ISearchboxState {
    const { type, payload } = action;

    switch(type) {
        case "SET_SEARCH":
            return {
                ...state,
                search: payload
            };
        default:
            return state;
    };
};

export {
    searchboxReducer,
    initialSearchboxState
};