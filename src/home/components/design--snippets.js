import React from "react";
import { designSnippetFeed } from "../../data-feed/design-snippet-feed";

export const DesignSnippets = (props) => {
    return (
        <div id="design-snippets" className="section design-snippets">
            <h3>
                Design Snippets
            </h3>
            {designSnippetFeed.map((item, index) => (
                <div className="project-summaries">
                    <div className="image-container">
                      <img src={require('./design-img/' + item.image)} alt={item.title}  />
                    </div>
                    <h4>{item.title}</h4>
                </div>
            ))}
        </div>
    )
}