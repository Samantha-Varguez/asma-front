import { useState } from "react";
import React, { useEffect } from 'react';
import dashboard from '../../Assets/dashboard.png';


export default function Tabs({ tabsContent, onChange }) {

    useEffect(() => {
        document.body.classList.add('dashboard-bg');
        return () => {
            document.body.classList.remove('dashboard-bg');
        };
    }, []);


    const [currentTabIndex, setCurrentTabIndex] = useState(0);

    function handleOnClick(getCurrentIndex) {
        setCurrentTabIndex(getCurrentIndex)
        onChange(getCurrentIndex)
    }

    return (
        <div className="wrapper">
            <img dashboard className="image"></img>
                <div className="tab">
                    {tabsContent.map((tabItem, index) => (
                        <div className={`tab-item ${currentTabIndex === index ? "active" : ""}`} onClick={() => handleOnClick(index)} key={tabItem.label}>
                            <span className="label">{tabItem.label}</span>
                        </div>
                    ))}
                </div>
            <div className="content" style={{ color: 'red' }}>
                {tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content}
            </div>
        </div>
    );
}