import React from "react";
import { Routes, Route } from "react-router-dom";
import AboutPage from "../pages/about/AboutPage";
import AboutusPage from "../pages/about/AboutusPage";
import ContactPage from "../pages/contact/ContactPage";
import HomePage from "../pages/HomePage";
import ProductPage from "../pages/product/ProductPage";
import ProductDetailsPage from "../pages/product/ProductDetailsPage";
import ProductSimilarPage from "../pages/similar/ProductSimilarPage";
import ContactusPage from "../pages/contact/ContactusPage";
import UrunPage from "../pages/UrunPage";
import SidebarPage from "../pages/sidebar/SidebarPage";
import WinsaPage from "../pages/winsa/WinsaPage";
import CamBalkonPage from "../pages/cambalkon/CamBalkonPage";
import WinsaPanjurKepenkSistemleriPage from "../pages/winsa/WinsaPanjurKepenkSistemleriPage";
import WinsaSurmeSistemleriPage from "../pages/winsa/WinsaSurmeSistemleriPage";
import SurguluCamSistemleriPage from "../pages/cambalkon/SurguluCamSistemleriPage";
import GiyotinCamSistemleriPage from "../pages/cambalkon/GiyotinCamSistemleriPage";
import IsiCamliCamBalkonPage from "../pages/cambalkon/IsiCamliCamBalkonPage";
import KisBahcesiPage from "../pages/cambalkon/KisBahcesiPage";
import RewotechGoldPage from "../pages/winsa/RewotechGoldPage";
import PencerePage from "../pages/similar/PencerePage";
import DonanımPage from "../pages/similar/DonanımPage";
import RewotechPage from "../pages/winsa/RewotechPage";
import Safir76Page from "../pages/winsa/Safir76Page";
import SafirPage from "../pages/winsa/SafirPage";
import Dorado76Page from "../pages/winsa/Dorado76Page";
import ComfortSlidePage from "../pages/winsa/ComfortSlidePage";
import LotusPage from "../pages/winsa/LotusPage";
import PanoramaHS76Page from "../pages/winsa/PanoramaHS76Page";
import WinstorPage from "../pages/winsa/WinstorPage";
import WinkepenkPage from "../pages/winsa/WinkepenkPage";
import KatlanirCamBalkonPage from "../pages/cambalkon/KatlanirCamBalkonPage";
import EsiksizCamBalkonPage from "../pages/cambalkon/EsiksizCamBalkonPage";
import KilavuzsuzCamBalkonPage from "../pages/cambalkon/KilavuzsuzCamBalkonPage";
import KilavuzsuzEsiksizCamBalkonPage from "../pages/cambalkon/KilavuzsuzEsiksizCamBalkonPage";
import KilavuzsuzKupesteliCamBalkonPage from "../pages/cambalkon/KilavuzsuzKupesteliCamBalkonPage";
import KupesteliCamBalkonPage from "../pages/cambalkon/KupesteliCamBalkonPage";
import EsiksizIsiCamPage from "../pages/cambalkon/EsiksizIsiCamPage";
import IsiCamliCamPage from "../pages/cambalkon/IsiCamliCamPage";
import KilavuzsuzEsiksizIsiCamPage from "../pages/cambalkon/KilavuzsuzEsiksizIsiCamPage";
import KilavuzsuzIsiCamPage from "../pages/cambalkon/KilavuzsuzIsiCamPage";
import KupesteliIsiCamPage from "../pages/cambalkon/KupesteliIsiCamPage";
import EsikliSurguluSistemPage from "../pages/cambalkon/EsikliSurguluSistemPage";
import EsiksizSurguluSistemPage from "../pages/cambalkon/EsiksizSurguluSistemPage";
import LuxSurguluSistemPage from "../pages/cambalkon/LuxSurguluSistemPage";
import KlasikGiyotinSistemPage from "../pages/cambalkon/KlasikGiyotinSistemPage";
import SilinebilirGiyotinSistemPage from "../pages/cambalkon/SilinebilirGiyotinSistemPage";
import IOTSilinebilirGiyotinSistemPage from "../pages/cambalkon/IOTSilinebilirGiyotinSistemPage";
import BioclimaticPage from "../pages/cambalkon/BioclimaticPage";
import RollingRoofPage from "../pages/cambalkon/RollingRoofPage";
import PergolePage from "../pages/cambalkon/PergolePage";
import VerandaSabitCamTavanPage from "../pages/cambalkon/VerandaSabitCamTavanPage";
import SabitCamTavanPage from "../pages/cambalkon/SabitCamTavanPage";
import AluminyumKorkulukKupestePage from "../pages/aluminyum/AluminyumKorkulukKupestePage";
import AluminyumPage from "../pages/aluminyum/AluminyumPage";
import CamKorkulukSistemleriPage from "../pages/aluminyum/CamKorkulukSistemleriPage";
import AluminyumDogramaVitrinPage from "../pages/aluminyum/AluminyumDogramaVitrinPage";
import KatlanirCamSistemleriPage from "../pages/cambalkon/KatlanirCamSistemleriPage";
import GaleriPage from "../pages/GaleriPage";
<<<<<<< HEAD

=======
import SidebarPage from "../pages/SidebarPage";
>>>>>>> 4babdcf2736bde5572026c59c009f171f55647ef
/* import TopBarPage from "../pages/TopBarPage"; */

const CustomRoutes = () => {
  return (
    <Routes>
<<<<<<< HEAD
    <Route
        exact
        path="/uygulamalarimiz"
        element={<GaleriPage />}
      />
      <Route
        exact
        path="/katlanir-cam-sistemleri"
        element={<KatlanirCamSistemleriPage />}
      />
      <Route
        exact
        path="/aluminyum-dograma-vitrin"
        element={<AluminyumDogramaVitrinPage />}
      />
      <Route
        exact
        path="/cam-korkuluk-sistemleri"
        element={<CamKorkulukSistemleriPage />}
      />
      <Route
        exact
        path="/aluminyum-korkuluk-kupeste"
        element={<AluminyumKorkulukKupestePage />}
      />

      <Route
        exact
        path="/veranda-sabit-cam-tavan"
        element={<VerandaSabitCamTavanPage />}
      />
      <Route exact path="/sabit-cam-tavan" element={<SabitCamTavanPage />} />
      <Route exact path="/pergole" element={<PergolePage />} />
      <Route exact path="/rolling-roof" element={<RollingRoofPage />} />
      <Route exact path="/bioclimatic" element={<BioclimaticPage />} />

      <Route
        exact
        path="/IOT-silinebilir-giyotin-sistem"
        element={<IOTSilinebilirGiyotinSistemPage />}
      />
      <Route
        exact
        path="/silinebilir-giyotin-sistem"
        element={<SilinebilirGiyotinSistemPage />}
      />
      <Route
        exact
        path="/klasik-giyotin-sistem"
        element={<KlasikGiyotinSistemPage />}
      />

      <Route
        exact
        path="/lux-surgulu-sistem"
        element={<LuxSurguluSistemPage />}
      />
      <Route
        exact
        path="/esiksiz-surgulu-sistem"
        element={<EsiksizSurguluSistemPage />}
      />
      <Route
        exact
        path="/esikli-surgulu-sistem"
        element={<EsikliSurguluSistemPage />}
      />

      <Route
        exact
        path="/kupesteli-cam-balkon"
        element={<KupesteliCamBalkonPage />}
      />
      <Route
        exact
        path="/kupesteli-isi-cam"
        element={<KupesteliIsiCamPage />}
      />
      <Route
        exact
        path="/kilavuzsuz-isi-cam"
        element={<KilavuzsuzIsiCamPage />}
      />
      <Route
        exact
        path="/kilavuzsuz-esiksiz-isi-cam"
        element={<KilavuzsuzEsiksizIsiCamPage />}
      />
      <Route exact path="/isi-camli-cam" element={<IsiCamliCamPage />} />
      <Route exact path="/esiksiz-isi-cam" element={<EsiksizIsiCamPage />} />

      <Route
        exact
        path="/kupesteli-cam-balkon"
        element={<KupesteliCamBalkonPage />}
      />
      <Route
        exact
        path="/kilavuzsuz-kupesteli-cam-balkon"
        element={<KilavuzsuzKupesteliCamBalkonPage />}
      />
      <Route
        exact
        path="/kilavuzsuz-esiksiz-cam-balkon"
        element={<KilavuzsuzEsiksizCamBalkonPage />}
      />
      <Route
        exact
        path="/kilavuzsuz-cam-balkon"
        element={<KilavuzsuzCamBalkonPage />}
      />
      <Route
        exact
        path="/esiksiz-cam-balkon"
        element={<EsiksizCamBalkonPage />}
      />
      <Route
        exact
        path="/katlanir-cam-balkon"
        element={<KatlanirCamBalkonPage />}
      />

      <Route exact path="/winkepenk" element={<WinkepenkPage />} />
      <Route exact path="/winstor" element={<WinstorPage />} />
      <Route exact path="/panorama-hs-76" element={<PanoramaHS76Page />} />
      <Route exact path="/lotus" element={<LotusPage />} />
      <Route exact path="/comfort-slide" element={<ComfortSlidePage />} />
      <Route exact path="/dorado76" element={<Dorado76Page />} />
      <Route exact path="/safir" element={<SafirPage />} />
      <Route exact path="/safir76" element={<Safir76Page />} />
      <Route exact path="/rewotech" element={<RewotechPage />} />
      <Route exact path="/donanım" element={<DonanımPage />} />
      <Route exact path="/pencere" element={<PencerePage />} />
      <Route exact path="/aluminyum" element={<AluminyumPage />} />
      <Route
        exact
        path="/giyotin-cam-sistemleri"
        element={<GiyotinCamSistemleriPage />}
      />
      <Route
        exact
        path="/surgulu-cam-sistemleri"
        element={<SurguluCamSistemleriPage />}
      />
      <Route
        exact
        path="/isi-camli-cam-balkon"
        element={<IsiCamliCamBalkonPage />}
      />
      <Route exact path="/kis-bahcesi" element={<KisBahcesiPage />} />
      <Route exact path="/cam-balkon" element={<CamBalkonPage />} />
      <Route
        exact
        path="/surme-sistemleri"
        element={<WinsaSurmeSistemleriPage />}
      />
      <Route
        exact
        path="/panjur-kepenk-sistemleri"
        element={<WinsaPanjurKepenkSistemleriPage />}
      />
      <Route exact path="/rewotech-gold" element={<RewotechGoldPage />} />
      <Route exact path="/pvc-pencere-kapi-sistemleri" element={<WinsaPage />} />
      <Route exact path="/sidebar" element={<SidebarPage />} />
      <Route exact path="/urun" element={<UrunPage />} />
      <Route exact path="/contactus" element={<ContactusPage />} />
      <Route exact path="/product-similar" element={<ProductSimilarPage />} />
      <Route exact path="/product-details" element={<ProductDetailsPage />} />
=======
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
>>>>>>> 4babdcf2736bde5572026c59c009f171f55647ef
      {/* <Route exact path="/TopBar" element={<TopBarPage />} /> */}
      <Route exact path="/product" element={<ProductPage />} />
      <Route exact path="/contact" element={<ContactPage />} />
      <Route exact path="/aboutus" element={<AboutusPage />} />
      <Route exact path="/about" element={<AboutPage />} />
      <Route exact path="/" element={<HomePage />} />
    </Routes>
  );
};

export default CustomRoutes;
