import { useEffect, useState } from "react";
import { GIPHY_API } from "../utils/constants";

export const useFetch = (keyword) => {
  const [gifUrl, setGifUrl] = useState();
  const fetchGifs = async () => {
    try {
      const response = await fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_API}&q=${keyword
          .split(` `)
          .join(``)}&limit=1`
      );
      const { data } = await response.json();
      setGifUrl(data[0]?.images?.downsized_medium?.url);
    } catch (error) {
      setGifUrl(
        `https://giphy.com/gifs/crypto-ethereum-eth-MagSgolK3ScWvtHAB4`
      );
      console.log(error);
    }
  };

  useEffect(() => {
    if (keyword) {
      fetchGifs();
    }
    return gifUrl;
  }),
    [keyword];
};
