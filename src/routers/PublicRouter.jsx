import { BrowserRouter, Routes, Route } from "react-router";
import { HomePage } from "@/pages/public/Home/HomePage.jsx";
import { ShopPage } from "@/pages/public/Shop/ShopPage.jsx";
import { MainLayout } from "@/layouts/MainLayout.jsx";

export const PublicRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout/>}>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
