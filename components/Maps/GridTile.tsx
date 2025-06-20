import React from "react";
import Image from "next/image";
import mapImages from "@/utils/mapPaths";
import styles from "./Maps.module.css";

function GridTile({id, name}: {id: number, name: string}): React.ReactElement {
    return (
        <div className={styles.tile}>
            <div className={styles.tileTextContainer}>
                <strong className={styles.tileText}>#{id} - {name}</strong>
            </div>
            <div className={styles.tileContainer}>
                <Image 
                    src={mapImages[`${name}`]}
                    alt={`map-${id}`}
                    fill
                    placeholder="blur"
                />
            </div>
        </div>
    );
};

export default GridTile;