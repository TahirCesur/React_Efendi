import React from "react";
import Contact from "../Components/contact/Contact";
import PageHeader from "../Components/common/PageHeader";

function ContactPage() {
  return (
    <>
      <PageHeader title={"İletişim"} />
      <Contact />
    </>
  );
}

export default ContactPage;
