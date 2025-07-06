import React from 'react';
import BaseLayout from './components/Layout';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import styles from './App.module.scss';

const App: React.FC = () => {
    return (
        <div className={styles.app}>
            <Router>
                <BaseLayout>
                    <Routes>
                        <Route path="/home" element={<div>Home</div>} />
                        <Route path="/recent" element={<div>Recent</div>} />
                        <Route path="/new" element={<div>New</div>} />
                        <Route path="/trending" element={<div>Trending</div>} />
                        <Route path="/updated" element={<div>Updated</div>} />
                        <Route path="/originals" element={<div>Originals</div>} />
                        <Route path="/multi" element={<div>MultiPlayer</div>} />

                        {/* 重定向 */}
                        <Route path="/" element={<Navigate to="/home" />} />
                    </Routes>
                </BaseLayout>
            </Router>
        </div>
    );
};

export default App;
