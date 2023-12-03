import React from "react";

function ProductDetails() {
  return (
    <>
      <section className="page-header">
        <div
          className="cta-two__bg"
          style={{
            backgroundImage: "url(assets/images/shapes/footer-bg-1.webp)",
          }}
        ></div>
        <div className="page-header__shape1"></div>
        <div className="page-header__shape2"></div>
        <div
          className="page-header__shape3 wow slideInRight"
          data-wow-delay="300ms"
        ></div>
        <div className="container">
          <ul className="page-header__breadcrumb list-unstyled">
            <li>
              <a href="index.html">Anasayfa</a>
            </li>
            <li>
              <span>ÜRÜNLERİMİZ</span>
            </li>
          </ul>
          <h2 className="page-header__title">ÜRÜNLERİMİZ</h2>
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
                <img src="assets/images/blog/1-1.webp" alt="" />
                <div className="product-details__img-search">
                  <a className="img-popup" href="assets/images/blog/1-1.webp">
                    <span className="icon-magnifying-glass"></span>
                  </a>
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
                    El Temİzleme Losyonu
                  </h3>
                  <div className="product-details__price">$5</div>
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
                        <span className="icon-right-arrow"></span>Temizlik ve
                        Hijyen:
                      </li>
                      El temizleme losyonları, elleri temizlemek ve hijyen
                      sağlamak için kullanılır. Özellikle ellerin mikroplardan
                      arındırılması gereken durumlarda tercih edilir.
                      <li>
                        <span className="icon-right-arrow"></span>Cilt Koruma:
                      </li>
                      Birçok el temizleme losyonu, aynı zamanda cildin nemini
                      korumaya yardımcı olan özel bileşenler içerebilir. Bu, sık
                      sık el temizlemeye bağlı cilt kuruluğunu önlemeye yardımcı
                      olabilir.
                      <li>
                        <span className="icon-right-arrow"></span>Alkol Bazlı ve
                        Alkol İçermeyen Seçenekler:
                      </li>
                      El temizleme losyonları genellikle alkol bazlı veya alkol
                      içermeyen versiyonlarda bulunur. Alkol bazlı ürünler,
                      mikropları etkili bir şekilde öldürme yeteneğine sahiptir,
                      ancak alkol içermeyen ürünler daha hassas ciltlere daha
                      uygun olabilir.
                      <li>
                        <span className="icon-right-arrow"></span>Kullanım
                        Alanları:
                      </li>
                      El temizleme losyonları, hastaneler, restoranlar, ofisler,
                      evler ve genel halka açık yerlerde yaygın olarak
                      kullanılır. Mikropların yayılmasını önlemeye yardımcı
                      olurlar.
                      <li>
                        <span className="icon-right-arrow"></span> Etkili
                        Temizlik İçin Nasıl Kullanılır:
                      </li>
                      El temizleme losyonlarını kullanırken, bir miktar losyonu
                      avuç içine alarak ellerinizi iyice ovup kuruyana kadar
                      ovarak uygularsınız. Bu, mikropları ve kirleri etkili bir
                      şekilde temizler. El temizleme losyonları, günlük hayatta
                      ve özellikle sağlık sektöründe önemli bir rol oynar. El
                      hijyeni konusunda dikkatli olmak, hastalıkların
                      yayılmasını önlemek için kritik bir adımdır.
                      <br />
                      <li>
                        <span className="fa fa-star"></span> Lütfen Dikkat :
                        Kullanım Talimatını Okuyunuz!..
                        <br />
                      </li>
                    </ul>
                  </p>
                </div>

                <div className="product-details__socials">
                  <h4 className="product-details__socials__title">
                    ARKADAŞLARINLA PAYLAŞ
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
    </>
  );
}

export default ProductDetails;
