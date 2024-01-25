import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import TopComponent from "./components/TopComponent.tsx";

const Dashboard = lazy(() => import('./components/Dashboard'));
const Landing = lazy(() => import('./components/Landing'));

const App: React.FC = () => {
    return (
        <div>
            <TopComponent></TopComponent>
            {/*<Router>*/}
            {/*    <Link to="/dashboard">*/}
            {/*        <button>Dashboard</button>*/}
            {/*    </Link>*/}
            {/*    <Link to="/">*/}
            {/*        <button>Landing</button>*/}
            {/*    </Link>*/}

            {/*    <Routes>*/}
            {/*        <Route*/}
            {/*            path="/dashboard"*/}
            {/*            element={*/}
            {/*                <Suspense fallback={<div>Loading...</div>}>*/}
            {/*                    <Dashboard />*/}
            {/*                </Suspense>*/}
            {/*            }*/}
            {/*        />*/}
            {/*        <Route*/}
            {/*            path="/"*/}
            {/*            element={*/}
            {/*                <Suspense fallback={<div>Loading...</div>}>*/}
            {/*                    <Landing />*/}
            {/*                </Suspense>*/}
            {/*            }*/}
            {/*        />*/}
            {/*    </Routes>*/}
            {/*</Router>*/}
        </div>
    );
};

export default App;
