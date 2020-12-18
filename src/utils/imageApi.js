import axios from "axios";

const key = process.env.REACT_APP_KEY;
const url = process.env.REACT_APP_URL;

const fetchWithQuery = (query, page) => {
  return axios
    .get(
      `${url}?q=${query}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`
    )
    .then((response) => response.data.hits);
};

export default fetchWithQuery;
