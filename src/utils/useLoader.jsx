import React, { useEffect, useState } from "react";
import Loader from "../components/Loader";

function useLoader() {
  // TODO: make loader
  const [isLoading, setLoading] = useState(true);

  const loadRequest = () => {
    return new Promise((resolve) => setTimeout(() => resolve(), 2500));
  };

  useEffect(() => {
    loadRequest().then(() => {
      if (isLoading) {
        <Loader />;
        setLoading(!isLoading);
      }
    });
  }, []);

  return;
}

export default useLoader;
