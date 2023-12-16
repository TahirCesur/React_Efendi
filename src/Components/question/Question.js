import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { useTranslation } from "react-i18next";

function Question() {
  const { t } = useTranslation();
  return (
    <section className="accrodion-one">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 wow fadeInLeft" data-wow-delay="200ms">
            <div className="section-title">
              <div className="section-title__triangle">
                <img src="assets/images/favicons/icon.ico" alt="icon" aria-label="icon" />
              </div>
              <h5 className="section-title__tagline">
                {t("YENİDÜNYA ENDÜSTRİYEL TEDARİK")}
              </h5>
              <h2 className="section-title__title">{t("SIKÇA SORULAN SORULAR")}</h2>
            </div>
            <div className="row">
              <div className="col-md-5">
                <div
                  className="accrodion-one__thumb nisoz-tilt"
                  data-tilt-options='{ "glare": false, "maxGlare": 0, "maxTilt": 15, "speed": 700, "scale": 1 }'
                >
                  <img src="assets/images/soru1.webp" alt="soru" aria-label="soru" width={"100%"} height={"auto"}/>
                </div>
              </div>
              <div className="col-md-7">
                <div className="accrodion-one__right">
                  <div className="accrodion-one__experiance">
                    <div className="accrodion-one__count">
                      <span className="count-box">
                        <span
                          className="count-text"
                          data-stop="30"
                          data-speed="1500"
                        ></span>
                      </span>
                      +5
                    </div>

                    <h3 className="accrodion-one__experiance__title">
                      {t("YILDAN FAZLA")}
                      <br />
                      {t("DENEYİM")}
                    </h3>
                  </div>

                  <p className="accrodion-one__right__text">
                    {t("Aradığınız soruyu bulamadınız mı?")} <br />
                    {t("Bize İletişim sayfasından ve WhatsApp üzerinden ulaşabilirsiniz.")}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 wow fadeInRight" data-wow-delay="300ms">
            <div
              className="accrodion-one__wrapper nisoz-accrodion"
              data-grp-name="nisoz-accrodion"
            >
              <Accordion
                defaultActiveKey="0"
                className="accrodion-one__wrapper nisoz-accrodion"
              >
                <Accordion.Item eventKey="0" className="accrodion active">
                  <Accordion.Header className="accrodion-title">
                    {t("KONSANTRE TEMİZLİK ÜRÜNÜ NEDİR?")}
                  </Accordion.Header>
                  <Accordion.Body className="accrodion-content">
                    <div className="inner">
                      <p>
                        {t("Konsantre temizlik ürünleri su ile çoğaltılabilen ürünlerdir. Aktif temizlik bileşenleri bakımından yoğun bir formüle sahip olan konsantre temizlik ürünlerinin en önemli özelliği direkt kullanımlı ürünlere kıyasla daha az tüketim daha yüksek temizlik performansını sağlamasıdır. Taşıması ve depolaması çok daha kolay, daha az atık oluşturduğu için çevreci ürünlerdir.")}
                      </p>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1" className="accrodion active">
                  <Accordion.Header className="accrodion-title">
                    {t("KONSANTRE TEMİZLİK ÜRÜNÜ DİREKT KULLANILIR MI?")}
                  </Accordion.Header>
                  <Accordion.Body className="accrodion-content">
                    <div className="inner">
                      <p>
                      {t("Konsantre temizlik ürünü, direkt temizlenmesi istenen yüzeylere uygulanmaz su ile seyreltilmesi gerekmektedir. Su ile seyreltilmemiş konsantre ürünler iyi performans gösteremedikleri gibi direkt kullanımlarda cilde teması halinde tahrişe neden olabilirler. Kir yoğunluğuna göre etikette belirtilen seyreltme aralıklarında seyreltilmeleri ürünün düzgün çalışmasını sağlayacaktır. Konsantre ürünler deterjan yapısını oluşturan hidrofilik (suyu seven) ve hidrofob (suyu iten) iyonik kısımlarını canlandırmamış ürünlerdir ve su ile çalışır hale gelirler. Aksi halde istenen performansı sağlayamazlar. Sizde kullandığınız konsantre ürünlerimizi ambalajının arkasında bulunan kullanım şekline göre seyrelterek kullanınız.")}
                      </p>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2" className="accrodion active">
                  <Accordion.Header className="accrodion-title">
                    {t("KONSANTRE TEMİZLİK ÜRÜNÜ İLE EN ETKİLİ SONUÇ NASIL ALIRIM ?")}
                  </Accordion.Header>
                  <Accordion.Body className="accrodion-content">
                    <div className="inner">
                    <p>
                      {t("Kullanmakta olduğunuz ürünün seyreltme oranlarını ambalaj üzerinde görebilirsiniz. Kirin yoğunluğuna göre de belirtilen oran aralığında seyreltme yapabilirsiniz. Bu hem ekonomik hem de en etkili temizlik sağlar. Kullandığımız seyreltme suyunun daha yumuşak ve kireçsiz olması temizleme gücünü arttıracaktır. Su kalitesi temizleme gücünü arttıran en temel unsurlardan biridir.")}
                      </p>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3" className="accrodion active">
                  <Accordion.Header className="accrodion-title">
                    {t("KONSANTRE TEMİZLİK ÜRÜNÜ DAHA TEHLİKELİ MİDİR?")}
                  </Accordion.Header>
                  <Accordion.Body className="accrodion-content">
                    <div className="inner">
                      <p>
                      {t("Konsantre temizlik ürünleri yapılarında su ile seyreltildikten sonra daha iyi performans gösterdikleri için miktarca zenginleştirilmiş asidik, bazik, aktif hammaddelerle zenginleştirilmiş üründür. Bu derişik pozisyonun cildinize veya malzemelerinize tahriş ediciliği görülebilir. Fakat belirtilen oranlarda su ile seyreltilen ürünlerin tahrişliği azalmakla beraber ürün özelliğine göre doğru uygulandıkları alanlarda yüksek teknolojisiyle temizlik sağlar.")}
                      </p>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Question;
