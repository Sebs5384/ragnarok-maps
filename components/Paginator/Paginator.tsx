"use client";

import { useMapsContext } from "@/context/MapsContext";
import React from "react";
import Link from "next/link";
import styles from "./Paginator.module.css";
import clsx from "clsx";

function Paginator(): React.ReactElement {
    const { totalPages, lastPage, currentPage } = useMapsContext();
    
    return (
        <section className={styles.paginator}>
            <div className={styles.paginatorItems}>
                {currentPage !== 1 && (
                    <Link 
                        className={styles.paginatorItem} 
                        href={`/maps/?limit=40&offset=${(currentPage - 2) * 40}`}
                    >
                        Previous
                    </Link>
                )}
                {
                    totalPages?.map((page) => (
                        <Link 
                            key={page}
                            className={clsx(
                                styles.paginatorItem, {[styles.paginatorItemActive]: page === currentPage}
                            )}
                            href={`/maps/?limit=40&offset=${(page - 1) * 40}`}
                        >
                            {page}
                        </Link>
                    ))
                }
                {currentPage !== lastPage && (
                    <Link 
                        className={styles.paginatorItem} 
                        href={`/maps/?limit=40&offset=${(currentPage) * 40}`}
                    >
                        Next
                    </Link>
                )}
            </div>
        </section>
    );
};

export default Paginator;