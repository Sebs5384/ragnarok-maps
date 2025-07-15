import { useEffect, useReducer } from "react";
import { mapReducer, initialMapState } from "@/reducers/index";
import { IMapState } from "@/reducers/interfaces/index";
import { getMap } from "@/api/map";

function useFetchMap(id?: number, name?: string, slug?: string): IMapState {
    const [state, dispatch] = useReducer(mapReducer, initialMapState);

    useEffect(() => {
        const fetchMap = async () => {
            dispatch({ type: "FETCH_REQUEST", payload: null });

            try {
                const map = await getMap(id, name, slug);
                dispatch({ type: "FETCH_SUCCESS", payload: map });
            } catch(error) {
                dispatch({ type: "FETCH_FAILURE", payload: error });
            };
        };

        fetchMap();
    }, [id, name, slug]);

    return {
        loading: state.loading,
        map: state.map,
        error: state.error
    };
};

export default useFetchMap;