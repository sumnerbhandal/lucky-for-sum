import React, {useState} from "react";

export const ThemeToggle = (props) => {
    const [isToggled, setToggled] = useState(false);

    function toggleTrueFalse() {
        setToggled(!isToggled);
        siteTheme();
    }

    function siteTheme() {
        const projectContainer = document.getElementsByTagName("body")[0];
        if (!isToggled) {
            document.documentElement.style.setProperty('--deep-purple', '#FFF');
            document.documentElement.style.setProperty('--off-white', '#000');
            document.documentElement.style.setProperty('--white', '#1F1E20');
            document.documentElement.style.setProperty('--subtext', '#eaeaea');
            document.documentElement.style.setProperty('--dots-grey', 'rgba(255, 255, 255, 0.05)');
            projectContainer.classList.add("dark");

        } else {
            document.documentElement.style.setProperty('--deep-purple', '#1F1E20');
            document.documentElement.style.setProperty('--off-white', '#F0EEE9');
            document.documentElement.style.setProperty('--white', '#FFF');
            document.documentElement.style.setProperty('--subtext', '#333');
            document.documentElement.style.setProperty('--dots-grey', 'rgba(0, 0, 0, 0.03)');
            projectContainer.classList.remove("dark");
        }
    }

    const [runOnce, setRunOnce] = useState(false);
    
    function detectTheme() {
        if (!runOnce && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setToggled(true);
            setRunOnce(true);
        } else if (!runOnce && window.matchMedia('(prefers-color-scheme: light)').matches) {
            setToggled(false);
            setRunOnce(true);
        } else return;
    }

    window.matchMedia('(prefers-color-scheme: dark)', '(prefers-color-scheme: light)').addEventListener('change', e => {
        setRunOnce(false);
        detectTheme()
    });

    detectTheme();

    return (
        <div className="header-side-container">
            <div className="light-dark-switcher">
                <button className={isToggled ? "toggle-switch dark" : "toggle-switch"} onClick={toggleTrueFalse} aria-label={isToggled ? "Switch to light mode" : "Switch to dark mode"}>
                    <div className="indicator"></div>
                </button>
            </div>
            
        </div>
    )
}
