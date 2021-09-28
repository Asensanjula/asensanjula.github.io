import React from 'react';
import './portfolioList.scss';

function PortfolioList({title,setSelected, active}) {
    return (
        <li onClick={() => setSelected(title)} className={`portfolioList ${active && 'active'}`}>
            {title}
        </li>
    );
}

export default PortfolioList;