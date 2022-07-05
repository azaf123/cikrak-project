import { useEffect, useState } from "react";
import Loader from "../../components/Loader";

type TUseDocumentTitle = (title: string) => [string, (title: string) => void];

const useDocumentTitle: TUseDocumentTitle = (title) => {
  const [documentTitle, setDocumentTitle] = useState<string>(title);

  useEffect(() => {
    document.title = documentTitle;
  }, [documentTitle]);

  return [documentTitle, setDocumentTitle];
};

const useLoader = () => {
  const [loading, setloading] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setloading(true);
    }, 1500);
  }, []);

  return <div>{!loading && <Loader />}</div>;
};

export { useDocumentTitle, useLoader };
