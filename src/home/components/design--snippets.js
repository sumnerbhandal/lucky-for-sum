import React from "react";
import { designSnippetFeed } from "../../data-feed/design-snippet-feed";
import ProgressiveImageHook from "../../reusable-functions/progressive-image-load";
import "./design-snippets.css";

const DesignSnippets = (props) => {
    return (
            <div className="design-snippets">
                <h3>
                    Design Snippets (Placeholder Content)
                </h3>
                    {designSnippetFeed.map((item, index) => (
                        <div className="project-summaries">
                            <div className="image-container">
                                {item.type === "video" ? (
                                <video autoPlay muted loop src={require('./design-img/' + item.image)}></video>
                                ) : (
                                
                                <ProgressiveImageHook
                                    key={index}
                                    src={require('./design-img/' + item.image)}
                                    placeholder={require('./design-img/' + item.image.replace(".png" || ".gif", "_placeholder.png"))}
                                    alt={item.title}
                                />
                                ) }
                            
                            </div>
                            {/* <h4>{item.title}</h4> */}
                        </div>
                    ))}
            </div>
    )
}

export default DesignSnippets;