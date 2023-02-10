import axios from "axios";

const apiKey = process.env.REACT_APP_APIKEY;
const baseUrl = process.env.REACT_APP_BASEURL;

export const getMovieList = async () => {
    const movie = await axios.get("${baseUrl}/movie/now_playing?api_key=${apiKey}");
    console.log({ movieList: movie });
    return;
};

export const searchMovie = async (q) => {
    const search = await axios.get(q);
    return;
};
