import React, { useState, useContext } from "react";
import sublinks from "./data";

const StripeContext = React.createContext(null);

const StripeProvider = ({ children }) => {
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [sublink, setSublink] = useState({ page: "", links: [] });

    const openSidebar = () => {
        setIsSidebarOpen(true);
    };
    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    const openSubmenu = (text) => {
        const sublink = sublinks.find((item) => item.page === text);
        setSublink(sublink);
        setIsSidebarOpen(true);
    };
    const closeSubmenu = () => {
        setIsSubmenuOpen(false);
    };

    return (
        <StripeContext.Provider
            value={{
                openSidebar,
                closeSidebar,
                closeSubmenu,
                openSubmenu,
                isSidebarOpen,
                isSubmenuOpen
            }}
        >
            {children}
        </StripeContext.Provider>
    );
};

export const GlobalStripe = () => {
    return useContext(StripeContext);
};

export { StripeContext, StripeProvider };
