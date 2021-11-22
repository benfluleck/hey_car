import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import QuestionSummary from '<components>/QuestionSummary';
import { convertDateFormat } from '<helpers>/dateHelpers';

const SummaryGrid = styled.div(
  () => css`
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  `
);

const QuestionSummaries = ({ items }) => (
  <SummaryGrid>
    {items.map((item) => (
      <QuestionSummary
        key={item.published_at}
        content={item.question}
        url={item.url}
        publishedAt={convertDateFormat(item.published_at)}
        numberOfChoices={item.choices.length}
      />
    ))}
  </SummaryGrid>
);

QuestionSummaries.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};

export default QuestionSummaries;
