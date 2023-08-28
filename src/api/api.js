import axios from 'axios';

const KEY_API = '37350286-5f3aac9a725d44d4223b6e61c';
const URL = 'https://pixabay.com/api/';
export let numberPage = 1;
const per_page = 12;
// const parameters = {};
export const fetchData = async (searcheQuery, numberPage) => {
  const { data } = await axios.get(
    `${URL}?key=${KEY_API}&q=${searcheQuery}&page=${numberPage}&image_type=photo&safesearch=true&orientation=horizontal&per_page=${per_page}`
  );
  return data;
};
