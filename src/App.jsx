import React from 'react';
import Notes from './pages/myNotes/notes';
import Header from './pages/header/header';
import SharedNotes from './pages/sharedNotes/SharedNotes';
import { Routes, Route, Navigate } from 'react-router-dom';
import About from './pages/about/About';
import NotFound from './pages/notFound/notFound';

function App() {
    return (
        <div className="app">
            <Header />
            <Routes>
                <Route path="/notes" element={<Notes />} />
                <Route path="/shared-notes" element={<SharedNotes />} />
                <Route path="/about" element={<About />} />
                <Route path="/not-found" element={<NotFound />} />
                <Route exact path="/" element={<Navigate to="/notes" />} />
                <Route path="/*" element={<Navigate to="/not-found" />} />
            </Routes>
        </div>
    );
}

export default App;
