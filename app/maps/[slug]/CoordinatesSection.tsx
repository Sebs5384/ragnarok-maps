import React from "react";
import Image from "next/image";
import { IMapData } from "@/reducers/interfaces/index";

function CoordinatesSection({ map, styles, getLocation }: { map: IMapData, styles: any, getLocation: (map: string, x: string, y: string) => void }): React.ReactElement {
    return (
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
                            <div className={styles.inputSection}>
                                <div>
                                    <strong>Cords X</strong>
                                    <input className={styles.mapCordsInput} type="number" placeholder="X" />
                                </div>
                                <div>
                                    <strong>Cords Y</strong>
                                    <input className={styles.mapCordsInput} type="number" placeholder="Y" />
                                </div>
                            </div>
                            <div className={styles.cordsButtonSection}>
                                <button className={styles.cordsButton} onClick={() => getLocation(map.name, String((document.querySelector(`.${styles.mapCordsInput}`) as HTMLInputElement).value), String((document.querySelectorAll(`.${styles.mapCordsInput}`)[1] as HTMLInputElement).value))}>Locate</button>
                                <button className={styles.cordsButton}>Clear</button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.urlSection}>
                        <div>
                            <div className={styles.inputSection}>
                                <div>
                                    <strong>URL</strong>
                                    <input className={styles.urlCordsInput} type="text" placeholder="URL" />
                                </div>
                            </div>
                            <div className={styles.cordsButtonSection}>
                                <button className={styles.cordsButton}>Copy</button>
                                <button className={styles.cordsButton}>Clear</button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.shareSection}>
                        <div>Share on Discord</div>
                        <div className={styles.discordIconContainer}>
                            <Image className={styles.discordIcon} src={"/img/discord_icon.png"} alt="discord" fill />
                        </div>
                    </div>
                </div>     
            </div>       
        </section>
    )
};

export default CoordinatesSection;