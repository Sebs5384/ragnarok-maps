interface ShuffleItems {
    shuffledItems: string[];
    hasShuffle: boolean;
};

interface Action {
    type: string;
    payload: any;
};

const initialShuffleItemsState: ShuffleItems = {
    shuffledItems: [],
    hasShuffle: false,
};

function shuffleItemsReducer(state: ShuffleItems = initialShuffleItemsState, action: Action): ShuffleItems {
    const { type, payload } = action;

    switch(type) {
        case "SHUFFLED_ITEMS":
            return {
                ...state,
                shuffledItems: payload,
                hasShuffle: true
            } as ShuffleItems;
        default:
            return state;
    };
};

export {
    shuffleItemsReducer,
    initialShuffleItemsState
};



