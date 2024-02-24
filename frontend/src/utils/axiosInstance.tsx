import axios from "axios";

const axiosInstance = () => {
    const instance = axios.create({
        baseURL: 'https://event-360-backend-gold.vercel.app',
    });

    return instance;
};

export default axiosInstance;
