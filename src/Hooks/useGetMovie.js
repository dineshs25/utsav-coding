import { useState, useEffect } from 'react';
import axios from 'axios';

const API_KEY = '';
const BASE_URL = 'https://api.themoviedb.org/3/';
const IMAGE_BASE_URL = 'https://image.tmdb.org/'

const useMovieApi = (endpoints) => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);

                const fetchDataPromises = endpoints.map(async (endpoint) => {
                    const response = await axios.get(`${BASE_URL}${endpoint?.endpoint}?api_key=${API_KEY}`);
                    return { [endpoint?.title]: response.data.results };
                });

                const fetchedData = await Promise.all(fetchDataPromises);
                setData(Object.assign({}, ...fetchedData));
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const getImageUrl = (path) => `${IMAGE_BASE_URL}t/p/w500/${path}`;


    return { data, loading, error, getImageUrl };
};

export default useMovieApi;
