"use client";

import { useContext, createContext } from "react";
import { useGetShuffledItems, useFetchMaps } from "../hooks/index";

interface Children {
    children: React.ReactNode;
}

export const HomeContext = createContext({});

export function HomeProvider({ children }: Children): React.ReactElement {
    const MAX_MAPS = 11;

    const { loading, maps, error } = useFetchMaps();
    const { items, hasShuffle } = useGetShuffledItems(maps, MAX_MAPS);

    return (
        <HomeContext.Provider value={{ items, hasShuffle }}>
            {children}
        </HomeContext.Provider>
    )
};

export const useHomeContext = () => useContext(HomeContext);