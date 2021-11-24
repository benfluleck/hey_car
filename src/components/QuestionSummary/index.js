import { Link } from '@reach/router';
import PropTypes from 'prop-types';

import TextComponent from '<components>/Text';
import styled, { css } from 'styled-components';

const SummaryWrapper = styled(Link)(
  ({ theme: { fontWeight, colors, space } }) => css`
    display: flex;
    flex-flow: column nowrap;
    text-decoration: none;
    color: inherit;
    cursor: pointer;
    padding: ${space.base};
    border: solid 1px transparent;

    :hover {
      border: solid 1px ${colors.lightGrey};
    }

    > span:first-of-type {
      font-weight: ${fontWeight.semiBold};
    }

    > span {
      padding: 0;
      font-weight: ${fontWeight.light};
    }
  `
);

const QuestionSummary = ({ content, url, publishedAt, numberOfChoices }) => (
  <SummaryWrapper data-testid="question-summary" to={url}>
    <TextComponent fontSize="base">{content}</TextComponent>
    <TextComponent fontSize="xsBase">{publishedAt}</TextComponent>
    <TextComponent fontSize="xsBase">Choices: {numberOfChoices}</TextComponent>
  </SummaryWrapper>
);

QuestionSummary.defaultProps = {
  numberOfChoices: undefined,
  url: undefined
};

QuestionSummary.propTypes = {
  url: PropTypes.string,
  content: PropTypes.string.isRequired,
  publishedAt: PropTypes.string.isRequired,
  numberOfChoices: PropTypes.number
};

export default QuestionSummary;
