import axios from 'axios';

const getAllQuestions = () => axios.get('https://polls.apiblueprint.org/questions');

export default getAllQuestions;
