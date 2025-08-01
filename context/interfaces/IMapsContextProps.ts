import { IMapData } from "@/reducers/interfaces/index";

interface IMapsContextProps {
    totalPages: number[] | null;
    lastPage: number | null;
    currentPage: number;
    mapsInPage: IMapData[] | null;
};

export default IMapsContextProps;