/* eslint-disable react-hooks/exhaustive-deps */
<<<<<<< HEAD
=======
import { BrowserRouter } from "react-router-dom";
>>>>>>> 4babdcf2736bde5572026c59c009f171f55647ef
import React, { useEffect } from "react";
import {BrowserRouter} from "react-router-dom";
import Footer from "./Components/common/Footer";
import Header from "./Components/common/Header";
import CustomRoutes from "./router/CustomRoutes";
import { useTranslation } from "react-i18next";

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    const userLanguage = navigator.language || navigator.userLanguage;
    if (userLanguage.includes("tr")) {
      i18n.changeLanguage("tr"); // Tarayıcı dilini Türkçe olarak algıladığında dil ayarınızı güncelleyin
    }
  }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
<<<<<<< HEAD
    <>
      <BrowserRouter>
        <Header changeLanguage={changeLanguage} />
        <CustomRoutes changeLanguage={changeLanguage} />
        <Footer changeLanguage={changeLanguage} />
      </BrowserRouter>
    </>
=======
    <BrowserRouter>
      <Header changeLanguage={changeLanguage} />
      <CustomRoutes changeLanguage={changeLanguage} />
      <Footer changeLanguage={changeLanguage} />
    </BrowserRouter>
>>>>>>> 4babdcf2736bde5572026c59c009f171f55647ef
  );
}

export default App;
