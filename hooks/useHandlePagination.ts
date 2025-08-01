import { useEffect, useReducer } from "react";
import { paginatorReducer, initialPaginatorState } from "@/reducers/index";
import { IMapData, IPaginatorState } from "@/reducers/interfaces/index";

function useHandlePagination({ limit, offset, items}: { limit: number, offset: number, items: IMapData[] }): IPaginatorState {
    const [state, dispatch] = useReducer(paginatorReducer, initialPaginatorState);

    useEffect(() => {
        if(!items || items.length === 0) return;

        try {
            const totalPages = Array.from({ length: Math.ceil(items.length / limit) }, (_, index) => index + 1);
            const lastPage = Math.floor(items.length / limit) + 1;
            const currentPage = Math.floor(offset / limit) + 1;
            const mapsInPage = items.slice(offset, offset + limit);
            
            if(totalPages.length) {
                dispatch({ type: "SET_TOTAL_PAGES", payload: totalPages });
                dispatch({ type: "SET_LAST_PAGE", payload: lastPage });
                dispatch({ type: "SET_CURRENT_PAGE", payload: currentPage });
                dispatch({ type: "SET_MAPS_IN_PAGE", payload: mapsInPage });
            };
        } catch (error) {
            console.error(error);
        };
    }, [items, limit, offset]);

    return {
        totalPages: state.totalPages,
        lastPage: state.lastPage,
        currentPage: state.currentPage,
        mapsInPage: state.mapsInPage
    };
};

export default useHandlePagination;