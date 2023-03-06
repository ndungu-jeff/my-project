import axios from "axios";

// TODO: Replace baseurl string with environment variables on deployment
// const backendAxios = axios.create({
//     baseURL: process.env.VITE_APP_BACKENDAPI,
// });
const backendAxios = axios.create({
    baseURL: "http://localhost:9292/",
});

export { backendAxios };