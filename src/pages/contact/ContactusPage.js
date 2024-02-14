import React from "react";
import Contactus from "../../Components/contact/Contactus";
import PageHeader from "../../Components/common/PageHeader";
import { useTranslation } from "react-i18next";

function ContactusPage() {
  const { t } = useTranslation();
  return (
    <>
      <PageHeader title={t("İLETİŞİM")} />
      <Contactus />
    </>
  );
}

export default ContactusPage;
