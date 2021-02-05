import React from "react";

export const Footer = (props) => {
    const date = new Date().getFullYear();
    return (
      <footer className="footer">
        <div className="section">
        © {date} Lucky For Sum
        </div>
      </footer>
    )
}