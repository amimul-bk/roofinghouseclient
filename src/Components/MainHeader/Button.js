import React from "react";
import "./Header.css";

const Button = ({ buttonText, buttonType, href }) => {
    return (
        <div className="text-center">
            <a
                href={href || "#"}
                className={`${
                    buttonType === "nav" ? "mega-cta-nav" : "mega-cta"
                } text-decoration-none`}
            >
                {buttonText}
            </a>
        </div>
    );
};

export default Button;
