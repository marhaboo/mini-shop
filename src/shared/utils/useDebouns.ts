import { useEffect, useState } from "react";

const useDebouns = (value: string, delay: number) => {
  const [debounced, setDebounsed] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounsed(value);
    }, delay);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return debounced;
};

export default useDebouns;
