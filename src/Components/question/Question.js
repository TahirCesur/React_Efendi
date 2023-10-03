import React from "react";
import Accordion from "react-bootstrap/Accordion";

function Question() {
  return (
    <section className="accrodion-one">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 wow fadeInLeft" data-wow-delay="200ms">
            <div className="section-title">
              <div className="section-title__triangle">
                <span
                  className="fas fa-sun fa-2x"
                  style={{ color: "#f9d21c" }}
                ></span>
              </div>
              <h5 className="section-title__tagline">BKB GÜNEŞ SİSTEMLERİ</h5>
              <h2 className="section-title__title">SIKÇA SORULAN SORULAR</h2>
            </div>
            <div className="row">
              <div className="col-md-5">
                <div
                  className="accrodion-one__thumb nisoz-tilt"
                  data-tilt-options='{ "glare": false, "maxGlare": 0, "maxTilt": 15, "speed": 700, "scale": 1 }'
                >
                  <img src="assets/images/soru1.png" alt="nisoz" />
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
                      +30
                    </div>

                    <h3 className="accrodion-one__experiance__title">
                      YILDAN FAZLA
                      <br />
                      DENEYİM
                    </h3>
                  </div>

                  <p className="accrodion-one__right__text">
                    Aradığınız soruyu bulamadınız mı? <br />
                    Bize İletişim sayfasından ve WhatsApp üzerinden ulaşabilirsiniz.
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
                    ÜRÜNÜN KULLANIM ALANI NERELERDİR?
                  </Accordion.Header>
                  <Accordion.Body className="accrodion-content">
                    <div className="inner">
                      <p>
                        Güneş panelli aydınlatma ürünlerimiz genel olarak sokak,
                        yol, yürüyüş yolu, çocuk parkı, açık otopark gibi hemen
                        her alanda kullanılabilmektedir. <br />
                        Solar aydınlatma ürünlerimiz hakkında detaylı bilgi
                        almak için iletişim kısmında bulunan bilgilerden bizlere
                        ulaşabilirsiniz.
                      </p>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1" className="accrodion active">
                  <Accordion.Header className="accrodion-title">
                    ÜRÜN NORMAL BİR SOKAK LAMBASI GİBİ AYDINLATIR MI?
                  </Accordion.Header>
                  <Accordion.Body className="accrodion-content">
                    <div className="inner">
                      <p>
                        Güneş enerjili ürünlerimizde kullanılan LED’ler yüksek
                        ışık akısına ve yüksek verimliliğe sahiptir. Ayrıca
                        ürünlerimizde kullanılan lensler, ışığı sadece ihtiyaç
                        duyulan bölgeye yoğunlaştırarak verimli bir aydınlatma
                        sağlamakta ve ışık kirliliğini engellemektedir. Bu
                        sayede oldukça güçlü aydınlatma sağlayabilmektedir.
                      </p>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2" className="accrodion active">
                  <Accordion.Header className="accrodion-title">
                    ÜRÜN ELEKTRONİK PARÇA İÇERİYOR. DIŞ MEKANDA KOLAY BOZULUR
                    MU?
                  </Accordion.Header>
                  <Accordion.Body className="accrodion-content">
                    <div className="inner">
                      <p>
                        Ürünlerimizde kullanılan tüm parçalar 1. sınıf
                        kalitededir. Ayrıca IP66 koruma sınıfına sahip
                        armatürümüz sayesinde toz ve sudan izole edilmiştir.
                        Üzerinde bulunan soğutma kanalları ile de ürünün ısıya
                        bağlı ömür kayıpları en aza indirgenmiştir. Ayrıca güneş
                        enerjili aydınlatma ürünlerimiz 2 sene garantiye sahip
                        olduğu gibi performansından ödün vermeden yıllarca
                        çalışabilecek şekilde tasarlanmıştır.
                      </p>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3" className="accrodion active">
                  <Accordion.Header className="accrodion-title">
                    GÜNEŞ OLMAZSA NE OLUR? KARANLIKTA MI KALIRIM?
                  </Accordion.Header>
                  <Accordion.Body className="accrodion-content">
                    <div className="inner">
                      <p>
                        Adından da anlaşılabileceği gibi güneş enerjili
                        aydınlatma ürünleri, güneş sever ürünlerdir. Güneş
                        panelinden aldığı güneş ışınımı ile doğru orantılı
                        olarak performans göstermektedirler. Bu nedenle panel
                        açısı ve ürünün kullanıldığı konum önemli bir rol
                        oynamaktadır. Ancak bu, güneş olmadığında karanlıkta
                        kalacağınız anlamıma gelmez. Çünkü ürünümüz, 6 saat
                        güneş ışınımı alması halinde 3 geceye kadar sensörlü
                        modda aydınlatma sağlayabilmektedir. Ayrıca zorlu
                        koşullarda kullanım için panel ve/veya batarya grubu
                        opsiyonel olarak değiştirilebilmektedir.
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
