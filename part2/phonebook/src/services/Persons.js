import Axios from "axios";

const axios = Axios.create({
  baseURL: "http://localhost:3001/persons",
});

const getall = () => axios.get("/");

const create = (personData) => axios.post("/", personData);

const update = (id, update) => axios.patch(`/${id}`, update);
const Delete = (id) => axios.delete(`/${id}`);
export default {
  getall,
  create,
  update,
  Delete,
};
