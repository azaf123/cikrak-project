import React, { useEffect, useState } from "react";
import Loader from "../components/Loader";

function useLoader() {
  const [loading, setloading] = useState(undefined);

  useEffect(() => {
    setTimeout(() => {
      setloading(true);
    }, 1500);
  }, []);

  return (<div>{!loading && <Loader />}</div>);
}

export default useLoader;
