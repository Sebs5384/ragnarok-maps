import { IMapsData } from "./index";

interface IPaginatorState {
    totalPages: number[] | null,
    currentPage: number,
    lastPage: number | null,
    mapsInPage: IMapsData[] | null
};

export default IPaginatorState;