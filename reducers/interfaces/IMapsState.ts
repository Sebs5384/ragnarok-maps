import IMapsData from "./IMapsData";

interface IMapsState {
    loading: boolean;
    maps: IMapsData[];
    error: any;
};

export default IMapsState;