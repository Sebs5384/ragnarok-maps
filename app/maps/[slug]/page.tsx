'use client';

import { useEffect, useState } from 'react';
import { useFetchMap, useFetchLocation } from '@/hooks/index';
import CoordinatesSection from './CoordinatesSection';
import styles from '@/components/Maps/Maps.module.css';

function MapDetails({ params }: { params: Promise<{ slug: string }> }) {
    const [slug, setSlug] = useState<string | null>(null);

    const { loading, map, error } = useFetchMap(undefined, undefined, slug || undefined);
    const { loadingLocation, locationUrl, errorLocation, handleGetLocation } = useFetchLocation();
    console.log(`locationUrl: ${locationUrl}`);

    useEffect(() => {
        params.then(({ slug }) => {
            setSlug(slug);
        });
    }, [params]);

    return (
        <>
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>{error}</p>
            ) : map ? (
                <CoordinatesSection map={map} styles={styles} getLocation={handleGetLocation} />
            ) : (
                <p>Map not found</p>
            )}
        </>
    );
}

export default MapDetails;
