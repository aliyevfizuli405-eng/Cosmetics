import { createContext, useState } from "react";

export const NavContext = createContext();

export const NavContextProvider = ({ children }) => {
    const [isSearched, setIsSearched] = useState(false);
    const [searchedText,setSearchedText] = useState("");
    const [wishListedItems,setWishListedItems]=useState([]);
    const [inBasket,setInBasket]=useState(false)
    

    return (
        <NavContext.Provider value={{ isSearched, setIsSearched,wishListedItems,setWishListedItems}}>
            {children}
        </NavContext.Provider>
    );
};
