import { IMapData } from "@/reducers/interfaces/index";

interface IMapState {
    loading: boolean,
    map: IMapData | null,
    error: any
};

export default IMapState;