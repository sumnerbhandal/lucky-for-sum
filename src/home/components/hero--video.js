import React, {useEffect, useState} from "react";
// import heroVideo from '../video/hero-video.mp4';
import playButton from "../video/play-button.svg";
import heroPoster from "../video/poster.png";

export const HeroVideo = (props) => {

    // const [videoSource, setVideoSource] = useState(null);

    // useEffect(() => {
    //     setVideoSource("/hero-video.mp4");
    //   });

    return (
        <div className="heroVideo--container"> 
            <video playsInline className="heroVideo" src="" poster={heroPoster} type="video/mp4" id="hero-video"  ref={props.ref} onClick={props.videoButton} onKeyPress={props.pressEnter} tabIndex="0" aria-label="Lucky for Sum promo video" />
            {props.videoPlaying ? (
                ""
            ) : (
                <img role="button"
                    aria-label="Play Lucky for Sum promo video"
                    className="play-button"
                    src={playButton}
                    tabIndex="0"
                    onClick={props.videoButton}
                    onKeyPress={props.pressEnter}
                    alt="Play Button"
                />
            )}
        </div>
    )
}