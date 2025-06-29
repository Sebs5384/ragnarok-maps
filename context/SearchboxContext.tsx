import { useContext, createContext } from "react";
import { ISearchboxContextProps, ISearchboxProviderProps  } from "./interfaces/index";
import { useHandleSearchbox } from "@/hooks/index";

export const SearchboxContext = createContext<ISearchboxContextProps | undefined>(undefined);

export function SearchboxProvider({ searchParams, router, children }: ISearchboxProviderProps): React.ReactElement {
    const { search, setSearch } = useHandleSearchbox(searchParams, router);

    return (
        <SearchboxContext.Provider value={{ search, setSearch }}>
            {children}
        </SearchboxContext.Provider>
    );
};

export function useSearchboxContext(): ISearchboxContextProps {
    const context = useContext(SearchboxContext);
    if (!context) {
        throw new Error("useSearchboxContext must be used within a SearchboxProvider");
    };
    return context;
};