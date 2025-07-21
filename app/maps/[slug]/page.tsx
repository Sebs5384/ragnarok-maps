"use client";

import { use } from "react";
import { useFetchMap } from "@/hooks/index";
import Image from "next/image";
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
                <section>
                    <div className={styles.mapSection}>
                        <div className={styles.mapImageContainer}>
                            <Image src={`/maps/${map.name}.png`} alt={`${map.name}` } fill></Image>
                        </div>
                        <div className={styles.mapInformationSection}> 
                            <div className={styles.mapInformationContainer}>
                                <div className={styles.infoContainer}>
                                    <div className={styles.mapIconContainer}>
                                        <Image className={styles.mapInfoIcon} src={`/img/midgard_map.png`} alt={`${map.name}`} fill></Image>
                                    </div>
                                    <strong>Name: {map.name}</strong>
                                </div>
                                <div className={styles.infoContainer}>
                                    <div className={styles.mapIconContainer}>
                                        <Image className={styles.mapInfoIcon} src={`/img/cell_icon.png`} alt={`${map.name}`} fill></Image>
                                    </div>
                                    <strong>Total cells: {map.cells}</strong>
                                </div>
                            </div>
                            <div className={styles.mapInformationContainer}>
                                <div className={styles.infoContainer}>
                                    <div className={styles.mapIconContainer}>
                                        <Image className={styles.mapInfoIcon} src={`/img/width_icon.png`} alt={`${map.name}`} fill></Image>
                                    </div>
                                    <strong>Map Width: {map.width}px</strong>
                                </div>
                                <div className={styles.infoContainer}>
                                    <div className={styles.mapIconContainer}>
                                        <Image className={styles.mapInfoIcon} src={`/img/height_icon.png`} alt={`${map.name}`} fill></Image>
                                    </div>
                                    <strong>Map Height: {map.height}px</strong>
                                </div>
                            </div>
                            <div className={styles.cordsSection}>
                                <div>
                                    <div className={styles.cordsInputSection}>
                                        <div>
                                            <strong>Cords X</strong>
                                            <input className={styles.cordsInput} type="number" placeholder="X" />
                                        </div>
                                        <div>
                                            <strong>Cords Y</strong>
                                            <input className={styles.cordsInput} type="number" placeholder="Y" />
                                        </div>
                                    </div>
                                    <div className={styles.cordsButtonSection}>
                                        <button className={styles.cordsButton}>Locate</button>
                                        <button className={styles.cordsButton}>Clear</button>
                                    </div>
                                </div>
                            </div>
                        </div>     
                    </div>       
                </section>
            ) : (
                <p>Map not found</p>
            )}
        </>
    );
};

export default MapDetails;