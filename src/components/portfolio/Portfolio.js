import React, {useEffect, useState} from 'react';
import './portfolio.scss'
import PortfolioList from "./PortfolioList";
import {contentPortfolio, designPortfolio, featuredPortfolio, mobilePortfolio, webPortfolio} from "../../dataPortfolio";

function Portfolio(props) {

    const [selected, setSelected] = useState('Featured');
    const [data, setData] = useState([]);

    const titleList = [
        {
            id:'Featured',
            title:'Featured'
        },
        {
            id:'web app',
            title:'web app'
        },
        {
            id:'Mobile App',
            title:'Mobile App'
        },
        {
            id:'Design',
            title:'Design'
        },
        {
            id:'Branding',
            title:'Branding'
        }
    ];

    useEffect(() => {
        switch (selected) {

            case "Featured":
                setData(featuredPortfolio);
                break;
            case "web app":
                setData(webPortfolio);
                break;
            case "Mobile App":
                setData(mobilePortfolio);
                break;
            case "Design":
                setData(designPortfolio);
                break;
            case "Branding":
                setData(contentPortfolio);
                break;
        }
    }, [selected]);


    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {titleList.map(item => (
                    <PortfolioList key={item.id} title={item.title} active={item.id === selected} setSelected={setSelected}/>
                ))
                }
            </ul>

            <div className="container">

                {data.map(item => (
                    <div className="item">
                        <img src={item.img}/>
                        <h3>{item.title}</h3>
                    </div>
                ))}


            </div>
        </div>
    );
}

export default Portfolio;