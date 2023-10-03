import React from "react";

function ProductDetails() {
  return (
    <>
      <section class="page-header">
        <div class="page-header__bg"></div>
        <div class="page-header__shape1"></div>
        <div class="page-header__shape2"></div>
        <div
          class="page-header__shape3 wow slideInRight"
          data-wow-delay="300ms"
        ></div>
        <div class="container">
          <ul class="page-header__breadcrumb list-unstyled">
            <li>
              <a href="index.html">Anasayfa</a>
            </li>
            <li>
              <span>ÜRÜNLERİMİZ</span>
            </li>
          </ul>
          <h2 class="page-header__title">ÜRÜNLERİMİZ</h2>
        </div>
      </section>
      <section class="product">
        <div class="container">
          <div class="row">
            <div
              class="col-lg-6 col-xl-6 wow fadeInLeft"
              data-wow-delay="200ms"
            >
              <div class="product-details__img">
                <img src="assets/images/blog/1-1.jpg" alt="" />
                <div class="product-details__img-search">
                  <a class="img-popup" href="assets/images/blog/1-1.jpg">
                    <span class="icon-magnifying-glass"></span>
                  </a>
                </div>
              </div>
            </div>
            <div
              class="col-lg-6 col-xl-6 wow fadeInRight"
              data-wow-delay="300ms"
            >
              <div class="product-details__content">
                <div class="product-details__top">
                  <h3 class="product-details__title">TİCARİ solar</h3>
                  <div class="product-details__price">$889.00</div>
                </div>
                <div class="product-details__review">
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                </div>
                <div class="product-details__divider"></div>
                <div class="product-details__excerpt">
                  <p class="product-details__excerpt-text1">
                    Ticari Solar Projektör, ticari serideki en son ürünümüzdür.
                    Bu çok yönlü ışık, birçok uygulama için bir çözüm sağlayan 6
                    benzersiz şekilde monte edilebilir.
                    <br />
                    Bu ürün güçlü bir 3000 lümen üretir. Ticari sınıf malzemeler
                    ve korozyon önleyici teknoloji ile bu ışık, ticari tesisler
                    için nihai çözümdür. <br />
                    BKB güneş lambaları, Uyarlanabilir Aydınlatma , Değişken
                    Frekans ve Sıcaklık Kontrolü patentli teknolojilerini bir
                    araya getirdikleri için pil ömrünü ve pil şarj ömrünü en üst
                    düzeye çıkarır . <br />
                    <ul class="list-unstyled product-details__description__lists">
                      <li>
                        <span class="icon-right-arrow"></span>Kurulumu kolay
                      </li>
                      <li>
                        <span class="icon-right-arrow"></span>7+ gece sürekli
                        aydınlatma
                      </li>
                      <li>
                        <span class="icon-right-arrow"></span>PIR Hareket
                        Sensörü
                      </li>
                      <li>
                        <span class="icon-right-arrow"></span>Güvenilir parlak
                        geniş kapsama alanı
                      </li>
                      <li>
                        <span class="icon-right-arrow"></span> Ticari sınıf 5
                        yıl garanti
                      </li>{" "}
                      <br />
                      <li>
                        <span class="icon-right-arrow"></span>{" "}
                        <span class="fa fa-star"></span> Lütfen Dikkat : Direk
                        montaj braketi, sipariş üzerine mevcuttur.
                        <br />
                      </li>
                    </ul>
                  </p>
                </div>

                <div class="product-details__socials">
                  <h4 class="product-details__socials__title">
                    ARKADAŞLARINLA PAYLAŞ
                  </h4>
                  <a href="https://twitter.com/X">
                    <span class="fab fa-twitter"></span>
                  </a>
                  <a href="https://www.facebook.com/">
                    <span class="fab fa-facebook"></span>
                  </a>
                  <a href="https://www.pinterest.com/">
                    <span class="fab fa-pinterest-p"></span>
                  </a>
                  <a href="https://www.instagram.com/">
                    <span class="fab fa-instagram"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            class="product-details__description wow fadeInUp"
            data-wow-delay="300ms"
          >
            <h3 class="product-details__description__title">
              TİCARİ SOLAR GÜNEŞ IŞIK ÖZELLİKLERİ
            </h3>
            <p class="product-details__description__text">
              Lorem ipsum dolor sit amet, cibo mundi ea duo, vim exerci
              phaedrum.
            </p>
            <ul class="list-unstyled product-details__description__lists">
              <li>
                <span class="icon-right-arrow"></span>Uzun ömürlü performans
                için yüksek verimli monokristal güneş paneli
              </li>
              <li>
                <span class="icon-right-arrow"></span>Çeşitli kurulum yöntemleri
              </li>
              <li>
                <span class="icon-right-arrow"></span>PIR Hareket Sensörü
              </li>
            </ul>
            <h5 class="product-details__description__title">
              AYDINLATMA MODLARI
            </h5>
            <p class="product-details__description__text">
              5 saat boyunca %100 parlaklık ve ardından şafağa kadar PIR ile
              %20.
            </p>
            <h5 class="product-details__description__title">UYGULAMALAR</h5>
            <ul class="list-unstyled product-details__description__lists">
              <li>
                <span class="icon-right-arrow"></span>Ticari ve konut mülkleri
              </li>
              <li>
                <span class="icon-right-arrow"></span>Giriş çıkış
              </li>
              <li>
                <span class="icon-right-arrow"></span>Patika
              </li>
              <li>
                <span class="icon-right-arrow"></span>Otopark
              </li>
              <li>
                <span class="icon-right-arrow"></span> Özel yollar
              </li>
              <li>
                <span class="icon-right-arrow"></span> Konaklama
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductDetails;
