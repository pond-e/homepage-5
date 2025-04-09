import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import MainPage from './pages/MainPage';
import WorksPage from './pages/WorksPage';

function App() {
  return (
    <BrowserRouter>
        <div className='app-container'>
            <main className='main-content'>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/works" element={<WorksPage />} />
                </Routes>
            </main>
        </div>
    </BrowserRouter>
  );
}

export default App;
