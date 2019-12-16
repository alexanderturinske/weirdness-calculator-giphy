import API from '../../../GIPHY_KEY';
const { API_KEY } = API;

export const giphyInputUrl = (userInput, weirdness) =>
  `https://api.giphy.com/v1/gifs/translate?api_key=${API_KEY}&s=${userInput}&weirdness=${weirdness}`;
