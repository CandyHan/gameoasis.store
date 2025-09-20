import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { updateSEO, pageSEO, defaultSEO } from '../utils/seo';

export const useSEO = (customSEO?: any) => {
  const location = useLocation();
  
  useEffect(() => {
    // 根据当前路径获取SEO数据
    const path = location.pathname;
    let seoData = defaultSEO;
    
    if (path === '/home' || path === '/') {
      seoData = pageSEO.home;
    } else if (path === '/recent') {
      seoData = pageSEO.recent;
    } else if (path === '/new') {
      seoData = pageSEO.new;
    } else if (path === '/trending') {
      seoData = pageSEO.trending;
    } else if (path.startsWith('/game-detail/')) {
      // 游戏详情页的SEO
      const gameName = path.split('/')[2];
      seoData = {
        title: `${gameName} - GameOasis Store`,
        description: `在GameOasis Store上免费玩${gameName}游戏，无需下载，即开即玩！`,
        keywords: `${gameName},免费游戏,在线游戏,GameOasis`,
        image: `/assets/${gameName}.png`,
        url: `https://gameoasis.store${path}`
      };
    }
    
    // 如果有自定义SEO数据，则合并
    if (customSEO) {
      seoData = { ...seoData, ...customSEO };
    }
    
    // 更新SEO
    updateSEO(seoData);
  }, [location.pathname, customSEO]);
};
