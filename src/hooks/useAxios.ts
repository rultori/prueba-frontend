import { useState, useEffect } from 'react'
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'

axios.defaults.baseURL = import.meta.env['VITE_AXIOS_BASE_URL'] || 'http://testaframework.com/api/v1/'

export const useAxios = (axiosParams: AxiosRequestConfig) => {
    const [response, setResponse] = useState<AxiosResponse>()
    const [error, setError] = useState<AxiosError>()
    const [loading, setLoading] = useState(axiosParams.method === "GET" || axiosParams.method === "get")

    const fetchData = async (params: AxiosRequestConfig) => {
        try {
            const result = await axios.request(params)
            setResponse(result)
        } catch (err: any) {
            setError(err)
        } finally {
            setLoading(false)
        }
    };

    const sendData = () => {
        setLoading(axiosParams.method === "GET" || axiosParams.method === "get")
        fetchData(axiosParams)
    }

    useEffect(() => {
        if (axiosParams.method === "GET" || axiosParams.method === "get") {
            fetchData(axiosParams)
        }
    }, []);

    return { response, error, loading, sendData }
}

export default useAxios