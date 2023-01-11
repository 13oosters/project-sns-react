import { useEffect, useState } from "react";

import API from "../utils/api";

export default function useFetch(path, initialType, dependency = []) {
  const [data, setData] = useState(initialType);

  useEffect(() => {
    API(`${path}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-type": "application/json",
      },
    }).then((res) => setData(res.data));
  }, dependency);

  return [data];
}
