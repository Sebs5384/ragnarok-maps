import { ICollageProps } from "./interfaces/index";
import React from "react";
import Button from "@/components/common/Button";
import Image from "next/image";
import mapImages from "@/utils/mapPaths";
import styles from "./Home.module.css";

function HeroSectionCollage({ items, hasShuffle }: ICollageProps): React.ReactElement {
    return (
        <div className={styles.heroSectionContainer}>
            <div className={styles.heroSectionCollageContainer}>
                <div className={styles.heroSectionImageContainer}>
                    <div className={styles.heroSectionTopItemsContainer}>
                        <div className={styles.heroMapContainer}>
                            <Image
                                src={hasShuffle ? mapImages[`${items[0].name}`] : mapImages["placeholder"]}
                                alt="map-1"
                                fill
                                placeholder="blur"
                            />
                        </div>
                        <div className={styles.heroMapContainer}>
                            <Image
                                src={hasShuffle ? mapImages[`${items[1].name}`] : mapImages["placeholder"]}
                                alt="map-2"
                                fill
                                placeholder="blur"
                            />
                        </div>
                        <div className={styles.heroMapContainer}>
                            <Image
                                src={hasShuffle ? mapImages[`${items[2].name}`] : mapImages["placeholder"]}
                                alt="map-3"
                                fill
                                placeholder="blur"
                            />
                        </div>
                    </div>
                    <div className={styles.heroSectionTopItemsContainer}>
                        <div className={styles.heroMapContainer}>
                            <Image
                                src={hasShuffle ? mapImages[`${items[3].name}`] : mapImages["placeholder"]}
                                alt="map-4"
                                fill
                                placeholder="blur"
                            />
                        </div>
                        <div className={styles.heroMap5Container}>
                            <Button className={styles.heroSectionButton}>Browse our collection of maps</Button>
                        </div>
                        <div className={styles.heroMap6Container}>
                            <Image
                                className={styles.heroMap11Item}
                                src={hasShuffle ? mapImages[`${items[4].name}`] : mapImages["placeholder"]}
                                alt="map-6"
                                fill
                                placeholder="blur"
                            />
                        </div>
                    </div>
                    <div className={styles.heroSectionTopItemsContainer}>
                        <div className={styles.heroMapContainer}>
                            <Image
                                src={hasShuffle ? mapImages[`${items[5].name}`] : mapImages["placeholder"]}
                                alt="map-7"
                                fill
                                placeholder="blur"
                            />
                        </div>
                        <div className={styles.heroMapContainer}>
                            <Image
                                src={hasShuffle ? mapImages[`${items[6].name}`] : mapImages["placeholder"]}
                                alt="map-8"
                                fill
                                placeholder="blur"
                            />
                        </div>
                        <div className={styles.heroMapContainer}>
                            <Image
                                src={hasShuffle ? mapImages[`${items[7].name}`] : mapImages["placeholder"]}
                                alt="map-9"
                                fill
                                placeholder="blur"
                            />
                        </div>
                    </div>
                </div>
                <div className={styles.heroHorizontalSectionImageContainer}>
                    <div className={styles.heroMapContainer}>
                        <Image
                            src={hasShuffle ? mapImages[`${items[8].name}`] : mapImages["placeholder"]}
                            alt="map-10"
                            fill
                            placeholder="blur"
                        />
                    </div>
                    <div className={styles.heroMap11Container}>
                        <Image
                            className={styles.heroMap11Item}
                            src={hasShuffle ? mapImages[`${items[9].name}`] : mapImages["placeholder"]}
                            alt="map-11"
                            fill
                            placeholder="blur"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default HeroSectionCollage;