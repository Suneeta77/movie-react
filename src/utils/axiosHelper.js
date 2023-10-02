import axios from "axios";
const apiUrl = "http://www.omdbapi.com/?apikey=ac30c4a6&t=";
export const fetchMovie = async (str) => {
  // promise
  //   axios.get(apiUrl).then((response) => {
  //     console.log(response);
  //   });

  // async/await

  try {
    const response = await axios.get(apiUrl + str);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
