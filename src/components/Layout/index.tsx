import React, { ReactNode } from "react";
import Siders from "./Siders";
import styles from "./index.module.scss";

interface BaseLayoutProps {
    children: ReactNode;
}

const BaseLayout: React.FC<BaseLayoutProps> = ({ children }) => {
    return (
        <div className={styles.baseLayout}>
            <div className={styles.header}>
                <div className={styles.headerTitle}>
                    GameOasis
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.siders}>
                    <Siders />
                </div>
                <div className={styles.main}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default BaseLayout;
