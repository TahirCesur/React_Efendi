/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SRLWrapper } from "simple-react-lightbox";
import Spacer2 from "../common/Spacer2";
import { t } from "i18next";

const Nakis = () => {
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
                      src="assets/images/products/nakış-1.jpg"
                      alt="Fonluk"
                      title="Fonluk"
                    />
                  </div>
                  <div>
                    <img
                      className="img-fluid blur-up lazyload"
                      src="assets/images/products/nakış-1.jpg"
                      alt="Fonluk"
                      title="Fonluk"
                    />
                  </div>
                  <div>
                    <img
                      className="img-fluid blur-up lazyload"
                      src="assets/images/products/nakış-1.jpg"
                      alt="Fonluk"
                      title="Fonluk"
                    />
                  </div>
                  <div>
                    <img
                      className="img-fluid blur-up lazyload"
                      src="assets/images/products/nakış-1.jpg"
                      alt="Fonluk"
                      title="Fonluk"
                    />
                  </div>
                </Slider>
              </div>

              <div className="col-12 col-sm-12 col-md-6 col-lg-7 product-info-details">
                <div className="profuct-info">
                  <h1 className="product-title">Nakış Perde</h1>
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
                      <span className="sale-price">{t("Nakış Tekniği :")}</span>
                    </li>
                  </ul>
                  <li>
                    <i className="fa fa-check mr-2" aria-hidden="true"></i>
                    {t(
                      "Nakış perdeler, genellikle el işçiliği ile yapılır. Ancak, günümüzde makinelerle üretilmiş nakışlı perdeler de bulunabilir. Nakış, kumaşın yüzeyine iğne ve renkli iplik kullanılarak yapılan detaylı ve estetik bir süsleme işlemidir. Çiçek desenleri, geometrik şekiller, figüratif tasarımlar veya özel motifler nakış perdelerde sıkça kullanılan öğelerdir."
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
                      "Nakış perde için genellikle hafif ve ince kumaşlar tercih edilir. Bu, nakış işleminin detaylarını daha iyi ortaya çıkarır. Nakış için kullanılan iplikler, genellikle parlak ve renkli olup, tasarıma uygun tonlarda seçilir."
                    )}
                  </li>
                  <br />
                  <ul className="d-sm-flex flex-sm-row align-items-sm-center product-price-info">
                    <li className="product-price m-0">
                      <span className="sale-price">
                        {t("Renk ve Desen Çeşitliliği :")}
                      </span>
                    </li>
                  </ul>
                  <li>
                    <i className="fa fa-check mr-2" aria-hidden="true"></i>
                    {t(
                      "Nakış perde modelleri, farklı renk ve desen seçenekleri sunar. Kullanıcılar, ev dekorasyonlarına uygun renkleri ve desenleri seçerek kişiselleştirebilirler. Nakış perde üzerindeki desenler, genellikle dikiş ustasının sanatsal yeteneklerine bağlı olarak farklılık gösterir."
                    )}
                  </li>
                  <br />
                  <ul className="d-sm-flex flex-sm-row align-items-sm-center product-price-info">
                    <li className="product-price m-0">
                      <span className="sale-price">
                        {t("Kullanım Alanları :")}
                      </span>
                    </li>
                  </ul>
                  <li>
                    <i className="fa fa-check mr-2" aria-hidden="true"></i>
                    {t(
                      "Nakış perde, genellikle oturma odası, yatak odası veya misafir odası gibi iç mekanlarda kullanılır. Genellikle perdelerin yanı sıra masa örtüleri, yatak örtüleri veya dekoratif yastıklar gibi ev tekstili ürünlerinde de nakış detayları bulunabilir."
                    )}
                  </li>
                  <br />
                  <ul className="d-sm-flex flex-sm-row align-items-sm-center product-price-info">
                    <li className="product-price m-0">
                      <span className="sale-price">
                        {t("Bakım ve Temizlik :")}
                      </span>
                    </li>
                  </ul>
                  <li>
                    <i className="fa fa-check mr-2" aria-hidden="true"></i>
                    {t(
                      "Nakışlı perdeler genellikle hassas olduklarından dolayı dikkatli bir şekilde temizlenmelidir. Makinada yıkanabilir olup olmadığı, nakış ve kumaş türüne bağlı olarak değişebilir. Nakış perde, evinize geleneksel bir dokunuş ve zarafet katarken aynı zamanda el işçiliğiyle özel bir ürün sunar."
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

export default Nakis;
