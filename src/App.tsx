import React from 'react';
import BaseLayout from './components/Layout';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/Home';
import IframeGame from './pages/IframeGame';
import { useSEO } from './hooks/useSEO';
import styles from './App.module.scss';

// SEO组件
const SEOProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    useSEO();
    return <>{children}</>;
};

const App: React.FC = () => {
    return (
        <div className={styles.app}>
            <Router>
                <SEOProvider>
                    <BaseLayout>
                        <Routes>
                            {/* 恢复原来的React主页面 */}
                            <Route path="/home" element={<HomePage />} />
                            <Route path="/recent" element={<div>Recent</div>} />
                            <Route path="/new" element={<div>New</div>} />
                            <Route path="/trending" element={<div>Trending</div>} />
                            <Route path="/updated" element={<div>Updated</div>} />
                            <Route path="/originals" element={<div>Originals</div>} />
                            <Route path="/multi" element={<div>MultiPlayer</div>} />
                            
                            {/* 游戏详情页 */}
                            <Route path="/game-detail/:gameName" element={<IframeGame />} />
                            
                            {/* 根路径重定向到home */}
                            <Route path="/" element={<Navigate to="/home" replace />} />
                        </Routes>
                    </BaseLayout>
                </SEOProvider>
            </Router>
        </div>
    );
};

export default App;
