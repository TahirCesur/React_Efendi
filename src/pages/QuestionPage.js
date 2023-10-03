import React from "react";
import Spacer2 from "../Components/common/Spacer2";
import Question from "../Components/question/Question";
import PageHeader from "../Components/common/PageHeader";

function QuestionPage() {
  return (
    <>
      <PageHeader title="Sıkça Sorulan Sorular"/>
      <Spacer2 />
      <Question />
    </>
  );
}

export default QuestionPage;
