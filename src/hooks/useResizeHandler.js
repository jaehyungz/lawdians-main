import React, { useEffect, useState } from "react";

function useResizeHandler() {
  const [platform, setPlatform] = useState("desktop");

  const handleResize = () => {
    if (window.innerWidth > 500) {
      setPlatform("desktop");
    } else {
      setPlatform("mobile");
    }
  };

  useEffect(() => {
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { platform };
}

export default useResizeHandler;
