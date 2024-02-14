import React from "react";
import Contact from "../../Components/contact/Contact";
import PageHeader from "../../Components/common/PageHeader";
import { t } from "i18next";

function ContactPage() {
  return (
    <>
      <PageHeader title={t("İletişim")} />
      <Contact />
    </>
  );
}

export default ContactPage;
