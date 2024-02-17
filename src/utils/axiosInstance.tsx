import axios from "axios";

const axiosInstance = () => {
    const instance = axios.create({
        baseURL: 'http://localhost:5000',
    });

    return instance;
};

export default axiosInstance;
