import axios from "axios";
// import person from './Persons'
const baseurl = "http://localhost:3000/persons";

const getall = () => {
  const request = axios.get(baseurl);
  return request.then((response) => response.data);
};

const create = (newOject) => {
  const request = axios.post(baseurl);
  return request.then((response) => response.data);
};

const update = (id, newObject) => {
  const request = axios.put(`${baseurl}/${id}`, newObject);
  return request.then((response) => response.data);
};
export default {
  getall,
  create,
  update,
};
