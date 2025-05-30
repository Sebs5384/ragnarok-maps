import React from "react";
import Link from "next/link";
import Bar from "./Bar";
import Logo from "./Logo";
import styles from "./Navbar.module.css"

function Navbar(): React.ReactElement {
    return (
        <Bar className={styles.navbar}>
            <Logo className={styles.logo}/>
            <Link className={styles.navItem} href="/about">About</Link>
            <Link className={styles.navItem} href="/maps">Maps</Link>
            <Link className={styles.navItem} href="/search">Quick Search</Link>
        </Bar>
    );
};

export default Navbar;