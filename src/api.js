import axios from "axios";

const searchImages = async function (term) {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID -LnrTJPuhwO5RH63WteJXBv4QuK6Xjk8Q4GmEfyhPgs",
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;
