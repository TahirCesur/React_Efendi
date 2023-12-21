/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SRLWrapper } from "simple-react-lightbox";
import Spacer2 from "../common/Spacer2";
import { t } from "i18next";

const Fonluk = () => {
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
                      src="assets/images/products/fon-1.jpg"
                      alt="Fonluk"
                      title="Fonluk"
                    />
                  </div>
                  <div>
                    <img
                      className="img-fluid blur-up lazyload"
                      src="assets/images/products/fon-1.jpg"
                      alt="Fonluk"
                      title="Fonluk"
                    />
                  </div>
                  <div>
                    <img
                      className="img-fluid blur-up lazyload"
                      src="assets/images/products/fon-1.jpg"
                      alt="Fonluk"
                      title="Fonluk"
                    />
                  </div>
                  <div>
                    <img
                      className="img-fluid blur-up lazyload"
                      src="assets/images/products/fon-1.jpg"
                      alt="Fonluk"
                      title="Fonluk"
                    />
                  </div>
                </Slider>
              </div>

              <div className="col-12 col-sm-12 col-md-6 col-lg-7 product-info-details">
                <div className="profuct-info">
                  <h1 className="product-title">Fonluk</h1>
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
                        {t("Dekoratif Özellikler :")}
                      </span>
                    </li>
                  </ul>
                  <li>
                    <i className="fa fa-check mr-2" aria-hidden="true"></i>
                    {t(
                      "Fonluklar genellikle estetik bir görünüm sağlamak amacıyla kullanılır. Farklı renklerde, desenlerde ve dokularda bulunabilirler. Pencere dekorasyonunu tamamlamak veya odanın genel tarzına uyum sağlamak için seçilen bir dekoratif öğe olarak fonluklar tercih edilebilir."
                    )}
                  </li>
                  <br />
                  <ul className="d-sm-flex flex-sm-row align-items-sm-center product-price-info">
                    <li className="product-price m-0">
                      <span className="sale-price">
                        {t("Malzeme Çeşitliliği :")}
                      </span>
                    </li>
                  </ul>
                  <li>
                    <i className="fa fa-check mr-2" aria-hidden="true"></i>
                    {t(
                      "Fonluklar genellikle hafif kumaşlardan yapılmıştır. Şeffaf tüller, ince perde kumaşları veya dantel gibi malzemeler sıkça kullanılır. Ayrıca, daha kalın kumaşlardan yapılmış fonluklar da özellikle gizlilik sağlamak ve ışığı kontrol etmek amacıyla tercih edilebilir."
                    )}
                  </li>
                  <br />
                  <ul className="d-sm-flex flex-sm-row align-items-sm-center product-price-info">
                    <li className="product-price m-0">
                      <span className="sale-price">
                        {t("Fonksiyonel Kullanım :")}
                      </span>
                    </li>
                  </ul>
                  <li>
                    <i className="fa fa-check mr-2" aria-hidden="true"></i>
                    {t(
                      "Fonluklar, pencereden gelen doğal ışığı filtreleyebilir ve odanın atmosferini ayarlamaya yardımcı olabilir. Aynı zamanda, dışarıdan bakıldığında iç mekanın görünürlüğünü azaltarak mahremiyeti artırabilirler."
                    )}
                  </li>
                  <br />
                  <ul className="d-sm-flex flex-sm-row align-items-sm-center product-price-info">
                    <li className="product-price m-0">
                      <span className="sale-price">
                        {t("Montaj ve Tasarım Çeşitleri :")}
                      </span>
                    </li>
                  </ul>
                  <li>
                    <i className="fa fa-check mr-2" aria-hidden="true"></i>
                    {t(
                      "Fonluklar, genellikle perde çubuğu veya perde rayı üzerine monte edilir. Montaj şekli odanın tasarımına ve pencerenin konumuna bağlı olarak değişebilir. Tek katmanlı fonlukların yanı sıra, katlanabilir veya yığılabilir tasarımları da bulunabilir."
                    )}
                  </li>
                  <br />
                  <ul className="d-sm-flex flex-sm-row align-items-sm-center product-price-info">
                    <li className="product-price m-0">
                      <span className="sale-price">
                        {t("Oda Tipine Uygunluk :")}
                      </span>
                    </li>
                  </ul>
                  <li>
                    <i className="fa fa-check mr-2" aria-hidden="true"></i>
                    {t(
                      "Fonluklar, oturma odası, yatak odası, mutfak veya banyo gibi farklı oda türlerinde kullanılabilir. Fonluklar, odanın genel dekorasyonuna uyum sağlayacak şekilde seçilebilir. Fonluklar, pencere dekorasyonunda şıklık ve fonksiyonelliği bir araya getiren özel bir perde çeşididir. İhtiyaca ve zevke bağlı olarak farklı tasarımları ve stilleri bulunmaktadır."
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

export default Fonluk;
