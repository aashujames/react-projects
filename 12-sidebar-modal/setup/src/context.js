import React, { useState, useContext, createContext } from "react";
import App from "./App";

const AppContext = React.createContext();

const AppProvider = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openSidebar = () => setIsSidebarOpen(true);

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <AppContext.Provider
            value={{
                isSidebarOpen,
                isModalOpen,
                openModal,
                closeModal,
                openSidebar,
                closeSidebar
            }}
        >
            <App />
        </AppContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppContext, AppProvider };
