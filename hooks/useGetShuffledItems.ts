import { useEffect, useReducer } from "react";
import { shuffleItemsReducer, initialShuffleItemsState } from "../reducers/index";

interface Items {
    items: string[]
};

function useGetShuffledItems(items: Items, amount: number): Items {
    const [state, dispatch] = useReducer(shuffleItemsReducer, initialShuffleItemsState);	

    useEffect(() => {
        if (!items.items || items.items.length === 0) return;

        try {
            const randomItems = [...items.items].sort(() => Math.random() - 0.5).slice(0, amount);

            dispatch({ type: "SHUFFLED_ITEMS", payload: randomItems });
        } catch (error) {
            console.error(error);
        };
    }, [items.items]);

    return {
        items: state.shuffledItems
    };
};

export default useGetShuffledItems;