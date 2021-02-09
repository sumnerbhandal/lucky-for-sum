import React from "react";
import { designSnippetFeed } from "../../data-feed/design-snippet-feed";

export const DesignSnippets = (props) => {
    return (
        <div id="design-snippets" className="design-snippets hp-section section">
            <h3>
                Design Snippets (Placeholder Content)
            </h3>
            {designSnippetFeed.map((item, index) => (
                <div className="project-summaries">
                    <div className="image-container">
                        {item.type === "video" ? (
                        <video autoPlay muted loop src={require('./design-img/' + item.image)}></video>
                        ) : (
                        <img src={require('./design-img/' + item.image)} alt={item.title} loading="lazy" />
                        ) }
                    
                    </div>
                    {/* <h4>{item.title}</h4> */}
                </div>
            ))}
        </div>
    )
}