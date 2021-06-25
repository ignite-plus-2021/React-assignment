import React from 'react'

const Project = () => {
    return (
        <div>
            <h3 className="padding head paddingTop" style={{ "margin-top": "10px" }}>PROJECT</h3>
            <h4>Share Recommendation Website</h4>
            <span><p>Technologies used : AngularJS, Spring boot, MySQL</p></span>
            <p style={{ "margin-bottom": "10px" }}> Share Recommendation website shows the list of Large Cap, Small Cap and Mid Cap
                Nifty stocks. The user can also save the stocks for future reference, which are stored in MySql database. Also,
                the website shows the list of top 5 performing Nifty stocks based on their past 2 weeks performance.
                For real time stock information I have using Yahoo Finance Api dependency of Spring boot.   </p>
        </div >
    )
}

export default Project
