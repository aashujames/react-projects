import React from "react";
import CocktailList from "../components/CocktailList";
import SearchForm from "../components/SearchForm";
import SingleCocktail from "./SingleCocktail";

const Home = () => {
    return (
        <div>
            <h2>home page</h2>
            <CocktailList />
        </div>
    );
};

export default Home;
