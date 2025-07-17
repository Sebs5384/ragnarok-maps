"use client";

import { useMapsContext } from "@/context/MapsContext";
import React from "react";
import GridTile from "./GridTile";
import styles from "./Maps.module.css";

function Grid(): React.ReactElement {
    const { mapsInPage } = useMapsContext();

    return (
        <section className={styles.mapsSection}>
                {
                    mapsInPage?.map(({ id, name, slug }) => 
                        <GridTile id={id} name={name} key={id} slug={slug} />
                    )
                }
        </section>
    );
};

export default Grid;