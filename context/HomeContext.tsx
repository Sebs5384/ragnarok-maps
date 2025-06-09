"use client";

import { useContext, createContext } from "react";
import { useGetShuffledItems, useFetchMaps } from "../hooks/index";
import { IHomeContextProps, IChildren } from "./interfaces/index";

export const HomeContext = createContext<IHomeContextProps | undefined>(undefined);

export function HomeProvider({ children }: IChildren): React.ReactElement {
    const MAX_MAPS = 11;

    const { loading, maps, error } = useFetchMaps();
    const { items, hasShuffle } = useGetShuffledItems(maps, MAX_MAPS);


    return (
        <HomeContext.Provider value={{ items, hasShuffle }}>
            {children}
        </HomeContext.Provider>
    );
};

export const useHomeContext = (): IHomeContextProps => {
    const context = useContext(HomeContext);
    
    if(!context) {
        throw new Error("useHomeContext must be used within a HomeProvider");
    };

    return context;
};