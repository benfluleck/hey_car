import axios from 'axios';
import { POLL_API } from '<constants>/api';

const createQuestion = (data) => axios.post(`${POLL_API}/questions`, data);

export default createQuestion;
