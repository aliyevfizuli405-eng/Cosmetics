import {LogoLight,LogoDark} from "@components/Nav/Logo"
import { Nav } from "@/components/Nav/Nav"
import { Herobg } from "@/pages/public/Home/Herobg/Herobg"
import { Product } from "./Products/Products"
import { Toaster } from "react-hot-toast"
import { Discount } from "./Discount/Discount"
import { TopCatalog } from "./TopCatalalog/TopCatalog"
export const HomePage = () =>{
    return(
        <>
        <Herobg/>
        <Product/>
        <Discount/>
        <TopCatalog/>
        <Toaster position="top-right"/>
        </>
    )
}