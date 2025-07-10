import IMapsData from "./IMapData";

interface IMapsState {
    loading: boolean;
    maps: IMapsData[];
    error: any;
};

export default IMapsState;