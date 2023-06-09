import React from "react";
import logo from "./images/logo.svg";
import { FaBars } from "react-icons/fa";
import { useGlobalStripe } from "./context";

const Navbar = () => {
    const { openSubmenu } = useGlobalStripe();

    const displaySubmenu = (e) => {
        const page = e.target.textContent;
        openSubmenu(page);
    };

    return (
        <div className="nav">
            <div className="nav-center">
                <div className="nav-header">
                    <img src={logo} className="nav-logo" alt="" />
                </div>
                <ul className="nav-links">
                    <li className="link-btn" onMouseOver={displaySubmenu}>
                        products
                    </li>
                    <li className="link-btn">developers</li>
                    <li className="link-btn">company</li>
                </ul>
                <button className="btn signin-btn">Sign in</button>
            </div>
        </div>
    );
};

export default Navbar;
