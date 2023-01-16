import { useState, useEffect } from "react";
const useSm = () => {
  const [sm, setSm] = useState<boolean>();

  useEffect(() => {
    isSm();
    window.addEventListener("resize", () => isSm());
  }, []);
  function isSm() {
    window.innerWidth < 700 ? setSm(true) : setSm(false);
  }
  return sm;
};

export default useSm;
