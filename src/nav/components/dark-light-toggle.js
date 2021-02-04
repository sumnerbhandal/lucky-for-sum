import React, {useState} from "react";

export const ThemeToggle = (props) => {
    const [isToggled, setToggled] = useState(false);
    const toggleTrueFalse = () => setToggled(!isToggled);

    function siteTheme() {
        if (isToggled) {
            document.documentElement.style.setProperty('--deep-purple', '#FFF');
            document.documentElement.style.setProperty('--off-white', '#000');
            document.documentElement.style.setProperty('--white', '#1F1E20');
            document.documentElement.style.setProperty('--subtext', '#eaeaea');
            document.documentElement.style.setProperty('--dots-grey', '#0D0D0D');
        } else {
            document.documentElement.style.setProperty('--deep-purple', '#1F1E20');
            document.documentElement.style.setProperty('--off-white', '#F0EEE9');
            document.documentElement.style.setProperty('--white', '#FFF');
            document.documentElement.style.setProperty('--subtext', '#333');
            document.documentElement.style.setProperty('--dots-grey', '#E0E0E0');
        }
    }

    siteTheme();

    return (
        <div >
            <div className="light-dark-switcher">
                {/* <label>Light</label> */}
                <button className={isToggled ? "toggle-switch dark" : "toggle-switch"} onClick={toggleTrueFalse}>
                    <div className="indicator"></div>
                </button>
                {/* <label>Dark</label> */}
            </div>
            
        </div>
    )
}
