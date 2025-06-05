import { useEffect, useReducer } from "react";
import { shuffleItemsReducer, initialShuffleItemsState } from "../reducers/index";

interface Items {
    items: string[]
    hasShuffle: boolean
};

function useGetShuffledItems(items: string[], amount: number): Items {
    const [state, dispatch] = useReducer(shuffleItemsReducer, initialShuffleItemsState);	

    useEffect(() => {
        if (!items || items.length === 0) return;

        try {
            const randomItems = [...items].sort(() => Math.random() - 0.5).slice(0, amount);

            dispatch({ type: "SHUFFLED_ITEMS", payload: randomItems });
        } catch (error) {
            console.error(error);
        };
    }, [items]);

    return {
        items: state.shuffledItems,
        hasShuffle: state.hasShuffle
    };
};

export default useGetShuffledItems;