"use client";

import { use } from "react";
import { useFetchMap } from "@/hooks/index";
import CoordinatesSeciton from "./CoordinatesSection";
import styles from "@/components/Maps/Maps.module.css";

function MapDetails({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params);
    const { loading, map, error } = useFetchMap(undefined, undefined, slug);

    return (
        <>
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>{error}</p>
            ) : map ? (
                <CoordinatesSeciton map={map} styles={styles} />
            ) : (
                <p>Map not found</p>
            )}
        </>
    );
};

export default MapDetails;