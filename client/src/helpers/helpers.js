import axios from 'axios';

const baseURL = 'http://localhost:3000/api/v1';

const handleError = fn => (...params) =>
  fn(...params).catch(error => {
    console.log(`${error.response.status}: ${error.response.statusText}`);
  });

export const api = {
  getProject: handleError(async () => {
    const res = await axios.get(baseURL+'/project/');
    return res.data;
  }),
  getEmployee: handleError(async () => {
    const res = await axios.get(baseURL+'/employee/');
    return res.data;
  }),
  createProject: handleError(async payload => {
    const res = await axios.post(baseURL+'/project/', payload);
    return res.data;
  }),
  getProjectById: handleError(async id => {
    const res = await axios.get(baseURL+'/project/' + id);
    return res.data;
  }),
  updateProject: handleError(async payload => {
    const res = await axios.put(baseURL+'/project/', payload);
    return res.data;
  }),
  createEmployee: handleError(async payload => {
    const res = await axios.post(baseURL+'/employee/', payload);
    return res.data;
  }),
};