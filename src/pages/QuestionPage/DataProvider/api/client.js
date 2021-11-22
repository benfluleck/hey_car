import axios from 'axios';

const getQuestion = (questionId) =>
  axios.get(`https://polls.apiblueprint.org/questions/${questionId}`);

export default getQuestion;
