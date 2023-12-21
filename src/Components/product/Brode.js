/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SRLWrapper } from "simple-react-lightbox";
import Spacer2 from "../common/Spacer2";
import { t } from "i18next";

const Brode = () => {
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
                      src="assets/images/products/brode-2.jpg"
                      alt="Brode"
                      title="Brode"
                    />
                  </div>
                  <div>
                    <img
                      className="img-fluid blur-up lazyload"
                      src="assets/images/products/brode-2.jpg"
                      alt="Brode"
                      title="Brode"
                    />
                  </div>
                  <div>
                    <img
                      className="img-fluid blur-up lazyload"
                      src="assets/images/products/brode-2.jpg"
                      alt="Brode"
                      title="Brode"
                    />
                  </div>
                  <div>
                    <img
                      className="img-fluid blur-up lazyload"
                      src="assets/images/products/brode-2.jpg"
                      alt="Brode"
                      title="Brode"
                    />
                  </div>
                </Slider>
              </div>

              <div className="col-12 col-sm-12 col-md-6 col-lg-7 product-info-details">
                <div className="profuct-info">
                  <h1 className="product-title">Brode Perde</h1>
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
                        {t("Tasarım ve İşçilik :")}
                      </span>
                    </li>
                  </ul>
                  <li>
                    <i className="fa fa-check mr-2" aria-hidden="true"></i>
                    {t(
                      "Brode Tekniği: Brode perde, genellikle kumaşın üzerine işlenen dantel, nakış veya benzeri süsleme teknikleriyle yapılır. Bu teknik, perdeye görsel bir dokunuş ve estetik katman ekler."
                    )}
                    <br />
                    <i className="fa fa-check mr-2" aria-hidden="true"></i>
                    {t(
                      "Detaylar ve Desenler: Brode perde modelleri, çeşitli detaylar ve karmaşık desenlerle süslenebilir. Çiçek desenleri, geometrik şekiller ve zarif figürler brode perdelerde sıkça kullanılan tasarım öğeleridir."
                    )}
                  </li>
                  <br />
                  <ul className="d-sm-flex flex-sm-row align-items-sm-center product-price-info">
                    <li className="product-price m-0">
                      <span className="sale-price">
                        {t("Kullanılan Malzemeler :")}
                      </span>
                    </li>
                  </ul>
                  <li>
                    <i className="fa fa-check mr-2" aria-hidden="true"></i>
                    {t(
                      "İnce Kumaşlar: Brode perdeler genellikle ince ve hafif kumaşlardan yapılır. Bu, ışığın içeri girmesine izin verirken aynı zamanda zarif bir görünüm sağlar."
                    )}
                    <br />
                    <i className="fa fa-check mr-2" aria-hidden="true"></i>
                    {t(
                      "Dantel veya İnce Nakış: Brode işlemeli detaylar, genellikle dantel veya ince nakış kullanılarak yapılır. Bu detaylar, perdeye zarafet ve dokunsal bir özellik katar."
                    )}
                  </li>
                  <br />
                  <ul className="d-sm-flex flex-sm-row align-items-sm-center product-price-info">
                    <li className="product-price m-0">
                      <span className="sale-price">
                        {t("Renk ve Desen Seçenekleri :")}
                      </span>
                    </li>
                  </ul>
                  <li>
                    <i className="fa fa-check mr-2" aria-hidden="true"></i>
                    {t(
                      "Renk Çeşitliliği: Brode perdeler genellikle beyaz, krem, pastel tonlar veya daha zengin renk seçenekleriyle sunulur. Bu, kullanıcılara ev dekorasyonlarına uygun renkleri seçme esnekliği sağlar."
                    )}
                    <br />
                    <i className="fa fa-check mr-2" aria-hidden="true"></i>
                    {t(
                      "Desen Çeşitleri: Çiçek desenleri, yaprak motifleri, geometrik desenler ve benzeri çeşitli desenler, brode perdelerin tasarımında sıkça kullanılır."
                    )}
                  </li>
                  <br />
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
                      "Asma ve Kurulum: Brode perdeler, genellikle çubuklar veya perde askıları aracılığıyla pencereye asılır. Kullanımı kolaydır ve odadaki dekorasyona zarif bir katkı sağlar."
                    )}
                    <br />
                    <i className="fa fa-check mr-2" aria-hidden="true"></i>
                    {t(
                      "Gizlilik ve Işık Kontrolü: İnce kumaşlar sayesinde, brode perdeler odadaki ışığı yumuşak bir şekilde filtreleyebilir. Aynı zamanda gizlilik sağlar. Brode perdeler, genellikle oturma odası, yatak odası veya salon gibi iç mekanlarda kullanılır. Ev sahiplerine zarafet, şıklık ve kişisel tarzlarını yansıtma imkanı sunar."
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

export default Brode;
