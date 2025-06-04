import React from "react";
import Button from "../common/Button";
import Image from "next/image";
import styles from "./Home.module.css";

interface Props {
    items: Array<{
        name: string
    }>;
};

function HeroSectionCollage({ items }: Props): React.ReactElement {
    return (
        <div className={styles.heroSectionContainer}>
            <div className={styles.heroSectionCollageContainer}>
                <div className={styles.heroSectionImageContainer}>
                    <div className={styles.heroSectionTopItemsContainer}>
                        <div className={styles.heroMapContainer}>
                            <Image 
                                src={`/maps/${items[0].name}.png`}  
                                alt="map-1"
                                fill
                            />
                        </div>
                        <div className={styles.heroMapContainer}>
                            <Image 
                                src={`/maps/${items[1].name}.png`} 
                                alt="map-2"
                                fill
                            />
                        </div>
                        <div className={styles.heroMapContainer}>
                            <Image 
                                src={`/maps/${items[2].name}.png`} 
                                alt="map-3"
                                fill
                            />
                        </div>
                    </div>
                    <div className={styles.heroSectionTopItemsContainer}>
                        <div className={styles.heroMapContainer}>
                            <Image 
                                src={`/maps/${items[3].name}.png`} 
                                alt="map-4"
                                fill
                            />
                        </div>
                        <div className={styles.heroMap5Container}>
                            <Button className={styles.heroSectionButton}>Browse our collection of maps</Button>
                        </div>
                        <div className={styles.heroMap6Container}>
                            <Image 
                                className={styles.heroMap11Item}
                                src={`/maps/${items[4].name}.png`} 
                                alt="map-6"
                                fill
                            />
                        </div>
                    </div>
                    <div className={styles.heroSectionTopItemsContainer}>
                        <div className={styles.heroMapContainer}>
                            <Image 
                                src={`/maps/${items[5].name}.png`} 
                                alt="map-7"
                                fill
                            />
                        </div>
                        <div className={styles.heroMapContainer}>
                            <Image 
                                src={`/maps/${items[6].name}.png`} 
                                alt="map-8"
                                fill
                            />
                        </div>
                        <div className={styles.heroMapContainer}>
                            <Image 
                                src={`/maps/${items[7].name}.png`} 
                                alt="map-9"
                                fill
                            />
                        </div>
                    </div>
                </div>
                <div className={styles.heroHorizontalSectionImageContainer}>
                    <div className={styles.heroMapContainer}>
                        <Image
                            src={`/maps/${items[8].name}.png`} 
                            alt="map-10"
                            fill
                        />
                    </div>
                    <div className={styles.heroMap11Container}>
                        <Image
                            className={styles.heroMap11Item}
                            src={`/maps/${items[9].name}.png`} 
                            alt="map-11"
                            fill
                        />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default HeroSectionCollage;