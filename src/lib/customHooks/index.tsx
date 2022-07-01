import { useEffect, useState } from "react";

type TUseDocumentTitle = (title: string) => [string, (title: string) => void];

const useDocumentTitle: TUseDocumentTitle = (title) => {
  const [documentTitle, setDocumentTitle] = useState<string>(title);
  
  useEffect(() => {
    document.title = documentTitle; 
  },[documentTitle]);

  return [documentTitle, setDocumentTitle];
};

export { useDocumentTitle };
