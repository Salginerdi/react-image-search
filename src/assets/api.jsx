import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID 26TGXA4VNllv90rMYBIptQXP6i2vw1x-6hh4bkFLL2Y",
    },
    params: {
      query: term,
    },
  });
  return response.data.results;
};

export default searchImages;
