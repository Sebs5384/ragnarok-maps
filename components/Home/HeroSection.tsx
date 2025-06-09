"use client";

import { useHomeContext } from "../../context/HomeContext";
import React from "react";
import HeroSectionMain from "./HeroSectionMain";
import HeroSectionCollage from "./HeroSectionCollage";
import styles from "./Home.module.css";

function HeroSection(): React.ReactElement {
    const { items, hasShuffle } = useHomeContext();

    return (
        <section className={styles.heroSection}>
            <HeroSectionMain />
            <HeroSectionCollage items={items} hasShuffle={hasShuffle} />
        </section>
    );
};

export default HeroSection;