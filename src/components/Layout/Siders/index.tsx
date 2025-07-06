// 创建一个Siders组件，用于显示左侧菜单，常态收起（宽度40px），hover展开(宽度200px)，并且有动画效果，并且展开时不影响布局

import React, { useEffect, useState } from "react";
import recent from "@public/assets/menu-recent.svg";
import home from "@public/assets/menu-home.svg";
import updated from "@public/assets/menu-updated.svg";
import trending from "@public/assets/menu-trending.svg";
import multi from "@public/assets/menu-multiplayer.svg";
import newIcon from "@public/assets/menu-new.svg";
import originals from "@public/assets/menu-originals.svg";

import styles from "./index.module.scss";
import { Link, useLocation } from "react-router-dom";

interface MenuItem {
    id: string;
    title: string;
    icon: React.ReactNode;
    path: string;
}

const menuItems: MenuItem[] = [
    {
        id: 'home',
        title: 'Home',
        icon: <img src={home} alt="home" />,
        path: '/home'
    },
    {
        id: 'recent',
        title: 'Recent Played',
        icon: <img src={recent} alt="recent" />,
        path: '/recent'
    },
    {
        id: 'new',
        title: 'New',
        icon: <img src={newIcon} alt="new" />,
        path: '/new'
    },
    {
        id: 'trending',
        title: 'Trending Now',
        icon: <img src={trending} alt="trending" />,
        path: '/trending'
    },
    {
        id: 'updated',
        title: 'Updated',
        icon: <img src={updated} alt="updated" />,
        path: '/updated'
    },
    {
        id: 'originals',
        title: 'Originals',
        icon: <img src={originals} alt="originals" />,
        path: '/originals'
    },
    {
        id: 'multi',
        title: 'MultiPlayer',
        icon: <img src={multi} alt="multi" />,
        path: '/multi'
    }
];

const Siders: React.FC = () => {
    //  维护当前激活的菜单项, 根据路由来判断
    const [activeItem, setActiveItem] = useState<string>('');
    // 使用react-router-dom的useLocation来获取当前路由
    const location = useLocation();

    useEffect(() => {
        const path = location.pathname;
        const activeItem = menuItems.find((item) => item.path === path);
        console.log('当前激活的菜单项', activeItem);
        setActiveItem(activeItem?.id || 'home');
    }, [location.pathname]);

    return (
        <div className={styles.siders}>
            <div className={styles.sidersContent}>
                <nav className={styles.sidersNav}>
                    {menuItems.map((item) => (
                        <Link to={item.path} key={item.id}>
                            <div key={item.id} className={`${styles.sidersItem} ${activeItem === item.id ? styles.sidersItemActive : ''}`}>
                                <div className={styles.sidersItemIcon}>
                                    {item.icon}
                                </div>
                                <div className={styles.sidersItemTitle}>
                                    {item.title}
                                </div>
                            </div>
                        </Link>
                    ))}
                </nav>
            </div>
        </div>
    );
};

export default Siders;
