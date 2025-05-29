import { useEffect, useReducer } from "react";
import { mapsReducer, initialMapsState, MapsState } from "../reducers/index";
import { getMaps } from "../api/maps";

function useFetchMaps(): MapsState {
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