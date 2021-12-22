import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom';
import { store } from './redux/store';

import Notes from './pages/myNotes/notes';
import Header from './pages/header/header';
import SharedNotes from './pages/sharedNotes/SharedNotes';
import SignUp from './pages/signIn/signUp';
import About from './pages/about/About';
import NotFound from './pages/notFound/notFound';
import SignIn from './pages/signIn/SignIn';

function App() {
    const location = useLocation();
    const navigate = useNavigate();
    const [access, setAccess] = useState(false);
    store.subscribe(() => setAccess(store.getState().userInfo.access));
    useEffect(() => {
        setAccess(store.getState().userInfo.access);
        navigate(location.pathname);
    }, []);
    return (
        <div className="app">
            <Header />
            <Routes>
                <Route path="/signUp" element={access ? <Navigate to="/notes" /> : <SignUp />} />
                <Route path="/notes" element={access ? <Notes /> : <Navigate to="/not-found" />} />
                <Route path="/signIn" element={access ? <Navigate to="/notes" /> : <SignIn />} />
                <Route
                    path="/shared-notes"
                    element={access ? <SharedNotes /> : <Navigate to="/not-found" />}
                />
                <Route
                    path="/"
                    element={access ? <Navigate to="/notes" /> : <Navigate to="/signIn" />}
                />
                <Route path="/about" element={<About />} />
                <Route path="/not-found" element={<NotFound />} />
                <Route path="/*" element={<Navigate to="/not-found" />} />
            </Routes>
        </div>
    );
}

export default App;
