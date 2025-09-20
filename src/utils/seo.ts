// SEO工具函数
export interface SEOData {
  title: string;
  description: string;
  keywords: string;
  image?: string;
  url?: string;
}

export const updateSEO = (seoData: SEOData) => {
  // 更新页面标题
  document.title = seoData.title;
  
  // 更新或创建meta标签
  const updateMetaTag = (name: string, content: string) => {
    let meta = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = name;
      document.head.appendChild(meta);
    }
    meta.content = content;
  };
  
  const updatePropertyTag = (property: string, content: string) => {
    let meta = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement;
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('property', property);
      document.head.appendChild(meta);
    }
    meta.content = content;
  };
  
  // 更新基本SEO标签
  updateMetaTag('description', seoData.description);
  updateMetaTag('keywords', seoData.keywords);
  
  // 更新Open Graph标签
  updatePropertyTag('og:title', seoData.title);
  updatePropertyTag('og:description', seoData.description);
  updatePropertyTag('og:type', 'website');
  if (seoData.image) {
    updatePropertyTag('og:image', seoData.image);
  }
  if (seoData.url) {
    updatePropertyTag('og:url', seoData.url);
  }
  
  // 更新Twitter Card标签
  updateMetaTag('twitter:card', 'summary_large_image');
  updateMetaTag('twitter:title', seoData.title);
  updateMetaTag('twitter:description', seoData.description);
  if (seoData.image) {
    updateMetaTag('twitter:image', seoData.image);
  }
};

// 默认SEO数据
export const defaultSEO: SEOData = {
  title: 'GameOasis Store - 免费在线游戏平台',
  description: 'GameOasis Store 提供免费在线游戏，包括Super Mario Bro、Monster Survivors、Rumblets Go、Hexa Sort、PolyTrack等热门游戏。无需下载，即开即玩！',
  keywords: '免费游戏,在线游戏,Super Mario,Monster Survivors,Rumblets Go,Hexa Sort,PolyTrack,浏览器游戏',
  image: '/assets/mario.png',
  url: 'https://gameoasis.store/'
};

// 页面特定的SEO数据
export const pageSEO: Record<string, SEOData> = {
  home: {
    title: 'GameOasis Store - 免费在线游戏平台',
    description: 'GameOasis Store 提供免费在线游戏，包括Super Mario Bro、Monster Survivors、Rumblets Go、Hexa Sort、PolyTrack等热门游戏。无需下载，即开即玩！',
    keywords: '免费游戏,在线游戏,Super Mario,Monster Survivors,Rumblets Go,Hexa Sort,PolyTrack,浏览器游戏',
    image: '/assets/mario.png',
    url: 'https://gameoasis.store/home'
  },
  recent: {
    title: '最近游戏 - GameOasis Store',
    description: '查看您最近玩过的游戏，快速回到您喜欢的游戏世界。',
    keywords: '最近游戏,游戏历史,GameOasis',
    image: '/assets/mario.png',
    url: 'https://gameoasis.store/recent'
  },
  new: {
    title: '新游戏 - GameOasis Store',
    description: '发现最新的免费在线游戏，体验最新的游戏乐趣。',
    keywords: '新游戏,最新游戏,免费游戏,GameOasis',
    image: '/assets/mario.png',
    url: 'https://gameoasis.store/new'
  },
  trending: {
    title: '热门游戏 - GameOasis Store',
    description: '查看当前最受欢迎的游戏，加入全球玩家的游戏热潮。',
    keywords: '热门游戏,流行游戏,最受欢迎游戏,GameOasis',
    image: '/assets/mario.png',
    url: 'https://gameoasis.store/trending'
  }
};
