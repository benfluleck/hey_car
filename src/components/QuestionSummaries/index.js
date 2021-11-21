// import TextComponent from "<component>/Text";
import styled, { css } from "styled-components";
import QuestionSummary from "<components>/QuestionSummary";

const SummaryGrid = styled.div(
  ()=>css`
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(6, 1fr);
  
  `)

const QuestionSummaries = ({ questions }) => (
  <SummaryGrid>
    {
      questions.map((question) => (
        <QuestionSummary
          content={question.content} 
          publishedAt={question.publishedAt}
          numberOfChoices={question.numberOfChoices} 
        />
      ))
    }
    
  </SummaryGrid>

)


export default QuestionSummaries;
