import { useEffect, useReducer } from "react";
import { mapsReducer, initialMapsState } from "../reducers/index";
import { IMapsState } from "../reducers/interfaces/index";
import { getMaps } from "../api/maps";

function useFetchMaps(): IMapsState {
    const [state, dispatch] = useReducer(mapsReducer, initialMapsState);

    useEffect(() => {
        const fetchMaps = async () => {
            dispatch ({ type: "FETCH_REQUEST", payload: null });

            try {
                const maps = await getMaps();
                dispatch({ type: "FETCH_SUCCESS", payload: maps });
            } catch (error) {
                dispatch({ type: "FETCH_FAILURE", payload: error });
            };
        };

        fetchMaps();
    }, []);

    return {
        loading: state.loading,
        maps: state.maps,
        error: state.error
    };
};

export default useFetchMaps;