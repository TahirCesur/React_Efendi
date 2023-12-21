/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SRLWrapper } from "simple-react-lightbox";
import Spacer2 from "../common/Spacer2";
import { t } from "i18next";

const Urun = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <SRLWrapper>
        <Spacer2 />
        <div className="product-single mb-5">
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-6 col-lg-5 product-store-features">
                <Slider {...sliderSettings}>
                  <div>
                    <img
                      className="img-fluid blur-up lazyload"
                      src="assets/images/products/armür-1.jpg"
                      alt="Armür"
                      title="Armür"
                    />
                  </div>
                  <div>
                    <img
                      className="img-fluid blur-up lazyload"
                      src="assets/images/products/armür-1.jpg"
                      alt="Armür"
                      title="Armür"
                    />
                  </div>
                  <div>
                    <img
                      className="img-fluid blur-up lazyload"
                      src="assets/images/products/armür-1.jpg"
                      alt="Armür"
                      title="Armür"
                    />
                  </div>
                  <div>
                    <img
                      className="img-fluid blur-up lazyload"
                      src="assets/images/products/armür-1.jpg"
                      alt="Armür"
                      title="Armür"
                    />
                  </div>
                </Slider>
              </div>

              <div className="col-12 col-sm-12 col-md-6 col-lg-7 product-info-details">
                <div className="profuct-info">
                  <h1 className="product-title">Armür Perde</h1>
                  <div className="pro-revi-arrow clearfix">
                    <div className="product-starrating pull-left">
                      <i className="spr-icon fa fa-star"></i>
                      <i className="spr-icon fa fa-star"></i>
                      <i className="spr-icon fa fa-star"></i>
                      <i className="spr-icon fa fa-star"></i>
                      <i className="spr-icon fa fa-star"></i>
                    </div>
                  </div>
                </div>

                <ul className="d-flex flex-column pro-lists product-price-info">
                  <ul className="d-sm-flex flex-sm-row align-items-sm-center product-price-info">
                    <li className="product-price m-0">
                      <span className="sale-price">
                        {t("Tasarım ve Malzeme :")}
                      </span>
                    </li>
                  </ul>
                  <li>
                    <i className="fa fa-check mr-2" aria-hidden="true"></i>
                    {t(
                      "Tasarım Çeşitliliği: Armür perdeler, çeşitli tasarım ve desenlere sahip olabilir. Zarif ve şık armür perde modelleri genellikle ev dekorasyonuna zarafet ve görsel çekicilik katmak için tercih edilir."
                    )}
                    <br />
                    <i className="fa fa-check mr-2" aria-hidden="true"></i>
                    {t(
                      "Malzeme Çeşitleri: Armür perdeler genellikle ince ve hafif kumaşlardan yapılır. Şeffaf veya yarı şeffaf malzemeler kullanılarak ışığın odanın içine daha yumuşak bir şekilde girmesi sağlanabilir."
                    )}
                  </li>
                  <ul className="d-sm-flex flex-sm-row align-items-sm-center product-price-info">
                    <li className="product-price m-0">
                      <span className="sale-price">
                        {t("Montaj ve Kullanım :")}
                      </span>
                    </li>
                  </ul>
                  <li>
                    <i className="fa fa-check mr-2" aria-hidden="true"></i>
                    {t(
                      "Asma ve Kurulum: Armür perdeler genellikle pencere üzerine veya yanlarına monte edilir. Bir çubuk veya perde askısı kullanılarak asılabilirler."
                    )}
                    <br />
                    <i className="fa fa-check mr-2" aria-hidden="true"></i>
                    {t(
                      "Kullanım Kolaylığı: Perdeler genellikle kolay bir şekilde açılıp kapanabilir. Yatay olarak toplanabilirler ve kullanıcıya pencereye gelen ışığı kontrol etme imkanı tanır."
                    )}
                  </li>
                  <ul className="d-sm-flex flex-sm-row align-items-sm-center product-price-info">
                    <li className="product-price m-0">
                      <span className="sale-price">
                        {t("Işık Kontrolü ve Gizlilik :")}
                      </span>
                    </li>
                  </ul>
                  <li>
                    <i className="fa fa-check mr-2" aria-hidden="true"></i>
                    {t(
                      "Işık Kontrolü: Armür perdeler, istenilen miktarda ışığın içeri girmesini sağlar. Işığı filtreleyebilir ve odadaki atmosferi yumuşatabilirler."
                    )}
                    <br />
                    <i className="fa fa-check mr-2" aria-hidden="true"></i>
                    {t(
                      "Gizlilik: Bu tür perdeler, odadaki gizliliği artırmak için kullanılabilir. Şeffaf veya yarı şeffaf olmaları, dışarıdan içeriye bakmayı zorlaştırabilir."
                    )}
                  </li>
                  <ul className="d-sm-flex flex-sm-row align-items-sm-center product-price-info">
                    <li className="product-price m-0">
                      <span className="sale-price">
                        {t("Ev Dekorasyonuna Katkı :")}
                      </span>
                    </li>
                  </ul>
                  <li>
                    <i className="fa fa-check mr-2" aria-hidden="true"></i>
                    {t(
                      "Renk ve Desen Seçenekleri: Armür perdeler, ev sahiplerine geniş bir renk ve desen yelpazesi sunar. Bu, mevcut ev dekorasyonuyla uyumlu bir perde seçme olanağı sağlar."
                    )}
                    <br />
                    <i className="fa fa-check mr-2" aria-hidden="true"></i>
                    {t(
                      "Estetik Katkı: Zarif tasarımları ve hafif malzemeleri sayesinde armür perdeler, evin iç mekanına estetik bir katkı sağlayabilir. Bu, genel bir bakış olup, armür perdelerin tasarım ve kullanımı markalara, modellere ve tercihlere göre değişebilir. Tercih etmeden önce odanın dekorasyonuna ve kişisel ihtiyaçlara uygun bir model seçmek önemlidir."
                    )}
                  </li>
                </ul>

                <div className="social-media">
                  <ul className="d-flex flex-row">
                    <li>
                      <ul className="d-sm-flex flex-sm-row align-items-sm-center product-price-info">
                        <li className="product-price m-0">
                          <span className="sale-price">
                            {t("Arkadaşlarınla Paylaş :")}
                          </span>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" title="Facebook">
                        <i className="ti-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" title="Twitter">
                        <i className="ti-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" title="Google Plus">
                        <i className="ti-google"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" title="Pinterest">
                        <i className="ti-pinterest"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" title="Email">
                        <i className="ti-email"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SRLWrapper>
    </>
  );
};

export default Urun;
