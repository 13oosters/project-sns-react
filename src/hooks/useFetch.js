import { useEffect, useState } from "react";
import axios from "axios";

const BASE_URL = "https://mandarin.api.weniv.co.kr";

export default function useAxios(baseUrl, initialType) {
  const [data, setData] = useState(null);

  const axiosUrl = (path) => {
    axios(`${BASE_URL}/${path}`)
      .then((res) => res.json())
      .then((res) => setData(res));
  };

  useEffect(() => {
    axiosUrl(initialType);
  }, []);

  return {
    data,
    axiosUrl,
  };
}
