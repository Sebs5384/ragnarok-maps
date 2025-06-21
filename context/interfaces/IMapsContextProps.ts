import { IMapsData } from "@/reducers/interfaces/index";

interface IMapsContextProps {
    totalPages: number[] | null;
    lastPage: number | null;
    currentPage: number;
    mapsInPage: IMapsData[] | null;
};

export default IMapsContextProps;