import axios from 'axios';
import { POLL_API } from '<constants>/api';

export const getQuestion = (questionId) => axios.get(`${POLL_API}/questions/${questionId}`);

export const postChoice = (url) => axios.post(`${POLL_API}${url}`);
