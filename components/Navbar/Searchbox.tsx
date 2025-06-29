import { useSearchboxContext } from "@/context/SearchboxContext";
import { ISearchboxProps } from "./interfaces/index";


function Searchbox({ className }: ISearchboxProps): React.ReactElement {
    const { search, setSearch } = useSearchboxContext();

    return (
        <input 
            type="search" 
            placeholder="Search map..." 
            name="searchbox" 
            className={className}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
        />
    );
};

export default Searchbox;