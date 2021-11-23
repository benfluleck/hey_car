import TextBox from '<components>/TextBox';
import { useState } from 'react';
import styled, { css } from 'styled-components';
import SelectBox from '<components>/Select';
import TextComponent from '<components>/Text';
import Button from '<components>/Button';
import createQuestion from '<pages>/CreateQuestion/DataProvider/api/client';
import { navigate } from '@reach/router';

const CreateQuestionWrapper = styled.form(
  ({ theme: { space } }) => css`
    padding: ${space.base};

    > span {
      margin: 0;
      padding: 0;
    }

    > div {
      margin-top: ${space.base};
    }

    > div > input[type="text"] {
        width: 75%;
    }

    > button {
      margin-top: ${space.md};
    }
  }
`
);

const SubmitWrapper = styled.div`
  display: flex;
  flex-flow: column;
  > button {
    width: 25%;
  }
`;

const ChoicesWrapper = styled.div(
  ({ theme: { space } }) => css`
    display: flex;
    flex-flow: column wrap;
    justify-content: space-between;
    > input[type='text'] {
      width: 50%;
      margin-bottom: ${space.base};
    }
  `
);

const generateTextBoxes = (number, handleInputChange) => {
  const inputs = [];

  for (let i = 0; i < number; i++) {
    inputs.push(
      <input
        key={`text${i}`}
        type="text"
        id={`text${i}`}
        name={`text${i}`}
        onChange={handleInputChange}
      />
    );
  }

  return inputs;
};

const CreateQuestion = () => {
  const [numberOfTextBoxes, setNumberTextBoxes] = useState(0);

  const [question, setQuestion] = useState('');
  const [choices, setChoices] = useState([]);
  const [error, setError] = useState('');

  const handleChange = ({ target: { value } }) => {
    setError('');
    setNumberTextBoxes(value);
  };

  const handleClick = async (e) => {
    e.preventDefault();

    if (!Object.keys(choices).length) {
      setError('Please fill in at least one choice');
    }

    if (!question) {
      setError('Please fill in a Question');
    }

    if (Object.keys(choices).length && question) {
      const response = await createQuestion({ question, choices: Object.values(choices) });

      if (response.data) {
        navigate('/');
      }
    }
  };

  const handleTextBoxChange = ({ target: { value } }) => {
    setError('');
    setQuestion(value);
  };

  const handleInputChange = ({ target: { name, value } }) => {
    setError('');
    setChoices((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <CreateQuestionWrapper>
      <TextComponent fontSize="md">Create Question</TextComponent>
      <TextBox text="Enter A New Question here ?" id="question" onChange={handleTextBoxChange} />
      <SelectBox handleChange={handleChange} />
      <TextComponent>Please type in your answers</TextComponent>
      <ChoicesWrapper>{generateTextBoxes(numberOfTextBoxes, handleInputChange)}</ChoicesWrapper>

      <SubmitWrapper>
        <TextComponent fontSize="basePlus" color="red">
          {error}
        </TextComponent>
        <Button onClick={handleClick}>Save Question</Button>
      </SubmitWrapper>
    </CreateQuestionWrapper>
  );
};

export default CreateQuestion;
