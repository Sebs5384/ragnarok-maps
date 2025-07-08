import React from "react";
import Image from "next/image";
import Link from "next/link";
import mapImages from "@/utils/mapPaths";
import styles from "./Maps.module.css";

function GridTile({id, name, slug}: {id: number, name: string, slug: string}): React.ReactElement {
    return (
        <div className={styles.tile}>
            <div className={styles.tileTextContainer}>
                <strong className={styles.tileText}>#{id} - {name}</strong>
            </div>
            <div className={styles.tileContainer}>
                <Link href={`http://localhost:3000/maps/${slug}`}>
                    <Image 
                        src={mapImages[`${name}`]}
                        alt={`map-${id}`}
                        fill
                        placeholder="blur"
                    />
                </Link>
            </div>
        </div>
    );
};

export default GridTile;