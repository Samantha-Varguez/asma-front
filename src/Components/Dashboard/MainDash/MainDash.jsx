import React, { useEffect } from 'react';
import Menu from '../Menu/Menu.jsx';

import './MainDash.css';
import MultipleSelectionList from '../Selector/MultipleSelectionList';
import TabTest from '../Tabs/Tabs-test.jsx';


const MainDash = () => {
    useEffect(() => {
        document.body.classList.add('dashboard-bg');
        return () => {
            document.body.classList.remove('dashboard-bg');
        };
    }, []);

    return (
        <div className="dashboard-container">
            <div className="content" >
                <TabTest/>
                {/* Contenido del dashboard aquí */}
            </div>
        </div>
    );
};

export default MainDash;
