import { useState, useEffect } from 'react';
import axios from 'axios';

export const API_KEY = 'db75be3f6da59e6c54d0b9f568d19d16';
export const BASE_URL = 'https://api.themoviedb.org/3/';
export const IMAGE_BASE_URL = 'https://image.tmdb.org/'

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
                    if (endpoint?.title === "Our Genres") {
                        return { [endpoint?.title]: response.data?.genres };

                    }
                    if (endpoint?.title === "Movie") {
                        return { [endpoint?.title]: response.data };
                    }
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
