import React from 'react';
import './TopBanner.css';

const TopBanner = (props) => {
    return (
        <div className="banner-area">
            {
                props.children
            }
        </div>
    );
};

export default TopBanner;