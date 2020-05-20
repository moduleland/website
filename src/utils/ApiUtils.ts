import axios, {AxiosInstance} from "axios";

const apiContext = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    withCredentials: true
})

export const ApiInstance = (): AxiosInstance => apiContext;
