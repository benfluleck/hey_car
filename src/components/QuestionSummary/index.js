import TextComponent from "<components>/Text";
import styled, { css } from "styled-components";

const SummaryWrapper = styled.div(
  ({ theme : {
    fontWeight,
    colors,
    space,
  } })=>css`
    display: flex;
    flex-flow: column nowrap;
    cursor: pointer;
    padding: ${space.base};
    border: solid 1px transparent;

    :hover {
      border: solid 1px ${colors.lightGrey};
    } 
    > span {
      padding: 0;
      font-weight: ${fontWeight.light};

    }

  `)

const QuestionSummary = ({ content, publishedAt, numberOfChoices }) => (
  <SummaryWrapper>
    <TextComponent fontSize="basePlus">{content}</TextComponent>
    <TextComponent fontSize="base">{publishedAt}</TextComponent>
    <TextComponent fontSize="base">Choices: {numberOfChoices}</TextComponent>
  </SummaryWrapper>

)


export default QuestionSummary;
