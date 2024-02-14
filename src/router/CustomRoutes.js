import React from "react";
import { Routes, Route } from "react-router-dom";
import AboutPage from "../pages/AboutPage";
import AboutusPage from "../pages/AboutusPage";
import ContactPage from "../pages/ContactPage";
import HomePage from "../pages/HomePage";
import ProductPage from "../pages/ProductPage";
import ProductDetailsPage from "../pages/ProductDetailsPage";
import ProductSimilarPage from "../pages/ProductSimilarPage";
import ContactusPage from "../pages/ContactusPage";
import ArmurPage from "../pages/ArmurPage";
import UrunPage from "../pages/UrunPage";
import FonlukPage from "../pages/FonlukPage";
import OrmePage from "../pages/OrmePage";
import BaskiliPage from "../pages/BaskiliPage";
import NakisPage from "../pages/NakisPage";
import BrodePage from "../pages/BrodePage";
import GaleriPage from "../pages/GaleriPage";
import SidebarPage from "../pages/SidebarPage";
/* import TopBarPage from "../pages/TopBarPage"; */

const CustomRoutes = () => {
  return (
    <Routes>
      <Route exact path="/Sidebar" element={<SidebarPage />} />
      <Route exact path="/Galeri" element={<GaleriPage />} />
      <Route exact path="/Brode" element={<BrodePage />} />
      <Route exact path="/Nakis" element={<NakisPage />} />
      <Route exact path="/Baskili" element={<BaskiliPage />} />
      <Route exact path="/Orme" element={<OrmePage />} />
      <Route exact path="/Fonluk" element={<FonlukPage />} />
      <Route exact path="/Armur" element={<ArmurPage />} />
      <Route exact path="/Urun" element={<UrunPage />} />
      <Route path="/Contactus" element={<ContactusPage />} />
      <Route exact path="/ProductSimilar" element={<ProductSimilarPage />} />
      <Route exact path="/ProductDetails" element={<ProductDetailsPage />} />
      {/* <Route exact path="/TopBar" element={<TopBarPage />} /> */}
      <Route exact path="/Product" element={<ProductPage />} />
      <Route path="/Contact" element={<ContactPage />} />
      <Route path="/Aboutus" element={<AboutusPage />} />
      <Route path="/About" element={<AboutPage />} />
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};

export default CustomRoutes;
