import { useEffect, useReducer } from "react";
import { searchboxReducer, initialSearchboxState } from "@/reducers/index";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { ISearchboxState } from "@/reducers/interfaces/index";


function useHandleSearchbox(searchParams: URLSearchParams, router: AppRouterInstance): ISearchboxState {
    const [state, dispatch] = useReducer(searchboxReducer, initialSearchboxState);
    
    const setSearch = (value: string) => {
        dispatch({ type: "SET_SEARCH", payload: value });
    };

    useEffect(() => {
        const current = searchParams.get("search") || "";
        setSearch(current);
    }, []);

    useEffect(() => {
        const timeout = setTimeout(() => {
            const params = new URLSearchParams(searchParams.toString());

            if(state.search) {
                params.set("search", state.search);
                params.set("offset", "0");
            } else {
                params.delete("search");
            };

            router.push(`/maps?${params.toString()}`);
        }, 300);

        return () => clearTimeout(timeout);
    }, [state.search]);

    return {
        search: state.search,
        setSearch
    };
};

export default useHandleSearchbox;