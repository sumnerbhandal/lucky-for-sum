import React from "react";
import { Link } from "react-router-dom/index";
import "./style.css";

const Error = (props) => {
    return (
        <div className="section">
            <div className="error-messaging">
                <div className="image-container">
                    <Link to="./" ><img src={require('../nav/icons/lucky-for-sum-logo.svg')} alt="Lucky for Sum logo" /></Link>
                </div>
                <h1>Error 404 - Page Not Found</h1>
                <div className="text-container">
                    <p>I have most likely deleted or modified the page, sorry!<br />The good news is that I have some hopefully new and exciting content <Link to="./" >here</Link>.</p>
                </div>

            </div>
        </div>
    )
}

export default Error;