/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SRLWrapper } from "simple-react-lightbox";
import Spacer2 from "../common/Spacer2";
import { t } from "i18next";

const Orme = () => {
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
                      src="assets/images/products/örme-1.jpg"
                      alt="Fonluk"
                      title="Fonluk"
                    />
                  </div>
                  <div>
                    <img
                      className="img-fluid blur-up lazyload"
                      src="assets/images/products/örme-1.jpg"
                      alt="Fonluk"
                      title="Fonluk"
                    />
                  </div>
                  <div>
                    <img
                      className="img-fluid blur-up lazyload"
                      src="assets/images/products/örme-1.jpg"
                      alt="Fonluk"
                      title="Fonluk"
                    />
                  </div>
                  <div>
                    <img
                      className="img-fluid blur-up lazyload"
                      src="assets/images/products/örme-1.jpg"
                      alt="Fonluk"
                      title="Fonluk"
                    />
                  </div>
                </Slider>
              </div>

              <div className="col-12 col-sm-12 col-md-6 col-lg-7 product-info-details">
                <div className="profuct-info">
                  <h1 className="product-title">Örme Perde</h1>
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
                        {t("Malzeme ve Teknik :")}
                      </span>
                    </li>
                  </ul>
                  <li>
                    <i className="fa fa-check mr-2" aria-hidden="true"></i>
                    {t(
                      "Örme perdeler genellikle örgü tekniğiyle yapılmıştır. Bu, kumaşın üzerinde desen oluşturmak veya delikli desenler eklemek için ipliklerin birbirine geçirilmesi anlamına gelir. Pamuk, keten, polyester veya örgü için özel olarak tasarlanmış diğer malzemeler örme perdelerde kullanılabilir."
                    )}
                  </li>
                  <br />
                  <ul className="d-sm-flex flex-sm-row align-items-sm-center product-price-info">
                    <li className="product-price m-0">
                      <span className="sale-price">
                        {t("Desen ve Tasarım Çeşitliliği :")}
                      </span>
                    </li>
                  </ul>
                  <li>
                    <i className="fa fa-check mr-2" aria-hidden="true"></i>
                    {t(
                      "Örme perdelerde geniş bir desen ve tasarım çeşitliliği bulunabilir. Yatay veya dikey çizgiler, çiçek desenleri, geometrik desenler veya delikli desenler gibi çeşitli seçenekler mevcuttur. Desenler, ışığın odadan geçişini düzenleyebilir ve dekoratif bir görünüm sağlayabilir."
                    )}
                  </li>
                  <br />
                  <ul className="d-sm-flex flex-sm-row align-items-sm-center product-price-info">
                    <li className="product-price m-0">
                      <span className="sale-price">
                        {t("Işığı Filtreleme ve Gizlilik :")}
                      </span>
                    </li>
                  </ul>
                  <li>
                    <i className="fa fa-check mr-2" aria-hidden="true"></i>
                    {t(
                      "Örme perdeler, odadaki doğal ışığın yumuşak bir şekilde içeri girmesine izin verirken dışarıdan bakıldığında iç mekanın görünürlüğünü kısıtlayabilir. Genellikle hafif ve ince dokusu nedeniyle gizlilik sağlarlar."
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
                      "Örme perdeler, oturma odası, yatak odası, mutfak, banyo veya ofis gibi farklı mekanlarda kullanılabilir. Tasarım ve renk seçenekleri, kullanım alanına uygun şekilde seçilebilir."
                    )}
                  </li>
                  <br />
                  <ul className="d-sm-flex flex-sm-row align-items-sm-center product-price-info">
                    <li className="product-price m-0">
                      <span className="sale-price">
                        {t("Montaj ve Bakım :")}
                      </span>
                    </li>
                  </ul>
                  <li>
                    <i className="fa fa-check mr-2" aria-hidden="true"></i>
                    {t(
                      "Örme perdeler, perde çubuğu veya perde rayı üzerine monte edilebilir. Montaj şekli, perdenin tasarımına ve kullanılacağı alanın gereksinimlerine bağlı olarak değişebilir. Bakımı genellikle kolaydır; çoğu örme perde, çamaşır makinesinde yıkanabilir veya elde yıkanabilir."
                    )}
                  </li>
                  <br />
                  <ul className="d-sm-flex flex-sm-row align-items-sm-center product-price-info">
                    <li className="product-price m-0">
                      <span className="sale-price">
                        {t("Stil ve Dekorasyon :")}
                      </span>
                    </li>
                  </ul>
                  <li>
                    <i className="fa fa-check mr-2" aria-hidden="true"></i>
                    {t(
                      "Örme perdeler, genellikle hafif ve hava geçirgen olduğu için yaz aylarında tercih edilir. Farklı renk ve desen seçenekleriyle odanın genel dekorasyonuna uyum sağlamak için kullanılabilirler. Örme perdeler, odalara hafiflik ve zarafet katan, doğal ışığın güzel bir şekilde filtrelenmesine yardımcı olan dekoratif bir perde seçeneğidir."
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

export default Orme;
