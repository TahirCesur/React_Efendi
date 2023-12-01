import React from "react";
import Spacer2 from "../Components/common/Spacer2";
import Question from "../Components/question/Question";
import PageHeader from "../Components/common/PageHeader";
import { useTranslation } from "react-i18next";

function QuestionPage() {
  const { t } = useTranslation();
  return (
    <>
      <PageHeader title={t("SIKÇA SORULAN SORULAR")}/>
      <Spacer2 />
      <Question />
    </>
  );
}

export default QuestionPage;
