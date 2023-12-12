/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import { SRLWrapper } from "simple-react-lightbox";
import { useTranslation } from "react-i18next";

function EndustriyelMutfakInoksanBulasikMakinesi() {
  const { t } = useTranslation();

  return (
    <>
      <SRLWrapper>
        <section className="page-header">
          <div
            className="cta-two__bg"
            style={{
              backgroundImage: "url(assets/images/shapes/footer-bg-1.webp)",
            }}
          ></div>

          <div className="container">
            <ul className="page-header__breadcrumb list-unstyled">
              <li>
                <a href="index.html">{t("Anasayfa")}</a>
              </li>
              <li>
                <span>{t("ÜRÜNLERİMİZ")}</span>
              </li>
            </ul>
            <h2 className="page-header__title">
              {t("İNOKSAN BULAŞIK MAKİNESİ 500 TABAK")}
            </h2>
          </div>
        </section>
        <section className="product">
          <div className="container">
            <div className="row">
              <div
                className="col-lg-6 col-xl-6 wow fadeInLeft"
                data-wow-delay="200ms"
              >
                <div className="product-details__img">
                  <img
                    src="assets/images/endustriyelmutfak/inoksan-bulasik-makinesi-500-tabak.webp"
                    alt="İNOKSAN BULAŞIK MAKİNESİ 500 TABAK"
                  />
                  <div className="product-details__img-search">
                    <a
                      className="img-popup"
                      href="assets/images/endustriyelmutfak/inoksan-bulasik-makinesi-500-tabak.webp"
                    ></a>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-6 col-xl-6 wow fadeInRight"
                data-wow-delay="300ms"
              >
                <div className="product-details__content">
                  <div className="product-details__top">
                    <h3 className="product-details__title">
                      {t("İNOKSAN BULAŞIK MAKİNESİ 500 TABAK")}
                      <span className="product-details__price"></span>
                    </h3>
                  </div>
                  <div className="product-details__review">
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                  </div>
                  <div className="product-details__divider"></div>
                  <div className="product-details__excerpt">
                    <p className="list-unstyled product-details__description__lists">
                      <ul className="list-unstyled product-details__description__lists">
                        <li>
                          <span className="icon-right-arrow"></span>
                          {t("Genel Özellikler")} :
                        </li>
                        {t(
                          "Makinanın aktif yüzeylerinde AISI 304 kalite 18/8 Cr-Ni paslanmaz çelik sac, Makinanın çalışma sistemi tam otomatik, elektronik kart ile yıkama devrinin farklı aşamaları kontrol edilebilir yapıda, Cihaz kontrol panelinden yıkama ve durulama su sıcaklıklarını 2 ayrı NTC prob ile izleyebilme, Bulaşık çeşidine ve kirlilik derecesine göre 3 farklı yıkama programına sahip (90/120/180sn), °C veya °F uyumlu 3 dijitli sıcaklık göstergesi, Yıkama-durulama süre ve sıcaklıkları kullanıcının talebine göre elektronik kart servis menüsünden değiştirilebilir, Yıkama işlemi bitince otomatik olarak durulamaya geçerek boylerden gelen 85°C su ile durulama sağlama, Termo-stop durulama özelliği sayesinde yıkama süresince durulama suyunun ısınmasını bekleyip 85°C su ile yıkanan yüzeylerin sterilizasyonunu garanti eder, Boyler ve tank için sıcaklık emniyet termostatları, Yıkama sonlandığında sesli uyarı sistemi, Hata ve arıza kodlarını cihaz kontrol panelinden görebilme, Kapak açıldığında cihazın çalışmasını durduran ve tank ısıtıcısını kapatan emniyet sistemi, Maksimum 290mm çapındaki tabakları ve 280mm yüksekliğindeki bardakları yıkama özelliğine sahip, Şebeke suyunun kesilmesi durumunda, makinadaki deterjanlı suyun şebeke suyuna karışmasını önleyen çekvalf sistemi, Yıkama ve parlatıcı pompaları ithal, deterjan deformasyonuna karşı dayanıklı, Yıkama ve durulama kolları ile filtreler temizlik için kolayca sökülüp takılabilir yapıda, Tank içindeki max. ve min. su seviyeleri presostat ile otomatik olarak kontrol edilebilir yapıda, Gerektiğinde (su basıncının yeterli olmadığı yerlerde) makinaya durulama pompası takma imkanı"
                        )}
                        <li>
                          <span className="icon-right-arrow"></span>
                          {t("Teknik Özellikler")} :
                        </li>
                        {t("Su Girişi ¾")}<br/>
                        {t("Su Giriş Basıncı: 2-4 Bar")}<br/>
                        <li>
                          <span className="icon-right-arrow"></span>
                          {t("Isı Kapasitesi")} :
                        </li>
                        {t("Tank: 2,7 Kw")}<br/>
                        {t("Boyler: 2,6 Kw")}<br/>
                        {t("Max. Güç Tüketimi: 3,15 Kw")}<br/>
                        {t("Elektrik Girişi: 220-230V 1N AC 50-60Hz")}<br/>
                        {t("Kablo Kesiti: 3*2,5 mm")}<br/>
                        <li>
                          <span className="icon-right-arrow"></span>
                          {t("Kapasite")} :
                        </li>
                        {t("Tabak: 540 Tb/h")}<br/>
                        {t("Bardak: 1440 Ad/h")}<br/>
                        {t("Ebatlar: 600*600*830mm")}<br/>
                        {t("Net Ağırlık: 50 Kg")}<br/>
                      </ul>
                    </p>
                  </div>

                  <div className="product-details__socials">
                    <h4 className="product-details__socials__title">
                      {t("ARKADAŞLARINLA PAYLAŞ")}
                    </h4>
                    <a href="https://twitter.com/X">
                      <span className="fab fa-twitter"></span>
                    </a>
                    <a href="https://www.facebook.com/">
                      <span className="fab fa-facebook"></span>
                    </a>
                    <a href="https://www.pinterest.com/">
                      <span className="fab fa-pinterest-p"></span>
                    </a>
                    <a href="https://www.instagram.com/">
                      <span className="fab fa-instagram"></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </SRLWrapper>
    </>
  );
}

export default EndustriyelMutfakInoksanBulasikMakinesi;
