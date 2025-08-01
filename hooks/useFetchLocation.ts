import { useReducer } from "react";
import { locationReducer, initialLocationState } from "@/reducers/index";
import { ILocationState } from "@/reducers/interfaces/index";
import { getLocation } from "@/api/locate";

function useFetchLocation(map?: string, x?: string, y?: string): ILocationState {
    const [state, dispatch] = useReducer(locationReducer, initialLocationState);

    const handleGetLocation = async (map: string, x: string, y: string) => {
            dispatch({ type: "FETCH_REQUEST", payload: null });

            try {
                const response = await getLocation(map as string, x as string, y as string);
                dispatch({ type: "FETCH_SUCCESS", payload: response.locationUrl });
            } catch (error) {
                dispatch({ type: "FETCH_FAILURE", payload: error });
            };
    };

    return {
        loadingLocation: state.loadingLocation,
        locationUrl: state.locationUrl,
        errorLocation: state.errorLocation,
        handleGetLocation
    };
};

export default useFetchLocation;