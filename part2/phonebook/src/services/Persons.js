import Axios from "axios";

const baseURL = "http://localhost:3001/persons";

const getall = () => Axios.get(baseURL).then((res) => res.data);

const create = (newObject) =>
  Axios.post(baseURL, newObject).then((res) => res.data);

const Replace = (id, newObject) =>
  Axios.put(`${baseURL}/${id}`, newObject).then((res) => res.data);

const Delete = (id) => Axios.delete(`${baseURL}/${id}`).then((res) => res.data);

export default {
  getall,
  create,
  Replace,
  Delete,
};

////..............sec approach..................//
// import Axios from "axios";

// const axios = Axios.create({
//   baseURL: "http://localhost:3001/persons",
// });

// const getall = () => axios.get("/");

// const create = (personData) => axios.post("/", personData);

// const update = (id, update) => axios.patch(`/${id}`, update);
// const replace = (id, update) => axios.put(`/${id}`, update);
// const Delete = (id) => axios.delete(`/${id}`);
// export default {
//   getall,
//   create,
//   update,
//   Delete,
//   replace,
// };
