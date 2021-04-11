import { useState, useEffect } from "react";

const Route = ({ children, path }) => {
  const [currentpath, setCurrentpath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentpath(window.location.pathname);
    };

    window.addEventListener("popstate", onLocationChange);

    return () => {
      window.removeEventListener("popstate", onLocationChange);
    };
  }, []);

  return currentpath === path ? children : null;
};

export default Route;
