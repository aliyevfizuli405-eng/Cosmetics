import {LogoLight,LogoDark} from "@components/Nav/Logo"
import { Nav } from "@/components/Nav/Nav"
import { Herobg } from "@/pages/public/Home/Herobg/Herobg"
import { Product } from "./Products/Products"
import { Toaster } from "react-hot-toast"
export const HomePage = () =>{
    return(
        <>
        <Herobg/>
        <Product/>
        <Toaster position="top-right"/>
        </>
    )
}