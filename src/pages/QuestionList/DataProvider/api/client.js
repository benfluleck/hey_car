import axios from 'axios';
import { POLL_API } from '<constants>/api';

const getAllQuestions = () => axios.get(`${POLL_API}/questions`);

export default getAllQuestions;
