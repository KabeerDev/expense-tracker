import { useEffect } from "react";
import axios from './../utils/axios'
import { getToken, removeToken } from './../utils/auth'
import { useNavigate } from "react-router-dom";
import useToast from "./useToast";

const useAxiosInterceptor = () => {
    const navigate = useNavigate();
    const { showToast } = useToast();
    useEffect(() => {
        const requestIntercepter = axios.interceptors.request.use(
            (config) => {
                const token = getToken();
                if (token) {
                    config.headers.Authorization = token;
                }
                return config;
            },
            (error) => {
                return Promise.reject(error);
            }
        )

        const responseInterceptor = axios.interceptors.response.use(
            (response) => {
                return response.data;
            },
            (error) => {
                const { response } = error;
                let parsedError = {};
                if (response && response.data) {
                    parsedError = {
                        message: response.data.message || "Something Went Wrong!",
                        success: response.data.success || false,
                        error: response.data.error || null,
                    };
                } else {
                    parsedError = {
                        message: "Something Went Wrong!",
                        success: false,
                        error: null,
                    };
                }
                parsedError.statusCode = error.response ? error.response.status : 500;
                showToast({
                    content: parsedError?.message,
                    heading: `Request failed with (${parsedError?.statusCode})`,
                });
                if (parsedError.statusCode === 401) {
                    removeToken();
                    navigate("/signin")
                }
                return Promise.reject(parsedError);
            }
        )
        return () => {
            axios.interceptors.request.eject(requestIntercepter);
            axios.interceptors.response.eject(responseInterceptor);
        };
    }, []);
};

export default useAxiosInterceptor;