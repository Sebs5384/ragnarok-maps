"use client";

import { useContext, createContext } from "react";
import { useFetchMaps, useHandlePagination } from "@/hooks/index";
import { IMapsContextProps, IMapsProviderProps } from "./interfaces/index";

export const MapsContext = createContext<IMapsContextProps | undefined>(undefined);

export function MapsProvider({ children, limit, offset }: IMapsProviderProps): React.ReactElement {
    const { loading, maps, error } = useFetchMaps();
    const { totalPages, lastPage, currentPage, mapsInPage } = useHandlePagination({ limit, offset, items: maps });

    return (
        <MapsContext.Provider value={{ totalPages, lastPage, currentPage, mapsInPage }}> 
            {children}
        </MapsContext.Provider>
    );
};

export function useMapsContext(): IMapsContextProps {
    const context = useContext(MapsContext);
    if (!context) {
        throw new Error("useMapsContext must be used within a MapsProvider");
    }
    return context;
};
