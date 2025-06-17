"use client";

import { usePathname } from "next/navigation";
import React from "react";
import Link from "next/link";
import Bar from "./Bar";
import Logo from "./Logo";
import Searchbox from "./Searchbox";
import Magnifier from "./Magnifier";
import styles from "./Navbar.module.css"
import clsx from "clsx";

function Navbar(): React.ReactElement {
    const pathname = usePathname();
    const showSearchbox = pathname === "/maps";

    return (
        <Bar className={styles.navbar}>
            <div className={styles.leftSection}>
                <Logo className={styles.logo}/>
                <Link className={clsx(
                    styles.navItem,
                    {
                        [styles.navItemActive]: pathname === "/maps"
                    }
                )} 
                    href="/maps?limit=40&offset=0">Maps
                </Link>
            </div>
            {
                showSearchbox && (
                    <div className={styles.centerSection}>
                        <Magnifier />
                        <Searchbox className={styles.searchbox}/>
                    </div>
                )   
            }
        </Bar>
    );
};

export default Navbar;