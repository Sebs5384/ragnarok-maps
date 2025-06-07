import { IShuffledItemsState, IAction } from "./interfaces/index";

const initialShuffleItemsState: IShuffledItemsState = {
    shuffledItems: [],
    hasShuffle: false,
};

function shuffleItemsReducer(state: IShuffledItemsState = initialShuffleItemsState, action: IAction): IShuffledItemsState {
    const { type, payload } = action;

    switch(type) {
        case "SHUFFLED_ITEMS":
            return {
                ...state,
                shuffledItems: payload,
                hasShuffle: true
            } as IShuffledItemsState;
        default:
            return state;
    };
};

export {
    shuffleItemsReducer,
    initialShuffleItemsState
};



