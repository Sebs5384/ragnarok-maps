import React from "react";
import Link from "next/link";
import Bar from "./Bar";
import Logo from "./Logo";
import styles from "./Navbar.module.css"

function Navbar(): React.ReactElement {
    return (
        <Bar className={styles.navbar}>
            <Logo className={styles.logo}/>
            <Link href="/about">About</Link>
            <Link href="/maps">Maps</Link>
            <Link href="/search">Quick Search</Link>
        </Bar>
    );
};

export default Navbar;