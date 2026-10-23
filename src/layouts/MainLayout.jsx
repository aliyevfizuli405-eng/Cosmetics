import { Outlet } from "react-router";
import { Nav } from "@/components/Nav/Nav";

export const MainLayout = () =>{
    return (
        <>
        <Nav/>
        <Outlet/>
        </>
    )
}