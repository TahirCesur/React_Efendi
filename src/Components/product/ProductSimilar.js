import React from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
/* import $ from "jquery"; */
import "owl.carousel";

function ProductSimilar() {
  return (
    <>
      <section class="product mt--120">
        <div class="container">
          <div class="section-title">
            <div class="section-title__triangle">
              <span class="fas fa-sun fa-2x" style={{color: " #f9d21c"}}></span>
            </div>
            <h2 class="section-title__title">BENZER ÜRÜNLER</h2>
          </div>
          <div
            class="nisoz-owl__dots nisoz-owl__carousel owl-with-shadow owl-theme owl-carousel"
            data-owl-options='{
        "items": 4,
        "margin": 30,
        "smartSpeed": 700,
        "loop":true,
        "autoplay": true,
        "nav":false,
        "dots":true,
        "navText": ["<span class=\"icon-left-arrow\"></span>","<span class=\"icon-right-arrow\"></span>"],
        "responsive":{
            "0":{
                "items":1,
                "margin": 0
            },
            "600":{
                "items": 2
            },
            "768":{
                "items": 3
            },
            "992":{
                "items": 4
            }
        }
        }'
          >
            <div class="item">
              <div class="product__item">
                <div class="product__item__img">
                  <img src="assets/images/blog/1-1.jpg" alt="nisoz" />
                  <div class="product__item__btn">
                    <a href="product-details.html">
                      <i class="fas fa-eye"></i>
                    </a>
                  </div>
                </div>

                <div class="product__item__content">
                  <div class="product__item__ratings">
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                  </div>
                  <h4 class="product__item__title">
                    <a href="product-details.html">SOLAR IŞIKLARI</a>
                  </h4>
                  <a href="cart.html" class="nisoz-btn">
                    <span class="nisoz-btn__shape"></span>
                    <span class="nisoz-btn__shape"></span>
                    <span class="nisoz-btn__shape"></span>
                    <span class="nisoz-btn__shape"></span>
                    <span class="nisoz-btn__text">$889.00</span>
                  </a>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="product__item">
                <div class="product__item__img">
                  <img src="assets/images/blog/1-1.jpg" alt="nisoz" />
                  <div class="product__item__btn">
                    <a href="product-details.html">
                      <i class="fas fa-eye"></i>
                    </a>
                  </div>
                </div>

                <div class="product__item__content">
                  <div class="product__item__ratings">
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                  </div>
                  <h4 class="product__item__title">
                    <a href="product-details.html">SOLAR IŞIKLARI</a>
                  </h4>
                  <a href="cart.html" class="nisoz-btn">
                    <span class="nisoz-btn__shape"></span>
                    <span class="nisoz-btn__shape"></span>
                    <span class="nisoz-btn__shape"></span>
                    <span class="nisoz-btn__shape"></span>
                    <span class="nisoz-btn__text">$889.00</span>
                  </a>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="product__item">
                <div class="product__item__img">
                  <img src="assets/images/blog/1-1.jpg" alt="nisoz" />
                  <div class="product__item__btn">
                    <a href="product-details.html">
                      <i class="fas fa-eye"></i>
                    </a>
                  </div>
                </div>

                <div class="product__item__content">
                  <div class="product__item__ratings">
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                  </div>
                  <h4 class="product__item__title">
                    <a href="product-details.html">SOLAR IŞIKLARI</a>
                  </h4>
                  <a href="cart.html" class="nisoz-btn">
                    <span class="nisoz-btn__shape"></span>
                    <span class="nisoz-btn__shape"></span>
                    <span class="nisoz-btn__shape"></span>
                    <span class="nisoz-btn__shape"></span>
                    <span class="nisoz-btn__text">$889.00</span>
                  </a>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="product__item">
                <div class="product__item__img">
                  <img src="assets/images/blog/1-1.jpg" alt="nisoz" />
                  <div class="product__item__btn">
                    <a href="product-details.html">
                      <i class="fas fa-eye"></i>
                    </a>
                  </div>
                </div>

                <div class="product__item__content">
                  <div class="product__item__ratings">
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                  </div>
                  <h4 class="product__item__title">
                    <a href="product-details.html">SOLAR IŞIKLARI</a>
                  </h4>
                  <a href="cart.html" class="nisoz-btn">
                    <span class="nisoz-btn__shape"></span>
                    <span class="nisoz-btn__shape"></span>
                    <span class="nisoz-btn__shape"></span>
                    <span class="nisoz-btn__shape"></span>
                    <span class="nisoz-btn__text">$889.00</span>
                  </a>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="product__item">
                <div class="product__item__img">
                  <img src="assets/images/blog/1-1.jpg" alt="nisoz" />
                  <div class="product__item__btn">
                    <a href="product-details.html">
                      <i class="fas fa-eye"></i>
                    </a>
                  </div>
                </div>

                <div class="product__item__content">
                  <div class="product__item__ratings">
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                  </div>
                  <h4 class="product__item__title">
                    <a href="product-details.html">SOLAR IŞIKLARI</a>
                  </h4>
                  <a href="cart.html" class="nisoz-btn">
                    <span class="nisoz-btn__shape"></span>
                    <span class="nisoz-btn__shape"></span>
                    <span class="nisoz-btn__shape"></span>
                    <span class="nisoz-btn__shape"></span>
                    <span class="nisoz-btn__text">$889.00</span>
                  </a>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="product__item">
                <div class="product__item__img">
                  <img src="assets/images/blog/1-1.jpg" alt="nisoz" />
                  <div class="product__item__btn">
                    <a href="product-details.html">
                      <i class="fas fa-eye"></i>
                    </a>
                  </div>
                </div>

                <div class="product__item__content">
                  <div class="product__item__ratings">
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                  </div>
                  <h4 class="product__item__title">
                    <a href="product-details.html">SOLAR IŞIKLARI</a>
                  </h4>
                  <a href="cart.html" class="nisoz-btn">
                    <span class="nisoz-btn__shape"></span>
                    <span class="nisoz-btn__shape"></span>
                    <span class="nisoz-btn__shape"></span>
                    <span class="nisoz-btn__shape"></span>
                    <span class="nisoz-btn__text">$889.00</span>
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

export default ProductSimilar;
