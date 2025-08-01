import { IMapData } from "./index";

interface IPaginatorState {
    totalPages: number[] | null,
    currentPage: number,
    lastPage: number | null,
    mapsInPage: IMapData[] | null
};

export default IPaginatorState;