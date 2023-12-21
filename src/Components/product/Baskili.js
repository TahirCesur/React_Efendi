/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SRLWrapper } from "simple-react-lightbox";
import Spacer2 from "../common/Spacer2";
import { t } from "i18next";

const Baskili = () => {
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
                      src="assets/images/products/baski-4.jpg"
                      alt="Fonluk"
                      title="Fonluk"
                    />
                  </div>
                  <div>
                    <img
                      className="img-fluid blur-up lazyload"
                      src="assets/images/products/baski-4.jpg"
                      alt="Fonluk"
                      title="Fonluk"
                    />
                  </div>
                  <div>
                    <img
                      className="img-fluid blur-up lazyload"
                      src="assets/images/products/baski-4.jpg"
                      alt="Fonluk"
                      title="Fonluk"
                    />
                  </div>
                  <div>
                    <img
                      className="img-fluid blur-up lazyload"
                      src="assets/images/products/baski-4.jpg"
                      alt="Fonluk"
                      title="Fonluk"
                    />
                  </div>
                </Slider>
              </div>

              <div className="col-12 col-sm-12 col-md-6 col-lg-7 product-info-details">
                <div className="profuct-info">
                  <h1 className="product-title">Baskılı Ürünler</h1>
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
                        {t("Malzeme Seçenekleri :")}
                      </span>
                    </li>
                  </ul>
                  <li>
                    <i className="fa fa-check mr-2" aria-hidden="true"></i>
                    {t(
                      "Baskılı perdeler, genellikle polyester, keten, pamuk veya diğer perde malzemelerinden yapılır. Bu malzemeler, baskı tekniklerine uygun, dayanıklı ve kolay bakım sağlayacak şekilde seçilir."
                    )}
                  </li>
                  <br />
                  <ul className="d-sm-flex flex-sm-row align-items-sm-center product-price-info">
                    <li className="product-price m-0">
                      <span className="sale-price">
                        {t("Baskı Teknikleri :")}
                      </span>
                    </li>
                  </ul>
                  <li>
                    <i className="fa fa-check mr-2" aria-hidden="true"></i>
                    {t(
                      "Dijital baskı: Bilgisayar tabanlı dijital baskı teknikleri, karmaşık desenleri ve renkleri yüksek çözünürlükte doğrudan perde kumaşına aktarmak için kullanılır."
                    )}
                    <br />
                    <i className="fa fa-check mr-2" aria-hidden="true"></i>
                    {t(
                      "Serigrafi baskı: Bu teknikte, bir şablona dayalı olarak mürekkep perde kumaşına uygulanır."
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
                      "Baskılı perdelerde geniş bir desen yelpazesi bulunabilir. Doğa manzaraları, soyut desenler, geometrik şekiller, çiçek desenleri veya özel tasarımlar arasından seçim yapabilirsiniz. Baskılı perdeler, odanın tarzını ve dekorasyonunu tamamlamak için özel tasarımlar içerebilir."
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
                      "Kumaş türüne bağlı olarak, baskılı perdeler ışığı filtreleyebilir veya bloke edebilir. Şeffaf veya yarı şeffaf kumaşlar, odada hafif bir atmosfer sağlarken, opak kumaşlar daha fazla gizlilik sunabilir."
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
                      "Baskılı perdeler, oturma odası, yatak odası, mutfak, çocuk odası veya ofis gibi birçok farklı mekanda kullanılabilir. Özellikle odanın temasına ve dekorasyonuna uygun desenler seçilebilir."
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
                      "Baskılı perdeler, perde çubuğu veya perde rayı üzerine monte edilebilir. Montaj seçenekleri, perdelerin tasarımına ve kullanılacağı mekanın gereksinimlerine bağlı olarak değişebilir. Bakımı genellikle kolaydır; çoğu baskılı perde, çamaşır makinesinde yıkanabilir veya elle yıkanabilir. Baskılı perdeler, ev dekorasyonunda görsel bir vurgu oluşturmak isteyenler için mükemmel bir seçenektir. Kendi tasarımınızı seçerek veya hazır tasarımları kullanarak odanıza özgünlük katabilirsiniz."
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

export default Baskili;
