import React, {useState, useEffect, createContext} from "react";
import { fetchDataFromApi } from "../utils/api"

export const Context = createContext();

export const AppContext = (props) => {
    const [loading, setLoading] = useState(false);
    const [searchResults, setSearchResults] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("Home");
    const [mobileMenu, setMobileMenu] = useState(false);

    useEffect(() => {
        const fetchSelectedCategoryData = (query) => {
            setLoading(true);
            query = selectedCategory === "Home" ? "home/" : `search/?q=${query}`; 
            fetchDataFromApi(query).then(({ contents }) => {
                setSearchResults(contents);
                setLoading(false);
            })
        }
        fetchSelectedCategoryData(selectedCategory);
    }, [selectedCategory]);



    return (
        <Context.Provider
            value={{
                loading,
                setLoading,
                searchResults,
                selectedCategory,
                setSelectedCategory,
                mobileMenu,
                setMobileMenu}}>
            {props.children}
        </Context.Provider>
    );
} 