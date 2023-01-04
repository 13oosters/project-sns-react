import { useEffect, useState } from "react";

import API from "../utils/api";

export default function useFetch(path, initialType, dependency = []) {
  const [data, setData] = useState(initialType);

  useEffect(() => {
    const [, query] = path.split("=")[1];

    if (query) {
      API(`${path}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-type": "application/json",
        },
      }).then((res) => setData(res.data));
    } else {
      setData(initialType);
    }
  }, dependency);

  return [data];
}
