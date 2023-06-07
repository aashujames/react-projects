import React, { useState, useContext } from "react";
import sublinks from "./data";

const StripeContext = React.createContext(null);

const StripeProvider = ({ children }) => {
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    // const [item, setItem] = useState(sublinks);

    const openSidebar = () => {
        setIsSidebarOpen(true);
    };
    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    const openSubmenu = () => {
        // const sublink = sublinks.find((item) => {item.page === })
        setIsSidebarOpen(true);
    };
    const closeSubmenu = () => {
        setIsSubmenuOpen(false);
    };

    return (
        <StripeContext.Provider
            value={{ openSidebar, closeSidebar, closeSubmenu, openSubmenu }}
        >
            {children}
        </StripeContext.Provider>
    );
};

export const GlobalStripe = () => {
    return useContext(StripeContext);
};

export { StripeContext, StripeProvider };
