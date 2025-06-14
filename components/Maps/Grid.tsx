"use client";

import { useMapsContext } from "../../context/MapsContext";
import React from "react";
import GridTile from "./GridTile";
import styles from "./Maps.module.css";

function Grid(): React.ReactElement {
    const { maps } = useMapsContext();

    return (
        <section className={styles.mapsSection}>
                {
                    maps?.map(({ id, name }) => 
                        <GridTile id={id} name={name} />
                    )
                }
        </section>
    );
};

export default Grid;