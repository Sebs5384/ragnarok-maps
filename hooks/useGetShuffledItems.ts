import { useEffect, useReducer } from "react";
import { shuffleItemsReducer, initialShuffleItemsState } from "@/reducers/index";
import { IMapData } from "@/reducers/interfaces/index";
import { IItems } from "./interfaces/index";

function useGetShuffledItems(items: IMapData[], amount: number): IItems {
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